En este artículo explicaré como montar una arquitectura de principio a fin con Node.js, Nginx como proxy y un certificado gratis SSL con Certbot todo esto manejando contenedores de Docker.

> Todo este procedimiento se realizó para levantar este blog, en la lectura aparecerán los diferentes repositorios.

Para comenzar nos aseguramos de tener lo necesario, una cuenta en Digitalocean y
un dominio.

> Puedes registrarte con este [enlace](https://m.do.co/c/c58082e089db) para que consigas USD $10 gratis, empezarías tu aventura con USD $15 que serian 3 meses del servicio basico.

> Comenzamos creamos un nuevo Droplet en Digitalocean, escogemos Ubuntu como distribución con la versión por defecto, el tamaño más pequeñito (será suficiente), seleccionamos la región que más nos acomode y agregamos nuestra llave SSH.

```bash
# mostramos por pantalla nuestra llave pública
cat ~/.ssh/id_rsa.pub
```

> Si aún no dispone de una llave, puede crearla siguiendo esta guia de [Github](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

Con nuestro Droplet creado solo nos queda conectarnos, copiamos la dirección ip y ingresamos como usuario `root`.

```
ssh root@67.205.139.183
```

## Docker

Ya dentro de nuestra máquina en la nube, instalaremos Docker. Una forma rápida y fácil para tener la versión más reciente, es mediante:

```bash
# descargamos el script de instalación y lo ejecutamos
curl -sSL https://get.docker.com/ | sh
# y comprobamos la versión
docker version
```

## Certbot

Crearemos un certificado ssl (https) gratis y automáticamente gracias a [Let's Encrypt](https://certbot.eff.org/).

```
# creamos un volumen para almacenar los certificados para luego compartirlos entre contenedores
docker volume create --name nginx-certs
```

Ahora crearemos un contenedor con la [imagen oficial](https://hub.docker.com/r/certbot/certbot/) de `certbot`, este se conectara entre nuestra máquina y el proveedor del certificado para eso le indicamos los puertos 80 y 443 (no debe haber nada ocupando esos puertos), y guardará los certificados en el volumen de docker que acabamos de crear (`-v nginx-certs:/etc/letsencrypt`).

Debemos indicarle un correo (`--email`) y nuestros dominios separados por coma (`-d`).

> Solo se ejecutara y luego se eliminará el contenedor (`--rm`).

```bash
docker run -v nginx-certs:/etc/letsencrypt -p 80:80 -p 443:443 --rm certbot/certbot certonly --verbose --standalone --noninteractive --agree-tos --quiet --email=tu@gmail.com -d example.com,www.example.com
```
Si quieres una versión interactiva de `certbot` (te pedirá los datos paso a paso):

```bash
docker run -it -v nginx-certs:/etc/letsencrypt -p 80:80 -p 443:443 --rm certbot/certbot certonly --standalone
```

Hay que tener en cuenta que el certificado por seguridad expira cada 90 días, para validarlo solo debemos hacer:

```bash
docker run -v nginx-certs:/etc/letsencrypt --rm certbot/certbot renew
```

Para hacer este proceso automáticamente podemos hacer uso de `crontab` (herramienta para automatizar tareas).

```bash
# creamos un archivo temporal
crontab -l > tempcron
# agregamos el comando docker run con certbot para que se ejecute a las 1:00 los lunes
echo "00 1 * * 1 docker run -v nginx-certs:/etc/letsencrypt --rm certbot/certbot renew" >> tempcron
# y reiniciamos nginx a las 1:30 los lunes
echo "30 1 * * 1 docker restart nginx" >> tempcron
# guardamos y borramos el archivo temporal
crontab tempcron && rm tempcron
# mostramos cómo quedó nuestra configuración
crontab -l
```

## Node.js

Para este ejemplo usaremos mi [blog](https://github.com/jlobos/blog), que ya está en una imagen pública en [Docker Hub](https://hub.docker.com/r/jlobos/blog/).

> Puedes ver la [guia oficial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) para Dockerizar una Node.js app.

```bash
# corremos el container
docker run -d --name blog jlobos/blog
# vemos el estado del container
docker ps
```

## Nginx

Ya que tenemos los certificados listos, una app corriendo para ser redireccionada solo nos falta el container de Nginx con su respectiva configuración, también usaremos las de mi [blog](https://github.com/jlobos/blog-nginx/blob/master/nginx.conf):

> En el [Dockerfile](https://github.com/jlobos/blog-nginx/blob/master/Dockerfile#L6) se agregó la creación de un certificado ‘Diffie-Hellman’ de 2048 bits, para hacer más segura nuestra configuración SSL.

> Es importante adecuar la configuración de nginx a tu proyecto, puedes ver que existen parámetros que se deben cambiar ([nombre del contenedor que enlaza y el puerto](https://github.com/jlobos/blog-nginx/blob/master/nginx.conf#L12), [nombre del dominio](https://github.com/jlobos/blog-nginx/blob/master/nginx.conf#L24-L27)).

```
# creamos la imagen (blog-nginx)
docker build -t blog-nginx https://github.com/jlobos/blog-nginx.git
# corremos el container de nginx, lo enlazamos con nuestra app (blog) y le indicamos los puertos
docker run --name nginx -v nginx-certs:/etc/nginx/certs:ro -p 80:80 -p 443:443 -d --link blog blog-nginx
```
Con todo esto ya tendríamos una arquitectura completamente con contenedores Docker y una app escuchando en el puerto 80, ahora podemos [comprobar nuestro certificado](https://www.ssllabs.com/ssltest/index.html) y obtener un A+.

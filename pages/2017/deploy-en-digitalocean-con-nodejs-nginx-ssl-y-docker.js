import Head from 'next/head'
import Post from '../../layouts/post'
import withViews from '../../lib/with-views'
import Title from '../../components/post/title'
import Code from '../../components/post/code'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import A from '../../components/post/hyperlink'
import Quote from '../../components/post/quote'
import H2 from '../../components/post/heading'
import Date from '../../components/post/date'

export default withViews(({ views }) => (
  <Post views={views}>
    <Head>
      <title>Deploy en Digitalocean con Node.js Nginx SSL y Docker</title>
    </Head>
    <Date datetime='May 12, 2017' />
    <Title>Deploy en Digitalocean con Node.js Nginx SSL y Docker</Title>

    <P>En este artículo explicaré como montar una arquitectura de principio a fin con Node.js, Nginx como proxy y un certificado gratis SSL con Certbot todo esto manejando contenedores de Docker.</P>

    <Quote>Todo este procedimiento se realizó para levantar este blog, en la lectura aparecerán los diferentes repositorios.</Quote>

    <P>
      Para comenzar nos aseguramos de tener lo necesario, una cuenta en Digitalocean
      (puedes registrarte con este <A url='https://m.do.co/c/c58082e089db'>link</A> para que consigas USD $10 gratis) y un dominio.
    </P>

    <P>Comenzamos creamos un nuevo Droplet en Digitalocean, escogemos Ubuntu como distribución con la versión por defecto, el tamaño más pequeñito (será suficiente), seleccionamos la región que más nos acomode y agregamos nuestra llave SSH.</P>

    <Snippet>{`# mostramos por pantalla nuestra llave pública
cat ~/.ssh/id_rsa.pub`}</Snippet>

    <Quote>
      Si aún no dispone de una llave, puede crearla siguiendo esta guia de <A url='https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/'>Github</A>.
    </Quote>

    <P>Con nuestro Droplet creado solo nos queda conectarnos, copiamos la dirección ip y ingresamos como usuario <Code>root</Code>.</P>

    <Snippet>ssh root@67.205.139.183</Snippet>

    <H2 id='docker'>Docker</H2>

    <P>Ya dentro de nuestra máquina en la nube, instalaremos Docker. Una forma rápida y fácil para tener la versión más reciente, es mediante: </P>

    <Snippet>{`# descargamos el script de instalación y lo ejecutamos
curl -sSL https://get.docker.com/ | sh
# y comprobamos la versión
docker version`}</Snippet>

    <H2 id='certbot'>Certbot</H2>

    <P>Crearemos un certificado ssl (https) gratis y automáticamente gracias a <A url='https://certbot.eff.org/'>Let's Encrypt</A>.</P>

    <Snippet>{`# creamos un volumen para almacenar los certificados para luego compartirlos entre contenedores
docker volume create --name nginx-certs`}</Snippet>

    <P>
      Ahora crearemos un contenedor con la <A url='https://hub.docker.com/r/certbot/certbot/'>imagen oficial</A> de <Code>certbot</Code>,
      este se conectara entre nuestra máquina y el proveedor del certificado para eso
      le indicamos los puertos 80 y 443 (no debe haber nada ocupando esos puertos),
      y guardará los certificados en el volumen de docker que acabamos de crear (<Code>-v nginx-certs:/etc/letsencrypt</Code>).
    </P>

    <P>Debemos indicarle un correo (<Code>--email</Code>) y nuestros dominios separados por coma (<Code>-d</Code>).</P>

    <Quote>Solo se ejecutara y luego se eliminará el contenedor (<Code>--rm</Code>).</Quote>

    <Snippet>docker run -v nginx-certs:/etc/letsencrypt -p 80:80 -p 443:443 --rm certbot/certbot certonly --verbose --standalone --noninteractive --agree-tos --quiet --email=tu@gmail.com -d example.com,www.example.com</Snippet>

    <P>Si quieres una versión interactiva de <Code>certbot</Code> (te pedirá los datos paso a paso):</P>

    <Snippet>docker run -it -v nginx-certs:/etc/letsencrypt -p 80:80 -p 443:443 --rm certbot/certbot certonly --standalone</Snippet>

    <P>Hay que tener en cuenta que el certificado por seguridad expira cada 90 días, para validarlo solo debemos hacer:</P>

    <Snippet>docker run -v nginx-certs:/etc/letsencrypt --rm certbot/certbot renew</Snippet>

    <P>Para hacer este proceso automáticamente podemos hacer uso de <Code>crontab</Code> (herramienta para automatizar tareas).</P>

    <Snippet>{`# creamos un archivo temporal
crontab -l > tempcron
# agregamos el comando docker run con certbot para que se ejecute a las 1:00 los lunes
echo "00 1 * * 1 docker run -v nginx-certs:/etc/letsencrypt --rm certbot/certbot renew" >> tempcron
# y reiniciamos nginx a las 1:30 los lunes
echo "30 1 * * 1 docker restart nginx" >> tempcron
# guardamos y borramos el archivo temporal
crontab tempcron && rm tempcron
# mostramos cómo quedó nuestra configuración
crontab -l`}</Snippet>

    <H2 id='nodejs'>Node.js</H2>

    <P>Para este ejemplo usaremos mi <A url='https://github.com/jlobos/blog'>blog</A>, que ya está en una imagen pública en <A url='https://hub.docker.com/r/jlobos/blog/'>Docker Hub</A>.</P>

    <Quote>Puedes ver la <A url='https://nodejs.org/en/docs/guides/nodejs-docker-webapp/'>guia oficial</A> para Dockerizar una Node.js app.</Quote>

    <Snippet>{`# corremos el container
docker run -d --name blog jlobos/blog
# vemos el estado del container
docker ps`}</Snippet>

    <H2 id='nginx'>Nginx</H2>

    <P>Ya que tenemos los certificados listos, una app corriendo para ser redireccionada solo nos falta el container de Nginx con su respectiva configuración, también usaremos las de mi <A url='https://github.com/jlobos/blog-nginx/blob/master/nginx.conf'>blog</A>:</P>

    <Quote>En el <A url='https://github.com/jlobos/blog-nginx/blob/master/Dockerfile#L6'>Dockerfile</A> se agregó la creación de un certificado ‘Diffie-Hellman’ de 2048 bits, para hacer más segura nuestra configuración SSL.</Quote>

    <Quote>Es importante adecuar la configuración de nginx a tu proyecto, puedes ver que existen parámetros que se deben cambiar (<A url='https://github.com/jlobos/blog-nginx/blob/master/nginx.conf#L12'>nombre del contenedor que enlaza y el puerto</A>, <A url='https://github.com/jlobos/blog-nginx/blob/master/nginx.conf#L24-L27'>nombre del dominio</A>).</Quote>

    <Snippet>{`# creamos la imagen (blog-nginx)
docker build -t blog-nginx https://github.com/jlobos/blog-nginx.git
# corremos el container de nginx, lo enlazamos con nuestra app (blog) y le indicamos los puertos
docker run --name nginx -v nginx-certs:/etc/nginx/certs:ro -p 80:80 -p 443:443 -d --link blog blog-nginx`}</Snippet>

    <P>Con todo esto ya tendríamos una arquitectura completamente con contenedores Docker y una app escuchando en el puerto 80, ahora podemos <A url='https://www.ssllabs.com/ssltest/index.html'>comprobar nuestro certificado</A> y obtener un A+.</P>
  </Post>
))

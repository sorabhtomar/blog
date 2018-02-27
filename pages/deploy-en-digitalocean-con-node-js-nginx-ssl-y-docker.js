import Post from '../layouts/post'
import Snippet from '../components/snippet'
import Code from '../components/code'
import posts from '../posts'

const props = posts.find(
  p => p.slug === 'deploy-en-digitalocean-con-node-js-nginx-ssl-y-docker'
)

const links = [
  'https://m.do.co/c/c58082e089db',
  'https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/',
  'https://certbot.eff.org/',
  'https://hub.docker.com/r/certbot/certbot/',
  'https://github.com/jlobos/blog',
  'https://hub.docker.com/r/jlobos/blog/',
  'https://nodejs.org/en/docs/guides/nodejs-docker-webapp/',
  'https://github.com/jlobos/blog-nginx/blob/master/nginx.conf',
  'https://github.com/jlobos/blog-nginx/blob/master/Dockerfile#L6',
  'https://github.com/jlobos/blog-nginx/blob/master/nginx.conf#L12',
  'https://github.com/jlobos/blog-nginx/blob/master/nginx.conf#L24-L27',
  'https://www.ssllabs.com/ssltest/index.html'
]

export default () => (
  <Post {...props}>
    <p>
      En este artículo explicaré como montar una arquitectura de principio a fin
      con Node.js, Nginx como proxy y un certificado gratis SSL con Certbot todo
      esto manejando contenedores de Docker.
    </p>
    <blockquote>
      Todo este procedimiento se realizó para levantar este blog, en la lectura
      aparecerán los diferentes repositorios.
    </blockquote>
    <p>
      Para comenzar nos aseguramos de tener lo necesario, una cuenta en
      Digitalocean y un dominio.
    </p>
    <blockquote>
      Puedes registrarte con este <a href={links[0]}>enlace</a> para que
      consigas USD $10 gratis, empezarás tu aventura con USD $15 que serian 3
      meses del servicio básico.
    </blockquote>
    <blockquote>
      Comenzamos creamos un nuevo Droplet de Digitalocean, escogemos Ubuntu como
      distribución con la versión por defecto, el tamaño más pequeñito (será
      suficiente), seleccionamos la región que más nos acomode y agregamos
      nuestra llave SSH.
    </blockquote>
    <Snippet>{`# mostramos por pantalla nuestra llave pública
cat ~/.ssh/id_rsa.pub`}</Snippet>
    <blockquote>
      Si aún no dispone de una llave, puede crearla siguiendo esta guia de{' '}
      <a href={links[1]} target="_black">
        GitHub
      </a>.
    </blockquote>
    <p>
      Con nuestro Droplet creado solo nos queda conectarnos, copiamos la
      dirección ip y ingresamos como usuario <Code>root</Code>.
    </p>
    <Snippet>{`ssh root@67.205.139.183`}</Snippet>
    <h2 id="docker">Docker</h2>
    <p>
      Ya dentro de nuestra máquina en la nube, instalaremos Docker. Una forma
      rápida y fácil para tener la versión más reciente, es mediante:
    </p>
    <Snippet>{`# descargamos el script de instalación y lo ejecutamos
curl -sSL https://get.docker.com/ | sh
# y comprobamos la versión
docker version`}</Snippet>
    <h2 id="certbot">Certbot</h2>
    <p>
      Crearemos un certificado ssl (https) gratis y automáticamente gracias a{' '}
      <a href={links[2]} target="_black">
        Let’s Encrypt
      </a>.
    </p>
    <Snippet
    >{`# creamos un volumen para almacenar los certificados para luego compartirlos entre contenedores
docker volume create --name nginx-certs`}</Snippet>
    <p>
      Ahora crearemos un contenedor con la <a href={links[3]}>imagen oficial</a>{' '}
      de <Code>cerbot</Code>, este se conectara entre nuestra máquina y el
      proveedor del certificado para eso le indicamos los puertos 80 y 443 (no
      debe haber nada ocupando esos puertos), y guardará los certificados en el
      volumen de docker que acabamos de crear (<Code>
        -v nginx-certs:/etc/letsencrypt
      </Code>).
    </p>
    <p>
      Debemos indicarle un correo (<Code>--email</Code>) y nuestros dominios
      separados por coma (<Code>-d</Code>).
    </p>
    <blockquote>
      Solo se ejecutara y luego se eliminará el contenedor (<Code>--rm</Code>).
    </blockquote>
    <Snippet
    >{`docker run -v nginx-certs:/etc/letsencrypt -p 80:80 -p 443:443 --rm certbot/certbot certonly --verbose --standalone --noninteractive --agree-tos --quiet --email=tu@gmail.com -d example.com,www.example.com`}</Snippet>
    <p>
      Si quieres una versión interactiva de <Code>certbot</Code> (te pedirá los
      datos paso a paso):
    </p>
    <Snippet
    >{`docker run -it -v nginx-certs:/etc/letsencrypt -p 80:80 -p 443:443 --rm certbot/certbot certonly --standalone`}</Snippet>
    <p>
      Hay que tener en cuenta que el certificado por seguridad expira cada 90
      días, para validarlo solo debemos hacer:
    </p>
    <Snippet
    >{`docker run -v nginx-certs:/etc/letsencrypt --rm certbot/certbot renew`}</Snippet>
    <p>
      Para hacer este proceso automáticamente podemos hacer uso de{' '}
      <Code>crontab</Code> (herramienta para automatizar tareas).
    </p>
    <Snippet>{`# creamos un archivo temporal
crontab -l > tempcron
# agregamos el comando docker run con certbot para que se ejecute a las 1:00 los lunes
echo “00 1 * * 1 docker run -v nginx-certs:/etc/letsencrypt --rm certbot/certbot renew” >> tempcron
# y reiniciamos nginx a las 1:30 los lunes
echo “30 1 * * 1 docker restart nginx” >> tempcron
# guardamos y borramos el archivo temporal
crontab tempcron && rm tempcron
# mostramos cómo quedó nuestra configuración
crontab -l`}</Snippet>
    <h2 id="nodejs">Node.js</h2>
    <p>
      Para este ejemplo usaremos mi <a href={links[4]}>blog</a>, que ya está en
      una imagen pública en <a href={links[5]}>Docker Hub</a>.
    </p>
    <blockquote>
      Puedes ver la <a href={links[6]}>guia oficial</a> para Dockerizar una
      Node.js app.
    </blockquote>
    <Snippet>{`# corremos el container
docker run -d --name blog jlobos/blog
# vemos el estado del container
docker ps`}</Snippet>
    <h2 id="nginx">Nginx</h2>
    <p>
      Ya que tenemos los certificados listos, una app corriendo para ser
      redireccionada solo nos falta el container de Nginx con su respectiva
      configuración, también usaremos las de mi <a href={links[7]}>blog</a>:
    </p>
    <blockquote>
      En el <a href={links[8]}>Dockerfile</a> se agregó la creación de un
      certificado ‘Diffie-Hellman’ de 2048 bits, para hacer más segura nuestra
      configuración SSL.
    </blockquote>
    <blockquote>
      Es importante adecuar la configuración de nginx a tu proyecto, puedes ver
      que existen parámetros que se deben cambiar (<a href={links[9]}>
        nombre del contenedor que enlaza y el puerto
      </a>, <a href={links[10]}>nombre del dominio</a>).
    </blockquote>
    <Snippet>{`# creamos la imagen (blog-nginx)
docker build -t blog-nginx https://github.com/jlobos/blog-nginx.git
# corremos el container de nginx, lo enlazamos con nuestra app (blog) y le indicamos los puertos
docker run --name nginx -v nginx-certs:/etc/nginx/certs:ro -p 80:80 -p 443:443 -d --link blog blog-nginx`}</Snippet>
    <p>
      Con todo esto ya tendríamos una arquitectura completamente con
      contenedores Docker y una app escuchando en el puerto 80, ahora podemos{' '}
      <a href={links[11]}>comprobar nuestro certificado</a> y obtener un A+.
    </p>
  </Post>
)

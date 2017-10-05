// Packages
import Disqus from 'react-disqus-comments'

// Components
import App from '../layouts/post'
import Header from '../components/header'
import Head from '../components/head'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Time from '../components/time'

// Semantics
import Article from '../components/post/article'
import P from '../components/post/paragraph'
import Quote from '../components/post/quote'
import Snippet from '../components/post/snippet'
import Code from '../components/post/code'

// Ours
import posts from '../posts.json'
const { title, description, slug, createdAt } = posts.find(
  p => p.slug === 'deploy-ssh-en-travis-ci'
)

export default () => (
  <App>
    <Head
      title={`${title} – Jesus Lobos – jlobos`}
      type='article'
      url={`https://jlobos.com/${slug}`}
      description={description}
      author='Jesús Lobos'
    />

    <Header title={title} url={`/${slug}`} />
    <Menu />

    <Article>
      <header>
        <Time createdAt={createdAt} />
      </header>
      <section>
        <P>
          Travis CI nos permite una integración con los repositorios de GitHub,
          una de las tareas habituales es la de realizar deploy desde el propio
          repositorio. En este artículo explicaremos una integración SSH desde
          Travis hacia el servidor.
        </P>
        <Quote>Para repositorios públicos Travis es completamente gratis</Quote>
        <P>
          Primero desde nuestra cuenta de Travis, sincronizamos y activamos el
          repositorio que trabajaremos.
        </P>
        <P>
          En nuestro repositorio creamos un archivo ".travis.yml" que tendrá las
          configuraciones necesarias dependiendo del lenguaje que utilicemos. Lo
          que necesitamos es ejecutar comandos desde Travis hacia el servidor,
          una forma de hacerlo es mediante ssh por lo que necesitaremos una
          llave alojada en nuestro repositorio:
        </P>
        <Quote>
          La llave será encriptada antes de ser agregada al repositorio
        </Quote>
        <P>
          Instalamos la versión de línea de comandos (CLI) de Travis que nos
          permitirá encriptar nuestra llave y asociarla con el repositorio:
        </P>
        <Snippet>gem install travis -v 1.8.8 --no-rdoc --no-ri</Snippet>
        <Quote>Es necesario disponer de una versión actualizada de Ruby</Quote>
        <P>
          Iniciamos sesión desde la línea de comandos y encriptamos nuestra
          llave:
        </P>
        <Snippet>{`travis login
travis encrypt-file deploy_key --add`}</Snippet>
        <P>
          Ahora tendremos un archivo encriptado el cual podrá estar en el
          repositorio sin problemas de seguridad, además si revisamos el archivo
          ".travis.yml" se agregó algo como lo siguiente:
        </P>
        <Snippet>
          openssl aes-256-cbc -K $encrypted_3c6c0822c9fe_key -iv
          $encrypted_3c6c0822c9fe_iv -in deploy_key.enc -out deploy_key -d
        </Snippet>
        <P>
          Este comando se encarga de desencriptar nuestra llave en la instancia
          de Travis, un ejemplo completo luciría como:
        </P>
        <Snippet>{`language: node_js
node_js: 8
env:
  global:
    - SSH_IP: 104.131.142.176
    - SSH_USER: root
addons:
  ssh_known_hosts: 104.131.142.176
before_deploy:
  # SSH Deploy
  - openssl aes-256-cbc -K $encrypted_3c6c0822c9fe_key -iv $encrypted_3c6c0822c9fe_iv -in deploy_key.enc -out deploy_key -d
  - eval "$(ssh-agent -s)"
  - chmod 600 deploy_key
  - ssh-add deploy_key
  - echo -e "Host deploy\\nHostName $\{SSH_IP}\\nUser $\{SSH_USER}\\nStrictHostKeyChecking no" > ~/.ssh/config
deploy:
  provider: script
  script: ssh deploy echo hola > hola.txt
  skip_cleanup: true
  on:
    branch: master`}</Snippet>
        <P>
          En el ejemplo anterior una vez que pasen los test, desencripta la
          llave y agrega una configuración con el usuario (root) y la IP
          (104.131.142.176) del servidor al cual ejecutaremos comandos desde
          Travis. Para este caso solo crear un archivo{' '}
          <Code>echo hola > hola.txt</Code>
        </P>
      </section>
      <footer>
        <Disqus
          shortname='jlobos'
          identifier={slug}
          title={title}
          url={`https://jlobos.com/${slug}`}
        />
      </footer>
    </Article>
    <Footer />
  </App>
)

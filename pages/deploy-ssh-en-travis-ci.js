import Post from '../layouts/post'
import Snippet from '../components/snippet'
import Code from '../components/code'
import posts from '../posts'

const props = posts.find(p => p.slug === 'deploy-ssh-en-travis-ci')

export default () => (
  <Post {...props}>
    <p>
      Travis CI nos permite una integración con los repositorios de GitHub, una
      de las tareas habituales es la de realizar deploy desde el propio
      repositorio. En este artículo explicaremos una integración SSH desde
      Travis hacia el servidor.
    </p>
    <blockquote>
      Para repositorios públicos Travis es completamente gratis
    </blockquote>
    <p>
      Primero desde nuestra cuenta de Travis, sincronizamos y activamos el
      repositorio que trabajaremos.
    </p>
    <p>
      En nuestro repositorio creamos un archivo ".travis.yml" que tendrá las
      configuraciones necesarias dependiendo del lenguaje que utilicemos. Lo que
      necesitamos es ejecutar comandos desde Travis hacia el servidor, una forma
      de hacerlo es mediante ssh por lo que necesitaremos una llave alojada en
      nuestro repositorio:
    </p>
    <blockquote>
      La llave será encriptada antes de ser agregada al repositorio
    </blockquote>
    <p>
      Instalamos la versión de línea de comandos (CLI) de Travis que nos
      permitirá encriptar nuestra llave y asociarla con el repositorio:
    </p>
    <Snippet>gem install travis -v 1.8.8 --no-rdoc --no-ri</Snippet>
    <blockquote>
      Es necesario disponer de una versión actualizada de Ruby
    </blockquote>
    <p>
      Iniciamos sesión desde la línea de comandos y encriptamos nuestra llave:
    </p>
    <Snippet>{`travis login
travis encrypt-file deploy_key --add`}</Snippet>
    <p>
      Ahora tendremos un archivo encriptado el cual podrá estar en el
      repositorio sin problemas de seguridad, además si revisamos el archivo
      ".travis.yml" se agregó algo como lo siguiente:
    </p>
    <Snippet>
      openssl aes-256-cbc -K $encrypted_3c6c0822c9fe_key -iv
      $encrypted_3c6c0822c9fe_iv -in deploy_key.enc -out deploy_key -d
    </Snippet>
    <p>
      Este comando se encarga de desencriptar nuestra llave en la instancia de
      Travis, un ejemplo completo luciría como:
    </p>
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
    <p>
      En el ejemplo anterior una vez que pasen los test, desencripta la llave y
      agrega una configuración con el usuario (root) y la IP (104.131.142.176)
      del servidor al cual ejecutaremos comandos desde Travis. Para este caso
      solo crear un archivo <Code>echo hola > hola.txt</Code>
    </p>
  </Post>
)

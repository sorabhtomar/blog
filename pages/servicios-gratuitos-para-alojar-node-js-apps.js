import Post from '../layouts/post'
import Snippet from '../components/snippet'
import Code from '../components/code'
import posts from '../posts'

const props = posts.find(
  p => p.slug === 'servicios-gratuitos-para-alojar-node-js-apps'
)

export default () => (
  <Post {...props}>
    <p>
      A la hora de montar un servidor escrito en Node.js existen diferentes
      servicios que nos permiten alojar nuestra aplicación; en este artículo
      hablaremos de aquellos que sin gastar un peso nos permitan disfrutar de un
      entorno en Node.js 💚
    </p>
    <ul>
      <li>
        <a href="#heroku">Heroku</a>
      </li>
      <li>
        <a href="#openshift">OpenShift</a>
      </li>
      <li>
        <a href="#now">Now</a>
      </li>
      <li>
        <a href="#firebase">Firebase</a>
      </li>
    </ul>
    <h2 id="heroku">Heroku</h2>
    <p>
      Uno de lo más populares, en su capa gratuita nos limita a 550 horas por
      mes y si la app está inactiva por 30 minutos esta se duerme hasta que
      vuelta a recibir tráfico. Con estas desventajas se podría usar en chatbots
      o APIS que no requieran de un uso intenso.
    </p>
    <h3>Ejemplo: API de formulario de contacto</h3>
    <p>
      Pequeña API que obtendrá por una petición <Code>POST</Code> el email y el
      mensaje para ser enviado a un chat de{' '}
      <a target="_blank" href="https://slack.com" rel="noopener noreferrer">
        Slack
      </a>.
    </p>
    <blockquote>
      Heroku nos da https por defecto en todos nuestros deploys, viene muy bien
      para este ejemplo.
    </blockquote>
    <p>Comenzamos instalando Heroku CLI y preparando nuestra app:</p>
    <Snippet>{`npm install -g heroku-cli
# Login
heroku login
# Creamos la carpeta raíz de la aplicación
mkdir contact
cd contact
# Iniciamos un repositorio
git init
# Creamos la aplicación en Heroku
heroku apps:create
# Creamos los archivos de la app
touch package.json
touch index.js`}</Snippet>
    <p>
      Nuestro <Code>package.json</Code> quedaría:
    </p>
    <Snippet>{`{
  "name": "contact",
  "scripts": {
    "start": "node index.js"
  },
  "engines": {
    "node": ">=8"
  },
  "dependencies": {
    "body-parser": "^1.17.2",
    "cors": "^2.8.4",
    "email-validator": "^1.1.1",
    "express": "^4.15.3",
    "moment": "^2.18.1",
    "slackhooks": "^1.0.1"
  }
}`}</Snippet>
    <p>
      El archivo <Code>index.js</Code>
    </p>
    <Snippet>{`// Packages
const app = require('express')()
const slack = require('slackhooks')
const cors = require('cors')
const bodyParser = require('body-parser')
const moment = require('moment')
const { validate: isEmail } = require('email-validator')

// Slack Webhook URL
const { WEBHOOK, PORT } = process.env

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const { email, message, ref } = req.body

  if (isEmail(email) && message) {
    // Slack Message
    slack(
      {
        attachments: [
          {
            color: '#000',
            pretext: \`:email: New message from $\{ref}\`,
            title: email,
            title_link: \`mailto:$\{email}\`,
            text: message,
            ts: moment().unix()
          }
        ]
      },
      WEBHOOK
    )

    res.json({ message: 'ok' })
  } else {
    res.json({ error: 'invalid parameters' })
  }
})

app.get('/', (req, res) => res.json({status: 'its alive'}))

app.listen(PORT || 3000)`}</Snippet>
    <p>Ahora solo nos queda hacer deploy:</p>
    <Snippet>{`git add .
git commit -m 'init'
git push heroku master`}</Snippet>
    <blockquote>
      Para la integración correcta con Slack es necesaria la variable de entorno
      llamada "WEBHOOK", más detalles en la{' '}
      <a
        target="_blank"
        href="https://api.slack.com/incoming-webhooks"
        rel="noopener noreferrer"
      >
        documentación
      </a>.
    </blockquote>
    <h2 id="openshift">OpenShift</h2>
    <p>
      Algo menos amigable que Heroku pero muy potente, nos permite alojar 1
      proyecto y si la app está inactiva por 30 minutos se duerme, esto no es
      problema si tenemos un buen tráfico o mantenemos un servicio que nos mande
      un ping paulatinamente.
    </p>
    <blockquote>
      Podemos combinar OpenShift +{' '}
      <a
        target="_blank"
        href="https://pingometer.com/"
        rel="noopener noreferrer"
      >
        Pingometer
      </a>{' '}
      y mantener siempre viva nuestra app.
    </blockquote>
    <h2 id="now">Now</h2>
    <p>
      Una de las mejores, muy fácil de usar; nos permite tener 3 instancias
      corriendo sin interrupciones además de un sistema de alias en los
      dominios. Para proyectos de código abierto es ideal ya que cada instancia
      queda visible el código fuente.
    </p>
    <p>
      Ejemplo:{' '}
      <a
        target="_blank"
        href="https://github.com/sindresorhus/gh-latest-repos"
        rel="noopener noreferrer"
      >
        Microservicio para conseguir los últimos repositorios públicos de un
        usuario
      </a>.
    </p>
    <h2 id="firebase">Firebase</h2>
    <p>
      Tiene de todo y casi gratis, gracias a Cloud Functions podemos montar un
      servidor http, además nos permite conectar dominios gratis con https. Un
      inconveniente de las Cloud Functions en su modelo gratis es la
      imposibilidad de realizar peticiones http fuera del entorno 😢.
    </p>
    <h3>Ejemplo: Servidor en Cloud Functions de Firebase</h3>
    <p>Instalamos Firebase CLI y iniciamos el proyecto:</p>
    <Snippet>{`npm install -g firebase-tools
firebase login
mkdir hello
cd hello`}</Snippet>
    <p>
      Creamos un nuevo proyecto desde la consola de Firebase{' '}
      <a
        target="_blank"
        href="https://console.firebase.google.com"
        rel="noopener noreferrer"
      >
        https://console.firebase.google.com
      </a>{' '}
      y lo iniciamos en la carpeta anterior creada (hello):
    </p>
    <Snippet>{`firebase init
# Seleccionamos "Functions"
# Seleccionamos nuestro proyecto creado desde la consola
# Creamos la carpeta public
mkdir public
touch public/placeholder.html`}</Snippet>
    <p>La estructura de nuestro proyecto se vería así:</p>
    <Snippet>{`.
├── firebase.json
├── .firebaserc
├── functions
│   ├── index.js
│   ├── node_modules
│   ├── package.json
│   └── package-lock.json
└── public
    └── placeholder.html

3 directories, 6 files`}</Snippet>
    <p>
      Editamos el archivo <Code>index.js</Code>
    </p>
    <Snippet>{`const functions = require('firebase-functions')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest((req, res) => {
  res.send('Hello from Firebase!')
})`}</Snippet>
    <p>
      Editamos el archivo <Code>firebase.json</Code>
    </p>
    <Snippet>{`{
  "hosting": {
    "public": "public",
    "rewrites": [
      {
        "source": "**/**",
        "function": "app"
      }
    ]
  },
  "functions": {
    "source": "functions"
  }
}`}</Snippet>

    <p>Hacemos deploy de nuestro proyecto y comprobamos:</p>
    <Snippet>{`firebase deploy
curl https://hello.firebaseapp.com/
Hello from Firebase!`}</Snippet>
  </Post>
)

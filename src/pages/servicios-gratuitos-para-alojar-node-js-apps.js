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
import OL, { LI as OLI } from '../components/post/numbers-list'
import { H2, H3 } from '../components/post/heading'
import Quote from '../components/post/quote'
import Snippet from '../components/post/snippet'
import Code from '../components/post/code'
// import TABLE, { THEAD, TBODY, TR, TH, TD } from '../components/post/table'
// import { Image } from '../components/post/figure'

// Ours
import posts from '../posts.json'
const { title, description, slug, headerImage, createdAt } = posts.find(
  p => p.slug === 'servicios-gratuitos-para-alojar-node-js-apps'
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

    <Header image={headerImage} title={title} url={`/${slug}`} />
    <Menu />

    <Article>
      <header>
        <Time createdAt={createdAt} />
      </header>
      <section>
        <P>
          A la hora de montar un servidor escrito en Node.js existen diferentes
          servicios que nos permiten alojar nuestra aplicación; en este artículo
          hablaremos de aquellos que sin gastar un peso nos permitan disfrutar
          de un entorno en Node.js 💚
        </P>
        <OL>
          <OLI>
            <a href='#heroku'>Heroku</a>
          </OLI>
          <OLI>
            <a href='#openshift'>OpenShift</a>
          </OLI>
          <OLI>
            <a href='#now'>Now</a>
          </OLI>
          <OLI>
            <a href='#firebase'>Firebase</a>
          </OLI>
        </OL>
        <H2 id='heroku'>Heroku</H2>
        <P>
          Uno de lo más populares, en su capa gratuita nos limita a 550 horas
          por mes y si la app está inactiva por 30 minutos esta se duerme hasta
          que vuelta a recibir tráfico. Con estas desventajas se podría usar en
          chatbots o APIS que no requieran de un uso intenso.
        </P>
        <H3>Ejemplo: API de formulario de contacto</H3>
        <P>
          Pequeña API que obtendrá por una petición <Code>POST</Code> el email y
          el mensaje para ser enviado a un chat de{' '}
          <a target='_blank' href='https://slack.com'>
            Slack
          </a>.
        </P>
        <Quote>
          Heroku nos da https por defecto en todos nuestros deploys, viene muy
          bien para este ejemplo.
        </Quote>
        <P>Comenzamos instalando Heroku CLI y preparando nuestra app:</P>
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
        <P>
          Nuestro <Code>package.json</Code> quedaría:
        </P>
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
        <P>
          El archivo <Code>index.js</Code>
        </P>
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
        <P>Ahora solo nos queda hacer deploy:</P>
        <Snippet>{`git add .
git commit -m 'init'
git push heroku master`}</Snippet>
        <Quote>
          Para la integración correcta con Slack es necesaria la variable de
          entorno llamada "WEBHOOK", más detalles en la{' '}
          <a target='_blank' href='https://api.slack.com/incoming-webhooks'>
            documentación
          </a>.
        </Quote>
        <H2 id='openshift'>OpenShift</H2>
        <P>
          Algo menos amigable que Heroku pero muy potente, nos permite alojar 1
          proyecto y si la app está inactiva por 30 minutos se duerme, esto no
          es problema si tenemos un buen tráfico o mantenemos un servicio que
          nos mande un ping paulatinamente.
        </P>
        <Quote>
          Podemos combinar OpenShift +{' '}
          <a target='_blank' href='https://pingometer.com/'>
            Pingometer
          </a>{' '}
          y mantener siempre viva nuestra app.
        </Quote>
        <H2 id='now'>Now</H2>
        <P>
          Una de las mejores, muy fácil de usar; nos permite tener 3 instancias
          corriendo sin interrupciones además de un sistema de alias en los
          dominios. Para proyectos de código abierto es ideal ya que cada
          instancia queda visible el código fuente.
        </P>
        <P>
          Ejemplo:{' '}
          <a
            target='_blank'
            href='https://github.com/sindresorhus/gh-latest-repos'
          >
            Microservicio para conseguir los últimos repositorios públicos de un
            usuario
          </a>.
        </P>
        <H2 id='firebase'>Firebase</H2>
        <P>
          Tiene de todo y casi gratis, gracias a Cloud Functions podemos montar
          un servidor http, además nos permite conectar dominios gratis con
          https. Un inconveniente de las Cloud Functions en su modelo gratis es
          la imposibilidad de realizar peticiones http fuera del entorno 😢.
        </P>
        <H3>Ejemplo: Servidor en Cloud Functions de Firebase</H3>
        <P>Instalamos Firebase CLI y iniciamos el proyecto:</P>
        <Snippet>{`npm install -g firebase-tools
firebase login
mkdir hello
cd hello`}</Snippet>
        <P>
          Creamos un nuevo proyecto desde la consola de Firebase{' '}
          <a target='_blank' href='https://console.firebase.google.com'>
            https://console.firebase.google.com
          </a>{' '}
          y lo iniciamos en la carpeta anterior creada (hello):
        </P>
        <Snippet>{`firebase init
# Seleccionamos "Functions"
# Seleccionamos nuestro proyecto creado desde la consola
# Creamos la carpeta public
mkdir public
touch public/placeholder.html`}</Snippet>
        <P>La estructura de nuestro proyecto se vería así:</P>
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
        <P>
          Editamos el archivo <Code>index.js</Code>
        </P>
        <Snippet>{`const functions = require('firebase-functions')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest((req, res) => {
  res.send('Hello from Firebase!')
})`}</Snippet>
        <P>
          Editamos el archivo <Code>firebase.json</Code>
        </P>
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

        <P>Hacemos deploy de nuestro proyecto y comprobamos:</P>
        <Snippet>{`firebase deploy
curl https://hello.firebaseapp.com/
Hello from Firebase!`}</Snippet>
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

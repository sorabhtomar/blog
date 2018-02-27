import Post from '../layouts/post'
import Snippet from '../components/snippet'
import Code from '../components/code'
import posts from '../posts'

const props = posts.find(
  p => p.slug === 'integrar-slack-con-nuestras-node-js-apps'
)

export default () => (
  <Post {...props}>
    <p>
      Una forma amigable de notificarme qué está pasando con mis apps es
      mediante un bonito mensaje que recibo desde un chat de Slack, integrando
      los Webhooks de Slack con Node.js
    </p>
    <p>
      Para realizar esta integración es necesario{' '}
      <a
        target="_blank"
        href="https://api.slack.com/apps"
        rel="noopener noreferrer"
      >
        crear una aplicación para nuestro Slack
      </a>, activar la característica "Incoming Webhooks" y crear una nueva
      "Webhook URL":
    </p>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fintegrar-slack-con-nuestras-node-js-apps%2Fwebhook.PNG?alt=media&token=648f2bf8-3192-4c97-8fbe-93e3eb19dadd"
      alt="Webhooks Slack"
    />
    <Snippet>
      https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
    </Snippet>
    <p>
      A esta URL le podremos hacer peticiones POST con nuestros mensajes que
      serán enviados a Slack.
    </p>
    <p>
      Podemos probar con <Code>curl</Code>
    </p>
    <Snippet
    >{`curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXX`}</Snippet>
    <h2 id="notificaciones-desde-node-js">Notificaciones desde Node.js</h2>
    <p>
      Instalamos <Code>slackshooks</Code> con npm y enviamos un mensaje:
    </p>
    <Snippet>{`const slack = require('slackhooks')

// id or full url
const backend = 'T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'

slack('Se esta prendiendo fuego el servidor  :tada:', backend)`}</Snippet>
    <p>Un cálido mensaje desde Node.js</p>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fintegrar-slack-con-nuestras-node-js-apps%2Fslack.PNG?alt=media&token=c3ca43d7-2f58-4a34-aee1-dee4358a0e02"
      alt="Slack mensaje desde Node.js"
    />
    <p>
      Podemos{' '}
      <a
        target="_blank"
        href="https://api.slack.com/docs/message-attachments"
        rel="noopener noreferrer"
      >
        personalizar cada mensaje
      </a>{' '}
      con las diferentes opciones que nos proporciona Slack:
    </p>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fintegrar-slack-con-nuestras-node-js-apps%2Fmessage.PNG?alt=media&token=96967db2-8077-4bb8-af94-5f5b583aa247"
      alt="Message attachments Slack"
    />
    <Snippet>{`// Slack Message
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
)`}</Snippet>
  </Post>
)

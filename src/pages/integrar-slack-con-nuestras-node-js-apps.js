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
import { Image } from '../components/post/figure'
import Snippet from '../components/post/snippet'
import Code from '../components/post/code'
import { H2 } from '../components/post/heading'
// import Quote from '../components/post/quote'

// Ours
import posts from '../posts.json'
const { title, description, slug, createdAt } = posts.find(
  p => p.slug === 'integrar-slack-con-nuestras-node-js-apps'
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
          Una forma amigable de notificarme qué está pasando con mis apps es
          mediante un bonito mensaje que recibo desde un chat de Slack,
          integrando los Webhooks de Slack con Node.js
        </P>
        <P>
          Para realizar esta integración es necesario{' '}
          <a target='_blank' href='https://api.slack.com/apps'>
            crear una aplicación para nuestro Slack
          </a>, activar la característica "Incoming Webhooks" y crear una nueva
          "Webhook URL":
        </P>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fintegrar-slack-con-nuestras-node-js-apps%2Fwebhook.PNG?alt=media&token=648f2bf8-3192-4c97-8fbe-93e3eb19dadd'
          alt='Webhooks Slack'
        />
        <Snippet>
          https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
        </Snippet>
        <P>
          A esta URL le podremos hacer peticiones POST con nuestros mensajes que
          serán enviados a Slack.
        </P>
        <P>
          Podemos probar con <Code>curl</Code>
        </P>
        <Snippet
        >{`curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXX`}</Snippet>
        <H2 id='notificaciones-desde-node-js'>Notificaciones desde Node.js</H2>
        <P>
          Instalamos <Code>slackshooks</Code> con npm y enviamos un mensaje:
        </P>
        <Snippet>{`const slack = require('slackhooks')

// id or full url
const backend = 'T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'

slack('Se esta prendiendo fuego el servidor  :tada:', backend)`}</Snippet>
        <P>Un cálido mensaje desde Node.js</P>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fintegrar-slack-con-nuestras-node-js-apps%2Fslack.PNG?alt=media&token=c3ca43d7-2f58-4a34-aee1-dee4358a0e02'
          alt='Slack mensaje desde Node.js'
        />
        <P>
          Podemos{' '}
          <a
            target='_blank'
            href='https://api.slack.com/docs/message-attachments'
          >
            personalizar cada mensaje
          </a>{' '}
          con las diferentes opciones que nos proporciona Slack:
        </P>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fintegrar-slack-con-nuestras-node-js-apps%2Fmessage.PNG?alt=media&token=96967db2-8077-4bb8-af94-5f5b583aa247'
          alt='Message attachments Slack'
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

import Head from 'next/head'
import Post from '../layouts/post'
import withViews from '../lib/with-views'
import Title from '../components/post/title'
import P from '../components/post/paragraph'
import H2, { H3 } from '../components/post/heading'
import Quote from '../components/post/quote'
import { UL, LI } from '../components/post/list'
import Code from '../components/post/code'
import Snippet from '../components/post/snippet'

// Instagram Stories
import Stories from '../lib/instagram-stories/components/stories'

export default withViews(({ views }) => (
  <Post views={views}>
    <Head>
      <title>Instagram Stories Widget, your stories on your website</title>
    </Head>

    <Title>Instagram Stories Widget, your stories on your website</Title>
    <P>Add Instagram Stories to your personal site.</P>
    <Quote>Share your amazing day with all visitors of your website.</Quote>

    <Stories username='pollosus' />
    <style jsx global>{`
      .instagram-stories {
        border: 1px solid #000;
        height: 734px;
        margin: 0 auto;
        width: 414px;
        margin-bottom: 27px;
      }

      @media (max-width: 600px) {
        .instagram-stories {
          height: 100%;
          width: 100%;
        }
      }
      `}</style>

    <H2 id='features'>Features</H2>

    <UL>
      <LI>Stories in realtime</LI>
      <LI>Responsive</LI>
      <LI>Supports Photos and Videos</LI>
      <LI>Left and Right navigation of stories</LI>
    </UL>

    <H2 id='documentation'>Documentation</H2>

    <P>Coding with beautiful and modern web technologies, user interface powered by <Code>React</Code> of Facebook.</P>

    <H3 id='install'>Install</H3>

    <P>Add <Code>instagram-stories.js</Code> file and <Code>id</Code> attribute in your page, change <Code>username</Code> and done!</P>

    <Snippet>
      {`<html>
  <body>
    <!-- Your user name of Instagram -->
    <div id="instagram-stories" username="instagram"></div>
    <!-- JS file -->
    <script src="./instagram-stories.js"></script>
  </body>
</html>
`}
    </Snippet>

    <Quote>It's important not to change <Code>id</Code> attribute name (<Code>instagram-stories</Code>)</Quote>

    <P>
      Attibute <Code>username</Code> by default is `instagram`.
      Remember Add JS file before the end <Code>body</Code> tag.
    </P>

    <H3 id='html-basic-template'>HTML Basic Template</H3>

    <Snippet>
      {`<html>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
    }
    .title {
      color: #E0A178;
      font-weight: 500;
      margin: 3em 0;
      text-align: center;
    }

    /* container class of lib */
    .instagram-stories {
      height: 734px;
      margin: 0 auto;
      margin-bottom: 27px;
      width: 414px;
    }

    /* simple media query for full responsive */
    @media (max-width: 600px) {
      .instagram-stories {
        height: 100%;
        width: 100%;
      }
    }
  </style>
  <body>
    <h1 class='title'>My amazing stories</h1>

    <!-- Your user name of Instagram -->
    <div id="instagram-stories" username="instagram"></div>
    <!-- JS file -->
    <script src="./instagram-stories.js"></script>
  </body>
</html>
`}
    </Snippet>

    <H3 id='css'>CSS</H3>

    <P>All styles is powered by <Code>styled-jsx</Code>, very fast, minimal and efficient library for modern web components.</P>

    <UL>
      <LI><Code>instagram-stories</Code> - class container of all, adapt it to your needs.</LI>
    </UL>

    <H3 id='source-code'>Source Code</H3>

    <P>Development structure</P>

    <Snippet>{`.
├── dist
│   ├── index.html
│   └── instagram-stories.js
├── src
│   ├── components
│   ├── lib
│   └── index.js
├── test
│   ├── components
│   └── lib
├── package.json
├── webpack.config.js
└── yarn.lock`}
    </Snippet>

    <Quote><Code>dist</Code> folder is the production code</Quote>
  </Post>
))

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
import Snippet from '../components/post/snippet'
import { H2, H3 } from '../components/post/heading'
import Code from '../components/post/code'
import UL, { LI } from '../components/post/bullets-list'

// Ours
import posts from '../posts.json'
const { title, description, slug, headerImage, createdAt } = posts.find(
  p => p.slug === 'que-es-prettier'
)

export default () =>
  <App>
    <Head
      title={`${title} – Jesus Lobos – jlobos`}
      type='article'
      url={`https://jlobos.com/${slug}`}
      image={headerImage.url}
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
          Prettier es un formateador de código increíble, actualmente soporta
          Javascript, CSS y GraphQL su desarrollo es constante y cada vez son
          más los sintaxis que se agregan: ES2017, JSX, Flow, TypeScript, JSON,
          LESS, SCSS, styled-components & styled-jsx
        </P>
        <P>
          Prettier se deshace de todo el estilo original del código y crea uno
          nuevo totalmente coherente y bonito. Por ejemplo le damos algo como
          esto:
        </P>
        <Snippet
        >{`foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());`}</Snippet>
        <P>Y nos entregará:</P>
        <Snippet>{`foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);`}</Snippet>
        <P>Respetando sangrías y saltos de líneas, muy legible a la vista.</P>
        <P>
          Prettier fue creado por{' '}
          <a href='https://twitter.com/jlongster' target='_blank'>
            James Long
          </a>{' '}
          ex trabajador de Mozilla, al ver el pobre soporte que presentaban los
          editores con la sintaxis JSX (Estructura HTML/XML de React en
          Javascript). Basándose en el código de{' '}
          <a href='https://github.com/benjamn/recast' target='_blank'>
            recast
          </a>{' '}
          y en el algoritmo{' '}
          <a
            href='http://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf'
            target='_blank'
          >
            “An prettier printer”
          </a>{' '}
          de{' '}
          <a href='https://es.wikipedia.org/wiki/Philip_Wadler' target='_blank'>
            Philip Wadler
          </a>.
        </P>
        <P>
          Nos olvidamos de configurar eslint, de imponer estilos propios de
          equipos y nos centramos en cosas importantes ❤️{' '}
        </P>
        <H2 id='montar-un-entorno-para-trabajar-en-equipo'>
          Montar un entorno para trabajar en equipo
        </H2>
        <P>
          Aquí veremos la magia de Prettier, creare un entorno de trabajo común
          con git y escribiré código normalmente, cuando cree un commit saltara
          un hook que formateara todo el código:
        </P>
        <Snippet>{`$ git init
$ npm init --yes
$ npm install --save-dev prettier lint-staged husky
$ touch index.js`}</Snippet>
        <H3 id='pre-commit-hook'>Pre-commit Hook</H3>
        <P>
          Agregamos la siguiente configuración a nuestro archivo{' '}
          <Code>package.json</Code>:
        </P>
        <Snippet>{`{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "git add"
    ]
  }
}`}</Snippet>
        <P>
          Editamos el archivo <Code>index.js</Code>, agregamos:
        </P>
        <Snippet>{`import React from 'react'
import ReactDOM from 'react-dom'

const Fibonacci = ({ a = 0, b = 1, n }) => n > 0 ? <Fibonacci a={a} b={a + b} n={n - 1} /> : <h1>{a}</h1>

const app = <Fibonacci n={6} />
const root = document.getElementById('root')
ReactDOM.render(app, root)`}</Snippet>
        <P>Ahora agregamos el archivo y hacemos un commit:</P>
        <Snippet>{`$ git add index.js
$ git commit -m 'init'
husky > npm run -s precommit (node v8.2.1)

 ✔ Running tasks for *.js
[master (root-commit) b60f8e5] init
 1 file changed, 13 insertions(+)
 create mode 100644 index.js`}</Snippet>
        <P>
          Cada archivo con la extensión .js será formateado por Prettier y
          agregado al commit:
        </P>
        <Snippet>{`import React from "react";
import ReactDOM from "react-dom";

const Fibonacci = ({ a = 0, b = 1, n }) =>
  n > 0
    ? <Fibonacci a={a} b={a + b} n={n - 1} />
    : <h1>
        {a}
      </h1>;

const app = <Fibonacci n={6} />;
const root = document.getElementById("root");
ReactDOM.render(app, root);`}</Snippet>
        <P>
          De esta forma nos olvidamos de las guías de estilos y le dejamos ese
          trabajo a Prettier, además todo el código que agregamos al repositorio
          como commit será pasado por Prettier.
        </P>
        <P>
          Además tenemos algunas configuraciones si en nuestro equipo trabajamos
          con tabulaciones en lugar de espacios, sin punto y coma o comillas
          simples o dobles. Todas estas configuraciones las podemos ver con el
          comando:
        </P>
        <Snippet>{`$ prettier --help`}</Snippet>
        <P>
          Si deseamos formatear el código sin esperar a hacer un commit podemos
          agregar un script a nuestro <Code>package.json</Code>:
        </P>
        <Snippet>{`{
  "scripts": {
    "prettify": "prettier --single-quote --no-semi --write '*.js'"
  }
}`}</Snippet>
        <P>
          Cada vez que ejecutemos este script <Code>npm run prettify</Code>{' '}
          todos los archivos que estén en nuestra raíz con extensión .js serán
          formateados sin punto y coma y con comillas simples en lugar de
          dobles.
        </P>
        <H2 id='prettier-en-nuestro-editor-favorito'>
          Prettier en nuestro editor favorito
        </H2>
        <P>Podemos integrar Prettier fácilmente en diferentes editores:</P>
        <UL>
          <LI>
            <a href='https://github.com/prettier/prettier-atom' target='_blank'>
              Atom
            </a>
          </LI>
          <LI>
            <a
              href='https://github.com/prettier/prettier-vscode'
              target='_blank'
            >
              Visual Studio Code
            </a>
          </LI>
          <LI>
            <a
              href='https://packagecontrol.io/packages/JsPrettier'
              target='_blank'
            >
              Sublime Text
            </a>
          </LI>
          <LI>
            <a href='https://github.com/prettier/vim-prettier' target='_blank'>
              Vim
            </a>
          </LI>
          <LI>
            <a
              href='https://github.com/prettier/prettier-emacs'
              target='_blank'
            >
              Emacs
            </a>
          </LI>
        </UL>
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

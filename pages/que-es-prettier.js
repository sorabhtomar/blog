import Post from '../layouts/post'
import Snippet from '../components/snippet'
import Code from '../components/code'
import posts from '../posts'

const props = posts.find(p => p.slug === 'que-es-prettier')

export default () => (
  <Post {...props}>
    <p>
      Prettier es un formateador de código increíble, actualmente soporta
      Javascript, CSS y GraphQL su desarrollo es constante y cada vez son más
      los sintaxis que se agregan: ES2017, JSX, Flow, TypeScript, JSON, LESS,
      SCSS, styled-components & styled-jsx
    </p>
    <p>
      Prettier se deshace de todo el estilo original del código y crea uno nuevo
      totalmente coherente y bonito. Por ejemplo le damos algo como esto:
    </p>
    <Snippet
    >{`foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());`}</Snippet>
    <p>Y nos entregará:</p>
    <Snippet>{`foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);`}</Snippet>
    <p>Respetando sangrías y saltos de líneas, muy legible a la vista.</p>
    <p>
      Prettier fue creado por{' '}
      <a
        href="https://twitter.com/jlongster"
        target="_blank"
        rel="noopener noreferrer"
      >
        James Long
      </a>{' '}
      ex trabajador de Mozilla, al ver el pobre soporte que presentaban los
      editores con la sintaxis JSX (Estructura HTML/XML de React en Javascript).
      Basándose en el código de{' '}
      <a
        href="https://github.com/benjamn/recast"
        target="_blank"
        rel="noopener noreferrer"
      >
        recast
      </a>{' '}
      y en el algoritmo{' '}
      <a
        href="http://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        “An prettier printer”
      </a>{' '}
      de{' '}
      <a
        href="https://es.wikipedia.org/wiki/Philip_Wadler"
        target="_blank"
        rel="noopener noreferrer"
      >
        Philip Wadler
      </a>.
    </p>
    <p>
      Nos olvidamos de configurar eslint, de imponer estilos propios de equipos
      y nos centramos en cosas importantes ❤️{' '}
    </p>
    <h2 id="montar-un-entorno-para-trabajar-en-equipo">
      Montar un entorno para trabajar en equipo
    </h2>
    <p>
      Aquí veremos la magia de Prettier, creare un entorno de trabajo común con
      git y escribiré código normalmente, cuando cree un commit saltara un hook
      que formateara todo el código:
    </p>
    <Snippet>{`$ git init
$ npm init --yes
$ npm install --save-dev prettier lint-staged husky
$ touch index.js`}</Snippet>
    <h3 id="pre-commit-hook">Pre-commit Hook</h3>
    <p>
      Agregamos la siguiente configuración a nuestro archivo{' '}
      <Code>package.json</Code>:
    </p>
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
    <p>
      Editamos el archivo <Code>index.js</Code>, agregamos:
    </p>
    <Snippet>{`import React from 'react'
import ReactDOM from 'react-dom'

const Fibonacci = ({ a = 0, b = 1, n }) => n > 0 ? <Fibonacci a={a} b={a + b} n={n - 1} /> : <h1>{a}</h1>

const app = <Fibonacci n={6} />
const root = document.getElementById('root')
ReactDOM.render(app, root)`}</Snippet>
    <p>Ahora agregamos el archivo y hacemos un commit:</p>
    <Snippet>{`$ git add index.js
$ git commit -m 'init'
husky > npm run -s precommit (node v8.2.1)

 ✔ Running tasks for *.js
[master (root-commit) b60f8e5] init
 1 file changed, 13 insertions(+)
 create mode 100644 index.js`}</Snippet>
    <p>
      Cada archivo con la extensión .js será formateado por Prettier y agregado
      al commit:
    </p>
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
    <p>
      De esta forma nos olvidamos de las guías de estilos y le dejamos ese
      trabajo a Prettier, además todo el código que agregamos al repositorio
      como commit será pasado por Prettier.
    </p>
    <p>
      Además tenemos algunas configuraciones si en nuestro equipo trabajamos con
      tabulaciones en lugar de espacios, sin punto y coma o comillas simples o
      dobles. Todas estas configuraciones las podemos ver con el comando:
    </p>
    <Snippet>{`$ prettier --help`}</Snippet>
    <p>
      Si deseamos formatear el código sin esperar a hacer un commit podemos
      agregar un script a nuestro <Code>package.json</Code>:
    </p>
    <Snippet>{`{
  "scripts": {
    "prettify": "prettier --single-quote --no-semi --write '*.js'"
  }
}`}</Snippet>
    <p>
      Cada vez que ejecutemos este script <Code>npm run prettify</Code> todos
      los archivos que estén en nuestra raíz con extensión .js serán formateados
      sin punto y coma y con comillas simples en lugar de dobles.
    </p>
    <h2 id="prettier-en-nuestro-editor-favorito">
      Prettier en nuestro editor favorito
    </h2>
    <p>Podemos integrar Prettier fácilmente en diferentes editores:</p>
    <ul>
      <li>
        <a
          href="https://github.com/prettier/prettier-atom"
          target="_blank"
          rel="noopener noreferrer"
        >
          Atom
        </a>
      </li>
      <li>
        <a
          href="https://github.com/prettier/prettier-vscode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>
      </li>
      <li>
        <a
          href="https://packagecontrol.io/packages/JsPrettier"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sublime Text
        </a>
      </li>
      <li>
        <a
          href="https://github.com/prettier/vim-prettier"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vim
        </a>
      </li>
      <li>
        <a
          href="https://github.com/prettier/prettier-emacs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emacs
        </a>
      </li>
    </ul>
  </Post>
)

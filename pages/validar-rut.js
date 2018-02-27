import Post from '../layouts/post'
import Snippet from '../components/snippet'
import Code from '../components/code'
import Table, { TBody, THead, Tr, Th, Td } from '../components/table'
import posts from '../posts'

const props = posts.find(p => p.slug === 'validar-rut')

export default () => (
  <Post {...props}>
    <p>
      En ocasiones nos toca lidiar con el Rol Único Tributario comúnmente
      conocido como RUT, ya sea en validaciones de formularios, a la hora de
      guardarlo en una base de datos, etc.{' '}
    </p>
    <ul>
      <li>
        <a href="#algoritmo-formula-para-validar-rut-calculando-digito-verificador">
          Algoritmo (Fórmula) para validar el RUT Calculando dígito verificador
        </a>
      </li>
      <li>
        <a href="#validar-rut-con-javascript">Validar RUT con Javascript</a>
      </li>
      <li>
        <a href="#validar-rut-con-jquery">Validar RUT con jQuery</a>
      </li>
      <li>
        <a href="#validar-rut-en-angular">Validar RUT en Angular</a>
      </li>
      <li>
        <a href="#validar-rut-en-vue">Validar RUT en Vue</a>
      </li>
      <li>
        <a href="#expresion-regular-para-el-rut">
          Expresión Regular para el RUT
        </a>
      </li>
    </ul>
    <h2 id="algoritmo-formula-para-validar-rut-calculando-digito-verificador">
      Algoritmo (Fórmula) para validar el RUT Calculando dígito verificador
    </h2>
    <p>
      Para validar un RUT en Chile se utiliza el algoritmo “Módulo 11”, que
      consiste en aplicar operaciones aritméticas a cada dígito del número del
      RUT. Multiplicamos cada dígito de derecha a izquierda por la serie
      numérica 2, 3, 4, 5, 6 y 7 sumando el resultado de cada producto. En caso
      de quedar dígitos por multiplicar, se comienza la serie numérica
      nuevamente:
    </p>
    <Snippet>{`1 * 3 = 3
8 * 2 = 16
9 * 7 = 63
7 * 6 = 42
2 * 5 = 10
6 * 4 = 24
3 * 3 = 9
1 * 2 = 2

Total de la suma de los productos: 169
`}</Snippet>
    <p>
      La suma que obtengamos de los productos la dividimos por 11, la parte
      entera del resultado de esta división la multiplicamos por 11, al producto
      le restamos la suma anterior y para finalizar a 11 le restamos el
      resultado:
    </p>
    <Snippet>{`169 / 11  = 15
15  * 11  = 165
169 - 165 = 4
11  - 4   = 7  (Dígito Verificador)
`}</Snippet>
    <p>
      Ahora si el resultado es 11 el dígito verificador es 0, si es 10 seria K y
      en el resto de los casos el resultado será el propio dígito verificador.
    </p>
    <h2 id="validar-rut-con-javascript">Validar RUT con Javascript</h2>
    <p>
      Para trabajar con el RUT en el navegador (o servidor Node.js) tenemos una
      serie de librerías para diferentes gustos y tipos de proyectos que nos
      vendrían muy bien:
    </p>

    <Table>
      <THead>
        <Tr>
          <Th />
          <Th> Descripcion</Th>
          <Th> Lenguaje</Th>
          <Th> Browser</Th>
          <Th> Server</Th>
          <Th> Tamaño (Minificado + GZIP)</Th>
          <Th> Licencia</Th>
          <Th> Ultimo Commit</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>
            <a
              className="td-link"
              href="https://github.com/claudioDcv/RUTfunctions"
              target="_blank"
              rel="noopener noreferrer"
            >
              RUTfunctions
            </a>
          </Td>
          <Td>
            Helpers funcionales para manipulación de RUT Chileno escritos en ES6
            sin dependencias
          </Td>
          <Td>Javascript 100%</Td>
          <Td>✔️</Td>
          <Td>✔️</Td>
          <Td>820 B</Td>
          <Td>MIT</Td>
          <Td>jul. 25, 2017</Td>
        </Tr>
        <Tr>
          <Td>
            <a
              className="td-link"
              href="https://github.com/FinalDevStudio/fi-rut"
              target="_blank"
              rel="noopener noreferrer"
            >
              fi-rut
            </a>
          </Td>
          <Td>Chilean RUT utils for Node.js, the browser and AngularJS.</Td>
          <Td>Javascript 100%</Td>
          <Td>✔️</Td>
          <Td>✔️</Td>
          <Td>495 B</Td>
          <Td>MIT</Td>
          <Td>jul. 26, 2017</Td>
        </Tr>
        <Tr>
          <Td>
            <a
              className="td-link"
              href="https://github.com/flakolefluk/rut-verifier"
              target="_blank"
              rel="noopener noreferrer"
            >
              rut-verifier
            </a>
          </Td>
          <Td>
            This module will help you verify chilean RUTs (Rol Único
            Tributario).
          </Td>
          <Td>Javascript 100%</Td>
          <Td>✔️</Td>
          <Td>✔️</Td>
          <Td>431 B</Td>
          <Td>MIT</Td>
          <Td>mar. 12, 2017</Td>
        </Tr>
        <Tr>
          <Td>
            <a
              className="td-link"
              href="https://github.com/iambumblehead/isrut"
              target="_blank"
              rel="noopener noreferrer"
            >
              isrut
            </a>
          </Td>
          <Td>Return true if the given value is a valid RUT.</Td>
          <Td>Javascript 100%</Td>
          <Td>✔️</Td>
          <Td>✔️</Td>
          <Td>222 B</Td>
          <Td>MIT</Td>
          <Td>sep 15, 2014</Td>
        </Tr>
        <Tr>
          <Td>
            <a
              className="td-link"
              href="https://github.com/jeam/rut"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rut.js
            </a>
          </Td>
          <Td>
            Rut.js es una pequeña herramienta que te ayuda al validado y
            formateo de rut's en tus aplicaciones JavaScript. La herramienta
            esta escrita en CoffeeScript y puede ser utilizado tanto en nodejs
            como en el browser.
          </Td>
          <Td>Javascript 50% CoffeeScript 50%</Td>
          <Td>✔️</Td>
          <Td>✔️</Td>
          <Td>547 B</Td>
          <Td>MIT</Td>
          <Td>jul. 21, 2013</Td>
        </Tr>
        <Tr>
          <Td>
            <a
              className="td-link"
              href="https://github.com/jlobos/rut.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              rut.js
            </a>
          </Td>
          <Td>
            Sencilla y pequeña libreria para validar y dar formato al RUT.
            Funciona en Node.js y Navegadores (Webpack, Browserify)
          </Td>
          <Td>Javascript 100%</Td>
          <Td>✔️</Td>
          <Td>✔️</Td>
          <Td>367 B</Td>
          <Td>MIT</Td>
          <Td>may. 26, 2017</Td>
        </Tr>
        <Tr>
          <Td>
            <a
              className="td-link"
              href="https://github.com/platanus/rut-helpers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rut Helpers
            </a>
          </Td>
          <Td>
            A small collection of helpers to validate and format strings to RUT
            (Chilean DNI).
          </Td>
          <Td>Javascript 62.1% TypeScript 37.9%</Td>
          <Td>✔️</Td>
          <Td>✔️</Td>
          <Td>337 B</Td>
          <Td>Desconocida</Td>
          <Td>dec 28, 2016</Td>
        </Tr>
      </TBody>
    </Table>
    <p>
      La minificación de cada librería fue con{' '}
      <a
        href="https://github.com/babel/babili"
        target="_blank"
        rel="noopener noreferrer"
      >
        babili
      </a>{' '}
      y la compresion GZIP se obtuvo con{' '}
      <a
        href="https://github.com/sindresorhus/gulp-size"
        target="_blank"
        rel="noopener noreferrer"
      >
        gulp-size
      </a>:
    </p>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fvalidar-rut%2Fscreenshot.3.png?alt=media&token=8848dafa-756a-41f7-a117-af8d17012e2c"
      alt="Minificación y GZIP de las librería para trabajar con el RUT"
    />
    <h2 id="validar-rut-con-jquery">Validar RUT con jQuery</h2>
    <p>
      Para jQuery podemos usar la libreria{' '}
      <a
        href="https://github.com/pablomarambio/jquery.rut"
        target="_blank"
        rel="noopener noreferrer"
      >
        jQuery.rut
      </a>{' '}
      que al día de hoy aceptan pull request, su última versión es la 1.2.2 de
      noviembre del 2016. Esta muy bien ejemplificada y tienen una licencia MIT.
    </p>
    <h2 id="validar-rut-en-angular">Validar RUT en Angular</h2>
    <p>
      Para Angular he encontrado dos librerías desarrolladas por el equipo de{' '}
      <a
        href="https://github.com/platanus"
        target="_blank"
        rel="noopener noreferrer"
      >
        Platanus
      </a>:
    </p>
    <ul>
      <li>
        <a
          href="https://github.com/platanus/angular-rut"
          target="_blank"
          rel="noopener noreferrer"
        >
          angular-rut
        </a>{' '}
        (Licencia Desconocida )
      </li>
      <li>
        <a
          href="https://github.com/platanus/ng2-rut"
          target="_blank"
          rel="noopener noreferrer"
        >
          Angular 2 RUT
        </a>{' '}
        (Licencia MIT)
      </li>
    </ul>
    <h2 id="validar-rut-en-vue">Validar RUT en Vue</h2>
    <p>
      Con Vue.js tenemos dos librerías para echarles un ojo. Algo malo que noto
      es la falta de licencia de estos dos repositorios, algo a tener en cuenta
      si deseamos trabajar con ellas.
    </p>
    <ul>
      <li>
        <a
          href="https://github.com/isaiascardenas/vue-rut"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vue-Rut
        </a>
      </li>
      <li>
        <a
          href="https://github.com/platanus/vue-dni"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vue DNI Validator
        </a>
      </li>
    </ul>
    <h2 id="expresion-regular-para-el-rut">Expresión Regular para el RUT</h2>
    <p>
      Si deseamos trabajar con expresiones regulares como patrón para
      identificar si una cadena es un RUT, podemos usar la siguiente expresión
      regular:
    </p>
    <Snippet>{`^0*(\\d{1,3}(\\.?\\d{3})*)-?([\\dkK])$`}</Snippet>
    <p>
      En Javascript podemos hacer uso de la siguiente librería que implementa la
      expresión regular descrita. Esta librería retorna un nuevo objeto{' '}
      <Code>new RegExp()</Code>:
    </p>
    <ul>
      <li>
        <a
          href="https://github.com/jlobos/rut-regex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regular expression for matching Chile RUTs
        </a>
      </li>
    </ul>
  </Post>
)

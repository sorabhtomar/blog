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
import { H2 } from '../components/post/heading'
import Snippet from '../components/post/snippet'
import OL, { LI as OLI } from '../components/post/numbers-list'
import TABLE, { THEAD, TBODY, TR, TH, TD } from '../components/post/table'
import { Image } from '../components/post/figure'

// Ours
import posts from '../posts.json'
const { title, description, slug, createdAt } = posts.find(
  p => p.slug === 'validar-rut'
)

export default () =>
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
          En ocasiones nos toca lidiar con el Rol Único Tributario comúnmente
          conocido como RUT, ya sea en validaciones de formularios, a la hora de
          guardarlo en una base de datos, etc.{' '}
        </P>
        <OL>
          <OLI>
            <a href='#algoritmo-formula-para-validar-rut-calculando-digito-verificador'>
              Algoritmo (Fórmula) para validar el RUT Calculando dígito
              verificador
            </a>
          </OLI>
          <OLI>
            <a href='#validar-rut-con-javascript'>Validar RUT con Javascript</a>
          </OLI>
          <OLI>
            <a href='#validar-rut-con-jquery'>Validar RUT con jQuery</a>
          </OLI>
          <OLI>
            <a href='#validar-rut-en-angular'>Validar RUT en Angular</a>
          </OLI>
          <OLI>
            <a href='#validar-rut-en-vue'>Validar RUT en Vue</a>
          </OLI>
        </OL>
        <H2 id='algoritmo-formula-para-validar-rut-calculando-digito-verificador'>
          Algoritmo (Fórmula) para validar el RUT Calculando dígito verificador
        </H2>
        <P>
          Para validar un RUT en Chile se utiliza el algoritmo “Módulo 11”, que
          consiste en aplicar operaciones aritméticas a cada dígito del número
          del RUT. Multiplicamos cada dígito de derecha a izquierda por la serie
          numérica 2, 3, 4, 5, 6 y 7 sumando el resultado de cada producto. En
          caso de quedar dígitos por multiplicar, se comienza la serie numérica
          nuevamente:
        </P>
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
        <P>
          La suma que obtengamos de los productos la dividimos por 11, la parte
          entera del resultado de esta división la multiplicamos por 11, al
          producto le restamos la suma anterior y para finalizar a 11 le
          restamos el resultado:
        </P>
        <Snippet>{`169 / 11  = 15
15  * 11  = 165
169 - 165 = 4
11  - 4   = 7  (Dígito Verificador)
`}</Snippet>
        <P>
          Ahora si el resultado es 11 el dígito verificador es 0, si es 10 seria
          K y en el resto de los casos el resultado será el propio dígito
          verificador.
        </P>
        <H2 id='validar-rut-con-javascript'>Validar RUT con Javascript</H2>
        <P>
          Para trabajar con el RUT en el navegador (o servidor Node.js) tenemos
          una serie de librerías para diferentes gustos y tipos de proyectos que
          nos vendrían muy bien:
        </P>

        <TABLE>
          <THEAD>
            <TR>
              <TH />
              <TH>Descripcion</TH>
              <TH>Lenguaje</TH>
              <TH>Browser</TH>
              <TH>Server</TH>
              <TH>Tamaño (Minificado + GZIP)</TH>
              <TH>Licencia</TH>
              <TH>Ultimo Commit</TH>
            </TR>
          </THEAD>
          <TBODY>
            <TR>
              <TD>
                <a
                  className='td-link'
                  href='https://github.com/claudioDcv/RUTfunctions'
                  target='_blank'
                >
                  RUTfunctions
                </a>
              </TD>
              <TD>
                Helpers funcionales para manipulación de RUT Chileno escritos en
                ES6 sin dependencias
              </TD>
              <TD>Javascript 100%</TD>
              <TD>✔️</TD>
              <TD>✔️</TD>
              <TD>820 B</TD>
              <TD>MIT</TD>
              <TD>jul. 25, 2017</TD>
            </TR>
            <TR>
              <TD>
                <a
                  className='td-link'
                  href='https://github.com/FinalDevStudio/fi-rut'
                  target='_blank'
                >
                  fi-rut
                </a>
              </TD>
              <TD>Chilean RUT utils for Node.js, the browser and AngularJS.</TD>
              <TD>Javascript 100%</TD>
              <TD>✔️</TD>
              <TD>✔️</TD>
              <TD>495 B</TD>
              <TD>MIT</TD>
              <TD>jul. 26, 2017</TD>
            </TR>
            <TR>
              <TD>
                <a
                  className='td-link'
                  href='https://github.com/flakolefluk/rut-verifier'
                  target='_blank'
                >
                  rut-verifier
                </a>
              </TD>
              <TD>
                This module will help you verify chilean RUTs (Rol Único
                Tributario).
              </TD>
              <TD>Javascript 100%</TD>
              <TD>✔️</TD>
              <TD>✔️</TD>
              <TD>431 B</TD>
              <TD>MIT</TD>
              <TD>mar. 12, 2017</TD>
            </TR>
            <TR>
              <TD>
                <a
                  className='td-link'
                  href='https://github.com/iambumblehead/isrut'
                  target='_blank'
                >
                  isrut
                </a>
              </TD>
              <TD>Return true if the given value is a valid RUT.</TD>
              <TD>Javascript 100%</TD>
              <TD>✔️</TD>
              <TD>✔️</TD>
              <TD>222 B</TD>
              <TD>MIT</TD>
              <TD>sep 15, 2014</TD>
            </TR>
            <TR>
              <TD>
                <a
                  className='td-link'
                  href='https://github.com/jeam/rut'
                  target='_blank'
                >
                  Rut.js
                </a>
              </TD>
              <TD>
                Rut.js es una pequeña herramienta que te ayuda al validado y
                formateo de rut's en tus aplicaciones JavaScript. La herramienta
                esta escrita en CoffeeScript y puede ser utilizado tanto en
                nodejs como en el browser.
              </TD>
              <TD>Javascript 50% CoffeeScript 50%</TD>
              <TD>✔️</TD>
              <TD>✔️</TD>
              <TD>547 B</TD>
              <TD>MIT</TD>
              <TD>jul. 21, 2013</TD>
            </TR>
            <TR>
              <TD>
                <a
                  className='td-link'
                  href='https://github.com/jlobos/rut.js'
                  target='_blank'
                >
                  rut.js
                </a>
              </TD>
              <TD>
                Sencilla y pequeña libreria para validar y dar formato al RUT.
                Funciona en Node.js y Navegadores (Webpack, Browserify)
              </TD>
              <TD>Javascript 100%</TD>
              <TD>✔️</TD>
              <TD>✔️</TD>
              <TD>367 B</TD>
              <TD>MIT</TD>
              <TD>may. 26, 2017</TD>
            </TR>
            <TR>
              <TD>
                <a
                  className='td-link'
                  href='https://github.com/platanus/rut-helpers'
                  target='_blank'
                >
                  Rut Helpers
                </a>
              </TD>
              <TD>
                A small collection of helpers to validate and format strings to
                RUT (Chilean DNI).
              </TD>
              <TD>Javascript 62.1% TypeScript 37.9%</TD>
              <TD>✔️</TD>
              <TD>✔️</TD>
              <TD>337 B</TD>
              <TD>Desconocida</TD>
              <TD>dec 28, 2016</TD>
            </TR>
          </TBODY>
        </TABLE>
        <P>
          La minificación de cada librería fue con{' '}
          <a href='https://github.com/babel/babili' target='_blank'>
            babili
          </a>{' '}
          y la compresion GZIP se obtuvo con{' '}
          <a href='https://github.com/sindresorhus/gulp-size' target='_blank'>
            gulp-size
          </a>:
        </P>
        <Image
          src='http://i.imgur.com/zEpRpgq.jpg'
          alt='Minificación y GZIP de las librería para trabajar con el RUT'
        />
        <H2 id='validar-rut-con-jquery'>Validar RUT con jQuery</H2>
        <P>
          Para jQuery podemos usar la libreria{' '}
          <a href='https://github.com/pablomarambio/jquery.rut' target='_blank'>
            jQuery.rut
          </a>{' '}
          que al día de hoy aceptan pull request, su última versión es la 1.2.2
          de noviembre del 2016. Esta muy bien ejemplificada y tienen una
          licencia MIT.
        </P>
        <H2 id='validar-rut-en-angular'>Validar RUT en Angular</H2>
        <P>
          Para Angular he encontrado dos librerías desarrolladas por el equipo
          de{' '}
          <a href='http://github.com/platanus' target='_blank'>
            Platanus
          </a>:
        </P>
        <OL>
          <OLI>
            <a href='https://github.com/platanus/angular-rut' target='_blank'>
              angular-rut
            </a>{' '}
            (Licencia Desconocida )
          </OLI>
          <OLI>
            <a href='https://github.com/platanus/ng2-rut' target='_blank'>
              Angular 2 RUT
            </a>{' '}
            (Licencia MIT)
          </OLI>
        </OL>
        <H2 id='validar-rut-en-vue'>Validar RUT en Vue</H2>
        <P>
          Con Vue.js tenemos dos librerías para echarles un ojo. Algo malo que
          noto es la falta de licencia de estos dos repositorios, algo a tener
          en cuenta si deseamos trabajar con ellas.
        </P>
        <OL>
          <OLI>
            <a href='https://github.com/isaiascardenas/vue-rut' target='_blank'>
              Vue-Rut
            </a>
          </OLI>
          <OLI>
            <a href='https://github.com/platanus/vue-dni' target='_blank'>
              Vue DNI Validator
            </a>
          </OLI>
        </OL>
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

    <style jsx>{`
      .td-link {
        color: white;
      }
    `}</style>
  </App>

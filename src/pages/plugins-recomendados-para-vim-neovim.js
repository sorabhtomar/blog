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
import { Image } from '../components/post/figure'
import Snippet from '../components/post/snippet'
import Code from '../components/post/code'
import UL, { LI } from '../components/post/bullets-list'

// Ours
import posts from '../posts.json'
const { title, description, slug, headerImage, createdAt } = posts.find(
  p => p.slug === 'plugins-recomendados-para-vim-neovim'
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
          En estos momentos mi editor de código favorito es Neovim una versión
          moderna de Vim, hoy describiré algunos plugins que uso diariamente y
          una que otra de mis configuraciones.
        </P>
        <H2 id='esquema-de-colores'>Esquema de colores</H2>
        <P>
          El esquema de colores que utilizo es una{' '}
          <a target='_blank' href='https://github.com/joshdick/onedark.vim'>
            versión del tema oficial de Atom One dark
          </a>, cuando utilice Atom me gusto bastante su aspecto me parece muy
          simple y bonito. Con la única modificación del color de fondo que es
          transparente y toma el color de la terminal.
        </P>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fplugins-recomendados-para-vim-neovim%2Ftheme.png?alt=media&token=e7870ffc-3987-4207-a4b9-3f474a22a0fa'
          alt='Neovim'
        />
        <P>
          Podemos instalarlo usando cualquier plugin manager, en mi caso uso{' '}
          <a target='_blank' href='https://github.com/junegunn/vim-plug'>
            vim-plug
          </a>
        </P>
        <Snippet>{`Plug 'joshdick/onedark.vim'

syntax on
set termguicolors
set background=dark
colorscheme onedark

" transparent background color
hi Normal guibg=NONE ctermbg=NONE`}</Snippet>
        <H2 id='git'>Git</H2>
        <P>
          Para ver las lineas de codigo nuevas, modificadas o eliminadas utilizó{' '}
          <a target='_blank' href='https://github.com/airblade/vim-gitgutter'>
            vim-gitgutter
          </a>, como si fuera un <Code>git diff</Code>
        </P>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fplugins-recomendados-para-vim-neovim%2Fgit.PNG?alt=media&token=0f4e1a40-6de0-4be3-9331-a040a88703c9'
          alt='vim-gitgutter'
        />
        <H2 id='utilidades'>Utilidades</H2>
        <P>
          Como explorador de archivos utilizó{' '}
          <a target='_blank' href='https://github.com/scrooloose/nerdtree'>
            NERDTree
          </a>, permite visualizar y navegar por los directorios de una forma
          jerárquica.
        </P>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fplugins-recomendados-para-vim-neovim%2Fnerdtree.png?alt=media&token=45e72f98-4d47-4db5-b562-51bd2ee0a7c2'
          alt='NERDTree Neovim'
        />
        <P>
          <a target='_blank' href='https://github.com/metakirby5/codi.vim'>
            codi.vim
          </a>{' '}
          un plugin que descubrí hace poco para interactuar con el código que
          escribes, abre un panel nuevo y muestra los resultados de las
          evaluaciones como si fuera un intérprete interactivo.
        </P>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fplugins-recomendados-para-vim-neovim%2Fcodi.gif?alt=media&token=d30ebf05-10bb-4467-86d5-d5e02ecf4faf'
          alt='codi.vim interprete de código interactivo'
        />
        <H2 id='linting'>Linting</H2>
        <P>
          <a target='_blank' href='https://github.com/neomake/neomake'>
            Neomake
          </a>{' '}
          para validar el código asincrónicamente, funciona como un framework
          con soporte para diferentes herramientas de validación de código.
          Suelo utilizarlo con{' '}
          <a target='_blank' href='https://www.npmjs.com/package/standard'>
            Standard
          </a>{' '}
          o{' '}
          <a target='_blank' href='https://www.npmjs.com/package/xo'>
            XO
          </a>{' '}
          para Javascript.
        </P>
        <H2 id='edicion'>Edición</H2>
        <P>
          Para agilizar la escritura de código utilizó los siguientes plugins:
        </P>
        <UL>
          <LI>
            <a target='_blank' href='https://github.com/jiangmiao/auto-pairs'>
              auto-pairs
            </a>{' '}
            inserta y elimina automaticamente los parentesis, llaves o comillas.
          </LI>
          <LI>
            <a target='_blank' href='https://github.com/tpope/vim-commentary'>
              vim-commentary
            </a>{' '}
            nos permite comentar lineas, funciona muy bien con diferentes tipos
            de archivos.
          </LI>
          <LI>
            <a target='_blank' href='https://github.com/tpope/vim-surround'>
              vim-surround
            </a>{' '}
            nos permite cambiar comillas simples a dobles o viceversa, soporta
            paréntesis, llaves, XML tags y más.
          </LI>
        </UL>
        <H2 id='sintaxis'>Sintaxis</H2>
        <P>
          Para mejorar un poco los colores de sintaxis y la compatibilidad con
          los nuevos estándares de Javascript utilizó{' '}
          <a target='_blank' href='https://github.com/gavocanov/vim-js-indent'>
            vim-js-indent
          </a>,{' '}
          <a
            target='_blank'
            href='https://github.com/othree/es.next.syntax.vim'
          >
            es.next.syntax.vim
          </a>{' '}
          y{' '}
          <a target='_blank' href='https://github.com/othree/yajs.vim'>
            yajs.vim
          </a>
        </P>
        <P>
          Para CSS me funciona muy bien{' '}
          <a target='_blank' href='https://github.com/hail2u/vim-css3-syntax'>
            vim-css3-syntax
          </a>
        </P>
        <H2 id='configuraciones'>Configuraciones</H2>
        <P>
          Estas son algunas configuraciones que hacen un poco más ameno a Vim.
          Remover automáticamente todos los espacios en blanco finales al
          guardar un archivo:
        </P>
        <Snippet>{`autocmd BufWritePre * :%s/\\s\\+$//e`}</Snippet>
        <P>
          Permitir guardar un archivo con permisos de administrador usando{' '}
          <Code>:W</Code>
        </P>
        <Snippet>{`command W w !sudo tee % > /dev/null`}</Snippet>
        <P>
          Retornar a la última línea que estábamos trabajando luego de re abrir
          un archivo.
        </P>
        <Snippet>{`augroup line_return
    au!
    au BufReadPost *
        \\ if line("'\\"") > 0 && line("'\\"") <= line("$") |
        \\     execute 'normal! g\`"zvzz' |
        \\ endif
  augroup END`}</Snippet>
        <P>
          El archivo completo de las configuraciones de Neovim está disponible
          en el siguiente repositorio{' '}
          <a
            target='_blank'
            href='https://github.com/jlobos/dotfiles/blob/master/config/nvim/init.vim'
          >
            jlobos/dotfiles
          </a>
        </P>
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
      img {
        display: block;
        height: auto;
        margin: 0 auto;
        max-width: 100%;
      }
    `}</style>
  </App>
)

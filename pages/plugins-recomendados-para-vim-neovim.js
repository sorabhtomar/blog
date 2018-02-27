import Post from '../layouts/post'
import Code from '../components/code'
import Snippet from '../components/snippet'
import posts from '../posts'

const props = posts.find(p => p.slug === 'plugins-recomendados-para-vim-neovim')

export default () => (
  <Post {...props}>
    <p>
      En estos momentos mi editor de código favorito es Neovim una versión
      moderna de Vim, hoy describiré algunos plugins que uso diariamente y una
      que otra de mis configuraciones.
    </p>
    <h2>Esquema de colores</h2>
    <p>
      El esquema de colores que utilizo es una{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/joshdick/onedark.vim"
      >
        versión del tema oficial de Atom One dark
      </a>, cuando utilice Atom me gusto bastante su aspecto me parece muy
      simple y bonito. Con la única modificación del color de fondo que es
      transparente y toma el color de la terminal.
    </p>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fplugins-recomendados-para-vim-neovim%2Ftheme.png?alt=media&token=e7870ffc-3987-4207-a4b9-3f474a22a0fa"
      alt="Neovim"
    />
    <p>
      Podemos instalarlo usando cualquier plugin manager, en mi caso uso{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/junegunn/vim-plug"
      >
        vim-plug
      </a>
    </p>

    <Snippet>{`Plug 'joshdick/onedark.vim'

syntax on
set termguicolors
set background=dark
colorscheme onedark

" transparent background color
hi Normal guibg=NONE ctermbg=NONE`}</Snippet>

    <h2>Git</h2>
    <p>
      Para ver las lineas de codigo nuevas, modificadas o eliminadas utilizó{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/airblade/vim-gitgutter"
      >
        vim-gitgutter
      </a>, como si fuera un <Code>git diff</Code>
    </p>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fplugins-recomendados-para-vim-neovim%2Fgit.PNG?alt=media&token=0f4e1a40-6de0-4be3-9331-a040a88703c9"
      alt="vim-gitgutter"
    />
    <h2 id="utilidades">Utilidades</h2>
    <p>
      Como explorador de archivos utilizó{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/scrooloose/nerdtree"
      >
        NERDTree
      </a>, permite visualizar y navegar por los directorios de una forma
      jerárquica.
    </p>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/evilpudu.appspot.com/o/Posts%2Fplugins-recomendados-para-vim-neovim%2Fnerdtree.png?alt=media&token=45e72f98-4d47-4db5-b562-51bd2ee0a7c2"
      alt="NERDTree Neovim"
    />
    <p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/metakirby5/codi.vim"
      >
        codi.vim
      </a>{' '}
      un plugin que descubrí hace poco para interactuar con el código que
      escribes, abre un panel nuevo y muestra los resultados de las evaluaciones
      como si fuera un intérprete interactivo.
    </p>
    <h2 id="linting">Linting</h2>
    <p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/neomake/neomake"
      >
        Neomake
      </a>{' '}
      para validar el código asincrónicamente, funciona como un framework con
      soporte para diferentes herramientas de validación de código. Suelo
      utilizarlo con{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/standard"
      >
        Standard
      </a>{' '}
      o{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/xo"
      >
        XO
      </a>{' '}
      para Javascript.
    </p>
    <h2 id="edicion">Edición</h2>
    <p>Para agilizar la escritura de código utilizó los siguientes plugins:</p>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jiangmiao/auto-pairs"
        >
          auto-pairs
        </a>{' '}
        inserta y elimina automaticamente los parentesis, llaves o comillas.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tpope/vim-commentary"
        >
          vim-commentary
        </a>{' '}
        nos permite comentar lineas, funciona muy bien con diferentes tipos de
        archivos.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tpope/vim-surround"
        >
          vim-surround
        </a>{' '}
        nos permite cambiar comillas simples a dobles o viceversa, soporta
        paréntesis, llaves, XML tags y más.
      </li>
    </ul>
    <h2 id="sintaxis">Sintaxis</h2>
    <p>
      Para mejorar un poco los colores de sintaxis y la compatibilidad con los
      nuevos estándares de Javascript utilizó{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gavocanov/vim-js-indent"
      >
        vim-js-indent
      </a>,{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/othree/es.next.syntax.vim"
      >
        es.next.syntax.vim
      </a>{' '}
      y{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/othree/yajs.vim"
      >
        yajs.vim
      </a>
    </p>
    <p>
      Para CSS me funciona muy bien{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/hail2u/vim-css3-syntax"
      >
        vim-css3-syntax
      </a>
    </p>
    <h2 id="configuraciones">Configuraciones</h2>
    <p>
      Estas son algunas configuraciones que hacen un poco más ameno a Vim.
      Remover automáticamente todos los espacios en blanco finales al guardar un
      archivo:
    </p>
    <Snippet>{`autocmd BufWritePre * :%s/\\s\\+$//e`}</Snippet>
    <p>
      Permitir guardar un archivo con permisos de administrador usando{' '}
      <Code>:W</Code>
    </p>
    <Snippet>{`command W w !sudo tee % > /dev/null`}</Snippet>
    <p>
      Retornar a la última línea que estábamos trabajando luego de re abrir un
      archivo.
    </p>
    <Snippet>{`augroup line_return
    au!
    au BufReadPost *
        \\ if line("'\\"") > 0 && line("'\\"") <= line("$") |
        \\     execute 'normal! g\`"zvzz' |
        \\ endif
  augroup END`}</Snippet>
    <p>
      El archivo completo de las configuraciones de Neovim está disponible en el
      siguiente repositorio{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/jlobos/dotfiles/blob/master/config/nvim/init.vim"
      >
        jlobos/dotfiles
      </a>
    </p>
  </Post>
)

// Packages
import Head from 'next/head'

// Components
import App from '../layouts/post'
import Footer from '../components/footer'
import Header from '../components/header'
import Menu from '../components/menu'

// Semantics
import Article from '../components/post/article'
import { H2, H3 } from '../components/post/heading'
import P from '../components/post/paragraph'

export default () =>
  <App>
    <Head>
      <title>Política de Privacidad – jlobos</title>
    </Head>

    <Header title='Política de Privacidad' url='/politica-de-privacidad' />
    <Menu />

    <Article>
      <section>
        <P>Última actualización: 31/07/2017</P>
        <P>
          Bienvenido, en este apartado se expone la Política de Privacidad con
          respecto a la información incluyendo los datos de identificación
          personal y otra información que se recopila a los visitantes de
          jlobos.com.
        </P>
        <H2>Información que recopilamos</H2>
        <P>
          Cuando interactúe con nosotros a través de los servicios o navegue por
          el sitio, podemos recopilar datos personales y otra información de
          usted, como se describe a continuación:
        </P>
        <H3>Datos personales que se proporcionan</H3>
        <P>
          Recopilamos datos personales de usted cuando proporciona
          voluntariamente dicha información, como cuando se pone en contacto con
          nosotros o usa ciertos servicios.
        </P>
        <H3>Otra información</H3>
        <P>
          Cuando interactúa con jlobos.com recibimos y almacenamos cierta
          información personal no identificable. Dicha información, que se
          recopila de forma pasiva utilizando diversas tecnologías, no se puede
          utilizar actualmente para identificarlo específicamente.
        </P>
        <P>
          Al interactuar con jlobos.com se utiliza una tecnologia llamada
          “cookies”, una cookie es un fichero que se descarga en su ordenador al
          acceder a determinadas páginas web. Las cookies permiten a una página
          web, entre otras cosas, almacenar y recuperar información sobre los
          hábitos de navegación de un usuario o de su equipo y, dependiendo de
          la información que contengan y de la forma en que utilice su equipo,
          pueden utilizarse para reconocer al usuario. En todos los casos en que
          utilicemos cookies, no recopilaremos datos personales excepto con su
          permiso. En la mayoría de los navegadores web, encontrará una sección
          de "ayuda" en la barra de herramientas. Consulte esta sección para
          obtener información sobre cómo recibir notificaciones cuando reciba
          una nueva cookie y cómo desactivar las cookies.
        </P>
        <H2>Uso de sus datos personales y otra información</H2>
        <P>
          Nuestro sitio web emplea la información con el fin de proporcionar el
          mejor servicio posible, por ejemplo, si nos contacta por correo
          electrónico, utilizaremos los datos personales que proporciona para
          responder a su pregunta o resolver su problema.
        </P>
      </section>
    </Article>
    <Footer />
  </App>

// Packages
import Head from 'next/head'

// Components
import Post from '../layouts/post'
import Header from '../components/header'
import Title from '../components/title'
import Footer from '../components/footer'

export default () =>
  <Post>
    <Head>
      <title>Política de Privacidad</title>
    </Head>

    <Header>
      <Title title='Políticas de Privacidad' />

      <article>
        <p>
          En este apartado se darán detalles de la información recopilada de los
          visitantes del sitio y los servicios.
        </p>

        <h2>La información que recopilamos</h2>
        <p>
          Al interactuar con nosotros a través de los servicios, podemos
          recopilar datos personales y otra información como se describe a
          continuación:
        </p>

        <h3>
          Los datos personales que usted facilite a través de los servicios
        </h3>
        <p>
          Recopilamos los datos personales que son provistos por usted
          voluntariamente, por ejemplo, cuando se ponga en contacto con nosotros
          o al utilizar ciertos servicios. Donde quiera que se recolectan datos
          personales se proporcionará un enlace a esta política de privacidad.
        </p>
        <p>
          Por proporcionarnos voluntariamente datos de carácter personal, usted
          está consintiendo a nuestro uso de ella de acuerdo con esta política
          de privacidad.
        </p>

        <h3>Otra información</h3>
        <p>
          Al interactuar con nosotros, recibimos y almacenamos cierta
          información personal no identificable. Dicha información, que se
          recoge de forma pasiva utilizando diversas tecnologías, actualmente no
          puede ser utilizada para identificarte específicamente. Esta
          informacion puede ser almacenada directamente o por proveedores de
          servicios externos. Los servicios pueden usar dicha información y
          mezclarla con otra información para rastrear, por ejemplo, el número
          total de visitantes a nuestro sitio, el número de visitantes a cada
          página de nuestro sitio y los nombres de dominio de los proveedores de
          servicios de internet de nuestros visitantes. Es importante señalar
          que los datos personales no están disponibles o no se están utilizando
          en este proceso.
        </p>
        <p>
          En la operación de los servicios, podemos utilizar una tecnología
          llamada “cookies”. Una cookie es un fragmento de información que el
          navegador aloja cuando accede a los diferentes servicios. Están pueden
          ser propias, de terceros, de análisis o publicitarias.
        </p>

        <h2>Seguridad</h2>
        <p>
          Se toman medidas razonables para proteger los datos personales
          facilitados. No obstante lo anterior, el usuario reconoce y acepta que
          las medidas de seguridad no son inexpugnables.
        </p>

        <h2>Cambios en las políticas de privacidad</h2>
        <p>
          Los servicios pueden cambiar de vez en cuando, como resultado a veces
          puede ser necesario hacer cambios a esta política de privacidad.
        </p>
      </article>
      <Footer />
    </Header>
  </Post>

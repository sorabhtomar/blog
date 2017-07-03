// Packages
import Head from 'next/head'
import Disqus from 'react-disqus-comments'

// Components
import withPost from '../lib/with-post'
import Post from '../layouts/post'
import Header from '../components/header'
import Title from '../components/title'
import Footer from '../components/footer'

export default withPost(props =>
  <Post>
    <Head>
      <title>
        {props.title}
      </title>
    </Head>

    <Header image={props.image}>
      <Title {...props} />

      <article>
        <div dangerouslySetInnerHTML={{ __html: props.html }} />

        <Disqus
          shortname='jlobos'
          identifier={props.id}
          title={props.title}
          url={`https://jlobos.com/${props.title}`}
        />
      </article>
      <Footer />
    </Header>
  </Post>
)

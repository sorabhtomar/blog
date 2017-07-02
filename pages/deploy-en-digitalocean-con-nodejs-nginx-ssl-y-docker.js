// Packages
import Head from 'next/head'

// Components
import withPost from '../lib/with-post'
import Post from '../layouts/post'
import Header from '../components/header'
import Title from '../components/title'

export default withPost(props => (
  <Post>
    <Head>
      <title>{props.title}</title>
    </Head>

    <Header image={props.image} >
      <Title {...props} />

      <article>
        <div dangerouslySetInnerHTML={{__html: props.html}} />
      </article>
    </Header>
  </Post>
))

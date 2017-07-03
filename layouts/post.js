// Ours
import Main from './main'

// Styles
import postStyles from '../styles/post'

export default ({ children }) => (
  <Main>
    {children}
    <style jsx global>{postStyles}</style>
  </Main>
)

export default ({ views }) => (
  <footer>
    <ul>
      <li><a href='https://twitter.com/jlobitu' target='_black'>TWITTER</a></li>
      <li><a href='https://github.com/jlobos' target='_black'>GITHUB</a></li>
      <li><a href='mailto:jlobitu@gmail.com'>EMAIL</a></li>
      <li>|</li>
      <li>{views} views</li>
    </ul>

    <style jsx>{`
      footer {
        font-size: .8em;
        padding: 27px 0;
        text-align: center;
      }

      ul { list-style-type: none; padding: 0; }
      li:last-child { margin: 0; }
      li { margin-right: 12px; display: inline; }
    `}</style>
  </footer>
)

export const UL = ({ children }) => (
  <ul>
    { children }
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0 0 27px 0;
        padding: 0;
      }
    `}</style>
  </ul>
)

export const LI = ({ children }) => (
  <li>
    { children }
    <style jsx>{`
      li {
        line-height: 24px;
        margin-bottom: 3px;
        padding-left: 20px;
      }

      li:before {
        color: #ED4264;
        content: '-';
        margin-left: -20px;
        position: absolute;
      }
    `}</style>
  </li>
)

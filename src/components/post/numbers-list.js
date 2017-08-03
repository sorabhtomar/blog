export default ({ children }) =>
  <ul>
    {children}
    <style jsx>{`
      ul {
        list-style: inside decimal;
        margin: 0 0 20px 0;
        padding: 0;
      }
    `}</style>
  </ul>

const LI = ({ children }) =>
  <li>
    {children}
    <style jsx>{`
      li {
        line-height: 24px;
        margin-bottom: 5px;
      }
    `}</style>
  </li>

export { LI }

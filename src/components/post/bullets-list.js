export default ({ children }) =>
  <ul>
    {children}
    <style jsx>{`
      ul {
        list-style-type: none;
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
        padding-left: 20px;
      }

      li:before {
        content: '►';
        color: var(--soft-color);
        position: absolute;
        margin-left: -20px;
      }
    `}</style>
  </li>

export { LI }

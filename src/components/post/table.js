export default ({ children }) =>
  <table>
    {children}

    <style jsx>{`
      table {
        background-color: #000000;
        border-collapse: collapse;
        border-style: hidden;
        color: #ffffff;
        display: block;
        overflow: auto;
        width: 100%;
        margin-bottom: 1.6rem;
      }
    `}</style>
  </table>

const THEAD = ({ children }) =>
  <thead>
    {children}
  </thead>
const TBODY = ({ children }) =>
  <tbody>
    {children}
  </tbody>

const TR = ({ children }) =>
  <tr>
    {children}
  </tr>

const TH = ({ children }) =>
  <th>
    {children}
    <style jsx>{`
      th {
        border: 1px solid #dfe2e5;
        padding: 6px 13px;
      }
    `}</style>
  </th>

const TD = ({ children }) =>
  <td>
    {children}
    <style jsx>{`
      td {
        border: 1px solid #dfe2e5;
        padding: 6px 13px;
      }
    `}</style>
  </td>

export { THEAD, TBODY, TR, TH, TD }

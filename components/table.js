export default ({ children }) => (
  <div className="container">
    <div className="scroller">
      <table>{children}</table>
    </div>
    <div className="gradient" />
    <style jsx>{`
      .container {
        position: relative;
      }

      .scroller {
        overflow-x: auto;
        white-space: nowrap;
      }

      table {
        width: 100%;
      }

      .gradient {
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        );
        bottom: 0;
        opacity: 1;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        transition: opacity ease-in 300ms;
        width: 100px;
      }

      @media (min-width: 950px) {
        .gradient {
          opacity: 0;
        }

        .scroller {
          white-space: normal;
        }
      }
    `}</style>
  </div>
)

const THead = ({ children }) => <thead>{children}</thead>
const TBody = ({ children }) => <tbody>{children}</tbody>

const Tr = ({ children }) => <tr>{children}</tr>

const Th = ({ children }) => (
  <th>
    {children}
    <style jsx>{`
      th {
        color: var(--very-pale-violet);
        font-size: 12px;
        font-weight: normal;
        line-height: 24px;
        padding: 12px 20px 12px 0;
        text-align: left;
        text-transform: uppercase;
        vertical-align: top;
      }
    `}</style>
  </th>
)

const Td = ({ children }) => (
  <td>
    {children}
    <style jsx>{`
      td {
        border-bottom: 1px solid var(--very-pale-violet);
        font-size: 1rem;
        line-height: 24px;
        padding: 12px 20px 12px 0;
        vertical-align: top;
      }
    `}</style>
  </td>
)

export { TBody, THead, Tr, Th, Td }

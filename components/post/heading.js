/* global React */

const H = ({ id, level = 2, fontSize = 18, children }) => (
  <div>
    {
      React.createElement(`h${level}`,
        { style: { fontWeight: 500, fontSize } },
        children,
        <a href={`#${id}`} id={id} style={{fontSize}}>#</a>
      )
    }

    <style jsx>{`
      div { margin-bottom: 27px; }

      div:hover a { visibility: visible; }
      a {
        margin-left: 9px;
        visibility: hidden;
      }
    `}</style>
  </div>
)

const H2 = H
const H3 = (props) => H({ ...props, level: 3, fontSize: 15 })

export default H2
export { H2, H3 }

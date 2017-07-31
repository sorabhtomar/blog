import React from 'react'

const H = ({ id, level = 2, fontSize = '1.6rem', children }) =>
  <div>
    {React.createElement(
      `h${level}`,
      { style: { fontSize, marginBottom: '1.6rem' } },
      children,
      <span>
        {' '}<a style={{ fontSize }} href={`#${id}`} id={id}>
          #
        </a>
      </span>
    )}

    <style jsx>{`
      a {
        color: var(--text-color);
        text-decoration: none;
        visibility: hidden;
      }

      div:hover a,
      span:hover a {
        visibility: visible;
      }
    `}</style>
  </div>

const H2 = H
const H3 = props => H({ ...props, level: 3, fontSize: '1.3rem' })

export default H2
export { H2, H3 }

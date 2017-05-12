import Link from 'next/link'

export default () => (
  <div>
    <Link prefetch href='/'><a href='/'><h1>▽</h1></a></Link>
    <style jsx>{`
      h1 {
        font-size: 120px;
        font-weight: 200;
        padding: 27px 0;
        text-align: center;

        background: linear-gradient(0deg, #ED4264, #000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}</style>
  </div>
)

// Packages
import moment from 'moment'

export default ({ createdAt }) =>
  <time datetime={moment(createdAt).toISOString()}>
    {moment(createdAt).format('LL')}

    <style jsx>{`
      time {
        color: var(--soft-color);
        display: block;
        margin: 1rem 0;
      }
    `}</style>
  </time>

import moment from 'moment'

moment.locale('es')

export default ({ createdAt }) => (
  <time dateTime={createdAt}>
    {moment(createdAt).format('LL')}
    <style jsx>{`
      time {
        color: var(--color-soft-black-2);
        display: block;
        padding-bottom: 9px;
      }
    `}</style>
  </time>
)

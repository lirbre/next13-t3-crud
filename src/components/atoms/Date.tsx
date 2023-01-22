import moment from 'moment'

export const Date = () => {
  return (
    <span className="ml-4">
      <p>{moment().format('ll')}</p>
    </span>
  )
}

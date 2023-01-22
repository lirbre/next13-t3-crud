import format from 'date-fns/format'

export const DateComponent = () => {
  const dateTime = +new Date()

  return (
    <span className="ml-4">
      <p>{format(dateTime, 'LLL dd, uuuu')}</p>
    </span>
  )
}

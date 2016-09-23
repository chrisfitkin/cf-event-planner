import React from 'react'

const renderEvents = (events) => {
  return events.map((event) => {
    return (
      <div key={event._id}>
        {event}
      </div>
    )
  })
}

export const EventsList = (props) => {
  console.log('props')
  console.log(props)
  const events = renderEvents(props.eventsList.events)
  console.log('events')
  console.log(events)
  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Event List:</h2>
      <button className='btn btn-default' onClick={props.createEvent}>
        Increment
      </button>
      <div>
        {events}
      </div>
    </div>
  )
}

EventsList.propTypes = {
  eventsList : React.PropTypes.object.isRequired
}

export default EventsList

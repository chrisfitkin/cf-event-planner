import React from 'react'

const renderEvents = (events) => {
  return events.map((event) => {
    return (
      <div key={event._id}>
        {event.title}
      </div>
    )
  })
}

// Check this out for submit handling
// https://github.com/chrisfitkin/react-redux-blog/blob/master/public/src/components/PostsForm.js
export const EventsList = (props) => {
  const events = renderEvents(props.eventsList.events)
  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Event List:</h2>
      <input type="text" className="form-control" placeholder="Need to wire this textfield to submit handler..." />
      <button className='btn btn-default' onClick={props.createEvent}>
        Add Event
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

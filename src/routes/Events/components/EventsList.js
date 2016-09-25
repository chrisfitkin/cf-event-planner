import React from 'react'
import {Button} from 'react-toolbox/lib/button';

const Event = (props) => {
  return (
    <div key={props._id}>
      {props.title}<br/>
      <Button className='btn btn-default' label='Delete' flat onMouseUp={props.deleteEvent}  />
    </div>
  )
}

const renderEvents = (props) => {
  return props.eventsList.events.map((event) => {
    return (
      <Event
        key={event._id}
        {...event}
        deleteEvent={() => props.deleteEvent(event._id)}
      />
    )
  })
}

// Check this out for submit handling
// https://github.com/chrisfitkin/react-redux-blog/blob/master/public/src/components/PostsForm.js
export const EventsList = (props) => {
  const events = renderEvents(props)
  let input
  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Event List:</h2>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.createEvent(input.value)
        input.value = ''
        input.focus()
      }}>
        <input ref={node => {
          input = node
        }} type="text" className="form-control" placeholder="Need to wire this textfield to submit handler..." />
        <button className='btn btn-default' type="submit">
          Add Event
        </button>
      </form>
      <hr/>
      <div>
        {events}
      </div>
    </div>
  )
}

EventsList.propTypes = {
  eventsList : React.PropTypes.object.isRequired
}

Event.propTypes = {
  title : React.PropTypes.string.isRequired
}

export default EventsList

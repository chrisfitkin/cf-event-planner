import React from 'react'
import {Button} from 'react-toolbox/lib/button';
import {EventForm} from './EventForm';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './EventList.scss'

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
      <EventForm {...props} />
      <hr/>
      <div className='event-list__wrapper'>
      <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={300}>
        {events}
      </ReactCSSTransitionGroup>
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

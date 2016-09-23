// import React, { Component } from 'react'
import React from 'react'
// import Event from './Event'
// import { Link } from 'react-router'
import { Button } from 'react-toolbox/lib/button'

/* Fields:
Name of the event
Type of the event (birthday party, conference talk, wedding, etc.)
Event host (could be an individual’s name or an organization)
Event start date and time
Event end date and time
Guest list
Location
Optional fields:
Optional message to the guests with additional information about the event
*/

/* Uses {} object wrapper instead of () to allow variable declaration
*/
export const EventList = props => {
  console.log('props');
  console.log(props);
  const events = renderEvents(props.eventList.events)
  // TODO: find out why events is double nested and rafactor
  // to props.eventList.events

  return (
    <section>
      <div><h1>Event List</h1></div>
      <Button icon='add' floating />
      <div>
        { events }
      </div>
    </section>
  )
}

const renderEvents = events => {
  // temporary hardcode events array until we can pull from module/props
  let tempEvents = [{
    _id: 1,
    name: 'My Birthday',
    type: 'Party'
  }, {
    _id: 2,
    name: 'Another Birthday',
    type: 'Party'
  }, {
    _id: 3,
    name: 'Promotion Celebration',
    type: 'Dinner'
  }, {
    _id: 4,
    name: 'Stats 101',
    type: 'Class'
  }, {
    _id: 5,
    name: 'Stats 201',
    type: 'Class'
  }]

  return (
  events.map(event => renderEvent(event))
  )
}

const renderEvent = event => (
  <div className={"list-group-item"} key={event._id}>
    <h3 className={"list-group-item-heading"}>{event.name}</h3>
    <p>{event.name}</p>
  </div>
)

EventList.propTypes = {
  eventList      : React.PropTypes.array.isRequired
}

export default EventList

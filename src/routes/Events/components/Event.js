import React from 'react'

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

export const Event = (props) => (
  <div>
    <h2>Event: {props.event.name}</h2>
    <p>{props.event.type}</p>
    <button className='btn btn-default' onClick={props.deleteEvent}>
      Delete
    </button>
  </div>
)

Event.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired,
  event       : React.PropTypes.object.isRequired,
  deleteEvent : React.PropTypes.func.isRequired
}

export default Event

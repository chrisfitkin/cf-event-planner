import React from 'react'
import {Button} from 'react-toolbox/lib/button';
import moment from 'moment';
import DatePicker from 'react-toolbox/lib/date_picker';

// Check this out for submit handling
// https://github.com/chrisfitkin/react-redux-blog/blob/master/public/src/components/PostsForm.js
export const EventForm = (props) => {
  let title, host, eventType, startDate, startTime, endDate, endTime, guestList, location, message
  let today = new Date();
  let todayFormatted = moment(today).format('MM/DD/YYYY');
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim()) {
          return
        }
        props.createEvent(title.value)
        title.value = ''
        title.focus()
      }}>
        <label>
          <span>Name of your event</span>
          <input type="text" autoFocus className="form-control" required
            ref={ref => { title = ref }}
            name='title'
            placeholder="A day at the beach"
            autoComplete="title"
            />
        </label>
        <label>
          <span>Type of event</span>
          <input
            type="text"
            name='host'
            ref={ref => { eventType = ref }}
            className="form-control"
            placeholder="Birthday, Meet Up, etc..."
            list="eventTypes"
            />
            <datalist id="eventTypes">
              <option value="Birthday Party" />
              <option value="Conference" />
              <option value="Wedding" />
              <option value="Dinner" />
              <option value="Meet Up" />
              <option value="Work Meeting" />
              <option value="Drinks" />
              <option value="Baseball Game" />
            </datalist>
        </label>
        <label>
          <span>Who is hosting</span>
          <input
            type="text"
            name='host'
            ref={ref => { host = ref }}
            className="form-control"
            placeholder="John Smith or Acme, Co."
            autoComplete="name"
            />
        </label>
        <label>
          <span>When is the event</span>
          <input
            type="text"
            name='host'
            ref={ref => { startDate = ref }}
            className="form-control"
            placeholder={todayFormatted}
            />
        </label>
        <DatePicker
          label='Birthdate'
        />
        <br/>
        <button className='btn btn-default' type="submit">
          Add Event
        </button>
      </form>
    </div>
  )
}

EventForm.propTypes = {
  // eventsList : React.PropTypes.object.isRequired
}

Event.propTypes = {
  title : React.PropTypes.string.isRequired
}

export default EventForm

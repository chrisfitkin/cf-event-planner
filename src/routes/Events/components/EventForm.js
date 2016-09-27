import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import moment from 'moment'
// import DatePicker from 'react-toolbox/lib/date_picker';
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import AutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem';
import AddressAutocomplete from './AddressAutocomplete'

// Check this out for submit handling
// https://github.com/chrisfitkin/react-redux-blog/blob/master/public/src/components/PostsForm.js
export const EventForm = (props) => {
  let title, host, eventType, startDate, startTime, endDate, endTime, guestList, location, message
  let today = new Date();
  let todayFormatted = moment(today).format('MM/DD/YYYY');

  const eventTypeOptions = ["Birthday Party", "Conference", "Wedding", "Dinner", "Meet Up", "Work Meeting", "Drinks", "Baseball Game"]

  const formSubmit = e => {
    e.preventDefault()
    // if (!title.value.trim()) {
    //   return
    // }
    console.log(props)
    props.createEvent(title.input.value)
    // TODO: Clear Fields
    //title.input.value = ''
    // TODO: go to list route
    title.focus()
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <TextField
          floatingLabelText="Name your event"
          hintText="A day at the beach"
          autoComplete="title"
          autoFocus
          required
          ref={node => { title = node}}
        /><br/>
        <AutoComplete
          floatingLabelText="Type of event"
          hintText="Birthday, Meet Up, etc..."
          filter={AutoComplete.fuzzyFilter}
          openOnFocus={true}
          dataSource={eventTypeOptions}
          required
          ref={node => { eventType = node }}
        /><br/>
        <AddressAutocomplete
          floatingLabelText="Where is it"
          hintText="123 Main Street, Los Angeles, CA"
          required
          ref={node => { location = node }}
        /><br/>
        <TextField
          hintText="John Smith or Acme, Co."
          floatingLabelText="Who is hosting"
          autoComplete="name"
          required
          ref={node => { host = node}}
        /><br/>
        <DatePicker
          autoOk
          floatingLabelText="What day"
          type="text"
          name='startDate'
          ref={ref => { startDate = ref }}
          hintText={todayFormatted}
        />
        <TimePicker
          hintText="12hr Format"
          autoOk
          floatingLabelText="What time"
          name="startTime"
          ref={ref => { startTime = ref }}
          format="ampm"
        />
        <DatePicker
          autoOk
          floatingLabelText="Ending day"
          type="text"
          name='endDate'
          ref={ref => { endDate = ref }}
          hintText={todayFormatted}
        />
        <TimePicker
          hintText="12hr Format"
          autoOk
          name="endTime"
          ref={ref => { endTime = ref }}
          floatingLabelText="Ending time"
          format="ampm"
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

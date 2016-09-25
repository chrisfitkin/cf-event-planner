import React from 'react'
import {Button} from 'react-toolbox/lib/button';


// Check this out for submit handling
// https://github.com/chrisfitkin/react-redux-blog/blob/master/public/src/components/PostsForm.js
export const EventForm = (props) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.createEvent(input.value)
        input.value = ''
        input.focus()
      }}>
        <label>
          <span>Title</span>
          <input ref={node => {
            input = node
          }} type="text" className="form-control" placeholder="A day at the beach" />
        </label>
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

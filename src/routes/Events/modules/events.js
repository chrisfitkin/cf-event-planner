// ------------------------------------
// Constants
// ------------------------------------
export const CREATE_EVENT = 'CREATE_EVENT'

// ------------------------------------
// Actions
// ------------------------------------
export function createEvent (value = 1) {
  console.log('createEvent')
  let eventTitle = 'another event'
  return {
    type    : CREATE_EVENT,
    payload : eventTitle
  }
}


export const actions = {
  createEvent
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_EVENT] : (state, action) => {
    console.log('CREATE_EVENT')
    console.log('state')
    console.log(state)
    console.log('action')
    console.log(action)
    let newState = {
      events: state.events.concat('this event added')
    }
    console.log('newState')
    console.log(newState)
    return newState
    // return {...state, newState }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { events: ['default event', 'second default event'] }
export default function eventsReducer (state = initialState, action) {
  console.log('eventsReducer');
  console.log('state')
  console.log(state)
  console.log('action')
  console.log(action)
  console.log('action.type')
  console.log(action.type)

  // const handler = ACTION_HANDLERS[action.type]
  const handler = ACTION_HANDLERS[CREATE_EVENT]

  return handler ? handler(state, action) : state
}

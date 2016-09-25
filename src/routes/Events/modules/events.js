// ------------------------------------
// Constants
// ------------------------------------
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

// ------------------------------------
// Default Variables
// ------------------------------------
let defaultEvents = [{
                      _id: 0,
                      title: "Default Event"
                    },{
                      _id: 1,
                      title: "Second Default Event"
                    }]

// ------------------------------------
// Actions
// ------------------------------------
export function createEvent (title = 'default new event title') {
  return {
    type    : CREATE_EVENT,
    payload : title
  }
}
export function deleteEvent (id) {
  return {
    type    : DELETE_EVENT,
    payload : id
  }
}


export const actions = {
  createEvent
}

// ------------------------------------
// Action Handlers
// ------------------------------------
let nextEventId = defaultEvents.length; // hard coded to default events
const ACTION_HANDLERS = {
  [CREATE_EVENT] : (state, action) => {
    // let maxEvent = state.events.reduce((prev, current) => (prev._id > current._id) ? prev : current)
    // let nextEventId = maxEvent._id + 1
    let newState = {
      events: state.events.concat({
        _id: nextEventId++,
        title: action.payload
      })
    }
    return newState
    // return {...state, newState }
  },
  [DELETE_EVENT] : (state, action) => {
    let newState = {
      events: state.events.filter(function(event) {
        return event._id != action.payload;
      })
    }
    return newState
    // return {...state, newState }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { events: defaultEvents }
export default function eventsReducer (state = initialState, action) {

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

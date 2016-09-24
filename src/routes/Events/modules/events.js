// ------------------------------------
// Constants
// ------------------------------------
export const CREATE_EVENT = 'CREATE_EVENT'

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
    let maxEvent = state.events.reduce((prev, current) => (prev._id > current._id) ? prev : current)
    let nextId = maxEvent._id + 1
    let newState = {
      events: state.events.concat({
        _id: nextId,
        title: "Added Event"
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

  // const handler = ACTION_HANDLERS[action.type]
  const handler = ACTION_HANDLERS[CREATE_EVENT]

  return handler ? handler(state, action) : state
}

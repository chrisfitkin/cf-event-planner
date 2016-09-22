// Todo: Load from api/db/server ??? is this right?
import Events from '../../../../server/events.js'

// ------------------------------------
// Constants
// ------------------------------------
export const DELETE_EVENT = 'DELETE_EVENT'

// ------------------------------------
// Actions
// ------------------------------------
export function deleteEvent (value = 1) {
  return {
    type    : DELETE_EVENT,
    payload : value
  }
}

export const actions = {
  deleteEvent
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DELETE_EVENT] : (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
// console.log(Events)
const initialState = { events : Events }
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

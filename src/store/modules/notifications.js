import * as types from '../types'

const DEFAULT_TIMEOUT = 3000
let timeoutRefs = []


function addNotification({state, dispatch}, payload) {
  state.notifications.push(payload.notification)

  const timeoutRef = setTimeout(() => {
    dispatch(types.REMOVE_NOTIFICATION, { byTimeout: true })
  }, DEFAULT_TIMEOUT)

  timeoutRefs.push(timeoutRef)
}


function removeNotification({state}, payload) {
  const indexToRemove = payload.index || 0

  if (payload.byTimeout !== true) {
    clearTimeout(timeoutRefs[indexToRemove])
  }

  state.notifications.splice(indexToRemove, 1)
  timeoutRefs.splice(indexToRemove, 1)
}


const Notifications = {
  state: {
    notifications: []
  },
  actions: {
    [types.ADD_NOTIFICATION]: (context, payload) => addNotification(context, payload),
    [types.REMOVE_NOTIFICATION]: (context, payload) => removeNotification(context, payload)
  }
}

export default Notifications
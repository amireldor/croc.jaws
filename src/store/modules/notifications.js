import * as types from '../types'

class NotificationsCloser
{
  DEFAULT_TIMEOUT = 3000

  constructor(store) {
    this.$store = store
    this.notificationClosers = []
  }

  addCloser(timeout = this.DEFAULT_TIMEOUT) {
    this.notificationClosers.push(setTimeout(this.closeNotification.bind(this), timeout))
  }

  closeNotification() {
    this.$store.commit(types.REMOVE_NOTIFICATION, { index: 0, notificationCloser: true })
  }

  clearOneTimeout() {
    const lastTimeout = this.notificationClosers.pop()
    clearTimeout(lastTimeout)
  }
}

let notificationCloser = null // initialized after 'store' so it can reference it

const Notifications = {
  state: {
    notifications: []
  },
  mutations: {
    [types.ADD_NOTIFICATION](state, payload) {
      state.notifications.push(payload.notification)
      notificationCloser.addCloser()
      console.log('store?', this.$store)
    },
    [types.REMOVE_NOTIFICATION](state, payload) {
      const indexToRemove = payload.index
      state.notifications.splice(indexToRemove, 1)

      if (payload.notificationCloser !== true) {
        // If it's a manual click on 'close', cancel one timeout
        notificationCloser.clearOneTimeout()
      }
    }
  }
}

notificationCloser = new NotificationsCloser(Notifications)


export default Notifications
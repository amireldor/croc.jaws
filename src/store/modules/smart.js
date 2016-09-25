import {INCREMENT} from '../types'
export default {
    state: {
        fun: 0
    },
    mutations: {
        happy(state) {
            state.fun++
        }
    },
    actions: {
        [INCREMENT]({ commit }) {
            commit('happy')
            setTimeout(() => commit('happy'), 200)
        }
    }
}
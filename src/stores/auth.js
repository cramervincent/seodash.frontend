import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
  state: () => ({
    jwt:''
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    increment () {
      this.counter++
    }
  }
})

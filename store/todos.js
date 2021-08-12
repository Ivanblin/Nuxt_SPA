export const state = () => ({
  todos: []
})

export const mutations = {
  SET_TODOS (state, todos) {
    state.todos = todos
  }
}

export const actions = {
  async fetchTodos ({ commit }) {
    const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
    commit('SET_TODOS', todos)
  }
}

export const getters = {
  allTodos (state) {
    return state.todos.slice(0, 14)
  }
}

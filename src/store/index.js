import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default createStore({
  state: { 
    user: null,
    auth: false,
    errors: null,
  },
  getters: { 
  },
  mutations: { 
    SET_USER(state, user) {
      state.user = user;
      state.auth = Boolean(user);
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    }
  },
  actions: {
    async logout({ dispatch }) {
      await axios.post('/api/logout');
      return dispatch('getUser');
    },
    async login({ dispatch }, credentials) {
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/api/login', credentials).catch((err) => {
        return dispatch('setErrors', err.response.data['message']);
      });
      return dispatch('getUser');
    },
    async getUser({ commit }) {
      await axios.get('api/user')
      .then(res => {
        commit('SET_USER', res.data);
        commit('SET_ERRORS', null);
      }).catch(() => {
        commit('SET_USER', null);
      })
    },
    setErrors({ commit }, errors) {
      commit('SET_ERRORS', errors);
    },
  },
  modules: {
  }
})

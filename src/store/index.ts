import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface User {
  id: string;
  name: string;
  phone: string;
}

export interface State {
  users: User[];
}

export default new Vuex.Store<State>({
  state: {
    users: [
      {
        id: '1',
        name: 'test name',
        phone: '',
      },
      {
        id: '2',
        name: 'test name',
        phone: '',
      },
    ],
  },
  mutations: {
    addUser: (state, user: User) => {
      state.users = [...state.users, user];
    },
    deleteUser: (state, id: string) => {
      const index = state.users.findIndex(user => user.id === id);
      state.users.splice(index, 1);
    },
    setUsers: (state, users: User[]) => {
      state.users = users;
    },
  },
  actions: {
  },
  modules: {
  },
});

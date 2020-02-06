import db from '@/firebase-db';
import { User, UserState } from '@/interfaces/users';
import { ActionContext } from 'vuex';

export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    addUser: (state: UserState, user: User) => {
      state.list.unshift(user);
    },
    deleteUser: (state: UserState, id: string) => {
      const index = state.list.findIndex(user => user.id === id);
      state.list.splice(index, 1);
    },
    setUsers: (state: UserState, users: User[]) => {
      state.list = users;
    },
  },
  actions: {
    async loadUsers({ commit }: ActionContext<UserState, {}>) {
      const collection = await db.collection('users')
        .orderBy('name')
        .get();
      const users = collection.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      commit('setUsers', users);
    },

    createUser({ commit }: ActionContext<UserState, {}>, user: Partial<User>) {
      db.collection('users').add(user);
    },

    deleteUser({ commit }: ActionContext<UserState, {}>, id: string) {
      db.collection('users').doc(id).delete();
    },

    subscribe({ commit }: ActionContext<UserState, {}>) {
      db.collection('users').onSnapshot((ref) => {
        ref.docChanges().forEach(({ doc, type }) => {
          switch (type) {
            case 'added':
              commit('addUser', {
                ...doc.data(),
                id: doc.id,
              });
              break;
            case 'removed':
              commit('deleteUser', doc.id);
              break;
            default: break;
          }
        });
      });
    },
  },
};

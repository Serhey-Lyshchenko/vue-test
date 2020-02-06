<template>
  <div>
    <v-card
      class="mx-auto mt-10 pa-4"
      max-width="600"
    >
      <v-form class="mx-4">
        <v-row>
          <v-col>
            <v-card-title>Create</v-card-title>
            <v-card-subtitle>The form to create a user</v-card-subtitle>
          </v-col>
          <v-col>
            <v-text-field
              placeholder="Name"
              prepend-icon="mdi-account-circle"
              v-model="name"
            ></v-text-field>
            <v-text-field
              placeholder="Phone number"
              prepend-icon="mdi-phone"
              v-model="phone"
            ></v-text-field>
            <div class="d-flex justify-end">
              <v-btn small color="primary" v-on:click="createUser(name, phone)">create</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
    <v-card
      class="mx-auto mt-4 pa-4"
      max-width="600"
    >
      <v-card-title>Users</v-card-title>
      <v-card-subtitle>The list of created users</v-card-subtitle>
      <v-simple-table v-if="users.length">
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Phone</th>
            <th class="text-left"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.phone }}</td>
            <td class="d-flex justify-end align-center">
              <v-btn icon color="error" v-on:click="deleteUser(user.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '@/store';

export default Vue.extend({
  name: 'UsersPage',

  computed: {
    users(): User[] {
      return this.$store.state.users;
    },
  },

  methods: {
    createUser() {
      this.$store.commit('addUser', {
        name: this.$data.name,
        phone: this.$data.phone,
        id: String(Math.floor(Math.random() * 10000000)),
      });
      this.$data.name = '';
      this.$data.phone = '';
    },

    deleteUser(id: string) {
      this.$store.commit('deleteUser', id);
    },
  },

  data: () => ({
    name: '',
    phone: '',
  }),
});
</script>

<template>
  <div>
    <v-card
      class="mx-auto mt-10 pa-4"
      max-width="600"
    >
      <v-card-title>Create</v-card-title>
      <v-card-subtitle>The form to create a user</v-card-subtitle>
      <v-form>
        <v-row>
          <v-col class="mx-4">
            <v-text-field
              placeholder="Name"
              prepend-icon="mdi-account-circle"
              v-model="name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mx-4">
            <vue-phone-number-input
              placeholder="Phone"
              prepend-icon="mdi-phone"
              v-model="phone"
              clearable
              :error="phoneError"
              :valid="phoneValid"
              fetch-country
              v-on:update="update($event)"
            ></vue-phone-number-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end mx-4">
            <v-btn
              small
              color="primary"
              :disabled="!phoneValid"
              v-on:click="createUser({ name, phone }) && clearForm()"
            >create</v-btn>
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
import { createNamespacedHelpers } from 'vuex';
import { UserState } from '@/interfaces/users';

const { mapState, mapActions } = createNamespacedHelpers('users');

export default Vue.extend({
  name: 'UsersPage',

  computed: {
    ...mapState({ users: state => (state as UserState).list }),
  },

  async created() {
    this.subscribe();
    this.loadUsers();
  },

  methods: {
    ...mapActions(['loadUsers', 'deleteUser', 'createUser', 'subscribe']),

    clearForm() {
      this.$data.name = '';
      this.$data.phone = '';
      this.$data.phoneValid = false;
      this.$data.phoneError = false;
    },

    update(event: { phoneNumber: string, isValid: boolean }) {
      this.$data.phoneValid = event.isValid;
      this.$data.phoneError = event.phoneNumber && !event.isValid;
    },
  },

  data: () => ({
    name: '',
    phone: '',
    phoneValid: false,
    phoneError: false,
  }),
});
</script>

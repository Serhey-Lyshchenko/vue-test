<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <UsersPage/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UsersPage from './components/UsersPage.vue';

export default Vue.extend({
  name: 'App',

  components: {
    UsersPage,
  },
});
</script>

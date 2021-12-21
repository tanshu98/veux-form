<template>
  <v-app>
    <v-main>
      <crud/>
    </v-main>
  </v-app>
</template>

<script>

import crud from './components/crud.vue';
export default {
  name: 'App',

  components: {
    crud,
  },

  data: () => ({
    //
  }),
};
</script>

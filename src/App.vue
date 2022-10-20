<template>
  <v-app>
    <the-navigation />
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import theNavigation from '@/components/TheNavigation/index'

export default {
  name: 'App',

  components: {
    theNavigation
  },

  data: () => ({
  }),
};
</script>

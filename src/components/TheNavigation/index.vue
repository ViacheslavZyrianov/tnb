<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item
        v-for="{ icon, label, route } in navigationList"
        :key="label"
        :to="route"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="label"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'TheNavigation',
    data: () => ({
      navigationList: [
        {
          label: 'Projects',
          route: '/projects',
          icon: 'mdi-folder-home-outline'
        },
        {
          label: 'Settings',
          route: '/settings',
          icon: 'mdi-cog-outline'
        }
      ]
    })
  }
</script>
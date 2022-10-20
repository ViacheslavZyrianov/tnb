<template>
  <v-dialog
    v-model="isDeleteProjectDialogVisible"
    width="300"
    @close="onDeleteProjectDialogClose"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="error"
        outlined
        small
        dark
        v-bind="attrs"
        v-on="on"
      >
        Delete
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="font-weight-regular mb-4">
        Delete project&nbsp;<span class="font-weight-bold">{{ project.name }}</span>?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          ghost
          plain
          @click="onDeleteProjectDialogClose"
        >
          Close
        </v-btn>
        <v-btn
          type="submit"
          color="error"
        >
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeleteProject',
  data: () => ({
    isDeleteProjectDialogVisible: false
  }),
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onDeleteProjectDialogClose() {
      this.isDeleteProjectDialogVisible = false
    }
  }
}
</script>
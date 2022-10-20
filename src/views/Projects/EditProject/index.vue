<template>
  <v-dialog
    v-model="isEditProjectDialogVisible"
    width="300"
    @close="onEditProjectDialogClose"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        outlined
        small
        dark
        v-bind="attrs"
        v-on="on"
        class="mr-2"
      >
        Edit
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 mb-4">
        Edit project
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="form.name"
          label="Project name"
          placeholder="Enter project name"
          block
          hide-details
          class="mb-6"
        />
        <v-select
          v-model="form.type"
          :items="typeList"
          label="Select type"
          height="32px"
          disable-lookup
          hide-details
          class="mr-2 mb-6"
          block
        />
        <v-select
          v-model="form.status"
          :items="statusList"
          label="Select status"
          height="32px"
          disable-lookup
          hide-details
          class="mr-2"
          block
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          ghost
          plain
          @click="onEditProjectDialogClose"
        >
          Close
        </v-btn>
        <v-btn
          :disabled="isEditProjectButtonDisabled"
          type="submit"
          color="success"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import statusList from '../helpers/statusList'
import typeList from '../helpers/typeList'

export default {
  name: 'EditProject',
  data: () => ({
    isEditProjectDialogVisible: false,
    isEditProjectButtonDisabled: true,
    typeList,
    statusList,
    form: null
  }),
  props: {
    defaultProjectData: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    'form.name'() {
      this.isEditProjectButtonDisabled = this.form.name && this.form.name.length === 0
    }
  },
  created() {
    this.form = this.defaultProjectData
  },
  methods: {
    onEditProjectDialogClose() {
      this.isEditProjectDialogVisible = false
    }
  }
}
</script>
<template>
  <v-dialog
    v-model="isAddProjectDialogVisible"
    width="300"
    @close="onAddProjectDialogClose"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        block
        v-bind="attrs"
        v-on="on"
      >
        Add project
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5">
        Add project
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="form.name"
          label="Project name"
          placeholder="Enter project name"
          block
        />
        <v-select
          v-model="form.type"
          :items="typeList"
          label="Select type"
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
          @click="onAddProjectDialogClose"
        >
          Close
        </v-btn>
        <v-btn
          :disabled="isAddProjectButtonDisabled"
          type="submit"
          color="success"
        >
          Add project
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AddProject',
  data: () => ({
    isAddProjectDialogVisible: false,
    isAddProjectButtonDisabled: true,
    typeList: [
      {
        text: 'House',
        value: 'house'
      },
      {
        text: 'MSB',
        value: 'msb'
      },
      {
        text: 'Duplex',
        value: 'duplex'
      }
    ],
    form: {
      name: null,
      type: 'house'
    }
  }),
  watch: {
    'form.name'() {
      this.isAddProjectButtonDisabled = this.form.name && this.form.name.length === 0
    }
  },
  methods: {
    resetAddProjectForm() {
      this.form = {
        name: null,
        type: 'house'
      }
    },
    onAddProjectDialogClose() {
      this.isAddProjectDialogVisible = false
      this.resetAddProjectForm()
    }
  }
}
</script>
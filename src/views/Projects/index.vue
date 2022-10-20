<template>
  <div class="pa-2">
    <v-row class="mb-2">
      <v-col
        cols="3"
        offset="9"
      >
        <add-project />
      </v-col>
    </v-row>
    <v-data-table
      v-model="table.selectedProjectList"
      :headers="table.headers"
      :items="table.items"
      :items-per-page="10"
      :page.sync="table.page"
      hide-default-footer
      show-select
      class="elevation-4 pb-4"
      @page-count="table.pageCount = $event"
    >
      <template v-slot:top>
        <v-toolbar
          flat
          class="pt-2"
        >
          <v-row>
            <v-col
              v-if="isDeleteProjectListButtonVisible"
              cols="1"
            >
              <v-btn
                dark
                color="error"
                small
                depressed
                tile
                @click="onDeleteProjectList"
              >
                {{ table.selectedProjectList.length }}
                <v-icon
                  dark
                  small
                  class="ml-1"
                >
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              v-for="option in table.selectOptionsProject"
              :key="option.label"
              cols="2"
            >
              <v-select
                v-model="option.value"
                :items="option.optionList"
                :label="option.label"
                height="32px"
                clearable
                disable-lookup
                hide-details
                class="mr-2"
                @change="onSelectProjectListByType(option.type, option.value)"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="table.searchText"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="mr-4"
              />
            </v-col>
          </v-row>
        </v-toolbar>
      </template>
      <!-- eslint-disable-next-line -->
      <template #item.actions="{ item }">
        <edit-project
          :default-project-data="item"
        />
        <delete-project
          :project="item"
        />
      </template>
      <template
        v-if="table.pageCount > 1"
        #footer
      >
        <v-pagination
          v-model="table.page"
          :length="table.pageCount"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import AddProject from './AddProject/index'
import EditProject from './EditProject/index'
import DeleteProject from './DeleteProject/index'

import statusList from './helpers/statusList'
import typeList from './helpers/typeList'

export default {
  name: 'Projects',
  data: () => ({
    table: {
      searchText: '',
      selectedProjectList: [],
      selectOptionsProject: [
        {
          label: 'Type',
          value: null,
          type: 'type',
          optionList: typeList
        },
        {
          label: 'Status',
          value: null,
          type: 'status',
          optionList: statusList
        }
      ],
      page: 1,
      pageCount: 1,
      itemsPerPage: 10,
      headers: [
        {
          text: 'Id',
          value: 'id'
        },
        {
          text: 'Type',
          value: 'type'
        },
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          text: 'Actions',
          value: 'actions'
        }
      ],
      items: []
    }
  }),
  components: {
    AddProject,
    EditProject,
    DeleteProject
  },
  computed: {
    isDeleteProjectListButtonVisible() {
      return this.table.selectedProjectList.length;
    }
  },
  methods: {
    ...mapActions({
      fetchProjectList: 'projects/fetchProjectList'
    }),
    generateIcon(type) {
      if (type === 'msb') return 'mdi-office-building'
      if (type === 'house') return 'mdi-home'
      if (type === 'duplex') return 'mdi-home-modern'
      return 'mdi-home'
    },
    onDeleteProjectList() {
      const selected = this.table.selectedProjectList.map(({ id }) => id)
      console.log('selected', selected)
    },
    onSelectProjectListByType(type, value) {
      this.table.selectOptionsProject.forEach(select => {
        if (select.value !== value) select.value = null
      })
      this.table.selectedProjectList = this.table.items.filter(item => item[type] === value)
    }
  },
  async created() {
    this.table.items = await this.fetchProjectList()
  }
}
</script>

export default {
  namespaced: true,

  state: () => ({
  }),
  
  actions: {
    async fetchProjectList() {
      return [
        // {
        //   id: 123,
        //   name: 'Путрівка',
        //   type: 'house',
        //   status: 'not-built'
        // },
        // {
        //   id: 234,
        //   name: 'Голосіївська долина',
        //   type: 'msb',
        //   status: 'building'
        // },
        // {
        //   id: 345,
        //   name: 'Мотрівка',
        //   type: 'house',
        //   status: 'paused'
        // },
        // {
        //   id: 456,
        //   name: 'Оболонський горизонт',
        //   type: 'msb',
        //   status: 'done'
        // },
        // {
        //   id: 567,
        //   name: 'Duplex',
        //   type: 'duplex',
        //   status: 'not-built'
        // },
        // {
        //   id: 1123,
        //   name: 'Путрівка',
        //   type: 'house',
        //   status: 'not-built'
        // },
        // {
        //   id: 1234,
        //   name: 'Голосіївська долина',
        //   type: 'msb',
        //   status: 'building'
        // },
        // {
        //   id: 1345,
        //   name: 'Мотрівка',
        //   type: 'house',
        //   status: 'paused'
        // },
        // {
        //   id: 1456,
        //   name: 'Оболонський горизонт',
        //   type: 'msb',
        //   status: 'done'
        // },
        // {
        //   id: 1567,
        //   name: 'Duplex',
        //   type: 'duplex',
        //   status: 'not-built'
        // },
        // {
        //   id: 2123,
        //   name: 'Путрівка',
        //   type: 'house',
        //   status: 'not-built'
        // },
        // {
        //   id: 2234,
        //   name: 'Голосіївська долина',
        //   type: 'msb',
        //   status: 'building'
        // },
        // {
        //   id: 2345,
        //   name: 'Мотрівка',
        //   type: 'house',
        //   status: 'paused'
        // },
        // {
        //   id: 2456,
        //   name: 'Оболонський горизонт',
        //   type: 'msb',
        //   status: 'done'
        // },
        // {
        //   id: 2567,
        //   name: 'Duplex',
        //   type: 'duplex',
        //   status: 'not-built'
        // },
        // {
        //   id: 21123,
        //   name: 'Путрівка',
        //   type: 'house',
        //   status: 'not-built'
        // },
        // {
        //   id: 21234,
        //   name: 'Голосіївська долина',
        //   type: 'msb',
        //   status: 'building'
        // },
        {
          id: 21345,
          name: 'Мотрівка',
          type: 'house',
          status: 'paused'
        },
        {
          id: 21456,
          name: 'Оболонський горизонт',
          type: 'msb',
          status: 'done'
        },
        {
          id: 21567,
          name: 'Duplex',
          type: 'duplex',
          status: 'not-built'
        }
      ]
    }
  }
}
import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'
// import uifeatures from './uifeatures'
// import components from './components'
// import tables from './tables'
// import cases from './cases'
// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: 'Verificar',
      path: '/dashboard',
      props: [],
      meta: {
        icon: 'fa-tachometer',
        link: 'dashboard/index.vue'
      },
      component: lazyLoading('dashboard', true)
    },
    {
      name: 'cars',
      path: '/cars',
      props: [],
      meta: {
        icon: 'fa-tachometer',
        link: 'cars/index.vue'
      },
      component: lazyLoading('cars', true)
    },
    {
      name: 'additional',
      path: '/additional',
      props: [],
      meta: {
        icon: 'fa-tachometer',
        link: 'additional/index.vue'
      },
      component: lazyLoading('additional', true)
    },
    {
      name: 'simulator',
      path: '/simulator',
      props: [],
      meta: {
        icon: 'fa-tachometer',
        link: 'simulator/index.vue'
      },
      component: lazyLoading('simulator', true)
    }

  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}

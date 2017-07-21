import * as types from '../mutation-types'

const state = {
  personname: '',
  owner: {
    sex: '',
    name: '',
    ID: '',
    IDtype: '',
    lastname: ''
  },
  gowner: {
    sex: '',
    name: '',
    ID: '',
    IDtype: '',
    lastname: ''
  },
  cowner: {
    sex: '',
    name: '',
    ID: '',
    IDtype: '',
    lastname: ''
  },
  coowner: {
    sex: '',
    name: '',
    ID: '',
    IDtype: '',
    lastname: ''
  },
  verifyclient: {
    agencies: [
    ]
  },
  carvalues: {
    brand: []
  },
  device: {
    isMobile: false,
    isTablet: false
  },
  sidebar: {
    opened: false,
    hidden: false
  },
  effect: {
    translate3d: true
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_SIDEBAR] (state, opened) {
    if (state.device.isMobile) {
      state.sidebar.opened = opened
    } else {
      state.sidebar.opened = true
    }
  },

  [types.SWITCH_EFFECT] (state, effectItem) {
    for (let name in effectItem) {
      state.effect[name] = effectItem[name]
    }
  },
  [types.INIT_AGENCIES] (state, data) {
    console.log(data)
    console.log(data.data)
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
    console.log(JSON.parse(data.data.agencias[0]))
    for (let d in data.data.agencias) {
      let agencieData = JSON.parse(data.data.agencias[d])
      state.verifyclient.agencies.push(
        {_id: agencieData.CRMAccountGID,
          label: agencieData.Name
        }
      )
    }
  },
  [types.INIT_PERSON] (state, data) {
    console.log(data)
    switch(data.type) {
    case "owner":
        state.owner.ID=data.ID
        state.owner.name=data.name
        state.owner.lastname=data.lastname
        state.owner.sex=data.sex
        break;
    case "cowner":
        break;
    case "gowner":
        break;
    case "coowner":
        break;
    default:
        break;
}
  },
  [types.LOGIN] (state, data) {
    console.log(data)
    state.personname = data
  }
}

export default {
  state,
  mutations
}

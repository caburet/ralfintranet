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
  carsoptions: {
    brands: [],
    models: [],
    years: []
  },
  verifyclient: {
    agencies: [],
    campaigns: [],
    products: []
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
    state.verifyclient.agencies = []
    state.verifyclient.campaigns = []
    state.verifyclient.products = []
    for (let d in data.data.agencias) {
      let agencieData = JSON.parse(data.data.agencias[d])
      state.verifyclient.agencies.push(
        {_id: agencieData.CRMAccountGID,
          label: agencieData.Name
        }
      )
    }
    for (let d of data.data.campaign) {
      state.verifyclient.campaigns.push(
        {_id: d.code,
          label: d.name
        }
      )
    }
    for (let p of data.data.product) {
      state.verifyclient.products.push(
        {_id: p.code,
          campaign: p.campaign,
          label: p.name
        }
      )
    }
    for (let p of data.data.brands) {
      state.carsoptions.brands.push(
        {_id: JSON.parse(p).BrandName,
          label: JSON.parse(p).BrandName
        }
      )
    }
    console.log(state.verifyclient)
  },
  [types.INIT_PERSON] (state, data) {
    console.log(data)
    switch (data.type) {
      case 'owner':
        state.owner.ID = data.ID
        state.owner.name = data.name
        state.owner.lastname = data.lastname
        state.owner.sex = data.sex
        break
      case 'cowner':
        break
      case 'gowner':
        break
      case 'coowner':
        break
      default:
        break
    }
  },
  [types.LOAD_MODELS] (state, data) {
    state.carsoptions.models = []
    state.carsoptions.years = []
    for (let m of data.data.models) {
      state.carsoptions.models.push(
        {_id: JSON.parse(m).ModelNr,
          label: JSON.parse(m).ModelName
        }
      )
    }
  },
  [types.LOAD_YEARS] (state, data) {
    console.log(data)
    state.carsoptions.years = []
    for (let y of data.data.years) {
      let foo = new Array(21)
      for (let i = 1; i < foo.length; i++) {
        let field = 'Pre' + ('0' + i).slice(-2)
        if (JSON.parse(y)[field]) {
          state.carsoptions.years.push(
            {_id: JSON.parse(y)[field],
              label: parseInt(JSON.parse(y).Year)-(i+1)
            }
          )
        }
      }
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

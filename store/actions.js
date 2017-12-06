import * as types from './mutation-types'

export const toggleSidebar = ({ commit }, opened) => commit(types.TOGGLE_SIDEBAR, opened)

export const toggleDevice = ({ commit }, device) => commit(types.TOGGLE_DEVICE, device)

export const expandMenu = ({ commit }, menuItem) => {
  if (menuItem) {
    menuItem.expanded = menuItem.expanded || false
    commit(types.EXPAND_MENU, menuItem)
  }
}

export const switchEffect = ({ commit }, effectItem) => {
  if (effectItem) {
    commit(types.SWITCH_EFFECT, effectItem)
  }
}

export const addCase = ({ commit }, data) => commit(types.ADD_CASE, data)

export const initAgencies = ({ commit }, data) => commit(types.INIT_AGENCIES, data)

export const loadModels = ({ commit }, data) => commit(types.LOAD_MODELS, data)

export const loadYears = ({ commit }, data) => commit(types.LOAD_YEARS, data)

export const initPerson = ({ commit }, data) => commit(types.INIT_PERSON, data)

export const login = ({ commit }, data) => commit(types.LOGIN, data)

export const initData = ({ commit }, data) => commit(types.INIT_DATA, data)

export const refreshCase = ({ commit }, casedata) => commit(types.REFRESH_CASE, casedata)

export const toggleModal = ({ commit }, opened) => commit(types.TOGGLE_MODAL, data)

export const oppdata = ({ commit }, data) => commit(types.OPP_DATA, data)

export const inquirydata = ({ commit }, data) => commit(types.INQUIRY_DATA, data)

export const toggleInquiry = ({ commit }, opened) => commit(types.TOGGLE_INQUIRY, data)

export const loadcitycodes = ({ commit }, opened) => commit(types.LOAD_CITYCODES, data)

export const saveopcode = ({ commit }, opened) => commit(types.SAVE_OPPCODE, data)

export const seconddata = ({ commit }, opened) => commit(types.SECOND_DATA, data)

export const emptyinquiry = ({ commit }, opened) => commit(types.EMPTY_INQUIRY, data)

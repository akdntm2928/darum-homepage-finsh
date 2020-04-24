// initial state
const state = {
  closeHeaderBtn: null
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  setCloseHeaderBtn(state, data) {
    state.closeHeaderBtn = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

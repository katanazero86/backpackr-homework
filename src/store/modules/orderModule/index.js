const state = {
    orderRequestMessage: ''
};

const getters = {
    // eslint-disable-next-line no-unused-vars
    orderRequestMessageGetter(state, getters) {

    },
};

const mutations = {
    orderRequestMessageMutation(state, payload) {
        state.orderRequestMessage = payload.targetOrderRequestMessage;
    },
};

const actions = {
    // eslint-disable-next-line no-unused-vars
    orderRequestMessageAction({commit, dispatch}, payload) {
        commit('orderRequestMessageMutation', {...payload});
    },
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

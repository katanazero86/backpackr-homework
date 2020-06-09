import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// vuex modules
import orderModule from './modules/orderModule/index';

export default new Vuex.Store({
    modules: {
        orderModule
    },
    state: {
        rootStateTest: 'root'
    },
    getters: {},
    mutations: {},
    actions: {}
})

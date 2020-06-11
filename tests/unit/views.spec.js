import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

import App from '@/App.vue';
import Index from '@/views/Index.vue';

describe('component is a Vue instance', () => {
    test('App Component is a Vue instance', () => {
        const wrapper = shallowMount(App, {router, localVue});
        expect(wrapper).toBeTruthy();
    });

    test('Index Component is a Vue instance', () => {
        const wrapper = shallowMount(Index, {store, localVue});
        expect(wrapper).toBeTruthy();
    });

});

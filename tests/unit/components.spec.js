import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index';

const localVue = createLocalVue();
localVue.use(Vuex);

import App from '@/App.vue';
import Index from '@/views/Index.vue';
import InputComponent from "@/components/input/InputComponent.vue";
import CardComponent from "@/components/card/CardComponent";

describe('component is a Vue instance', () => {
    test('App Component is a Vue instance', () => {
        const wrapper = shallowMount(App);
        expect(wrapper).toBeTruthy();
    });

    test('Index Component is a Vue instance', () => {
        const wrapper = shallowMount(Index, {store, localVue});
        expect(wrapper).toBeTruthy();
    });

    test('InputComponent is a Vue instance', () => {
        const wrapper = shallowMount(InputComponent);
        expect(wrapper).toBeTruthy();
    });

    test('CardComponent is a Vue instance', () => {
        const wrapper = shallowMount(CardComponent);
        expect(wrapper).toBeTruthy();
    });

});

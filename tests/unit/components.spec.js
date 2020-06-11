import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

// eslint-disable-next-line no-unused-vars
import store from '@/store/index';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
// eslint-disable-next-line no-unused-vars
const router = new VueRouter();

import InputComponent from "@/components/input/InputComponent.vue";
import CardComponent from "@/components/card/CardComponent";
import CardHorizontalComponent from "@/components/card/CardHorizontalComponent";
import ScoreComponent from "@/components/score/ScoreComponent";

describe('component is a Vue instance', () => {

    test('InputComponent is a Vue instance', () => {
        const wrapper = shallowMount(InputComponent);
        expect(wrapper).toBeTruthy();
    });

    test('CardComponent is a Vue instance', () => {
        const wrapper = shallowMount(CardComponent);
        expect(wrapper).toBeTruthy();
    });

    test('CardHorizontalComponent is a Vue instance', () => {
        const wrapper = shallowMount(CardHorizontalComponent);
        expect(wrapper).toBeTruthy();
    });

    test('ScoreComponent is a Vue instance', () => {
        const wrapper = shallowMount(ScoreComponent);
        expect(wrapper).toBeTruthy();
    });

});

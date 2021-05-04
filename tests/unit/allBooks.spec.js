/********************************************************************************************************
 * @file    : allBooks.spec.js
 * @purpose : to test AllBooks component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 *********************************************************************************************************/

import Books from "../../src/components/AllBooks";
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

describe('Books.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        wrapper = shallowMount(Books, localVue);
    });

    it('check if text Books render', () => {
        console.log(wrapper.text())
        expect(wrapper.text()).toContain('Books')
    })

    it('check if child Books exists', () => {
        expect(wrapper.contains(Books)).toBe(true);
    })
})
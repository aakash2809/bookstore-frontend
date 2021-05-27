/********************************************************************************************************
 * @file    : myCart.spec.js
 * @purpose : to test MyCart component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 *********************************************************************************************************/

import MyCart from '../../src/pages/Mycart';
import AddressDetails from '../../src/components/AddressDetails';
import OrderSummary from '../../src/components/OrderSummary';
import AppBar from '../../src/components/AppBar';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

describe('MyCart.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        wrapper = shallowMount(MyCart, localVue);
    });

    it('check if child AddressDetails exists', () => {
        expect(wrapper.contains(AddressDetails)).toBe(true);
    });

    it('check if child OrderSummary exists', () => {
        expect(wrapper.contains(OrderSummary)).toBe(true);
    });

    it('check if child Appbar exists', () => {
        expect(wrapper.contains(AppBar)).toBe(true);
    });

    it('ifComponentHasComponents_shouldReturn_object', () => {
        expect(typeof MyCart.components).toBe('object');
    });

    it('ifComponentHasName_shouldReturn_string', () => {
        expect(typeof MyCart.name).toBe('string');
    });

    it('ifComponentHasMethods_shouldReturn_object', () => {
        expect(typeof MyCart.methods).toBe('object');
    });

});
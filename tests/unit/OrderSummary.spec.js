/********************************************************************************************************
 * @file    : orderSummary.spec.js
 * @purpose : to test OrderSummary component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 *********************************************************************************************************/

//import MyCart from "../../src/pages/Mycart";
//import AddressDetails from "../../src/components/AddressDetails";
import OrderSummary from "../../src/components/OrderSummary";
// import AppBar from '../../src/components/AppBar';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

describe('OrderSummary.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        wrapper = shallowMount(OrderSummary, localVue);
    });
    it.skip('renders a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });

    it.skip('check if CheckoutOrder event emits', () => {
        wrapper.vm.$emit('CheckoutOrder')
        expect(wrapper.emitted().CheckoutOrder).toBeTruthy()
    })

    it.skip('check if text Order Summary renders', () => {
        expect(wrapper.text()).toContain('Order Summary')
    })

    it.skip('check if text Checkout', () => {
        expect(wrapper.text()).toContain('Checkout')
    })
})
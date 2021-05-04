/*************************************************************************
 * @file    : login.spec.js
 * @purpose : to test Login component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import AddressDetails from '../../src/components/AddressDetails';
import Vuetify from 'vuetify';

describe('login.vue', () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuetify);

    wrapper = shallowMount(AddressDetails, localVue);

  });

  it.only('renders a vue instance', () => {
    expect(shallowMount(AddressDetails).isVueInstance()).toBe(true);
  });
});


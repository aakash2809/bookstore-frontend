/*************************************************************************
 * @file    : login.spec.js
 * @purpose : to test Login component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import AddressDetails from '../../src/components/AddressDetails';
import Vuetify from 'vuetify';

describe('AddressDetails.vue', () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuetify);

    wrapper = shallowMount(AddressDetails, localVue);

  });

  it('renders a vue instance', () => {
    expect(shallowMount(AddressDetails).isVueInstance()).toBe(true);
  });

  it('ifComponentHasData_shouldReturn_function', () => {
    expect(typeof AddressDetails.data).toBe('function')
  })

  it('ifComponentHasMethods_shouldReturn_object', () => {
    expect(typeof AddressDetails.methods).toBe('object')
  })

  it('WhenGiveFullNameIsEmpity_shouldReturn_error', () => {
    wrapper.setData({ fullName: '' })
    expect(wrapper.vm.fullName).toBe("");
  })

  it('whenExistingclassNamePass_shouldReturn_true', () => {
    expect(wrapper.find('.fullName').exists()).toBe(true)
  });

  it('whenExistingclassNamePass_shouldReturn_true', () => {
    expect(wrapper.find('.city').exists()).toBe(true)
  });

  it('whenExistingclassNamePass_shouldReturn_true', () => {
    expect(wrapper.find('.mob-state-field').exists()).toBe(true)
  });

  it('whenExistingclassNamePass_shouldReturn_true', () => {
    expect(wrapper.find('.mobileNumber').exists()).toBe(true)
  });

  it('whenExistingclassNamePass_shouldReturn_true', () => {
    expect(wrapper.find('.address').exists()).toBe(true)
  });
});


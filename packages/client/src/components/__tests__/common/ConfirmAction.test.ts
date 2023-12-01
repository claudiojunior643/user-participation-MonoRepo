import { describe, expect, test } from 'vitest';
import { ConfirmAction } from '@components/index';
import { mount } from '@vue/test-utils';


const actions = ['cancel', 'confirm'];

describe('ConfirmAction', () => {
  test.each(actions)('should emit %s event', (event) => {
    const wrapper = mount(ConfirmAction);

    const button = wrapper.find(`[data-testid="${event}-button"]`);

    button.trigger('click');

    expect(wrapper.emitted()[event]).toBeTruthy();
  });
});

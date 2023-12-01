import { describe, expect, test } from 'vitest';
import { ButtonBase } from '@components/index';
import { mount } from '@vue/test-utils';

describe('ButtonBase', () => {
  test('should emit click event', () => {
    const wrapper = mount(ButtonBase, {
      props: {
        id: 'teste',
        label: 'label',
      },
    });

    const button = wrapper.find('#teste');

    button.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });

  test('should render label', async () => {
    const wrapper = mount(ButtonBase, {
      props: {
        id: 'id',
        label: 'Label teste',
      },
    });

    const button = wrapper.find('#id');

    expect(button.element.textContent).toBe('Label teste');
  });
});

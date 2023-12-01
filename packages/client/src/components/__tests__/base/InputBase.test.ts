import { describe, expect, test } from 'vitest';
import { InputBase } from '@components/index';
import { mount } from '@vue/test-utils';


const emits = [
  'input',
  'focus',
  'blur',
  'keyup',
  'keydown',
  'keypress',
  'change',
  'click',
];

describe('InputBase', () => {
  describe('should emit input events', () => {

    test.each(emits)('should emit %s event', async (event) => {

      const wrapper = mount(InputBase, {
        props: {
          id: 'input-test',
        },
      });

      const input = wrapper.find('#input-test');

      await input.trigger(event);

      if (event === 'input') {
        return expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
      }

      expect(wrapper.emitted()[event]).toBeTruthy();

    });
  });

  describe('should render input attributes', () => {
    test('should render label', async () => {
      const wrapper = mount(InputBase, {
        props: {
          id: 'input-test',
          label: 'Label test',

        },
      });

      const label = wrapper.find('[for="input-test"]');

      expect(label.element.textContent).toBe('Label test');
    });

    test('should render error message', async () => {
      const wrapper = mount(InputBase, {
        props: {
          error: 'Error test',
          id: 'input-test',
          label: 'Label test',
        },
      });

      const errorMessage = wrapper.find('[data-testid="helper-text"]');

      expect(errorMessage.element.textContent).toBe('Error test');
    });
  });
});

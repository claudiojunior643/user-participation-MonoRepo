import { describe, expect, it } from 'vitest';
import { TableParticipation } from '@components/index';
import { mount } from '@vue/test-utils';
import { type IUserParticipation } from '@/models';


/**
 * Mocks
 */
const userMock: IUserParticipation[] = [
  {
    'firstName': 'teste 3',
    'id': 6,
    'lastName': 'teste 3',
    'stocks': 3232,
  },
  {
    'firstName': 'teste',
    'id': 10,
    'lastName': 'dsds',
    'stocks': 23,
  },
];

const newUser = {
  firstName: 'firstName',
  id: 6,
  lastName: 'lastName',
  stocks: '242',
};

describe('TableParticipation', () => {
  it('should render the table', () => {
    const wrapper = mount(TableParticipation, {
      props: {
        data: userMock,
      },
    });

    const elements = wrapper.findAll(`[data-testid="table-index"]`);

    expect(elements.length).toBe(2);
  });

  it('should emit removeUser when confirm to delete user', async () => {
    const wrapper = mount(TableParticipation, {
      props: {
        data: userMock,
      },
    });

    const buttons = wrapper.findAll(`[data-testid="delete-button"]`);

    await buttons[0].trigger('click');

    const confirmButton = wrapper.find(`[data-testid="confirm-button"]`);

    await confirmButton.trigger('click');

    expect(wrapper.emitted().removeUser).toBeTruthy();
  });


  it('should emit updateUser when confirm to edit user', async () => {
    const wrapper = mount(TableParticipation, {
      props: {
        data: userMock,
      },
    });

    const buttons = wrapper.findAll(`[data-testid="edit-button"]`);

    await buttons[0].trigger('click');

    /**
     * Set inputs
     */
    const firstName = wrapper.find('[data-testid="edit-first-name"] input');
    const lastName = wrapper.find('[data-testid="edit-last-name"] input');
    const stocks = wrapper.find('[data-testid="edit-stocks"] input');

    await firstName.setValue(newUser.firstName);
    await lastName.setValue(newUser.lastName);
    await stocks.setValue(newUser.stocks);

    /**
     * Send values
     */
    const confirmButton = wrapper.find(`[data-testid="confirm-button"]`);

    await confirmButton.trigger('click');
    
    expect(wrapper.emitted().updateUser[0]).toStrictEqual([newUser]);
  });
});

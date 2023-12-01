import { type IUserForm } from '@models/userForm.types';

export interface IUserParticipation extends Omit<IUserForm, 'stocks'> {
  id?: number;
  stocks: number;
}

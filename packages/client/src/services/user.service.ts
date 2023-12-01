import { ApplicationApi } from '@services/base.service';
import type { IUserDataResponse, IUserForm, IUserParticipation } from '@/models';

const baseUrl = '/users';

export const UserApi = {
  deleteOne: async (id: number): Promise<void> =>
    ApplicationApi.delete(`${baseUrl}/${id.toString()}`),
  editOne: async (user: IUserParticipation): Promise<void> =>
    ApplicationApi.patch(`${baseUrl}/${user.id?.toString()}`, user),
  getAll: async (): Promise<IUserDataResponse> => ApplicationApi.get(baseUrl),
  postOne: async (user: IUserForm): Promise<void> =>
    ApplicationApi.post(baseUrl, user),
};

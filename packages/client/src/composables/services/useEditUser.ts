import { useMutation, type UseMutationOptions, type UseMutationReturnType } from '@tanstack/vue-query';
import { UserApi } from '@/services';
import { type IUserParticipation } from '@/models';

type queryOptions = UseMutationOptions<void, unknown, IUserParticipation, void>;


export const useEditUser = ({ ...queryOptions }: queryOptions = {}): UseMutationReturnType<void, unknown, IUserParticipation, void> =>
  useMutation(
    ['useEditUser'],
    async (user) => UserApi.editOne(user),
    queryOptions,
  );

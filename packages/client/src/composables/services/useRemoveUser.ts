import { useMutation, type UseMutationOptions, type UseMutationReturnType } from '@tanstack/vue-query';
import { UserApi } from '@/services';

type queryOptions = UseMutationOptions<void, unknown, number, void>;

export const useRemoveUser = ({ ...queryOptions }: queryOptions = {}): UseMutationReturnType<void, unknown, number, void> =>
  useMutation(
    ['useRemoveUser'],
    async (id: number) => UserApi.deleteOne(id),
    queryOptions,
  );

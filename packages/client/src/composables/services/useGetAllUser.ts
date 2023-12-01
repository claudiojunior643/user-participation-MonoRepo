import { type QueryObserverOptions, useQuery, type UseQueryReturnType } from '@tanstack/vue-query';
import { UserApi } from '@/services';
import { type IUserDataResponse } from '@/models';

type QueryOptions = QueryObserverOptions<
  IUserDataResponse,
  unknown,
  IUserDataResponse
>;

export const useGetAllUser = ({ ...queryOptions }: QueryOptions = {}): UseQueryReturnType<IUserDataResponse, unknown> =>
  useQuery<IUserDataResponse>({
    queryFn: async () => await UserApi.getAll(),
    queryKey: ['useGetAllUser'],
    ...queryOptions,
  });

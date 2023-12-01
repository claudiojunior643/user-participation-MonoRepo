import { useMutation, type UseMutationOptions } from "@tanstack/vue-query";
import { UserApi } from "../../services";
import { type IUserForm } from "../../models";

type queryOptions = UseMutationOptions<void, unknown, IUserForm, void>;

export const useCreateUser = ({ ...queryOptions }: queryOptions = {}) =>
  useMutation(
    ["useCreateUser"],
    async (user: IUserForm) => UserApi.postOne(user),
    queryOptions,
  );

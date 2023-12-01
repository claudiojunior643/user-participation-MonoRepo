import { type AxiosResponse } from 'axios';
import { type IUserParticipation } from '@models/index';

export type IUserDataResponse = AxiosResponse<{ users: IUserParticipation[] }>;

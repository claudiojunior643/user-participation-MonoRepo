import axios, { type AxiosInstance, type CreateAxiosDefaults } from "axios";

const httpConfig: CreateAxiosDefaults = {
  baseURL: "http://localhost:3001",
};

export const ApplicationApi: AxiosInstance = axios.create({ ...httpConfig });

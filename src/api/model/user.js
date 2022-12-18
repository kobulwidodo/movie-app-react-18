import { serverapi } from "..";

export const getUser = () => {
  return serverapi.get(`/user/me`);
};

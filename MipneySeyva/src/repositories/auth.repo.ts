import {
  authCompleteRegisterationApi,
  authLoginApi,
} from "../apiController/auth.api";

export const authCompleteRegisterationRepo = async (
  password: string,
  photo: Blob
) => {
  const user = await authCompleteRegisterationApi(password, photo);
  return user;
};

export const authLoginRepo = async (phone: string, password: string) => {
  const token = await authLoginApi(phone.replace("0", "972"), password);
  return token;
};

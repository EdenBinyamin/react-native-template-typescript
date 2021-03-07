import axios from "axios";
const baseURL = process.env.REACT_APP_API;

export const authCompleteRegisterationApi = async (
  password: string,
  photo: Blob
) => {
  const data = await axios.post(`${baseURL}/users/complete-registration`, {
    newPassword: password,
    photo,
  });
  const user = data.data;
  return user;
};

export const authLoginApi = async (phone: string, password: string) => {
  const data = await axios.post(`${baseURL}/auth?type=0`, {
    phone,
    password,
  });
  const token = data.data.token;
  return token;
};

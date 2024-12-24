import { api } from "@/api/api";
import {
  LogInReq,
  LogInRes,
  SignUpReq,
  SignUpRes,
  User,
  UserWithoutPassword,
} from "@/types/userTypes";

const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((cookie) => cookie.startsWith("jwt"));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

// const token = getAuthTokenFromCookie();

export const getUserById = async (id: string): Promise<UserWithoutPassword> => {
  const { data } = await api.get(`/user/${id}`);
  return data?.user;
};

export const logIn = async (inputsData: LogInReq): Promise<LogInRes> => {
  const { data } = await api.post("/user/signIn", inputsData);
  // console.log(data);

  return data;
};

export const signUp = async (inputsData: SignUpReq): Promise<SignUpRes> => {
  const { data } = await api.post("/user/", inputsData);
  // console.log(data);
  return data;
};

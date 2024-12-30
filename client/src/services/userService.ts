import { api } from "@/api/api";
import {
  LogInReq,
  LogInRes,
  SignUpReq,
  SignUpRes,
  UserWithoutPassword,
} from "@/types/userTypes";

export const getUserById = async (id: string): Promise<UserWithoutPassword> => {
  const { data } = await api.get(`/user/${id}`);
  return data?.user;
};

export const logIn = async (inputsData: LogInReq): Promise<LogInRes> => {
  const { data } = await api.post("/user/logIn", inputsData);
  // console.log(data);
  return data;
};

export const signUp = async (inputsData: SignUpReq): Promise<SignUpRes> => {
  const { data } = await api.post("/user/", inputsData);
  // console.log(data);
  return data;
};

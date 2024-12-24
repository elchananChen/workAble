export type User = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  plan: "standard" | "gold" | "platinum";
  savedBusinesses: [];
};

export type UserWithoutPassword = Omit<User, "id" | "password">;

export type UserWithoutId = Omit<User, "id">;

export type SignUpReq = Omit<User, "id" | "savedBusinesses">;

export type LogInReq = {
  email?: string;
  phone?: string;
  password: string;
};

export type LogInRes = {
  isValid: boolean;
  message: string;
  id?: string;
};

export type SignUpRes = {
  success: boolean;
  message: string;
  id: string;
};

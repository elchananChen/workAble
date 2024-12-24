import { getUserById, signUp } from "@/services/userService";
import { SignUpReq } from "@/types/userTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useSignUp() {
  return useMutation({
    mutationFn: (inputsData: SignUpReq) => signUp(inputsData),
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.log("AxiosError data:", error.response?.data); // מידע מהשרת
        console.log("AxiosError status:", error.response?.status); // קוד שגיאה
      } else {
        console.log("General error:", error); // כל שגיאה אחרת
      }
    },
  });
}

// useQuery({
//   queryKey: ["cat", { id }],
//   queryFn: () => getCat(id!),
//   enabled: !!id,
// });

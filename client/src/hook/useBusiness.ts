import { addBusiness } from "@/services/businessService";
import { businessType } from "@/types/bussinessTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

// export function useBusinesses() {
//   return useQuery({
//     queryKey: ["Businesses"],
//     queryFn: () => getBusinesses(),
//   });
// }

// export function useBusiness(id: string) {
//   return useQuery({
//     queryKey: ["business"],
//     queryFn: () => getBusiness(id),
//   });
// }

export function useAddBusiness() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (inputsData: businessType) => addBusiness(inputsData),
    //   onSuccess: () => {
    //     // Invalidate and refetch
    //     queryClient.invalidateQueries({ queryKey: ["businesses"] });
    //   },
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

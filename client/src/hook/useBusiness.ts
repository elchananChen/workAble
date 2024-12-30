import { addBusinessFormData } from "@/pages/addBusiness";
import { addBusiness } from "@/services/businessService";

import { useMutation, useQueryClient } from "@tanstack/react-query";
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

export type addBusinessWithImagesFormData = addBusinessFormData & {
  scrollImages: { url: string; description?: string }[];
};

export function useAddBusiness() {
  return useMutation({
    mutationFn: (inputsData: addBusinessWithImagesFormData) =>
      addBusiness(inputsData),
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

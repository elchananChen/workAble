import styles from "./signUpForm.module.css";
import { useState } from "react";

// shadcn and cn
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// router dom
import { Link, useNavigate } from "react-router-dom";

//  zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// react hook form
import { useForm } from "react-hook-form";

// my hooks  and service function
import { useSignUp } from "@/hook/useUser";
import { getUserById } from "@/services/userService";

// assets
import loadingGif from "../../assets/giphy.gif";

// axios
import { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

//  data
import { cardData } from "../../data.ts";

// Components
import PlanCard from "@/components/PlanCard";

// Todo: error handling  by type of error  that return - ask omer how to combin the axios errors from query error

function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { mutate: signUpMutation, data, isPending } = useSignUp();
  const [id, setId] = useState<string | null>(null);
  const [plan, setPlan] = useState<"standard" | "gold" | "platinum" | "">("");
  const [isBusinessman, setisBusinessman] = useState<boolean | "entry">(
    "entry"
  );

  const navigate = useNavigate();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", { id }],
    queryFn: () => getUserById(id!),
    enabled: !!id,
    gcTime: 1000 * 60 * 12, // 12 hours
  });

  console.log(user);

  // * Zod schema to validate the inputs
  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z.string().min(6),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    userName: z.string().min(2),
    plan: z.enum(["standard", "gold", "platinum"]),
  });

  type FormData = z.infer<typeof formSchema>;

  type FieldName = keyof FormData; // יצירת סוג חדש המכיל את השמות של כל השדות ב-FormData

  const fields: { name: FieldName; type: string; required: boolean }[] = [
    { name: "firstName", type: "text", required: true },
    { name: "lastName", type: "text", required: true },
    { name: "userName", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "password", type: "password", required: true },
  ];

  // שימוש ב-useForm עם וולידציה ב-Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema), // מחבר את Zod ל-react-hook-form
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
      plan: "standard",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      plan === "" ? (values.plan = "standard") : (values.plan = plan);

      // מנסה להריץ את המוטציה
      await signUpMutation(values);
      const id = data?.id || null;
      setId(id);

      // console.log(user);

      navigate("/");
    } catch (err) {
      // כאן נבדוק אם יש שגיאה מאותו סוג (AxiosError)
      if (err instanceof AxiosError) {
        // הדפסת הודעת השגיאה
        console.log("AxiosError: ", err.response?.data || err.message);
      } else {
        // הדפסת כל שגיאה אחרת
        console.log("Unexpected error:", err);
      }
    }
  }

  if (isBusinessman === "entry") {
    return (
      <div className="p-10">
        <h1 className="text-xl mb-3">what are you?</h1>
        <div className="flex gap-3 ">
          <Button
            className="text-lg p-6"
            onClick={() => setisBusinessman(true)}
          >
            a serious businessman 🧑‍💼
          </Button>
          <Button
            className="text-lg p-6"
            onClick={() => setisBusinessman(false)}
          >
            a very importent customer 😎
          </Button>
        </div>
      </div>
    );
  }

  if (plan === "") {
    return (
      <div
        className={cn(
          "grid w-screen gap-10 gap-y-16 p-10",
          styles.responsivGrid
        )}
      >
        {cardData.map((props) => (
          <PlanCard
            setPlan={setPlan}
            key={props.name}
            Advantages={props.Advantages}
            name={props.name}
            headerMessage={props.headerMessage}
            style={props.style}
            costDescription={props.costDescription}
            costTitle={props.costTitle}
          ></PlanCard>
        ))}
      </div>
    );
  }
  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">sign up</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        {fields.map((field) => (
          <div className="grid gap-2" key={field.name}>
            <Label
              htmlFor={field.name}
              className={cn(
                errors[field.name] && "text-destructive",
                className
              )}
            >
              {field.name}
            </Label>
            <Input
              {...register(field.name)}
              id={field.name}
              type={field.type}
              placeholder="will display to others"
              required={field.required}
            />
            {errors[field.name]?.message && (
              <p className="text-destructive text-[0.8rem] font-medium">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
        {isPending && (
          <div className="h-4 w-4">
            <img src={loadingGif} className="h-full w-full" />
          </div>
        )}
        <Button type="submit" className="w-full">
          SignUp
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue as Guest or Sign up
          </span>
        </div>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{"  "}
        <Link to={"/auth/logIn"} className="underline underline-offset-4">
          Log In
        </Link>
        <span> Or continue as </span>
        <Link to={"/"} className="underline underline-offset-4">
          Guest
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;

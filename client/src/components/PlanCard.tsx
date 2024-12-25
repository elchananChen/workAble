import {
  BadgeDollarSign,
  BellRing,
  DollarSign,
  DollarSignIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { on } from "node:stream";

export type planCardProps = {
  setPlan: React.Dispatch<
    React.SetStateAction<"standard" | "gold" | "platinum" | "">
  >;
  name: "standard" | "gold" | "platinum";
  headerMessage: string;
  Advantages: { title: string; description: string }[];
  costTitle: string;
  costDescription: string;
  style: {
    textColor: string;
    cardColor: string;
    buttonColor: string;
    lineThrough?: string;
  };
};

export type PlanCardData = Omit<planCardProps, "isPlanChosen" | "setPlan">;

function PlanCard({
  setPlan,
  name,
  headerMessage,
  Advantages,
  style,
  costTitle,
  costDescription,
}: planCardProps) {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // TODO:  here if gold or platinum need to open creditCardDetailModal and pass him the setPlan function...
    setPlan((prev) => name);
  };

  return (
    <Card className={cn("w-3/4 sm:w-[380px]", style.cardColor)}>
      <CardHeader>
        <CardTitle className={cn(style.textColor)}>{name}</CardTitle>
        <CardDescription>{headerMessage}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border border-gray-300 p-4">
          <BadgeDollarSign className="text-black" />
          <div className="flex-1 space-y-1">
            <p
              className={cn(
                "text-sm font-medium leading-none",
                style.textColor
              )}
            >
              {costTitle}
            </p>
            <p
              className={cn(
                "text-sm text-muted-foreground",
                style.lineThrough ? style.lineThrough : ""
              )}
            >
              {costDescription}
            </p>
          </div>
        </div>
        <div>
          {Advantages.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p
                  className={cn(
                    "text-sm font-medium leading-none",
                    style.textColor
                  )}
                >
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onClick} className={cn("w-full", style.buttonColor)}>
          choose me !!!
        </Button>
      </CardFooter>
    </Card>
  );
}
export default PlanCard;

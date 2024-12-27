import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollAreaImgs from "@/components/ScrollAreaImgs.tsx";
import { Badge } from "./ui/badge";

import { Mail, MapPin, MessagesSquare } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import OpenTimeTable from "./OpenTimeTable";
import { IBusiness } from "@/pages/Business";

// import ZoomableImage from "./ZoomableImage";

export type OwnerPlan = "standard" | "gold" | "platinum";

interface BusinessCardProps {
  data: IBusiness;
}

function BusinessCard({ data }: BusinessCardProps) {
  const {
    businessName,
    description,
    whyUsArray,
    subscribersCount,
    caption,
    scrollImages,
    services,
    ownerImage,
    ownerName,
    businessEmail,
    aboutOwner,
    ownerId,
    businessLocation,
    businessHours,
    ownerPlan,
  } = data;

  const ownerNameArray = ownerName.split(" ");
  const avatarFallback = (ownerNameArray[1][0] + ownerName[0]).toUpperCase();
  const navigate = useNavigate();
  return (
    <Card className="overflow-hidden w-full xl:w-4/5 min-h-full flex flex-col gap-10">
      <div className="h-72">
        <img
          src="https://lh3.googleusercontent.com/TWTvINuKFx5GDe24g5TUgAWalwr2rvX5uINZr5zTrsb6U6XcOUJmdd6UFI6HOiIw2QpUS1WLL3f37VNjsWm3on7sIJHDu2fqlKUSBqDlZlnSKtRWWZo=w1024-v1-e30"
          alt="the business Image"
          className="object-cover h-full w-full"
        />
        {/* <ZoomableImage src={headerImg}></ZoomableImage> */}
      </div>
      <div className=" sm:p-6">
        <CardHeader>
          <div>
            <CardTitle className="text-4xl">{businessName}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div>
            <Badge variant="secondary" className="pointer-events-none">
              <span className="me-1 text-yellow-700">{subscribersCount}</span>{" "}
              Subscribers
            </Badge>
          </div>
          <div className="py-5">
            <TooltipProvider>
              <div className="flex gap-5">
                <Tooltip delayDuration={0}>
                  <TooltipTrigger className="cursor-pointer" asChild>
                    <MessagesSquare />
                  </TooltipTrigger>
                  <TooltipContent sideOffset={6} side="bottom">
                    <h3>Chat with us!</h3>
                  </TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger className="" asChild>
                    <Mail />
                  </TooltipTrigger>
                  <TooltipContent sideOffset={6} side="bottom">
                    <h3>our beautiful Mail: </h3>
                    <span className="text-yellow-400"> {businessEmail}</span>
                  </TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger className="" asChild>
                    <MapPin />
                  </TooltipTrigger>
                  <TooltipContent sideOffset={6} side="bottom">
                    <h3>{businessLocation} </h3>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-20 ">
          {services[2] && (
            <div>
              <div className="space-y-1">
                <h4 className="text-2xl font-medium leading-none">
                  Our Services
                </h4>
                <p className="text-sm text-muted-foreground">
                  Here's the construction services we offer
                </p>
              </div>
              <Separator className="my-4" />
              <div className="md:flex">
                <div className="flex h-5 items-center space-x-4 text-sm ">
                  <Drawer>
                    <DrawerTrigger>{services[0].title}</DrawerTrigger>
                    <DrawerContent className="min-h-56 px-10 text-xl text-popover-foreground">
                      {services[0].description}
                    </DrawerContent>
                  </Drawer>
                  <Separator orientation="vertical" />
                  <Drawer>
                    <DrawerTrigger>{services[1].title}</DrawerTrigger>
                    <DrawerContent className="min-h-56 px-10 text-xl text-popover-foreground">
                      {services[1].description}
                    </DrawerContent>
                  </Drawer>
                  {services[2] && <Separator orientation="vertical" />}
                  {services[2] && (
                    <Drawer>
                      <DrawerTrigger>{services[2].title}</DrawerTrigger>
                      <DrawerContent className="min-h-56 px-10 text-xl text-popover-foreground">
                        {services[2].description}
                      </DrawerContent>
                    </Drawer>
                  )}
                </div>
                {services.length > 3 && (
                  <Separator className="md:hidden my-4"></Separator>
                )}
                {services[3] && (
                  <div className="flex h-5 items-center space-x-4 text-sm">
                    <Separator orientation="vertical" />
                    <Drawer>
                      <DrawerTrigger>{services[3].title}</DrawerTrigger>
                      <DrawerContent className="min-h-56 px-10 text-xl text-popover-foreground">
                        {services[3].description}
                      </DrawerContent>
                    </Drawer>
                    {services[4] && <Separator orientation="vertical" />}
                    {services[4] && (
                      <Drawer>
                        <DrawerTrigger>{services[4].title}</DrawerTrigger>
                        <DrawerContent className="min-h-56 px-10 text-xl text-popover-foreground">
                          {services[4].description}
                        </DrawerContent>
                      </Drawer>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="grid gap-4 lg:grid-cols-2">
            <ScrollArea className="lg:col-start-1 lg:col-end-2 bg-secondary lg:row-start-1 lg:row-end-3  h-[200px] w-96 xl:w-[350px] rounded-md border p-4">
              {caption}
            </ScrollArea>
            <ScrollAreaImgs scrollImages={scrollImages}></ScrollAreaImgs>
            <OpenTimeTable businessHours={businessHours}></OpenTimeTable>
          </div>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-32">
            {whyUsArray.map((data) => (
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl w-12">{data.title}</h3>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 items-end ">
              <Avatar
                className="w-24 h-24 cursor-pointer"
                onClick={() => {
                  ownerId && navigate(`/profile/${ownerId}`);
                }}
              >
                <AvatarImage
                  src={ownerImage || "https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className=" font-medium leading-none text-yellow-400">
                  {ownerName}
                </h4>
                <p className="text-sm text-muted-foreground">owner</p>
              </div>
            </div>
            <p>{aboutOwner}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default BusinessCard;

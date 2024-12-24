import { PlanCardData } from "./components/PlanCard";

export const cardData: PlanCardData[] = [
  {
    name: "standard",
    headerMessage: "Standard Plan",
    costTitle: "free",
    costDescription: "money",
    Advantages: [
      {
        title: "1 Business",
        description: "Manage 1 business (Default and free).",
      },
      {
        title: "Basic Features",
        description: "Access to essential features for running your business.",
      },
      {
        title: "Free Plan",
        description: "This is the default free plan for small businesses.",
      },
    ],
    style: {
      textColor: "text-green-600",
      cardColor: "bg-green-50",
      buttonColor: "bg-green-600",
      lineThrough: "line-through",
    },
  },
  {
    name: "gold",
    headerMessage: "Gold Plan",
    costTitle: "only 20,000$ for day",
    costDescription: "only 20,000??? what happened here?",
    Advantages: [
      {
        title: "Up to 3 Businesses",
        description: "Manage up to 3 businesses with this plan.",
      },
      {
        title: "Advanced Features",
        description: "Unlock more advanced tools to manage your businesses.",
      },
      {
        title: "Priority Support",
        description: "Receive priority support with faster response times.",
      },
    ],
    style: {
      textColor: "text-yellow-500",
      cardColor: "bg-yellow-100",
      buttonColor: "bg-yellow-500",
    },
  },
  {
    name: "platinum",
    headerMessage: "Platinum Plan",
    costTitle: "only 200,000$ for day",
    costDescription: "totally worth it!",
    Advantages: [
      {
        title: "Up to 10 Businesses",
        description: "Manage up to 10 businesses !!",
      },
      {
        title: "Premium Features",
        description: "Unlock the most advanced features for your businesses.",
      },
      {
        title: "24/7 Support",
        description: "Get round-the-clock support, anytime you need it.",
      },
    ],
    style: {
      textColor: "text-purple-600",
      cardColor: "bg-purple-50",
      buttonColor: "bg-purple-600",
    },
  },
];

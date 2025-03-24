import { signOption } from "@/components/atoms/SignOption/signOption.onfig";
import { carouselType } from "@/components/molecules/CarouselCard/carouselCard.config";
import { myPlanCardProps } from "@/components/molecules/MyPlanCard/myPlanCard.config";
import { PersonalInfoInputCardProps } from "@/components/molecules/PersonalInfoInputCard/PersonalInfoInputCard.config";
import { TabItem } from "@/components/molecules/Tabs/Tab.config";

export const tabsData: TabItem[] = [
  {
    label: "tabLabels.1",
    key: "1",
    pTitle: "cards.1.pTitle",
    pText: "cards.1.paragraph",
    imageUrl: "/Mail_Image.png",
  },
  {
    label: "tabLabels.2",
    key: "2",
    pTitle: "cards.2.pTitle",
    pText: "cards.2.paragraph",
    imageUrl: "/Rectangle 1473.png",
  },
  {
    label: "tabLabels.3",
    key: "3",
    pTitle: "cards.3.pTitle",
    pText: "cards.3.paragraph",
    imageUrl: "/Mail_Image.png",
  },
];

export const footerNavData: { [key: string]: string[] } = {
  explore: ["1", "2", "3", "4", "5"],
  company: ["1", "2", "3", "4"],
  blog: ["1", "2", "3", "4"],
  social: ["1", "2", "3", "4"],
};

export const carouselData: carouselType[] = [
  {
    imgUrl: "/Image 1.png",
    i: "1",
  },
  {
    imgUrl: "/Image 3.png",
    i: "2",
  },
  {
    imgUrl: "/Image 1.png",
    i: "3",
  },
];
export const carouselData2: carouselType[] = [
  {
    imgUrl: "/Image 3.png",
    i: "2",
  },
  {
    imgUrl: "/Image 1.png",
    i: "1",
  },
  {
    imgUrl: "/Image 3.png",
    i: "3",
  },
];

export const registrationData: signOption[] = [
  {
    imgUrl: "/Facebook.svg",
    text: "facebook",
  },
  {
    imgUrl: "/Google__G__Logo.svg",
    text: "google",
  },
];

export const myPlanCardData: myPlanCardProps[] = [
  {
    imgUrl: "/Mail_Image2.png",
    pTitle: "card0.title",
    pText: "card0.pText",
    bText: "card0.button",
    
  },
  {
    imgUrl: "/Rectangle 1474.png",
    pTitle: "card1.title",
    pText: "card1.pText",
    bText: "card1.button",
  },
  {
    imgUrl: "/Mail_Image2.png",
    pTitle: "card2.title",
    pText: "card2.pText",
    bText: "card2.questionLink",
  },
  {
    imgUrl: "/Mail_Image2.png",
    pTitle: "card3.title",
    bText: "card3.button",
  },
  {
    imgUrl: "/Egg Hero.png",
    pTitle: "card4.title",
    bText: "card4.button",
  },
  {
    imgUrl: "/14742.png",
    pTitle: "card4.title",
    pText: "card4.title",
    bText: "card4.button",
  },
];



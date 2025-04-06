import { signOption } from "@/components/atoms/SignOption/signOption.onfig";
import { timeTitleType } from "@/components/atoms/TimeTitle/timeTitle.config";
import { carouselType } from "@/components/molecules/CarouselCard/carouselCard.config";
import { GoalSummaryCardType } from "@/components/molecules/GoalSummaryCard/goalSummaryCard.config";
import { myPlanCardProps } from "@/components/molecules/MyPlanCard/myPlanCard.config";
import {
  recepieCardDataType,
  TabItem,
} from "@/components/molecules/Tabs/Tab.config";
import { RecepiesCarousel } from "@/components/organisms/RecepiesCarousel";
import React from "react";
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

export const goalFormData: myPlanCardProps[] = [
  {
    imgUrl: "/Rectangle 1478.png",
    title: "card0.title",
    pTitle: "card0.pTitle",
    pText: "card0.pText",
    bText: "card0.button",
  },
];

export const selectData = [
  [
    {
      0: {
        name: "goal_card1_select1_option_1",
        value: "card1.select1.op1",
      },
      1: {
        name: "goal_card1_select1_option_1",
        value: "card1.select1.op1",
      },
    },
    {
      0: {
        name: "goal_card1_select2_option_1",
        value: "card1.select2.op1",
      },
      1: {
        name: "goal_card1_select2_option_1",
        value: "card1.select2.op2",
      },
      3: {
        name: "goal_card1_select2_option_3",
        value: "card1.select2.op3",
      },
    },
  ],
];

export const goalSummaryCards: GoalSummaryCardType[] = [
  {
    title: "myPlanPage.goalSummary.cards.0",
    option: "",
    img: "/Edit_Blue.svg",
  },
  {
    title: "myPlanPage.goalSummary.cards.1",
    option: "goal_preference",
    img: "/Chevron_filter_down.svg",
  },
  {
    title: "myPlanPage.goalSummary.cards.2",
    option: "focus_muscle_group",
    img: "/Chevron_filter_down.svg",
  },
  {
    title: "myPlanPage.goalSummary.cards.3",
    option: "level",
    img: "/Chevron_filter_down.svg",
  },
  {
    title: "myPlanPage.goalSummary.cards.4",
    option: "diet_type",
    img: "/Chevron_filter_down.svg",
  },
  {
    title: "myPlanPage.goalSummary.cards.5",
    option: "workout_frequency",
    img: "/Chevron_filter_down.svg",
  },
  {
    title: "myPlanPage.goalSummary.cards.6",
    option: "focus",
    img: "/Chevron_filter_down.svg",
  },
  {
    title: "myPlanPage.goalSummary.cards.7",
    option: "yoga",
    img: "/Chevron_filter_down.svg",
  },
  {
    title: "myPlanPage.goalSummary.cards.8",
    option: "yoga_type",
    img: "/Chevron_filter_down.svg",
  },
];

export const timeTitleData: timeTitleType[] = [
  {
    numText: "23",
    text: "daysCount",
  },
  {
    numText: "18",
    text: "exercisesCount",
  },
  {
    numText: "13",
    text: "mealsCount",
  },
];

export interface goalHomeTabsType {
  component: React.ReactNode;
}

export const recepieCarouselCardData: recepieCardDataType[] = [
  {
    key: "1",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.1.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.1.category",
    imageUrl: "/Rectangle 125.png",
  },
  {
    key: "2",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.2.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.2.category",
    imageUrl: "/Group2264.png",
  },
  {
    key: "3",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.3.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.3.category",
    imageUrl: "/Recipe Blank.svg",
  },
  {
    key: "4",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.1.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.1.category",
    imageUrl: "/Rectangle 125.png",
  },
  {
    key: "5",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.1.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.1.category",
    imageUrl: "/Group2264.png",
  },

  {
    key: "7",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.1.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.1.category",
    imageUrl: "/Rectangle 125.png",
  },
];


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
import { TranslateFn } from "@/utils/utils";
import { title } from "process";
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
    key: "recepie-details-1",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.0.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.0.category",
    imageUrl: "/Rectangle 125.png",
  },
  {
    key: "recepie-details-2",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.1.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.1.category",
    imageUrl: "/Group2264.png",
  },
  {
    key: "recepie-details-3",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.2.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.2.category",
    imageUrl: "/Recipe Blank.svg",
  },
  {
    key: "recepie-details-4",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.1.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.1.category",
    imageUrl: "/Rectangle 125.png",
  },
  {
    key: "recepie-details-5",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.0.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.0.category",
    imageUrl: "/Group2264.png",
  },

  {
    key: "recepie-details-6",
    pTitle: "myPlanPage.goalHome.recepieTabs.cards.2.title",
    pText: "myPlanPage.goalHome.recepieTabs.cards.2.category",
    imageUrl: "/Rectangle 125.png",
  },
];

export const exerciesCarouselCardData: recepieCardDataType[] = [
  {
    key: "exercise-details-1",
    pTitle: "myPlanPage.goalHome.exerciseTabs.cards.0.title",
    pText: "myPlanPage.goalHome.exerciseTabs.cards.0.category",
    imageUrl: "/Group 2264.png",
  },
  {
    key: "exercise-details-2",
    pTitle: "myPlanPage.goalHome.exerciseTabs.cards.1.title",
    pText: "myPlanPage.goalHome.exerciseTabs.cards.1.category",
    imageUrl: "/Group 2264-2.png",
  },
  {
    key: "exercise-details-3",
    pTitle: "myPlanPage.goalHome.exerciseTabs.cards.2.title",
    pText: "myPlanPage.goalHome.exerciseTabs.cards.2.category",
    imageUrl: "/Rest Day.svg",
  },
  {
    key: "exercise-details-4",
    pTitle: "myPlanPage.goalHome.exerciseTabs.cards.1.title",
    pText: "myPlanPage.goalHome.exerciseTabs.cards.1.category",
    imageUrl: "/Group 2264-2.png",
  },
  {
    key: "exercise-details-5",
    pTitle: "myPlanPage.goalHome.exerciseTabs.cards.0.title",
    pText: "myPlanPage.goalHome.exerciseTabs.cards.0.category",
    imageUrl: "/Group 2264.png",
  },

  {
    key: "exercise-details#6",
    pTitle: "myPlanPage.goalHome.exerciseTabs.cards.2.title",
    pText: "myPlanPage.goalHome.exerciseTabs.cards.2.category",
    imageUrl: "/Rest Day.svg",
  },
];

export interface ActivityBadgesProps {
  url: string;
  title: string;
  info: string;
}

export const badgesData: {
  recepie: ActivityBadgesProps[];
  exercise: ActivityBadgesProps[];
} = {
  recepie: [
    {
      url: "/Icon material-access-time.svg",
      title: "ActivityDetailsPage.recepie.badges.0.title",
      info: "ActivityDetailsPage.recepie.badges.0.text",
    },
    {
      url: "/Icon material-access-time.svg",
      title: "ActivityDetailsPage.recepie.badges.1.title",
      info: "ActivityDetailsPage.recepie.badges.1.text",
    },
    {
      url: "/Icon material-restaurant.svg",
      title: "ActivityDetailsPage.recepie.badges.2.title",
      info: "ActivityDetailsPage.recepie.badges.2.text",
    },
    {
      url: "/Difficulty.svg",
      title: "ActivityDetailsPage.recepie.badges.3.title",
      info: "ActivityDetailsPage.recepie.badges.3.text",
    },
  ],
  exercise: [
    {
      url: "/Calories.svg",
      title: "ActivityDetailsPage.exercise.badges.0.title",
      info: "ActivityDetailsPage.exercise.badges.0.text",
    },
    {
      url: "/ic_fitness_center_24px.svg",
      title: "ActivityDetailsPage.exercise.badges.1.title",
      info: "ActivityDetailsPage.exercise.badges.1.text",
    },
    {
      url: "/ic_accessibility_24px.svg",
      title: "ActivityDetailsPage.exercise.badges.2.title",
      info: "ActivityDetailsPage.exercise.badges.2.text",
    },
    {
      url: "/Difficulty.svg",
      title: "ActivityDetailsPage.exercise.badges.3.title",
      info: "ActivityDetailsPage.exercise.badges.3.text",
    },
  ],
};

export interface recepieType extends recepieCardDataType {
  type: "breakfast" | "lunch" | "dinner";
  diet: "omnivore" | "vegetarian";
}
export const recepies: recepieType[] = [
  {
    key: "0",
    imageUrl: "/Group 2264-0.png",
    pTitle: "libraryExplorer.recepies.recepieCards.0.title",
    pText: "libraryExplorer.recepies.recepieCards.0.p",
    type: "dinner",
    diet: "omnivore",
  },
  {
    key: "1",
    imageUrl: "/Group 2264-1.png",
    pTitle: "libraryExplorer.recepies.recepieCards.1.title",
    pText: "libraryExplorer.recepies.recepieCards.1.p",
    type: "lunch",
    diet: "omnivore",
  },
  {
    key: "2",
    imageUrl: "/Group 2264-0.png",
    pTitle: "libraryExplorer.recepies.recepieCards.2.title",
    pText: "libraryExplorer.recepies.recepieCards.2.p",
    type: "breakfast",
    diet: "vegetarian",
  },
  {
    key: "3",
    imageUrl: "/Group 2264-0.png",
    pTitle: "libraryExplorer.recepies.recepieCards.0.title",
    pText: "libraryExplorer.recepies.recepieCards.0.p",
    type: "lunch",
    diet: "vegetarian",
  },
  {
    key: "4",
    imageUrl: "/Group 2264-1.png",
    pTitle: "libraryExplorer.recepies.recepieCards.1.title",
    pText: "libraryExplorer.recepies.recepieCards.1.p",
    type: "breakfast",
    diet: "omnivore",
  },
  {
    key: "5",
    imageUrl: "/Group 2264-4.png",
    pTitle: "libraryExplorer.recepies.recepieCards.2.title",
    pText: "libraryExplorer.recepies.recepieCards.2.p",
    type: "dinner",
    diet: "vegetarian",
  },
  {
    key: "6",
    imageUrl: "/Group 2264-1.png",
    pTitle: "libraryExplorer.recepies.recepieCards.0.title",
    pText: "libraryExplorer.recepies.recepieCards.0.p",
    type: "breakfast",
    diet: "vegetarian",
  },
  {
    key: "7",
    imageUrl: "/Group 2264-4.png",
    pTitle: "libraryExplorer.recepies.recepieCards.1.title",
    pText: "libraryExplorer.recepies.recepieCards.1.p",
    type: "dinner",
    diet: "omnivore",
  },
  {
    key: "8",
    imageUrl: "/Group 2264-0.png",
    pTitle: "libraryExplorer.recepies.recepieCards.2.title",
    pText: "libraryExplorer.recepies.recepieCards.2.p",
    type: "lunch",
    diet: "vegetarian",
  },
  {
    key: "9",
    imageUrl: "/Group 2264-1.png",
    pTitle: "libraryExplorer.recepies.recepieCards.0.title",
    pText: "libraryExplorer.recepies.recepieCards.0.p",
    type: "dinner",
    diet: "vegetarian",
  },
  {
    key: "9",
    imageUrl: "/Group 2264-4.png",
    pTitle: "libraryExplorer.recepies.recepieCards.1.title",
    pText: "libraryExplorer.recepies.recepieCards.1.p",
    type: "lunch",
    diet: "omnivore",
  },
  {
    key: "10",
    imageUrl: "/Group 2264-1.png",
    pTitle: "libraryExplorer.recepies.recepieCards.2.title",
    pText: "libraryExplorer.recepies.recepieCards.2.p",
    type: "breakfast",
    diet: "omnivore",
  },
  {
    key: "11",
    imageUrl: "/Group 2264-0.png",
    pTitle: "libraryExplorer.recepies.recepieCards.0.title",
    pText: "libraryExplorer.recepies.recepieCards.0.p",
    type: "lunch",
    diet: "omnivore",
  },
  {
    key: "12",
    imageUrl: "/Group 2264-4.png",
    pTitle: "libraryExplorer.recepies.recepieCards.1.title",
    pText: "libraryExplorer.recepies.recepieCards.1.p",
    type: "dinner",
    diet: "vegetarian",
  },
  {
    key: "13",
    imageUrl: "/Group 2264-0.png",
    pTitle: "libraryExplorer.recepies.recepieCards.2.title",
    pText: "libraryExplorer.recepies.recepieCards.2.p",
    type: "breakfast",
    diet: "omnivore",
  },
];

export interface ProgressCarouselCardProps {
  title: string;
  paragraph: string;
}

export const progressCarouselData: ProgressCarouselCardProps[] = [
  {
    title: "progress.carousel.0.title",
    paragraph: "progress.carousel.0.paragraph",
  },
  {
    title: "progress.carousel.1.title",
    paragraph: "progress.carousel.1.paragraph",
  },
  {
    title: "progress.carousel.2.title",
    paragraph: "progress.carousel.2.paragraph",
  },
];

export interface BlogCardProps {
  key: string;
  title: string;
  author: string;
  paragraph: string;
  imgUrl: string;
  date: string;
}

export const blogs = [
  {
    title: "blog.posts.0.title",
    author: "blog.posts.0.author",
    paragraph: "blog.posts.0.paragraph",
    date: "blog.posts.0.date",
    imgUrl: "/Blog2.png",
    key: "0",
  },
  {
    title: "blog.posts.1.title",
    author: "blog.posts.1.author",
    paragraph: "blog.posts.1.paragraph",
    date: "blog.posts.1.date",
    imgUrl: "/Blog1.png",
    key: "1",
  },
  {
    title: "blog.posts.0.title",
    author: "blog.posts.0.author",
    paragraph: "blog.posts.0.paragraph",
    date: "blog.posts.0.date",
    imgUrl: "/Group 3614.svg",
    key: "2",
  },

  {
    title: "blog.posts.1.title",
    author: "blog.posts.1.author",
    paragraph: "blog.posts.1.paragraph",
    date: "blog.posts.1.date",
    imgUrl: "/Blog3.png",
    key: "3",
  },
  {
    title: "blog.posts.1.title",
    author: "blog.posts.1.author",
    paragraph: "blog.posts.1.paragraph",
    date: "blog.posts.1.date",
    imgUrl: "/Blog1.png",
    key: "4",
  },
  {
    title: "blog.posts.0.title",
    author: "blog.posts.0.author",
    paragraph: "blog.posts.0.paragraph",
    date: "blog.posts.0.date",
    imgUrl: "/Group 3614.svg",
    key: "5",
  },

  {
    title: "blog.posts.1.title",
    author: "blog.posts.1.author",
    paragraph: "blog.posts.1.paragraph",
    date: "blog.posts.1.date",
    imgUrl: "/Blog3.png",
    key: "6",
  },
  {
    title: "blog.posts.0.title",
    author: "blog.posts.0.author",
    paragraph: "blog.posts.0.paragraph",
    date: "blog.posts.0.date",
    imgUrl: "/Group 3614.svg",
    key: "7",
  },
  {
    title: "blog.posts.0.title",
    author: "blog.posts.0.author",
    paragraph: "blog.posts.0.paragraph",
    date: "blog.posts.0.date",
    imgUrl: "/Group 3614.svg",
    key: "8",
  },
  {
    title: "blog.posts.1.title",
    author: "blog.posts.1.author",
    paragraph: "blog.posts.1.paragraph",
    date: "blog.posts.1.date",
    imgUrl: "/Blog3.png",
    key: "9",
  },
];

export const getItems = (panelStyle: any, t: TranslateFn) => [
  {
    key: "1",
    label: t("contact.faq.cards.0.title"),
    children: t("contact.faq.cards.0.paragraph"),
    style: panelStyle,
  },
  {
    key: "2",
    label: t("contact.faq.cards.1.title"),
    children: t("contact.faq.cards.1.paragraph"),
    style: panelStyle,
  },

  {
    key: "3",
    label: t("contact.faq.cards.2.title"),
    children: t("contact.faq.cards.2.paragraph"),
    style: panelStyle,
  },
];


export const accountSidebarLinks: {text:string, isActive:boolean, link:string}[] = [
  {
    text:'sidebar.personalDetails',
    isActive:true,
    link:'/account/personal-details'
  },
  {
    text:'sidebar.allergens',
    isActive:false,
    link:'/account/allergens'
  },
  {
    text:'sidebar.Settings',
    isActive:false,
    link:'/account/settings'
  }
]
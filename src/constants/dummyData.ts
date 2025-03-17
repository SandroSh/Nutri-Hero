
import { carouselType } from "@/components/molecules/CarouselCard/carouselCard.config";
import { TabItem } from "@/components/molecules/Tabs/Tab.config";

import { useTranslations } from "next-intl";

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
  "explore": ['1', '2', '3', '4','5'],
  "company": ['1', '2', '3', '4'],
  "blog": ['1', '2', '3', '4'],
  "social": ['1', '2', '3', '4'],
};


export const carouselData: carouselType[] = [
  {
    imgUrl: "/Image 1.png",
    i:'1'
  },
  {
    imgUrl: "/Image 3.png",
    i:'2'
  },
  {
    imgUrl: "/Image 1.png",
    i:'3'
  },

]
export const carouselData2: carouselType[] = [
  {
    imgUrl: "/Image 3.png",
    i:'2'
  },
  {
    imgUrl: "/Image 1.png",
    i:'1'
  },
  {
    imgUrl: "/Image 3.png",
    i:'3'
  },

]
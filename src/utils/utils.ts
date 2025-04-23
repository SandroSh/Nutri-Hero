import { recepieCardDataType } from "@/components/molecules/Tabs/Tab.config";

export function shuffleArray(arr:any) {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export interface DateCardType {
  date: string;
  isActive: boolean;
}

export function generateDates(currentDate: Date): DateCardType[] {
  const days:DateCardType[] = [];
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };

  for (let i = 0; i < 15; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i);

    const dayName = date.toLocaleDateString("en-US", options);
    const dayNumber = date.getDate();

    days.push({date:`${dayName} ${dayNumber}`, isActive: i === 0});
  }

  return days;
}


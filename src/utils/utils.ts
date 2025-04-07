import { recepieCardDataType } from "@/components/molecules/Tabs/Tab.config";

export function shuffleArray(arr: recepieCardDataType[]) {
  let shuffled: recepieCardDataType[] = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generateNext15Days(currentDate: Date): string[] {
  const days = [];
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };

  for (let i = 0; i < 15; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i);

    const dayName = date.toLocaleDateString("en-US", options);
    const dayNumber = date.getDate();

    days.push(`${dayName} ${dayNumber}`);
  }

  return days;
}


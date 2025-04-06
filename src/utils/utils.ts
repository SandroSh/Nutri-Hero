import { recepieCardDataType } from "@/components/molecules/Tabs/Tab.config";

export function shuffleArray(arr:recepieCardDataType[]) {
    let shuffled:recepieCardDataType[] = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}


export function getDates(date:Date){
    
}

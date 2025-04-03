export interface TabItem {
  label: string;
  key: string;
  pTitle:string,
  pText:string,
  imageUrl:string
}
export interface recepieCardDataType {
  key: string;
  pTitle:string,
  pText:string,
  imageUrl:string
}

export interface RecepieTabItem {
  label: string;
  key: string;
  pTitle:string,
  pText:string,
}
export interface TabsComponentProps {
  defaultActiveKey?: string;
  centered?: boolean;
  className?:string,
  CardClassName?:string,

}

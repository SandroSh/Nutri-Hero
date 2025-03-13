export interface TabItem {
  label: string;
  key: string;
  pTitle:string,
  pText:string,
  imageUrl:string
}
export interface TabsComponentProps {
  defaultActiveKey?: string;
  tabs: TabItem[];
  centered?: boolean;
  translate: (key: string) => string; 
}

// @doc/models/IStructureProps.ts
export interface ISubItem {
    icon: string;
    title: string;
    content: string;
    items?: ISubItem[];
  }
  
  export interface IAccordionItem {
    icon: string;
    title: string;
    content: string;
    items?: ISubItem[];
  }
  
  export interface IContentProps {
    data: IAccordionItem[];
  }
  
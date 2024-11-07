  export interface IUserChat {
    messages: IMessageChat[];
    id: number;
    name: string;
    surname: string;
    img?: any;
    online?: boolean;
  }
  
  export interface IMessageChat {
    id: number;
    senderId?: number;
    text: string;
    img?: string | undefined;
    senderTime?: string | undefined;
  }
  

  export interface ChatState {
    isOpen: boolean;
    selectedUser: IUserChat | null;
    inputText: string;
    messages: { [key: number]: IMessageChat[] };
  }
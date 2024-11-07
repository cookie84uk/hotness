import { IMessageChat, IUserChat } from "@config/models";
import Adam from "@config/assets/images/pages/chat/Adam.jpg";
import Ashley from "@config/assets/images/pages/chat/Ashley.jpg";
import Bruno from "@config/assets/images/pages/chat/Bruno.jpg";
import Julia from "@config/assets/images/pages/chat/Julia.jpg";
import Michael from "@config/assets/images/pages/chat/Michael.jpg";
import Tereza from "@config/assets/images/pages/chat/Tereza.jpg";

export const initialMessages: { [key: number]: IMessageChat[] } = {
  9: [
    {
      id: 2,
      senderId: 2,
      text: "Hi, I'm looking for admin template with angular material 2 design. What do you think about Reaxy Admin Template?",
    },
    {
      id: 1,
      senderId: 1,
      text: "Hi, Reaxy is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...",
    },
    {
      id: 2,
      senderId: 1,
      text: " Great, then I'll definitely buy this theme. Thanks! ",
    },
  ],
  2: [
    {
      id: 1,
      senderId: 1,
      text: "Hello, what technologies did you use when writing this application?",
    },
    {
      id: 2,
      senderId: 2,
      text: "Hello, thank you for your attention. I would like to note that you can get detailed information using the readme file.",
    },
    {
      id: 2,
      senderId: 2,
      text: "For more information, I would like to inform you that the React programming language was used, and the design and styles were written using M@config 5.",
    },
    {
      id: 1,
      senderId: 1,
      text: "Thank you for informing",
    },
    {
      id: 2,
      senderId: 2,
      text: "come on)))))",
    },
  ],
  3: [
    {
      id: 1,
      senderId: 1,
      text: "Hi, how are you ?",
    },
    {
      id: 2,
      senderId: 2,
      text: "Hello, I'm fine, thank you, how are you?",
    },
    {
      id: 1,
      senderId: 1,
      text: "When can we meet?",
    },
    {
      id: 2,
      senderId: 2,
      text: "Will you be my guest at dinner today?",
    },
    { id: 1, senderId: 1, text: "we talked)))" },
  ],
  4: [
    {
      id: 1,
      senderId: 1,
      text: "Hi, how are you ?",
    },
    {
      id: 2,
      senderId: 2,
      text: "Hello, I'm fine, thank you, how are you?",
    },
  ],
  5: [
    { id: 1, senderId: 5, text: "Hi" },
    {
      id: 2,
      senderId: 1,
      text: "Hi",
    },
  ],
  6: [
    {
      id: 1,
      senderId: 1,
      text: "hi, in what other programming language can you provide this application?",
    },
    {
      id: 2,
      senderId: 2,
      text: "Hello, we present the React ts and Angular ts version of this application",
    },
  ],
};

export const usersChat: IUserChat[] = [
  {
    id: 9,
    name: "Adam",
    surname: "Ashley",
    img: Adam,
    online: true,
    messages: initialMessages[1] || [],
  },
  {
    id: 2,
    name: "Bruno",
    surname: "Vespa",
    img: Bruno,
    online: false,
    messages: initialMessages[2] || [],
  },
  {
    id: 3,
    name: "Julia",
    surname: "Aniston",
    img: Julia,
    online: true,
    messages: initialMessages[3] || [],
  },
  {
    id: 4,
    name: "Tereza",
    surname: "Stiles",
    img: Tereza,
    online: false,
    messages: initialMessages[4] || [],
  },
  {
    id: 5,
    name: "Michael",
    surname: "Blair",
    img: Michael,
    online: false,
    messages: initialMessages[5] || [],
  },
  {
    id: 6,
    name: "Ashley",
    surname: "Ormond",
    img: Ashley,
    online: false,
    messages: initialMessages[6] || [],
  },
];

export function getUserMessages(userId: number): IMessageChat[] {
  const user = usersChat.find((user) => user.id === userId);
  if (user) {
    return user.messages.filter((message) => message.senderId === userId);
  }
  return [];
}

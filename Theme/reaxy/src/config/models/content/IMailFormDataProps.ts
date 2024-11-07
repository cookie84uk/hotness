export interface IMailFormDataProps {
  email: string;
  password: string;
  subject: string;
  content: string;
  ckEditorField: string;
}


// ** interface
export interface IDataMailBox {
  id: number
  subject: string
  name: string
  email: string
  date: string
  text: string
  img: string
  trash: boolean
  starred: boolean
  draft: boolean
  isRead: boolean
}
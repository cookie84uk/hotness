export interface ITodoProps {
  id: number;
  text: string;
  completed: boolean;
  onToggleTodo: (id: number) => void;
  onEditTodo: (id: number, text: string) => void;
  onDeleteTodo: (id: number) => void;
}

export interface ITodoFormProps {
  onAddTodo: (text: string) => void;
}

export interface ITodoType {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoListProps {
  todos: ITodoType[];
  onToggleTodo: (id: number) => void;
  onEditTodo: (id: number, text: string) => void;
  onDeleteTodo: (id: number) => void;
}

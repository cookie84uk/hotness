import React from "react";
import { Box, List } from "@mui/material";
import Todo from "./Todo";
import { styles } from "./All.styles";
import { ITodoListProps } from "@config/models";

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}) => {
  const handleDeleteTodo = (id: number) => {
    onDeleteTodo(id);
  };

  return (
    <Box sx={styles.list}>
      {todos.map((todo, index) => (
        <List key={index}>
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggleTodo={onToggleTodo}
            onEditTodo={onEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </List>
      ))}
    </Box>
  );
};

export default TodoList;

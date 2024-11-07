import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TodoForm from "./content/TodoForm";
import TodoList from "./content/TodoList";
import { styles } from "./index.styles";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";
import { MuiCard } from "@config/components";
import { ITodoType } from "@config/models";
import { getTodoText } from "@config/data";

export function TodoApp() {
  // ** language
  const { t, i18n } = useTranslation(nameSpaces);

  // ** todo default text
  const todoText = getTodoText();

  // ** useState
  const [todos, setTodos] = useState<ITodoType[]>(todoText);

  // ** useEffect
  useEffect(() => {
    if (i18n.language) {
      setTodos(todoText);
    }
  }, [i18n.language]);

  // ** handle methods
  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTodo = (text: string) => {
    const newTodo: ITodoType = {
      id: Math.random(),
      text: text,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const handleEditTodo = (id: number, text: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <MuiCard title={t("todo.title", { ns: "dashboard" })} textAlign={"start"}>
      <Box sx={styles.wrapper}>
        <TodoForm onAddTodo={handleAddTodo} />
        <Box sx={styles.content}>
          <TodoList
            todos={todos}
            onToggleTodo={handleToggleTodo}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </Box>
      </Box>
    </MuiCard>
  );
}

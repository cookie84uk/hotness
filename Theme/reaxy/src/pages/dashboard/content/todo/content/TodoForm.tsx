import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { styles } from "./All.styles";
import AddIcon from "@mui/icons-material/Add";
import { ITodoFormProps } from "@config/models";

const TodoForm: React.FC<ITodoFormProps> = ({ onAddTodo }) => {
  // ** useState
  const [text, setText] = useState("");

  // ** handle methods
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() !== "") {
      onAddTodo(text);
      setText("");
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={styles.addHeader}>
      <TextField
        placeholder="Task to do ..."
        value={text}
        fullWidth
        variant="standard"
        onChange={handleTextChange}
      />
      <Button variant="contained" type="submit" sx={styles.button}>
        <AddIcon />
      </Button>
    </Box>
  );
};

export default TodoForm;

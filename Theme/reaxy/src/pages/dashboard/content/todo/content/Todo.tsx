import React, { useState } from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddTaskIcon from "@mui/icons-material/AddTask";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { styles } from "./All.styles";
import { ITodoProps } from "@config/models";

const Todo: React.FC<ITodoProps> = ({
  // props
  id,
  text,
  completed,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}) => {
  // ** useState
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  // ** handle methods
  const handleToggle = () => {
    onToggleTodo(id);
  };

  const handleDelete = () => {
    onDeleteTodo(id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() !== "") {
      onEditTodo(id, editText);
      setEditing(false);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setEditText(text);
  };

  const handleEditTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  const renderViewMode = () => {
    return (
      <>
        <ListItemIcon>
          <Checkbox checked={completed} onClick={handleToggle} />
        </ListItemIcon>
        <ListItemText
          primary={<Typography variant="h6">{text}</Typography>}
          sx={styles.text}
        />
        <ListItemSecondaryAction sx={styles.icons}>
          <IconButton onClick={handleEdit}>
            <EditIcon color="success" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteForeverIcon color="error" />
          </IconButton>
        </ListItemSecondaryAction>
      </>
    );
  };

  const renderEditMode = () => {
    return (
      <>
        <ListItemIcon>
          <Checkbox checked={completed} onClick={handleToggle} />
        </ListItemIcon>
        <TextField
          value={editText}
          onChange={handleEditTextChange}
          autoFocus
          sx={styles.text}
        />
        <ListItemSecondaryAction sx={styles.icons}>
          <IconButton onClick={handleSave}>
            <AddTaskIcon />
          </IconButton>
          <IconButton onClick={handleCancel}>
            <HighlightOffIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>
    );
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {editing ? renderEditMode() : renderViewMode()}
    </ListItem>
  );
};

export default Todo;

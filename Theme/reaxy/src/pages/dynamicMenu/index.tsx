import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Icon,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { styles } from "./DynamicMenu.style";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@config/hooks";
import { nameSpaces } from "@config/libs/i18n";
import { setItemData } from "@config/redux";
import React from "react";
import { AnimatePresence, Loading } from "@config/components";

// ** default values
const defaultValues = {
  id: "",
  title: "",
  icon: "",
  path: "",
  blank: "_self",
  parent: null,
  subMenu: false,
  href: "",
};

export default function DynamicMenu() {
  // ** translate
  const { t } = useTranslation(nameSpaces);

  // ** redux
  const { itemData } = useAppSelector((state) => state.slices.dynamicMenu);

  // ** useDispatch
  const dispatch = useDispatch();

  // ** useState
  const [formValues, setFormValues] = useState(defaultValues);

  const [isLoading, setIsLoading] = useState(false);

  // ** form values
  const { title, icon, path, blank, parent, subMenu, href } = formValues;

  // ** handle change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: name === "subMenu" && formValues.href !== "" ? false : checked,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }

    if (name === "href" && value !== "") {
      setFormValues((prevValues) => ({
        ...prevValues,
        subMenu: false,
        routerLink: false,
      }));
    }
  };

  // ** handle submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newItem = {
        id: "",
        title,
        path: path || href,
        icon,
        parentId: parent ? parent : null,
        subNav: subMenu,
        routerLink: !subMenu ? true : false,
        blank,
        href: href !== "" ? subMenu === false : null,
      };

      if (title) {
        if (parent !== null) {
          const index = itemData.findIndex((i) => i.id === parent);
          const updateItem = [...itemData];
          updateItem.splice(index, 1, {
            ...itemData[index],
            subNav: true,
            routerLink: false,
          });
          const newList = [...updateItem, newItem];
          dispatch(setItemData(newList));
        } else {
          const newList = [...itemData, newItem];
          dispatch(setItemData(newList));
        }
      }

      setFormValues(defaultValues);
      setIsLoading(false);
    }
  };

  // ** validate form
  const validateForm = () => {
    if (!title) {
      return false;
    }

    if (!href && !path) {
      return false;
    }

    if (href && !subMenu && path) {
      return false;
    }

    return true;
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  // ** loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <AnimatePresence direction={"top"} duration={1}>
      <Box sx={style.containerForm} component="form" onSubmit={handleSubmit}>
        <Card sx={style.card}>
          <TextField
            fullWidth
            variant="filled"
            label="Title"
            value={title}
            name="title"
            onChange={handleChange}
          />

          <TextField
            select
            fullWidth
            label="Icon"
            variant="filled"
            value={icon}
            name="icon"
            onChange={handleChange}
          >
            <MenuItem value="">No option</MenuItem>
            {itemData &&
              itemData.map((i, index) => (
                <MenuItem key={`${i.id}+${index}`} value={i.icon as any}>
                  <Icon>{i.icon}</Icon>
                </MenuItem>
              ))}
          </TextField>

          <TextField
            fullWidth
            required
            variant="filled"
            label="routerLink"
            value={path}
            disabled={formValues.href !== ""}
            name="path"
            onChange={handleChange}
          />

          <FormControl>
            <FormControlLabel
              sx={style.labelMui}
              control={
                <Checkbox
                  checked={formValues.subMenu && formValues.href === ""}
                  disabled={formValues.href !== ""}
                  name="subMenu"
                  onChange={handleChange}
                />
              }
              label="Has sub menu"
            />
          </FormControl>

          <TextField
            fullWidth
            required
            variant="filled"
            label="href"
            value={href}
            disabled={formValues.path !== ""}
            name="href"
            onChange={handleChange}
          />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="blank"
              value={blank}
              onChange={handleChange}
            >
              <FormControlLabel
                sx={style.labelMui}
                value="_blank"
                control={<Radio />}
                label="_blank"
              />
              <FormControlLabel
                sx={style.labelMui}
                value="_self"
                control={<Radio />}
                label="_self"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            select
            fullWidth
            variant="filled"
            label="Parent menu"
            value={parent === null ? "" : parent}
            name="parent"
            onChange={handleChange}
          >
            <MenuItem value="">No option</MenuItem>
            {itemData &&
              itemData.map((list, index) => (
                <MenuItem key={`${list.id}+${index}`} value={list.id}>
                  {t(list.title, { ns: list.id as string })}
                </MenuItem>
              ))}
          </TextField>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={style.button}
              type="submit"
              disabled={!validateForm() || !title}
            >
              Add new menu item
            </Button>
          </Box>
        </Card>
      </Box>
    </AnimatePresence>
  );
}

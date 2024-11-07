import { nameSpaces } from "@config/libs/i18n";
import { ITodoType } from "@config/models";
import { useTranslation } from "react-i18next";

export const getTodoText = (): ITodoType[] => {
  const { t } = useTranslation(nameSpaces);
  return [
    // const todoText = [
    { id: 1, text: t("todo.text.1", { ns: "dashboard" }), completed: false },
    { id: 2, text: t("todo.text.2", { ns: "dashboard" }), completed: true },
    { id: 3, text: t("todo.text.3", { ns: "dashboard" }), completed: false },
    {
      id: 4,
      text: t("todo.text.4", { ns: "dashboard" }),
      completed: false,
    },
    {
      id: 5,
      text: t("todo.text.5", { ns: "dashboard" }),
      completed: false,
    },
    {
      id: 6,
      text: t("todo.text.6", { ns: "dashboard" }),
      completed: false,
    },
    {
      id: 7,
      text: t("todo.text.7", { ns: "dashboard" }),
      completed: false,
    },
    { id: 8, text: t("todo.text.8", { ns: "dashboard" }), completed: false },
  ];
};

import modeSlice from "./content/modeSlice";
import dynamicMenuSlice from "./content/dynamicMenuSlice";
import userSlice from "./userSlice";
import loginSlice from "./content/loginSlice";
import mailBoxSlice from "./content/mailBoxSlice";
import formHeaderSlice from "./content/formHeaderSlice";
import rightSidebarSlice from "./content/rightSidebarSlice";
import chartData from "./content/chartDataSlice";
import chatSlice from "./content/chatSlice";
import docSlice from "./content/docSlice";
import editorSlice from "./content/editorSlice";
import loaderSlice from "./content/loaderSlice";

export const slices = {
  mode: modeSlice,
  dynamicMenu: dynamicMenuSlice,
  users: userSlice,
  login: loginSlice,
  formHeaderSlice: formHeaderSlice,
  rightSidebarSlice,
  chat: chatSlice,
  mail: mailBoxSlice,
  chartData,
  doc: docSlice,
  editor: editorSlice,
  loader:loaderSlice
};

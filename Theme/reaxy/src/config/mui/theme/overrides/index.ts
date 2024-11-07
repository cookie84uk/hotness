// ** MUI Imports
import { Theme } from "@mui/material/styles";

// ** Overrides Imports
import MuiAppBar from "./appbar";
import MuiToolBar from "./toolbar";
import MuiDrawer from "./drawer";
import MuiCard from "./card";
import MuiSvgIcon from "./svg";
import MuiDialog from "./dialog";
import MuiTable from "./tables";
import MuiButton from "./button";
import MuiCheckbox from "./checkbox";
import MuiDataGrid from "./dataGrid";
import MuiCssBaseLine from "./cssbaseline";
import MuiTypography from "./typography";
import MuiForm from "./form";
import MuiDatePicker from "./datepicker";
import MuiPagination from "./pagination";
import MuiTooltip from "./tooltip";
import MuiChip from "./chip";
import MuiInput from "./inputs";
import MuiSnackbar from "./snackbar";

import { useAppSelector, useThemeConstants } from "@config/hooks";

const Overrides = (theme: Theme) => {
  // ** redux-toolkit
  const { sidebarIsOpen, onHover } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );

  const { drawerWidth, isRtl, vertical, variant, show } = useAppSelector(
    (state) => state.palette
  );

  // ** drawer mode as useThemeConstants
  const { COMPACT, MINI, DEFAULT } = useThemeConstants();

  const drawer = MuiDrawer(
    theme,
    { drawerWidth },
    { vertical },
    { DEFAULT },
    { COMPACT },
    { MINI },
    { sidebarIsOpen },
    { variant },
    { onHover },
    { show }
  );
  const input = MuiInput(theme);
  const snackbar = MuiSnackbar(theme);
  const button = MuiButton(theme);
  const appbar = MuiAppBar(theme);
  const toolbar = MuiToolBar(theme);
  const datePicker = MuiDatePicker();
  const svg = MuiSvgIcon();
  const card = MuiCard(theme);
  const dialog = MuiDialog();
  const dataGrid = MuiDataGrid(theme);
  const tables = MuiTable(theme);
  const checkbox = MuiCheckbox();
  const cssBaseLine = MuiCssBaseLine(theme, { isRtl });
  const form = MuiForm(theme);
  const typography = MuiTypography({ isRtl });
  const pagination = MuiPagination(isRtl);
  const tooltip = MuiTooltip(theme);
  const chip = MuiChip();

  return Object.assign(
    input,
    snackbar,
    drawer,
    chip,
    tooltip,
    typography,
    appbar,
    svg,
    button,
    toolbar,
    card,
    dialog,
    tables,
    dataGrid,
    checkbox,
    cssBaseLine,
    form,
    pagination,
    datePicker
  );
};

export default Overrides;

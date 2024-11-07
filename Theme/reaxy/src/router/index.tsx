import React, { lazy } from "react";
import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import Profile from "@pages/pages/profile/";

import { ViewsRoutesProps } from "@config/models";
import { Root } from "@layout/root";
import { icons } from "@config/assets";
const Skins = lazy(() => import("@doc/pages/skins"));
const New_page = lazy(() => import("@doc/pages/new_page"));
const Conclusion = lazy(() => import("@doc/pages/conclusion"));
const Support = lazy(() => import("@doc/pages/support"));
const Structure = lazy(() => import("@doc/pages/structure"));
const Installation = lazy(() => import("@doc/pages/installation"));
const Intro = lazy(() => import("@doc/pages/intro"));
const Chat = lazy(() => import("@pages/chat"));
const Mailbox = lazy(() => import("@pages/mailbox"));

const DynamicMenu = lazy(() => import("@pages/dynamicMenu"));
const DatePickers = lazy(() => import("@pages/formControls/datapickers"));
const DragDrop = lazy(() => import("@pages/drag&drop"));

const Dashboard = lazy(() => import("@pages/dashboard"));

const Buttons = lazy(() => import("@pages/mui-features/buttons"));
const LineCharts = lazy(() => import("@pages/charts/LineCharts"));
const BarCharts = lazy(() => import("@pages/charts/barCharts"));
const BubbleChart = lazy(() => import("@pages/charts/bubbleChart"));
const PieChart = lazy(() => import("@pages/charts/pieChart"));

const AutoComplete = lazy(() => import("@pages/formControls/autocomplete"));
const Checkboxes = lazy(() => import("@pages/formControls/checkboxes"));
const Inputs = lazy(() => import("@pages/formControls/inputs"));
const RadioGroup = lazy(() => import("@pages/formControls/radioGroup"));
const Select = lazy(() => import("@pages/formControls/select"));
const Slider = lazy(() => import("@pages/formControls/slider"));
const Switch = lazy(() => import("@pages/formControls/switch"));
const Textfields = lazy(() => import("@pages/formControls/textfield"));

const Icons = lazy(() => import("@pages/icons"));
const GoogleMap = lazy(() => import("@pages/maps/googleMap"));
const Leaflet = lazy(() => import("@pages/maps/leafletMap"));

const Accordion = lazy(() => import("@pages/mui-features/accordion"));
const Cards = lazy(() => import("@pages/mui-features/cards"));
const Chips = lazy(() => import("@pages/mui-features/chips"));
const Dialog = lazy(() => import("@pages/mui-features/dialog"));
const Grids = lazy(() => import("@pages/mui-features/grids"));
const Lists = lazy(() => import("@pages/mui-features/lists"));
const Progress = lazy(() => import("@pages/mui-features/progress"));
const Snackbar = lazy(() => import("@pages/mui-features/snackbar"));
const Tabs = lazy(() => import("@pages/mui-features/tabs"));
const Tooltip = lazy(() => import("@pages/mui-features/tooltip"));

const Blank = lazy(() => import("@pages/pages/blank"));
const Landing = lazy(() => import("@pages/pages/landing"));
const ProjectCards = lazy(() => import("@pages/pages/profile/project"));
const UserInfo = lazy(() => import("@pages/pages/profile/userInfo"));

const Login = lazy(() => import("@pages/pages/login"));
const PageNotFound = lazy(() => import("@pages/pages/pageNotFound"));
const Register = lazy(() => import("@pages/pages/register"));
const Error = lazy(() => import("@pages/pages/error"));
const Search = lazy(() => import("@pages/pages/search"));

const Schedule = lazy(() => import("@pages/schedule"));

const BasicTable = lazy(() => import("@pages/table/basicTable"));
const CollapsibleTable = lazy(() => import("@pages/table/collapsibleTable"));
const FilterTable = lazy(() => import("@pages/table/filterTable"));
const PagingTable = lazy(() => import("@pages/table/pagingTable"));
const SelectingTable = lazy(() => import("@pages/table/selectingTable"));
const SortingTable = lazy(() => import("@pages/table/sortingTable"));
const Users = lazy(() => import("@pages/users"));

const viewsRoutesProps: ViewsRoutesProps = [
  {
    index: true,
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  // ** Root
  {
    path: "/",
    element: <Root />,
    handle: {
      id: "root",
      crumb: () => <Link to={"/dashboard"}>{"title"}</Link>,
      icon: icons.DashboardIcon,
    },
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        handle: {
          id: "dashboard",
          crumb: () => <>{"title"}</>,
          icon: icons.DashboardIcon as React.ElementType,
        },
      },

      {
        path: "/users",
        element: <Users />,
        handle: {
          id: "users",
          crumb: () => <>{"title"}</>,
          icon: icons.SupervisorAccountIcon as React.ElementType,
        },
      },

      // ** Mui Features
      {
        path: "/mui",
        handle: {
          id: "mui",
          crumb: () => <Link to={"/mui/buttons"}>title</Link>,
          icon: icons.DvrIcon as React.ElementType,
        },
        children: [
          {
            path: "/mui/buttons",
            element: <Buttons />,
            handle: {
              id: "buttons",
              icon: icons.SmartButtonIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/cards",
            element: <Cards />,
            handle: {
              id: "cards",
              icon: icons.CardMembershipIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/lists",
            element: <Lists />,
            handle: {
              id: "lists",
              icon: icons.ListIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/grids",
            element: <Grids />,
            handle: {
              id: "grids",
              icon: icons.GridOnIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/tabs",
            element: <Tabs />,
            handle: {
              id: "tabs",
              icon: icons.TabIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/accordion",
            element: <Accordion />,
            handle: {
              id: "accordion",
              icon: icons.PanoramaHorizontalIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/chips",
            element: <Chips />,
            handle: {
              id: "chips",
              icon: icons.Brightness7Icon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/progress",
            element: <Progress />,
            handle: {
              id: "progress",
              icon: icons.LowPriorityIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/dialog",
            element: <Dialog />,
            handle: {
              id: "dialog",
              icon: icons.BubbleChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/tooltip",
            element: <Tooltip />,
            handle: {
              id: "tooltip",
              icon: icons.AutoFixHighIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/mui/snackbar",
            element: <Snackbar />,
            handle: {
              id: "snackbar",
              icon: icons.TapasIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
        ],
      },
      {
        path: "dynamic-menu",
        element: <DynamicMenu />,
        handle: {
          id: "dynamic",
          icon: icons.ListIcon as React.ElementType,
          crumb: () => <>{"title"}</>,
        },
      },
      {
        path: "mailbox",
        element: <Mailbox />,
        handle: {
          id: "mail",
          icon: icons.MailIcon as React.ElementType,
          crumb: () => <>{"title"}</>,
        },
      },
      {
        path: "chat",
        element: <Chat />,
        handle: {
          id: "chat",
          icon: icons.ChatIcon as React.ElementType,
          crumb: () => <>{"title"}</>,
        },
      },

      {
        path: "/form-controls",
        handle: {
          id: "formControl",
          crumb: () => <Link to={"/form-controls/autocomplete"}>title</Link>,
          icon: icons.DvrIcon as React.ElementType,
        },
        children: [
          {
            path: "/form-controls/autocomplete",
            element: <AutoComplete />,
            handle: {
              id: "autoComplete",
              icon: icons.AutofpsSelectIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/form-controls/checkbox",
            element: <Checkboxes />,
            handle: {
              id: "checkbox",
              icon: icons.CheckBoxIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/form-controls/date-picker",
            element: <DatePickers />,
            handle: {
              id: "datePickers",
              icon: icons.DateRangeIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/form-controls/text-field",
            element: <Textfields />,
            handle: {
              id: "textFields",
              icon: icons.DynamicFormIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/form-controls/input",
            element: <Inputs />,
            handle: {
              id: "inputs",
              icon: icons.InputIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/form-controls/radio-group",
            element: <RadioGroup />,
            handle: {
              id: "radioGroup",
              icon: icons.RadioButtonCheckedIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/form-controls/select",
            element: <Select />,
            handle: {
              id: "select",
              icon: icons.HighlightAltIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/form-controls/slider",
            element: <Slider />,
            handle: {
              id: "slider",
              icon: icons.TuneIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/form-controls/switch",
            element: <Switch />,
            handle: {
              id: "uniqueSwitch",
              icon: icons.StarBorderPurple500Icon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
        ],
      },

      // ** /tables
      {
        path: "/tables",
        handle: {
          id: "tables",
          crumb: () => <Link to={"/tables/basic"}>title</Link>,
          icon: icons.AppsIcon as React.ElementType,
        },
        children: [
          {
            path: "/tables/basic",
            element: <BasicTable />,
            handle: {
              id: "basicTable",
              icon: icons.ViewWeekIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/tables/paging",
            element: <PagingTable />,
            handle: {
              id: "pagingTable",
              icon: icons.LastPageIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/tables/sorting",
            element: <SortingTable />,
            handle: {
              id: "sortingTable",
              icon: icons.SortIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/tables/filtering",
            element: <FilterTable />,
            handle: {
              id: "filterTable",
              icon: icons.FormatLineSpacingIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/tables/selecting",
            element: <SelectingTable />,
            handle: {
              id: "selectTable",
              icon: icons.PlaylistAddCheckIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/tables/collapsible",
            element: <CollapsibleTable />,
            handle: {
              id: "collapsibleTable",
              icon: icons.ViewArrayIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
        ],
      },

      // ** pages  profile
      {
        path: "/profile",
        handle: {
          id: "profile",
          crumb: () => <Link to={"/profile/project"}>title</Link>,
          icon: icons.PersonIcon as React.ElementType,
        },
        element: <Profile />,
        children: [
          {
            path: "/profile/project",
            element: <ProjectCards />,
            handle: {
              id: "project",
              icon: icons.LocalMallIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
            index: true,
          },
          {
            path: "/profile/user-info",
            element: <UserInfo />,
            handle: {
              id: "userInfo",
              icon: icons.ContactEmergencyIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
        ],
      },

      {
        path: "/schedule",
        element: <Schedule />,
        handle: {
          id: "uniqueSchedule",
          icon: icons.EventIcon as React.ElementType,
          crumb: () => <>{"title"}</>,
        },
      },

      // ** Maps
      {
        path: "/maps",
        handle: {
          id: "maps",
          crumb: () => <Link to={"/maps/google-map"}>title</Link>,
          icon: icons.MapIcon as React.ElementType,
        },
        children: [
          {
            path: "/maps/google-map",
            element: <GoogleMap />,
            handle: {
              id: "uniqueGoogle",
              icon: icons.LocationOnIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/maps/leaflet-map",
            element: <Leaflet />,
            handle: {
              id: "uniqueLeaflet",
              icon: icons.GpsFixedIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
        ],
      },

      // **  Charts
      {
        path: "/charts",
        handle: {
          id: "charts",
          crumb: () => <Link to={"/charts/bar-chart"}>title</Link>,
          icon: icons.MultilineChartIcon as React.ElementType,
        },
        children: [
          {
            path: "/charts/bar-chart",
            element: <BarCharts />,
            handle: {
              id: "bar",
              icon: icons.BarChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/charts/pie-chart",
            element: <PieChart />,
            handle: {
              id: "pie",
              icon: icons.PieChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/charts/line-chart",
            element: <LineCharts />,
            handle: {
              id: "line",
              icon: icons.StackedLineChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/charts/bubble-chart",
            element: <BubbleChart />,
            handle: {
              id: "bubble",
              icon: icons.BubbleChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
        ],
      },
      {
        path: "/drag-drop",
        element: <DragDrop />,
        handle: {
          id: "uniqueDragDrop",
          icon: icons.MouseIcon as React.ElementType,
          crumb: () => <>{"title"}</>,
        },
      },
      {
        path: "icons",
        element: <Icons />,
        handle: {
          id: "uniqueIcons",
          icon: icons.TagFacesIcon as React.ElementType,
          crumb: () => <>{"title"}</>,
        },
      },
      {
        path: "blank",
        element: <Blank />,
        handle: {
          id: "blank",
          icon: icons.CheckBoxOutlineBlankIcon as React.ElementType,
          crumb: () => <>{"title"}</>,
        },
      },

      {
        path: "search",
        element: <Search />,
        handle: {
          id: "search",
          icon: icons.SearchIcon as React.ElementType,
          crumb: () => <>{"title"}</>,
        },
      },
      {
        path: "/doc",
        // element: <Documentation />,
        handle: {
          id: "doc",
          icon: icons.FolderSpecialIcon as React.ElementType,
          crumb: () => <Link to={"/doc/intro"}>title</Link>,
          hash: true,
        },
        children: [
          {
            path: "/doc/intro",
            element: <Intro />,
            handle: {
              id: "intro",
              icon: icons.BarChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/doc/installation",
            element: <Installation />,
            handle: {
              id: "installation",
              icon: icons.BarChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/doc/structure",
            element: <Structure />,
            handle: {
              id: "structure",
              icon: icons.BarChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/doc/skins",
            element: <Skins />,
            handle: {
              id: "skins",
              icon: icons.BarChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/doc/new-page",
            element: <New_page />,
            handle: {
              id: "new_page",
              icon: icons.BarChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/doc/conclusion",
            element: <Conclusion />,
            handle: {
              id: "conclusion",
              icon: icons.BarChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
          {
            path: "/doc/support",
            element: <Support />,
            handle: {
              id: "support",
              icon: icons.BarChartIcon as React.ElementType,
              crumb: () => <>{"title"}</>,
            },
          },
        ],
      },
    ],
  },
];

const router: RemixRouter = createBrowserRouter(viewsRoutesProps, {
  future: {
    v7_normalizeFormMethod: true,
  },
});

export { viewsRoutesProps, router };

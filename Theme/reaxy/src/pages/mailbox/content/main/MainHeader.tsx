import React from "react";
import { Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { styles } from "./Main.styles";
import { IconType } from "react-icons";

import {
  ArrowBackIcon,
  DeleteIcon,
  InfoIcon,
  MoreVertIcon,
  ReplyIcon,
  SendIcon,
  StarOutlineIcon,
  StarRateIcon,
  UndoIcon,
} from "@config/assets/icons";
import {
  useAppDispatch,
  useAppMediaQuery,
  useAppSelector,
} from "@config/hooks";
import { CustomMenu } from "@config/components";
import {
  setData,
  setIsSender,
  setSelected,
  setSelectedMenu,
  toggleOpen,
} from "@config/redux/slices/content/mailBoxSlice";
import { useTranslation } from "react-i18next";

export function MainHeader() {
  // ** redux
  const {
    selected,
    isSender,
    data: myData,
    selectedMenu,
    isOpen,
  } = useAppSelector((state) => state.slices.mail);

  // ** language
  const { t } = useTranslation("general");

  // ** useDispatch
  const dispatch = useAppDispatch();

  // ** find index
  const index = myData.findIndex((d) => d.id === selected.id);

  // ** handle methods
  const handleDelete = () => {
    if (index !== -1) {
      const newData = [...myData];
      newData[index] = {
        ...newData[index],
        trash: !newData[index].trash,
      };
      dispatch(setSelected({ ...selected, id: 0 }));
      dispatch(setData(newData));
    }
  };

  const handleStarred = () => {
    if (index !== -1) {
      const newData = [...myData];
      newData[index] = {
        ...newData[index],
        starred: !newData[index].starred,
      };
      dispatch(setData(newData));
    }
  };

  const tobBack = () => {
    if (index !== -1) {
      const newData = [...myData];
      newData[index] = {
        ...newData[index],
        trash: !newData[index].trash,
      };
      if (!newData[index].trash && selectedMenu === "Trash") {
        dispatch(setSelectedMenu("All"));
      }
      dispatch(setData(newData));
      dispatch(setSelected({ ...selected, id: 0 }));
    }
  };

  const handleUnRead = () => {
    const newData = [...myData];
    newData.splice(index, 1, {
      ...selected,
      isRead: true,
    });
    dispatch(setData(newData));
  };

  const handleRead = () => {
    const newData = [...myData];
    newData.splice(index, 1, {
      ...selected,
      isRead: false,
    });
    dispatch(setData(newData));
  };

  const { isSmDown, isLgDown } = useAppMediaQuery();

  // ** style @app config
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box
      sx={{
        ...style.headerMain,
        justifyContent: isLgDown ? "start" : "space-between",
        gap: "16px",
      }}
    >
      <Box sx={style.headerBox}>
        <Tooltip arrow placement="top" title={isOpen ? t("close") : t("open")}>
          <IconButton onClick={() => dispatch(toggleOpen())}>
            <Menu />
          </IconButton>
        </Tooltip>
        {isSender && (
          <Tooltip arrow placement="top" title={t("back")}>
            <IconButton
              onClick={() => {
                dispatch(setIsSender(false));
                dispatch(setSelected({ ...selected, id: 0 }));
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
        )}
        {selected.id !== 0 && !isSender && (
          <>
            {selectedMenu !== "Trash" && (
              <Tooltip title="Reply" placement="top" arrow>
                <IconButton
                  onClick={() => {
                    dispatch(setIsSender(false));
                    dispatch(setSelected({ ...selected, id: 0 }));
                  }}
                >
                  <ReplyIcon />
                </IconButton>
              </Tooltip>
            )}
            {selectedMenu !== "Trash" && (
              <Tooltip title="Mark as important" placement="top" arrow>
                <IconButton onClick={handleStarred}>
                  {myData[index].starred === true ? (
                    <StarRateIcon />
                  ) : (
                    <StarOutlineIcon />
                  )}
                </IconButton>
              </Tooltip>
            )}
            {selectedMenu === "Trash" && (
              <Tooltip title="Restore" placement="top" arrow>
                <IconButton onClick={tobBack}>
                  <UndoIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Report spam" placement="top" arrow>
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
            {selectedMenu !== "Trash" && (
              <Tooltip arrow placement="top" title={t("tooltip.delete")}>
                <IconButton onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
            <CustomMenu icon={MoreVertIcon as IconType}>
              <Box sx={style.listItem}>
                <MenuItem onClick={handleRead}>
                  <Typography variant="body1">Mark as read</Typography>
                </MenuItem>
                <MenuItem onClick={handleUnRead}>
                  <Typography variant="body1">Mark as un read</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => dispatch(setSelected({ ...selected, id: 0 }))}
                >
                  <Typography variant="body1">Delete</Typography>
                </MenuItem>
                {isSmDown && (
                  <MenuItem
                    onClick={() => {
                      dispatch(setIsSender(true));
                    }}
                  >
                    <Typography variant="body1">Send</Typography>
                  </MenuItem>
                )}
              </Box>
            </CustomMenu>
          </>
        )}
      </Box>
      <Box sx={style.buttonBox}>
        {isLgDown ? (
          !isSmDown && (
            <Tooltip title="Send">
              <IconButton
                sx={style.iconButton}
                onClick={() => {
                  dispatch(setIsSender(true));
                }}
              >
                <SendIcon />
              </IconButton>
            </Tooltip>
          )
        ) : (
          <Button
            startIcon={<SendIcon />}
            variant="outlined"
            sx={style.headerButton}
            onClick={() => {
              dispatch(setIsSender(true));
            }}
          >
            Send
          </Button>
        )}
      </Box>
    </Box>
  );
}

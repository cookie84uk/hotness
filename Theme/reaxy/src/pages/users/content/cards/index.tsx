import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonIcon from "@mui/icons-material/Person";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { IconType } from "react-icons";
import { styles } from "./Cards.styles";
import {
  setEdit,
  setIsOpen,
  setUsers,
  setValues,
} from "@config/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import { CustomMenu, ImgBox } from "@config/components";
import { CheckCircleOutlineIcon } from "@config/assets/icons";
import React from "react";
import { IUser } from "@config/models";

export function Cards({ item }: { item: IUser }) {
  // ** redux
  const { alignments, users } = useAppSelector((state) => state.users);

  // ** useDispatch
  const dispatch = useAppDispatch();

  // ** handle methods
  const handleUpdate = (item: IUser) => {
    dispatch(setIsOpen(true));
    dispatch(setValues(item));
    dispatch(setEdit(true));
  };

  const handleDelete = (id: number) => {
    const removeData = users.filter((user) => user.id !== id);
    dispatch(setUsers(removeData));
  };

  const handleStatusChange = () => {
    const status = item?.status === "active" ? "block" : "active";
    const updatedUsers = users.map((user) =>
      user.id === item.id ? { ...user, status } : user
    );
    dispatch(setUsers(updatedUsers));
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme, { item },{alignments});

  return (
    <Card sx={style.card}>
      <CardHeader
        title={
          <Typography variant={"h5"}>
            {item.status === "active" ? item.username : "User Blocked"}
          </Typography>
        }
        action={
          <CustomMenu icon={MoreVertIcon as IconType}>
            <MenuItem onClick={() => handleUpdate(item)}>
              <ListItemIcon>
                <EditIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={"Edit"} />
            </MenuItem>
            <MenuItem onClick={() => handleDelete(item.id)}>
              <ListItemIcon>
                <DeleteIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={"Delete"} />
            </MenuItem>
            <MenuItem onClick={handleStatusChange}>
              {item?.status === "active" ? (
                <>
                  <ListItemIcon>
                    <BlockIcon color="error" />
                  </ListItemIcon>
                  <ListItemText primary={"Block"} />
                </>
              ) : (
                <>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={"Unblock"} />
                </>
              )}
            </MenuItem>
          </CustomMenu>
        }
      />
      <CardContent sx={style.content}>
        <Grid sx={style.gridContainer} container spacing={2}>
          <Grid sx={style.gridContent} item lg={alignments === "list" ? 2 : 4}>
            <ImgBox
              imageSrc={item.url}
              icon={<BlockIcon />}
              containerSx={style.img}
              iconRootSx={style.iconBlock}
            />
          </Grid>
          <Grid item xs={8}>
            {alignments === "grid" ? (
              <Box sx={style.contentCard}>
                <List sx={style.list}>
                  <ListItemIcon>
                    <CardMembershipIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.position} />
                </List>
                <List sx={style.list}>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.email} />
                </List>
                <List sx={style.list}>
                  <ListItemIcon>
                    <CallIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.phone} />
                </List>
                <List sx={style.list}>
                  <ListItemIcon>
                    <FmdGoodIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.address} />
                </List>
                <List sx={style.list}>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary={<>{item.joined}</>} />
                </List>
              </Box>
            ) : (
              <Box sx={style.listWrapper}>
                <Box>
                  <List sx={style.list}>
                    <ListItemIcon>
                      <ApartmentIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.company} />
                  </List>
                  <List sx={style.list}>
                    <ListItemIcon>
                      <CardMembershipIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.position} />
                  </List>
                  <List sx={style.list}>
                    <ListItemIcon>
                      <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.salary} />
                  </List>
                </Box>
                <Box>
                  <List sx={style.list}>
                    <ListItemIcon>
                      <MailOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.email} />
                  </List>
                  <List sx={style.list}>
                    <ListItemIcon>
                      <CallIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.phone} />
                  </List>
                  <List sx={style.list}>
                    <ListItemIcon>
                      <FmdGoodIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.address} />
                  </List>
                </Box>
                <Box>
                  <List sx={style.list}>
                    <ListItemIcon>
                      <HowToRegIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.registration} />
                  </List>
                  <List sx={style.list}>
                    <ListItemIcon>
                      <DateRangeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={<>{!!item.joined ? item.joined : ""}</>}
                    />
                  </List>
                  <List sx={style.list}>
                    <ListItemIcon>
                      {item.status === "active" ? (
                        <PersonIcon />
                      ) : (
                        <PersonOffIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.status === "active" ? "active" : "blocked"}
                    />
                  </List>
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

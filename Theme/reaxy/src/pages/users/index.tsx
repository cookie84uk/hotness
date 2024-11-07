import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { Box, Grid, Pagination, PaginationItem } from "@mui/material";
import { Cards, FormDialog, Header } from "./content";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import {
  KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRightIcon,
} from "@config/assets/icons";
import { setIsLoading } from "@config/redux";
import { setUsers } from "@config/redux/slices/userSlice";
import React from "react";
import { Loading } from "@config/components";
import Error from "@pages/pages/error";
import { styles } from "./Users.styles";

export default function Users() {
  // ** redux
  const { users, searchUser, alignments } = useAppSelector(
    (state) => state.users
  );

  const { isLoading } = useAppSelector((state) => state.slices.login);

  const dispatch = useAppDispatch();

  // ** useState
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    dispatch(setIsLoading(true));
    const fetchData = async () => {
      const timeout = setTimeout(async () => {
        dispatch(setIsLoading(true));
        try {
          const res = await axios.get("./data/db.json");
          dispatch(setUsers(res.data.users));
          setPage(1);
        } catch (error) {
          setError(true);
          console.log(error);
        } finally {
          dispatch(setIsLoading(false));
        }
      }, 1000);

      return () => clearTimeout(timeout);
    };

    fetchData();
  }, [dispatch]);

  const handlePageChange = (_event: any, value: SetStateAction<number>) => {
    setPage(value);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  // **  Calculate the start and end index of the items to display on the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  // **  Calculate total pages dynamically
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const style = styles();

  return (
    <Box sx={style.container}>
      <Header />
      <Grid container spacing={3} pt={3} sx={{ boxSizing: "border-box" }}>
        {users?.slice(startIndex, endIndex).map((item) => {
          if (
            searchUser === "" ||
            item.name.toLowerCase().includes(searchUser.toLowerCase())
          ) {
            return (
              <Grid
                key={item.id}
                item
                xl={alignments === "grid" ? 4 : 12}
                lg={alignments === "grid" ? 6 : 12}
                md={alignments === "grid" ? 12 : 12}
                xs={alignments === "grid" ? 12 : 12}
              >
                <Cards item={item} key={item.id} />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
      <Box sx={style.pagination}>
        <Pagination
          color="primary"
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: KeyboardDoubleArrowLeftIcon,
                next: KeyboardDoubleArrowRightIcon,
              }}
              {...item}
            />
          )}
        />
      </Box>
      <FormDialog />
    </Box>
  );
}

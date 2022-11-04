import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUsers, editUser } from "./UserSlice";

const UserForm = ({ operation, handleDialogClose }) => {
  const dispatch = useDispatch();
  const userList = useSelector(selectUsers);
  const [user, setUser] = useState({
    id: userList[userList.length - 1].id + 1,
    name: "",
    mobile: "",
    email: "",
    status: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    if (operation == "add") {
      e.preventDefault();
      dispatch(addUser(user));
      console.log("user", user);
      handleDialogClose();
    } else {
      e.preventDefault();
      dispatch(editUser(user));
      handleDialogClose();
    }
  };

  return (
    <Box component="form">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            name="name"
            value={user?.name}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={user?.email}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={user?.mobile}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            {operation == "edit" ? "Update" : "Add"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserForm;

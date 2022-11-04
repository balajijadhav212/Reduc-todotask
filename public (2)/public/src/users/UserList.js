import React, { useState } from "react";
import MuiDatatable from "mui-datatables";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, removeUser, editUser } from "./UserSlice";
import AddEditUser from "./AddEditUser";

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(selectUsers);
  const [operation, setOpertaion] = useState("add");
  const [openDialog, setOpenDialog] = useState(false);
  const [initialUser, setInitialUser] = useState({
    mobile: "",
    email: "",
    name: "",
    status: 1,
  });

  const activeUsers = userList.filter((user) => user.status == 1);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleForm = () => {
    setOpertaion("add");
    setOpenDialog(true);
  };

  const editUsers = () => {
    setOpertaion("edit");
    setInitialUser(userList);
    setOpenDialog(true);
  };

  // const deleteUser = (id) => {
  //   dispatch(removeUser(id));
  // };

  const columns = [
    {
      label: "Name",
      name: "name",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Mobile",
      name: "mobile",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRenderLite: (index) => {
          const user = userList[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUsers(user)}>
                <EditIcon />
              </IconButton>

              <IconButton
                color="error"
                onClick={() => dispatch(removeUser({ id: user.id, status: 0 }))}
              >
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <AddEditUser
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        operation={operation}
        initialUser={initialUser}
      />
      <Button variant="contained" onClick={handleForm}>
        Add New User
      </Button>
      <MuiDatatable columns={columns} data={activeUsers} />
    </>
  );
};

export default UserList;

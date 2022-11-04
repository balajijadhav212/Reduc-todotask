import React, { useState } from "react";
import MuiDatatable from "mui-datatables";
import { IconButton } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { selectUsers } from "./UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { restoreUser } from "./UserSlice";

const DeletedUser = () => {
  const userList = useSelector(selectUsers);
  const dispatch = useDispatch();

  const deleteUsers = userList.filter((user) => user.status == 0);

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
          const user = deleteUsers[index];
          return (
            <>
              <IconButton color="primary">
                <RestoreIcon
                  onClick={() =>
                    dispatch(restoreUser({ id: user.id, status: 1 }))
                  }
                />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <MuiDatatable
        title="Deleted Users"
        columns={columns}
        data={deleteUsers}
      />
    </>
  );
};

export default DeletedUser;

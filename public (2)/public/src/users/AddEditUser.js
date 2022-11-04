import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import UserForm from "./UserForm";
const AddEditUser = ({
  openDialog,
  handleDialogClose,
  operation,
  initialUser,
}) => {
  return (
    <>
      <Dialog onClose={handleDialogClose} open={openDialog}>
        <DialogTitle style={{ fontWeight: "bold" }}>
          {operation == "edit" ? "Edit" : "Add"} User
        </DialogTitle>
        <DialogContent>
          <UserForm
            operation={operation}
            handleDialogClose={handleDialogClose}
            initialUser={initialUser}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditUser;

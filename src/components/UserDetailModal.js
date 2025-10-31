import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

function UserDetailModal({ user, onClose }) {
  return (
    <Dialog open={Boolean(user)} onClose={onClose}>
      <DialogTitle>{user.name}</DialogTitle>
<DialogContent>
  <Typography>Email: {user.email}</Typography>
  <Typography>Phone: {user.phone}</Typography>
  <Typography>City: {user.address?.city}</Typography>
</DialogContent>

    </Dialog>
  );
}

export default UserDetailModal;

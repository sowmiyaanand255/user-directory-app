import React from "react";
import UserCard from "./UserCard";
import { Box } from "@mui/material";

function UserList({ users, onUserClick }) {
  if (users.length === 0){
    return <p style={{ textAlign:"center"}}>No users found.</p>;
  }
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {users.map((u) => (
        <UserCard key={u.id} user={u} onClick={onUserClick} />
      ))}
    </Box>
  );
}

export default UserList;

import React from "react";
import { Card, CardContent, Box, Avatar, Typography } from "@mui/material";

function UserCard({ user, onClick }) {
  return (
    <Card
      onClick={() => onClick(user)} 
      sx={{
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { transform: "scale(1.03)" },
        width: "250px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Avatar>
          {user.name?.[0]}
        </Avatar>
        <Box mt={1}>
          <Typography variant="h6">
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default UserCard;

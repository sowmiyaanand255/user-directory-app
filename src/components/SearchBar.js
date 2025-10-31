import React from "react";
import { TextField } from "@mui/material";

function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Search by name"
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={{ marginBottom: "20px", width: "300px" }}
    />
  );
}

export default SearchBar;

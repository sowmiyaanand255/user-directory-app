import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import UserDetailModal from "./components/UserDetailModal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Button } from "@mui/material";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: { mode: darkMode ? "dark" : "light" },
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>{
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  if (loading){
    return <h3 style={{ textAlign:"center", marginTop:"50px"}}>Loading users...</h3>;
  }

  const filteredUsers = users
    .filter((u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>User Directory</h2>
        <Button
         variant="outlined"
         onClick={() => setDarkMode(!darkMode)}
         sx={{ mb: 2 }}
        >
         {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>

        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <div style={{ margin: "10px" }}>
          <label>Sort by Name: </label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">A → Z</option>
            <option value="desc">Z → A</option>
          </select>
        </div>

        <UserList users={filteredUsers} onUserClick={setSelectedUser} />

        {selectedUser && (
          <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

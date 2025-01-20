import React from "react";
import { Box, Typography, Card, CardContent, Grid, AppBar, Toolbar, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import "./borrowed_items2.css";


const BorrowedItems2 = () => {
  const items = [
    { name: "Normal Bat", count: 3 },
    { name: "Cricket Hardball Bat", count: 4 },
    { name: "Normal Cricket Ball", count: 2 },
    { name: "Cricket Hard Ball", count: 1 },
    { name: "Football", count: 2 },
    { name: "Football Net", count: 1 },
    { name: "Netball", count: 1 },
    { name: "Netball Net", count: 1 },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: 240, bgcolor: "#f4f4f4", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h5" sx={{ textAlign: "center", padding: "1rem" }}>
            equipZone
          </Typography>
          <Typography variant="h6" sx={{ padding: "1rem", cursor: "pointer" }}>
            Dashboard
          </Typography>
          <Typography variant="h6" sx={{ padding: "1rem", cursor: "pointer", fontWeight: "bold" }}>
            Borrowed Items
          </Typography>
          <Typography variant="h6" sx={{ padding: "1rem", cursor: "pointer" }}>
            Remain Items
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", padding: "1rem" }}>
          <IconButton>
            <LogoutIcon />
          </IconButton>
          <Typography>Logout</Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, bgcolor: "#fff" }}>
        {/* AppBar */}
        <AppBar position="static" sx={{ bgcolor: "#f4f4f4", color: "black", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Borrowed Items
            </Typography>
            <Box sx={{ position: "relative" }}>
              <InputBase
                placeholder="Search..."
                sx={{
                  bgcolor: "#f9f9f9",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ddd",
                  width: 200,
                }}
              />
              <IconButton sx={{ position: "absolute", top: "50%", right: "0.5rem", transform: "translateY(-50%)" }}>
                <SearchIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Box sx={{ padding: "2rem" }}>
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Cricket
          </Typography>

          <Card sx={{ borderRadius: "1rem", padding: "1rem" }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                Borrowed Items (Over-all)
              </Typography>
              <Grid container spacing={2}>
                {items.map((item, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Box
                      sx={{
                        bgcolor: "#f9f9f9",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                        textAlign: "center",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2">{item.count}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default BorrowedItems2;

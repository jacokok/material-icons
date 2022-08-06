import { Box, Button } from "@mui/material";
import { useState } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Header } from "Header";
import { Icons } from "Icons";

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Icons />
      </Box>
    </Box>
  );
};

export default App;

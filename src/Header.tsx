import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CropSquareIcon sx={{ mr: 2, fontSize: 30 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Icons
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

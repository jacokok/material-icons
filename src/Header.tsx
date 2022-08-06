import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "Search";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, width: 200, display: { xs: "none", md: "block" } }}
        >
          Material Icons
        </Typography>
        <Search />
      </Toolbar>
    </AppBar>
  );
};

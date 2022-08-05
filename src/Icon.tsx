import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import * as icons from "@mui/icons-material";
import { IconTypes } from "types";

interface Props {
  icon: IconTypes;
}

export const Icon = ({ icon }: Props) => {
  const Icon = icons[icon];
  return (
    <Grid
      item
      sx={{
        width: 100,
        height: 100,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
      <Button>
        <Icon sx={{ fontSize: 40 }} />
      </Button>
      <Typography
        variant="body2"
        sx={{
          fontSize: 10,
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {icon}
      </Typography>
    </Grid>
  );
};

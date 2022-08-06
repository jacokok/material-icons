import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import * as icons from "@mui/icons-material";
import { IconTypes } from "types";

interface Props {
  icon: IconTypes;
}

export const Icon = ({ icon }: Props) => {
  const Icon = icons[icon];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: 100,
        height: 100,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ display: "flex", height: 80, width: 80, textAlign: "center" }}
        >
          <Icon sx={{ fontSize: 40 }} />
        </Button>
      </Box>
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
    </div>
  );
};

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import * as icons from "@mui/icons-material";
import { Icon } from "Icon";
import { IconTypes } from "types";
import { ChangeEvent, useState, useEffect, useMemo } from "react";

type IconAndGroup = {
  name: string;
  group: string;
}[];

export const Icons = () => {
  const [filled, setFilled] = useState<IconAndGroup>([]);
  const [group, setGroup] = useState("Filled");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGroup((event.target as HTMLInputElement).value);
  };

  const getAndGroupIcons = () => {
    return Object.keys(icons).map((iconName) => {
      if (iconName.endsWith("Sharp")) {
        return { name: iconName, group: "Sharp" };
      } else if (iconName.endsWith("TwoTone")) {
        return { name: iconName, group: "TwoTone" };
      } else if (iconName.endsWith("Rounded")) {
        return { name: iconName, group: "Rounded" };
      } else if (iconName.endsWith("Outlined")) {
        return { name: iconName, group: "Outlined" };
      } else {
        return { name: iconName, group: "Filled" };
      }
    });
  };

  useEffect(() => {
    console.log("effect");
    setFilled(getAndGroupIcons());
  }, []);

  const getIconList = (group: string) => {
    return filled.map((icon) => {
      if (icon.group == group) {
        return <Icon key={icon.name} icon={icon.name as IconTypes} />;
      }
    });
  };

  // const iconList = getIconList();
  const iconList = useMemo(() => getIconList(group), [group, filled]);

  return (
    <Box>
      <FormControl>
        <RadioGroup row name="icon-types" value={group} onChange={handleChange}>
          <FormControlLabel value="Filled" control={<Radio />} label="Filled" />
          <FormControlLabel
            value="Outlined"
            control={<Radio />}
            label="Outlined"
          />
          <FormControlLabel
            value="Rounded"
            control={<Radio />}
            label="Rounded"
          />
          <FormControlLabel
            value="TwoTone"
            control={<Radio />}
            label="TwoTone"
          />
          <FormControlLabel value="Sharp" control={<Radio />} label="Sharp" />
        </RadioGroup>
      </FormControl>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {iconList}
      </Grid>
    </Box>
  );
};

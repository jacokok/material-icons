import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useIconStore } from "store/useStore";

export const GroupFilter = () => {
  const group = useIconStore((state) => state.group);
  const setGroup = useIconStore((state) => state.setGroup);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGroup((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <RadioGroup row name="icon-types" value={group} onChange={handleChange}>
        <FormControlLabel value="Filled" control={<Radio />} label="Filled" />
        <FormControlLabel
          value="Outlined"
          control={<Radio />}
          label="Outlined"
        />
        <FormControlLabel value="Rounded" control={<Radio />} label="Rounded" />
        <FormControlLabel value="TwoTone" control={<Radio />} label="TwoTone" />
        <FormControlLabel value="Sharp" control={<Radio />} label="Sharp" />
      </RadioGroup>
    </FormControl>
  );
};

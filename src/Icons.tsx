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
import { Virtuoso, VirtuosoGrid } from "react-virtuoso";
import styled from "@emotion/styled";

type IconAndGroup = {
  name: string;
  group: string;
}[];

const ItemContainer = styled.div`
  display: flex;
`;

const ItemWrapper = styled.div`
  flex: 1;
  height: 100px;
  width: 100px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Icons = () => {
  const [filled, setFilled] = useState<IconAndGroup>([]);
  const [group, setGroup] = useState("Filled");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGroup((event.target as HTMLInputElement).value);
  };

  const getAndGroupIcons = () => {
    return (
      Object.keys(icons)
        // .slice(0, 10)
        .map((iconName) => {
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
        })
    );
  };

  useEffect(() => {
    console.log("effect");
    setFilled(getAndGroupIcons());
  }, []);

  const getIconList = (group: string) => {
    return filled
      .slice(0, 50000000000)
      .filter((icon) => icon.group == group)
      .map((icon) => {
        return icon.name;
      });
  };

  // const iconList = getIconList();
  const iconList = useMemo(() => getIconList(group), [group, filled]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
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

      {/* <Grid container spacing={2} justifyContent="center" alignItems="center">
        {iconList}
      </Grid> */}

      <VirtuosoGrid
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        totalCount={iconList.length}
        overscan={200}
        components={{
          Item: ItemContainer,
          List: ListContainer,
          // ScrollSeekPlaceholder: ({ height, width, index }) => (
          //   <ItemContainer>
          //     <ItemWrapper>{"--"}</ItemWrapper>
          //   </ItemContainer>
          // ),
        }}
        itemContent={(index) => (
          <ItemWrapper>
            <Icon icon={iconList[index] as IconTypes} />
          </ItemWrapper>
        )}
        // scrollSeekConfiguration={{
        //   enter: (velocity) => Math.abs(velocity) > 200,
        //   exit: (velocity) => Math.abs(velocity) < 30,
        //   change: (_, range) => console.log({ range }),
        // }}
      />
    </Box>
  );
};

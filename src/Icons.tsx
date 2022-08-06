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
  styled,
} from "@mui/material";
import * as icons from "@mui/icons-material";
import { Icon } from "Icon";
import { IconTypes } from "types";
import { ChangeEvent, useState, useEffect, useMemo, forwardRef } from "react";
import { Virtuoso, VirtuosoGrid } from "react-virtuoso";
import emoStyled from "@emotion/styled";
import { GroupFilter } from "GroupFilter";
import { useIconStore } from "store/useStore";

type IconAndGroup = {
  name: string;
  group: string;
}[];

const ItemContainer = styled(Box)(() => ({
  display: "flex",
}));

const ItemWrapper = styled(Box)(() => ({
  flex: 1,
  height: 100,
  width: 100,
}));

const ListContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));
console.log(icons.Abc);

export const Icons = () => {
  const [filled, setFilled] = useState<IconAndGroup>([]);
  const group = useIconStore((state) => state.group);
  const search = useIconStore((state) => state.search);

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

  const getIconList = (group: string, search: string) => {
    return (
      filled
        // .slice(0, 500)
        .filter((icon) =>
          search.length > 0
            ? icon.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
            : true
        )
        .filter((icon) => icon.group == group)
        .map((icon) => {
          return icon.name;
        })
    );
  };

  // const iconList = getIconList();
  const iconList = useMemo(
    () => getIconList(group, search),
    [group, search, filled]
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <GroupFilter />

      <VirtuosoGrid
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        totalCount={iconList.length}
        overscan={200}
        components={{
          List: forwardRef(({ style, children }, listRef) => {
            return (
              <ListContainer
                style={{ padding: 0, ...style, margin: 0 }}
                component="div"
                ref={listRef}
              >
                {children}
              </ListContainer>
            );
          }),
          Item: ItemContainer,
        }}
        itemContent={(index) => (
          <ItemWrapper>
            <Icon icon={iconList[index] as IconTypes} />
          </ItemWrapper>
        )}
      />
    </Box>
  );
};

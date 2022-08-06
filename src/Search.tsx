import {
  alpha,
  Box,
  InputAdornment,
  InputBase,
  styled,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useIconStore } from "store/useStore";
import { ChangeEvent } from "react";

const SearchInput = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  maxWidth: 500,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export const Search = () => {
  const search = useIconStore((state) => state.search);
  const setSearch = useIconStore((state) => state.setSearch);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch((event.target as HTMLInputElement).value);
  };

  return (
    <SearchInput value={search} onChange={handleChange}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchInput>
  );
};

import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import colors from "../constants/colors";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="חיפוש פריט לפי שם או מקט"
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: colors.background,
        borderRadius: "12px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: colors.dark }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;

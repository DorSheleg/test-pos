import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import colors from "../constants/colors";
import Logo from "../images/logo_and_ver.png";

const TopBar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: colors.background,
        boxShadow: "none",
        borderBottom: `1px solid ${colors.light}`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="PayPlus Logo"
          sx={{ height: 40 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

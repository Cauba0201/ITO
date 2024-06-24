import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

type HeaderProps = {
  title: string;
  subtitle: string;
};
const Header = ({ title, subtitle }: HeaderProps) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={color.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={color.grey[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;

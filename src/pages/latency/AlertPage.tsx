import { Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/common/Header";
import Progress from "../../components/common/ProgressChart";


const AlertPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Progress Chart" subtitle="Simple chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <Progress progress={0.75} size={400} />
      </Box>
    </Box>
  );
};

export default AlertPage;

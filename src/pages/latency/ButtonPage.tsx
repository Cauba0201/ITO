import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/common/Header";
import PieChart from "../../components/common/PieChart";

type Props = {};

const ButtonPage = (props: Props) => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default ButtonPage;

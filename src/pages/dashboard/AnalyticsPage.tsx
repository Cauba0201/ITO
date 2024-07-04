import { Box } from "@mui/material";
import BarChart from "../../components/common/BarChart";
import Header from "../../components/common/Header";

const AnalyticsPage = ({ isDashboard = false }) => {
  return (
    <Box m="0px 20px">
      <Header title="Barchart" subtitle="Simple bar chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default AnalyticsPage;

import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "../../components/common/Header";
import { mockDataContacts } from "../../data/mockData";

type Props = {};
interface RowData {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

const DataTraffic = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef<RowData>[] = [
    { field: "id", headerName: "ID" },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cel",
    },

    {
      field: "age",
      headerName: "Age",
      flex: 1,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];
  return (
    <Box m="0px 20px">
      <Header
        title="Contact Information"
        subtitle="List of contacts for Future Reference"
      />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};

export default DataTraffic;

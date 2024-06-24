import React from "react";
import { useTheme, Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import Header from "../../components/common/Header";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

type Props = {};
interface RowData {
  access: string;
}

const PhoneCall = (prop: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef<RowData>[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      headerAlign: "left",
      flex: 1,
      renderCell: ({ row }: { row: RowData }) => {
        const access = row.access;
        return (
          <Box
            sx={{
              width: "60%",
              m: "0 auto",
              p: "5px",
              display: "flex",
              borderRadius: "4px",
              justifyContent: "center",
              backgroundColor:
                access === "Admin"
                  ? colors.greenAccent[600]
                  : access === "Manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700],
            }}
          >
            {access === "Admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "Manager" && <SecurityOutlinedIcon />}
            {access === "User" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {row.access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Header title="Manage Team" subtitle="Managing the Team member" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default PhoneCall;

import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

type Props = {};

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    sortable: false,
    filterable: false,
    hideable: false,
    disableColumnMenu: true,
    headerClassName: "header",
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 230,
    sortable: false,
    filterable: false,
    hideable: false,
    disableColumnMenu: true,
    headerClassName: "header",
  },
  {
    field: "type",
    headerName: "Type",
    width: 230,
    sortable: false,
    filterable: false,
    hideable: false,
    disableColumnMenu: true,
    headerClassName: "header",
  },
  {
    field: "Status",
    headerName: "Status",
    width: 230,
    sortable: false,
    filterable: false,
    hideable: false,
    disableColumnMenu: true,
    headerClassName: "header",
  },
  {
    field: "FieldB",
    headerName: "Field",
    width: 80,
    sortable: false,
    filterable: false,
    hideable: false,
    disableColumnMenu: true,
    headerClassName: "header",
  },
  {
    field: "FieldB",
    headerName: "Field",
    width: 192,
    sortable: false,
    filterable: false,
    hideable: false,
    disableColumnMenu: true,
    headerClassName: "header",
  },
];

const rows = [
  {
    id: 1,
    amount: "N750,000",
    type: "Deposit",
    Status: "Successful",
    FieldB: "Pending",
  },
  {
    id: 2,
    amount: "N200,000",
    type: "Widrawal",
    Status: "Pending",
    FieldB: "Pending",
  },
  {
    id: 3,
    amount: "N75,000",
    type: "Widrawal",
    Status: "Failed",
    FieldB: "Pending",
  },
  {
    id: 4,
    amount: "N20,000",
    type: "Widrawal",
    Status: "Successful",
    FieldB: "Pending",
  },
  {
    id: 5,
    amount: "N20,000",
    type: "Widrawal",
    Status: "Successful",
    FieldB: "Pending",
  },
];
function Transactions({}: Props) {
  const headerColor = "#737373";
  return (
    <>
      <div
        style={{
          height: 400,

          background: "#202022",
          color: "white",
          //   padding: "1rem",
          borderRadius: "0.5rem",
          border: "1px solid rgba(255, 255, 255, 0.04)",
        }}
      >
        <DataGrid
          sx={{
            border: 0,
            color: "White",
            "& .header": {
              background: headerColor,
            },
            "& .header:focus": {
              background: headerColor,
              border: "none",
            },
            "& .header:hover": {},
            "& .MuiToolbar-root": {
              color: "white",
            },
            "& .MuiDataGrid-withBorderColor": {
              borderColor: "divider",
            },
            "& .MuiDataGrid-cell": {
              color: "rgba(255, 255, 255, 0.6)",
            },
            "& .MuiDataGrid-columnHeaders": {
              background: headerColor,
            },
          }}
          rows={rows}
          columns={columns}
        />
      </div>
    </>
  );
}

export default Transactions;

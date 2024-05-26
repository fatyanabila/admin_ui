import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Non Coffee" },
  { id: 3, name: "Cake" },
  { id: 4, name: "Pastry" },
  { id: 5, name: "Cookie" },
];

const actionColumn = [
  {
    field: "",
    headerName: "",
    width: 150,
    renderCell: (params) => (
      <div className="cellAction"></div>
    ),
  },
];

const MyDatatable = ({ title }) => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">{title}</div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;

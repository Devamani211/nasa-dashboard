import { Box } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  { field: "size", headerName: "Size", flex: 1, type: "number" },
  {
    field: "closeness_to_earth",
    headerName: "Closeness to Earth",
    flex: 1,
    type: "number",
  },
  {
    field: "relative_velocity",
    headerName: "Relative Velocity",
    flex: 1,
    type: "number",
  },
];
interface NasaGridProps {
  data: any[];
}
const NasaGrid = ({ data }: NasaGridProps) => {
  return (
    <div>
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.id}
          pageSizeOptions={[10]}
          paginationModel={{ pageSize: 10, page: 0 }}
        />
      </Box>
    </div>
  );
};
export default NasaGrid;

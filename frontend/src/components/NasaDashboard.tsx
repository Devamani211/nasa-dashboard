import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useFetchNasaData } from "../hooks/useNasaData";
import NasaGrid from "./NasaGrid";

const NasaDashboard = () => {
  const { data, fetchData, loading, error } = useFetchNasaData<any[]>();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <Box sx={{ pt: 3, pb: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue: Date | null) => setStartDate(newValue)}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue: Date | null) => setEndDate(newValue)}
        />
        <Button
          variant="contained"
          onClick={() =>
            fetchData(startDate || undefined, endDate || undefined)
          }
          disabled={!startDate || !endDate}
        >
          Search
        </Button>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="60vh"
        >
          <CircularProgress />
        </Box>
      )}

      {data && data.length > 0 ? (
        <NasaGrid data={data} />
      ) : (
        !loading && (
          <Typography variant="body1" color="text.secondary">
            Please select a start and end date to search for asteroids.
          </Typography>
        )
      )}
    </Box>
  );
};

export default NasaDashboard;

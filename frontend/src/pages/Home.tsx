import { Container, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import NasaDashboard from "../components/NasaDashboard";

export const Home = () => {
  const title = "Asteroids Dashboard";
  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <NasaDashboard />
      </LocalizationProvider>
    </Container>
  );
};

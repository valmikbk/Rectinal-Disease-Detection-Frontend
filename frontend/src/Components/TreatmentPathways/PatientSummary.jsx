import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";

export default function PatientSummary() {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">Patient Summary</Typography>

        <Typography>Name: Ramesh Kumar</Typography>
        <Typography>ABHA ID: 1234-5678-9012</Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Chip label="DR Detected" color="warning" />
          <Chip label="Progressing" color="error" />
          <Chip label="High Risk" color="error" />
        </Stack>

        <Typography sx={{ mt: 2 }}>
          Image History: Fundus (Jan, Mar, Jun)
        </Typography>
      </CardContent>
    </Card>
  );
}
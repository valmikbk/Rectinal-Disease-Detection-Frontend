import { useState } from "react";
import {
  Card, CardContent, Typography, Button, Alert, Stack, Chip
} from "@mui/material";

export default function Track() {
  const [scheduled, setScheduled] = useState(false);
  const [missed, setMissed] = useState(false);

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">
          Appointment Scheduling & Reminders
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Chip label="SMS Enabled" color="success" />
          <Chip label="App Notification Enabled" color="success" />
          <Chip label="WhatsApp Enabled" color="info" />
        </Stack>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => setScheduled(true)}
        >
          Schedule Next Appointment
        </Button>

        {scheduled && (
          <Alert sx={{ mt: 2 }} severity="success">
            Appointment scheduled and reminders activated
          </Alert>
        )}

        <Button
          fullWidth
          variant="outlined"
          color="error"
          sx={{ mt: 2 }}
          onClick={() => setMissed(true)}
        >
          Simulate Missed Visit
        </Button>

        {missed && (
          <Alert sx={{ mt: 2 }} severity="warning">
            Missed visit detected – reminder sent to patient
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
import { useState } from "react";
import {
  Card, CardContent, Typography, Button, Alert
} from "@mui/material";

export default function RecoveryTracking() {
  const [recovered, setRecovered] = useState(false);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Recovery & Outcome Tracking
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 3 }}
          onClick={() => setRecovered(true)}
        >
          Mark Patient as Stable / Recovered
        </Button>

        {recovered && (
          <Alert sx={{ mt: 2 }} severity="success">
            Patient moved to monitoring-only pathway.
            Periodic screening reminders activated.
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
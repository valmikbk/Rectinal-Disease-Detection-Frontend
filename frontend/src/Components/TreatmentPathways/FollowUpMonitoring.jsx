import { Card, CardContent, Typography, Button, Alert } from "@mui/material";
import { useState } from "react";

export default function FollowUpMonitoring() {
  const [followUp, setFollowUp] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Follow-Up & Monitoring
        </Typography>

        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => setFollowUp(true)}
        >
          Schedule Follow-Up (30 Days)
        </Button>

        {followUp && (
          <Alert sx={{ mt: 2 }} severity="success">
            Follow-up scheduled successfully
          </Alert>
        )}

        <Button
          variant="outlined"
          color="error"
          sx={{ mt: 2 }}
          onClick={() => setAlert(true)}
        >
          Simulate Disease Progression Alert
        </Button>

        {alert && (
          <Alert sx={{ mt: 2 }} severity="error">
            Disease progression detected – urgent review required
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
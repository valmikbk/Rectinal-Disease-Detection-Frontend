import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  TextField,
  Divider
} from "@mui/material";

export default function TreatmentDecision() {
  const [risk, setRisk] = useState("");
  const [treatment, setTreatment] = useState("");

  const generateTreatment = () => {
    if (risk === "Mild DR") setTreatment("Medical Management");
    if (risk === "Severe DR") setTreatment("Laser Therapy");
    if (risk === "nAMD") setTreatment("Anti-VEGF Injection");
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">
          AI-Guided Treatment Decision
        </Typography>

        <TextField
          select
          fullWidth
          label="AI Risk Classification"
          sx={{ mt: 2 }}
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
        >
          <MenuItem value="Mild DR">Mild DR</MenuItem>
          <MenuItem value="Severe DR">Severe DR</MenuItem>
          <MenuItem value="nAMD">nAMD</MenuItem>
        </TextField>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={generateTreatment}
          disabled={!risk}
        >
          Generate Treatment Plan
        </Button>

        {treatment && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography>
              Recommended Treatment:
            </Typography>
            <Typography color="primary" fontWeight="bold">
              {treatment}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
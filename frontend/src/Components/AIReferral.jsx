import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Chip,
  Divider
} from "@mui/material";

const riskColors = {
  Normal: "success",
  Mild: "info",
  Refer: "warning",
  Urgent: "error"
};

export default function AIReferral() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    risk: "",
    referralCenter: ""
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const generateReferral = () => {
    let center = "";
    if (patient.risk === "Refer") center = "District Eye Hospital";
    if (patient.risk === "Urgent") center = "Tertiary Eye Care Center";

    setPatient({ ...patient, referralCenter: center });
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      <Grid item xs={12} md={6}>
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              AI-Based Referral System
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <TextField
              fullWidth
              label="Patient Name"
              name="name"
              value={patient.name}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={patient.age}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              select
              label="AI Risk Classification"
              name="risk"
              value={patient.risk}
              onChange={handleChange}
              margin="normal"
            >
              {["Normal", "Mild", "Refer", "Urgent"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            {patient.risk && (
              <Chip
                label={`Risk Level: ${patient.risk}`}
                color={riskColors[patient.risk]}
                sx={{ mt: 2 }}
              />
            )}

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={generateReferral}
              disabled={!patient.risk}
            >
              Generate AI Referral
            </Button>

            {patient.referralCenter && (
              <>
                <Divider sx={{ my: 3 }} />
                <Typography variant="subtitle1">
                  Referral Assigned
                </Typography>
                <Typography color="primary">
                  {patient.referralCenter}
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
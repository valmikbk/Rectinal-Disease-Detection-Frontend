import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MedicationIcon from "@mui/icons-material/Medication";
import TreatmentHeader from "./TreatmentHeader";
import { useNavigate } from "react-router-dom";
import AddTreatmentDialog from "./AddTreatmentDialog";
import MedicareHeader from "../MedicareHeader";

/* ---------------- Dummy Treatments ---------------- */

const treatments = [
  {
    id: 1,
    name: "Anti-VEGF Injection (Bevacizumab)",
    type: "Injection",
    status: "active",
    startDate: "Dec 4, 2025",
    dosage: "1.25 mg / 0.05 mL",
    frequency: "Once monthly",
    notes: "Intravitreal injection for retinal neovascularization"
  },
  {
    id: 2,
    name: "Panretinal Photocoagulation (PRP)",
    type: "Laser Therapy",
    status: "completed",
    startDate: "Nov 10, 2025",
    dosage: "—",
    frequency: "3 sessions",
    notes: "Laser treatment to reduce ischemic retinal tissue"
  },
  {
    id: 3,
    name: "Insulin Therapy",
    type: "Medication",
    status: "active",
    startDate: "Oct 02, 2025",
    dosage: "10 units (Basal)",
    frequency: "Twice daily",
    notes: "Glycemic control for diabetes management"
  },
  {
    id: 4,
    name: "Lubricating Eye Drops",
    type: "Medication",
    status: "paused",
    startDate: "Dec 20, 2025",
    dosage: "1 drop",
    frequency: "3 times daily",
    notes: "Symptomatic relief for ocular dryness"
  }
];

export default function TreatmentsPage() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [openTreatmentDialog, setOpenTreatmentDialog] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* ===== Header ===== */}
      <MedicareHeader />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
          py: 1
        }}
      >
        <Box>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{ textTransform: "none", color: "#475569", mb: 1 }}
          >
            Back to Patients
          </Button>

          <Typography color="text.secondary" fontSize={14} marginLeft={1}>
            Patient ID: P-001
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => setOpenDialog(true)}
          sx={{ textTransform: "none", borderRadius: 2, px: 3 }}
        >
          Schedule Appointment
        </Button>
      </Box>

      {/* ===== Tabs Header ===== */}
      <TreatmentHeader />

      {/* ===== Treatments Header ===== */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        ml={3}
        mt={3}
      >
        <Typography variant="h6" fontWeight={600}>
          {/* Treatments */}
        </Typography>
        <Box mr={3}>
          <Button
            variant="contained"
            onClick={() => setOpenTreatmentDialog(true)}
          >
            + Add Treatment
          </Button>
        </Box>
      </Box>

      {/* ===== Treatments List ===== */}
      <Stack spacing={3} ml={3} mr={3} mb={5}>
        {treatments.map((treatment) => (
          <Card
            key={treatment.id}
            sx={{
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Stack direction="row" spacing={1} alignItems="center">
                  <MedicationIcon color="primary" />
                  <Box>
                    <Typography fontWeight={600}>
                      {treatment.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {treatment.type}
                    </Typography>
                  </Box>
                </Stack>

                <Chip
                  label={treatment.status}
                  color={
                    treatment.status === "active"
                      ? "success"
                      : treatment.status === "completed"
                      ? "default"
                      : "warning"
                  }
                  size="small"
                  sx={{ textTransform: "lowercase" }}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={1}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Start Date
                  </Typography>
                  <Typography fontWeight={500}>
                    {treatment.startDate}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Dosage
                  </Typography>
                  <Typography fontWeight={500}>
                    {treatment.dosage}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Frequency
                  </Typography>
                  <Typography fontWeight={500}>
                    {treatment.frequency}
                  </Typography>
                </Box>

                <Box mt={1}>
                  <Typography variant="body2" color="text.secondary">
                    Notes
                  </Typography>
                  <Typography>
                    {treatment.notes}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* ===== Add Treatment Dialog ===== */}
      <AddTreatmentDialog
        open={openTreatmentDialog}
        onClose={() => setOpenTreatmentDialog(false)}
      />

      {/* ===== Schedule Appointment Dialog ===== */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Schedule Appointment</DialogTitle>

        <DialogContent>
          <TextField label="Patient Name" fullWidth margin="normal" />
          <TextField label="Doctor" fullWidth margin="normal" />
          <TextField
            type="datetime-local"
            label="Date & Time"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setOpenDialog(false)}
            sx={{ textTransform: "none" }}
          >
            Cancel
          </Button>
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Confirm Appointment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

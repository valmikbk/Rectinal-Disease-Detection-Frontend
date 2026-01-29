import React, {useState} from "react";
import {
  Box,
  Card,
  Typography,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TreatmentHeader from "./TreatmentHeader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import MedicareHeader from "../MedicareHeader";

const appointments = [
  {
    date: "February 1, 2026 at 06:30 PM",
    doctor: "Dr.Valmik",
    description: "Monthly follow-up appointment",
    status: ["scheduled", "follow-up"],
    icon: "pending"
  },
  {
    date: "December 29, 2025 at 07:30 PM",
    doctor: "Dr. Suresh",
    description: "Initial consultation and diagnosis",
    status: ["completed", "consultation"],
    icon: "completed"
  },
   {
    date: "November 20, 2026 at 03:00 PM",
    doctor: "Dr. Kavya",
    description: "Monthly follow-up appointment",
    status: ["completed", "consultation"],
    icon: "completed"
  },
  {
    date: "October 11, 2025 at 11:00 AM",
    doctor: "Dr. Valmik",
    description: "Initial consultation and diagnosis",
    status: ["completed", "consultation"],
    icon: "completed"
  },

];

const chipStyles = {
  scheduled: { bg: "#e0f2fe", color: "#075985" },
  completed: { bg: "#dcfce7", color: "#166534" },
  "follow-up": { bg: "#d1fae5", color: "#065f46" },
  consultation: { bg: "#e0e7ff", color: "#3730a3" }
};

export default function PatientAppointments() {
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false);

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

          {/* <Typography variant="h5" fontWeight={700} marginLeft={1}>
            James Wilson
          </Typography> */}
          <Typography color="text.secondary" fontSize={14} marginLeft={1}>
            Patient ID: P-001
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => setOpenDialog(true)}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 3
          }}
        >
          Schedule Appointment
        </Button>
      </Box>

      {/* ===== Pill Tabs ===== */}
      <TreatmentHeader />

    <Box sx={{ mt: 3 }}>
      {appointments.map((appt, index) => (
        <Card
          key={index}
          elevation={0}
          sx={{
            mb: 2,
            borderRadius: 3,
            border: "1px solid #e5e7eb",
            p: 2.5,
            ml:2,
            mr:2
          }}
        >
          <Box display="flex" justifyContent="space-between">
            {/* Left Section */}
            <Box display="flex" gap={2}>
              {appt.icon === "completed" ? (
                <CheckCircleIcon sx={{ color: "#16a34a", mt: 0.5 }} />
              ) : (
                <AccessTimeIcon sx={{ color: "#2563eb", mt: 0.5 }} />
              )}

              <Box>
                <Typography fontWeight={600} fontSize={14}>
                  {appt.date}
                </Typography>
                <Typography
                  fontSize={13}
                  color="text.secondary"
                  mt={0.3}
                >
                  {appt.doctor}
                </Typography>
                <Typography fontSize={13} mt={0.8}>
                  {appt.description}
                </Typography>
              </Box>
            </Box>

            {/* Right Chips */}
            <Box display="flex" gap={1} alignItems="flex-start">
              {appt.status.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: chipStyles[tag].bg,
                    color: chipStyles[tag].color,
                    fontWeight: 500,
                    textTransform: "lowercase"
                  }}
                />
              ))}
            </Box>
          </Box>
        </Card>
      ))}
    </Box>

<Dialog
  open={openDialog}
  onClose={() => setOpenDialog(false)}
  fullWidth
  maxWidth="sm"
>
  <DialogTitle>Schedule Appointment</DialogTitle>

  <DialogContent>
    <TextField
      label="Patient Name"
      fullWidth
      margin="normal"
    />
    <TextField
      label="Doctor"
      fullWidth
      margin="normal"
    />
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
    <Button
      variant="contained"
      sx={{ textTransform: "none" }}
    >
      Confirm Appointment
    </Button>
  </DialogActions>
</Dialog>
    </Box>
  );
}

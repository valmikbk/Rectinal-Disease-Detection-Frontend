import React, {useState} from "react";
import {
  Box,
  Card,
  CardContent,
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
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TreatmentHeader from './TreatmentHeader';
import { useNavigate } from "react-router-dom";
import MedicareHeader from "../MedicareHeader";

const timeline = [
  {
    title: "Treatment Response Assessment",
    status: "Improved",
    trend: "up",
    date: "December 18, 2025 at 06:34 PM",
    desc:
      "Patient showing positive response to therapy with hemorrhage reduction",
    tag: "follow-up",
    highlight: true
  },
  {
    title: "Specialist Consultation",
    date: "December 11, 2025 at 06:34 PM",
    desc:
      "Consultation with ophthalmologist for advanced retinopathy management",
    tag: "consultation"
  },
  {
    title: "Treatment Started",
    status: "Worsened",
    trend: "down",
    date: "December 4, 2025 at 06:34 PM",
    desc: "Anti-VEGF injection therapy initiated",
    tag: "treatment"
  },
  {
    title: "Initial Screening",
    date: "June 25, 2025 at 06:34 PM",
    desc:
      "Comprehensive retinal examination and AI analysis performed",
    tag: "screening"
  }
];

const tagStyle = {
  "follow-up": { bg: "#d1fae5", color: "#065f46" },
  consultation: { bg: "#e0e7ff", color: "#3730a3" },
  treatment: { bg: "#ffedd5", color: "#9a3412" },
  screening: { bg: "#e0f2fe", color: "#075985" }
};

export default function PatientJourney() {
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh",}}>
      {/* ===== Header ===== */}
      <MedicareHeader />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
          p:1
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

    <Card
      sx={{
        borderRadius: 3,
        border: "1px solid #e5e7eb",
        p: 2,
        mt: 5
      }}
      elevation={0}
    >
      {/* Header */}
      <Typography
        fontWeight={700}
        fontSize={16}
        display="flex"
        alignItems="center"
        gap={1}
        mb={3}
      >
        <AccessTimeIcon sx={{ color: "#2563eb" }} />
        Patient Journey Timeline
      </Typography>

      <Box sx={{ position: "relative", pl: 6 }}>
        {/* Vertical Line */}
        <Box
          sx={{
            position: "absolute",
            left: 26,
            top: 0,
            bottom: 0,
            width: "2px",
            // bgcolor: "#e5e7eb"
          }}
        />

        {timeline.map((item, idx) => (
          <Box
            key={idx}
            sx={{ display: "flex", mb: 3, position: "relative" }}
          >
            {/* Timeline Dot */}
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: "3px solid #2563eb",
                bgcolor: "#fff",
                position: "absolute",
                left: -2,
                top: 16
              }}
            />

            {/* Content Card */}
            <Card
              sx={{
                ml: 4,
                flex: 1,
                borderRadius: 2,
                border: "1px solid #e5e7eb",
                // bgcolor: item.highlight ? "#f8fafc" : "#fff"
              }}
              elevation={0}
            >
              <CardContent sx={{ p: 2.5 }}>
                {/* Title Row */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography fontWeight={600} fontSize={14}>
                      {item.title}
                    </Typography>

                    {item.status && (
                      <Box display="flex" alignItems="center" gap={0.5}>
                        {item.trend === "up" ? (
                          <TrendingUpIcon
                            fontSize="small"
                            sx={{ color: "#16a34a" }}
                          />
                        ) : (
                          <TrendingDownIcon
                            fontSize="small"
                            sx={{ color: "#dc2626" }}
                          />
                        )}
                        <Typography
                          fontSize={13}
                          fontWeight={500}
                          color={
                            item.trend === "up"
                              ? "#16a34a"
                              : "#dc2626"
                          }
                        >
                          {item.status}
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  {/* Tag */}
                  <Chip
                    label={item.tag}
                    size="small"
                    sx={{
                      bgcolor: tagStyle[item.tag].bg,
                      color: tagStyle[item.tag].color,
                      fontWeight: 500,
                      textTransform: "lowercase"
                    }}
                  />
                </Box>

                {/* Date */}
                <Typography
                  fontSize={12}
                  color="text.secondary"
                  mt={0.5}
                >
                  {item.date}
                </Typography>

                {/* Description */}
                <Typography fontSize={13} mt={1}>
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Card>

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

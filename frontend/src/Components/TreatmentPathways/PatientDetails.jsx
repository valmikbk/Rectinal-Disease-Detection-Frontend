import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TreatmentHeader from "./TreatmentHeader";
import { useNavigate } from "react-router-dom";
import MedicareHeader from "../MedicareHeader";

export default function PatientDetails() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const tabs = [
    { label: "Overview", count: null },
    { label: "Journey", count: null },
    { label: "Appointments", count: 2 },
    { label: "Medical Records", count: 2 },
    { label: "Treatments", count: 1 },
    { label: "Retinal Images", count: 0 }
  ];

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
          py:1
        }}
      >
        <Box >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{ textTransform: "none", color: "#475569", mb: 1, }}
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

      {/* <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              ml={3}
              
            >
              <Typography variant="h6" fontWeight={600}>
                Overview
              </Typography>
            </Box> */}

      {/* ===== Centered Content ===== */}
      {tab === 0 && (
        <Box sx={{ maxWidth: 1100, mx: "auto", mt:10 }}>
          <Grid container spacing={7}>
            {/* ===== Personal Information ===== */}
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, width: "520px" }}>
                <CardContent>
                  <Typography
                    fontWeight={700}
                    mb={2}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <PersonOutlineIcon fontSize="small" color="primary" />
                    Personal Information
                  </Typography>

                  <InfoRow
                    icon={<CalendarTodayOutlinedIcon />}
                    label="Date of Birth"
                    value="May 15, 1960 (65 years)"
                  />
                  <InfoRow
                    icon={<PersonOutlineIcon />}
                    label="Gender"
                    value="Male"
                  />
                  <InfoRow
                    icon={<PhoneOutlinedIcon />}
                    label="Phone"
                    value="+91 1234567890"
                  />
                  <InfoRow
                    icon={<EmailOutlinedIcon />}
                    label="Email"
                    value="visioncare@email.com"
                  />
                  <InfoRow
                    icon={<LocationOnOutlinedIcon />}
                    label="Address"
                    value="123 Kormangala, Bengaluru, Karnataka"
                  />
                </CardContent>
              </Card>
            </Grid>

            {/* ===== Clinical Status ===== */}
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3,  width: "520px" }}>
                <CardContent>
                  <Typography
                    fontWeight={700}
                    mb={2}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <InfoOutlinedIcon fontSize="small" color="primary" />
                    Clinical Status
                  </Typography>

                  <Typography fontSize={14} color="text.secondary">
                    Current Status
                  </Typography>
                  <Chip
                    label="treatment"
                    size="small"
                    sx={{
                      bgcolor: "#f3e8ff",
                      color: "#7c3aed",
                      mt: 0.5,
                      mb: 2
                    }}
                  />

                  <Typography fontSize={14} color="text.secondary">
                    AI Risk Classification
                  </Typography>
                  <Chip
                    label="high risk"
                    size="small"
                    sx={{
                      bgcolor: "#fff4e5",
                      color: "#ea580c",
                      mt: 0.5,
                      mb: 2
                    }}
                  />

                  <InfoText label="Initial Screening Date" value="June 25, 2025" />
                  <InfoText
                    label="Patient Record Created"
                    value="December 25, 2025"
                  />
                  <InfoText
                    label="Last Updated"
                    value="December 25, 2025"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
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

/* ===== Helper Components ===== */

function InfoRow({ icon, label, value }) {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <Box sx={{ color: "#64748b", mt: "2px" }}>{icon}</Box>
      <Box>
        <Typography fontSize={13} color="text.secondary">
          {label}
        </Typography>
        <Typography fontWeight={500}>{value}</Typography>
      </Box>
    </Box>
  );
}

function InfoText({ label, value }) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Typography fontSize={13} color="text.secondary">
        {label}
      </Typography>
      <Typography fontWeight={500}>{value}</Typography>
    </Box>
  );
}

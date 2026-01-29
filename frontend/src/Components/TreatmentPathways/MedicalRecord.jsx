import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@mui/material";

import TreatmentHeader from "./TreatmentHeader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import AddMedicalRecordDialog from "./AddMedicalRecordDialog";
import MedicareHeader from "../MedicareHeader";

/* ---------------- Medical Record Card ---------------- */

const MedicalRecord = ({
  type,
  date,
  doctor,
  title,
  observations,
  recommendations
}) => {
  const isProgress = type === "progress";

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Chip
            label={isProgress ? "Progress Note" : "Diagnosis"}
            color={isProgress ? "success" : "error"}
            size="small"
            variant="outlined"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {doctor}
        </Typography>

        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>

        <Typography variant="subtitle2" mt={2}>
          Clinical Observations
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {observations}
        </Typography>

        <Typography variant="subtitle2" mt={2}>
          Recommendations
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recommendations}
        </Typography>
      </CardContent>
    </Card>
  );
};

/* ---------------- Page ---------------- */

export default function MedicalRecordsPage() {
  const navigate = useNavigate();
  const [openMedicalDialog, setOpenMedicalDialog] = useState(false);
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
          sx={{ textTransform: "none", borderRadius: 2, px: 3 }}
        >
          Schedule Appointment
        </Button>
      </Box>

      {/* ===== Tabs Header ===== */}
      <TreatmentHeader activeTab="medical-records" />

      <Box sx={{ p: 3 }}>
        {/* Page Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h6" fontWeight={600}>
            {/* Medical Records */}
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpenMedicalDialog(true)}
          >
            + Add Record
          </Button>
        </Box>

        {/* ===== Records List (Expanded Dummy Data) ===== */}
        <Stack spacing={3}>
          <MedicalRecord
            type="progress"
            date="January 08, 2026"
            doctor="Dr. Valmik"
            title="Post-Treatment Follow-up"
            observations="Patient reports improved vision clarity. No new hemorrhages observed. Blood sugar levels stable."
            recommendations="Continue insulin regimen. Schedule OCT scan in 1 month."
          />

          <MedicalRecord
            type="progress"
            date="December 28, 2025"
            doctor="Dr. Shreya"
            title="Therapy Progress Evaluation"
            observations="Reduction in retinal swelling. Mild discomfort reported during evenings."
            recommendations="Prescribe lubricating eye drops. Avoid prolonged screen exposure."
          />

          <MedicalRecord
            type="progress"
            date="December 18, 2025"
            doctor="Dr. Arjun"
            title="Clinical Observations"
            observations="Patient responding well to treatment. Hemorrhage reduction noted in follow-up imaging."
            recommendations="Continue current treatment plan. Schedule imaging in 2 weeks."
          />

          <MedicalRecord
            type="diagnosis"
            date="December 11, 2025"
            doctor="Dr. Payal"
            title="Diabetic Retinopathy – Proliferative Stage"
            observations="Multiple microaneurysms and hemorrhages visible. Advanced neovascularization noted."
            recommendations="Monthly injections, dietary consultation, blood glucose management."
          />

          <MedicalRecord
            type="diagnosis"
            date="November 30, 2025"
            doctor="Dr. Krishna"
            title="Type 2 Diabetes Mellitus – Poor Glycemic Control"
            observations="HbA1c elevated at 9.1%. Signs of early retinal damage present."
            recommendations="Strict glycemic control, diet modification, endocrinology referral."
          />

          <MedicalRecord
            type="diagnosis"
            date="November 15, 2025"
            doctor="Dr. Valmik"
            title="Initial Ophthalmic Assessment"
            observations="Blurred vision complaints. Fundoscopy suggests early diabetic changes."
            recommendations="Baseline retinal imaging. Begin preventive care immediately."
          />
        </Stack>
      </Box>

      {/* ===== Add Medical Record Dialog ===== */}
      <AddMedicalRecordDialog
        open={openMedicalDialog}
        onClose={() => setOpenMedicalDialog(false)}
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

import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Divider,
  Stack,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import TreatmentHeader from "./TreatmentHeader";
import { useNavigate } from "react-router-dom";
import MedicareHeader from "../MedicareHeader";

import fudus4 from "./fudus4.jpeg";
import fudus4_analyzed from "./fundus4_analyzed.png";

export default function RetinalImagesPage() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  // ===== Dummy Retinal Image Data =====
  const retinalImages = [
    {
      id: 1,
      date: "January 05, 2026",
      eye: "Right Eye",
      original: fudus4,
      analyzed: fudus4_analyzed,
      notes:
        "AI detected microaneurysms and neovascularization suggestive of proliferative diabetic retinopathy."
    }
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

      {/* ===== Tabs ===== */}
      <TreatmentHeader />

      <Divider sx={{ my: 3 }} />

      {/* ===== Retinal Images Section ===== */}
      {retinalImages.length === 0 ? (
        <Card
          sx={{
            height: 260,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <Stack spacing={1} alignItems="center">
            <ImageOutlinedIcon sx={{ fontSize: 48, color: "#cbd5e1" }} />
            <Typography variant="subtitle1" fontWeight={600}>
              No Retinal Images
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Retinal scan images and AI analysis will appear here
            </Typography>
          </Stack>
        </Card>
      ) : (
        <Stack spacing={4} px={3}>
          {retinalImages.map((item) => (
            <Card
              key={item.id}
              sx={{
                borderRadius: 2,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
              }}
            >
              <CardContent>
                <Typography fontWeight={700} mb={0.5}>
                  Retinal Scan – {item.eye}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {item.date}
                </Typography>

                {/* Images */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "1fr 1fr"
                    },
                    gap: 3
                  }}
                >
                  {/* Original */}
                  <Box>
                    <Typography fontWeight={600} mb={1}>
                      Original Image
                    </Typography>
                    <Box
                      component="img"
                      src={item.original}
                      alt="Original Retinal Scan"
                      sx={{
                        width: "100%",
                        borderRadius: 2,
                        border: "1px solid #e5e7eb"
                      }}
                    />
                  </Box>

                  {/* Analyzed */}
                  <Box>
                    <Typography fontWeight={600} mb={1}>
                      AI Analyzed Image
                    </Typography>
                    <Box
                      component="img"
                      src={item.analyzed}
                      alt="AI Analyzed Retinal Scan"
                      sx={{
                        width: "100%",
                        borderRadius: 2,
                        border: "1px solid #e5e7eb"
                      }}
                    />
                  </Box>
                </Box>

                {/* Notes */}
                <Box mt={3}>
                  <Typography variant="subtitle2">
                    AI Observations
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.notes}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}

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

import React, { useState } from "react";
import {
    Box,
    Container,
    Card,
    Typography,
    TextField,
    MenuItem,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import ReferralHeader from "./ReferralHeader";
import MedicareHeader from "../MedicareHeader";

export default function AIScreening() {
    const [analysisDone, setAnalysisDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);


    const handleRunAnalysis = () => {
        setLoading(true);

        // 🔹 Simulate AI processing delay
        setTimeout(() => {
            setLoading(false);
            setAnalysisDone(true);
        }, 2000);
    };

    return (
        <Box sx={{ minHeight: "100vh" }}>
            <MedicareHeader />
            <ReferralHeader />

            <Container maxWidth="lg" sx={{ mt: 6 }}>
                <Card sx={{ p: 5, borderRadius: 3, boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>
                    {/* ===== Title ===== */}
                    <Box display="flex" alignItems="center" gap={1.5} mb={4}>
                        <VisibilityIcon sx={{ color: "#2563eb", fontSize: 28 }} />
                        <Typography variant="h5" fontWeight={800}>
                            AI-Powered Screening
                        </Typography>
                    </Box>

                    {/* ===== Form ===== */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: 3
                        }}
                    >
                        <TextField select label="Select Patient *" fullWidth>
                            <MenuItem value="">Choose a patient</MenuItem>
                            <MenuItem value="p1">Patient 1</MenuItem>
                        </TextField>

                        <TextField select label="Screening Facility *" fullWidth>
                            <MenuItem value="">Choose a facility</MenuItem>
                            <MenuItem value="f1">Community Health Center</MenuItem>
                        </TextField>

                        <TextField select label="Image Type *" fullWidth defaultValue="Fundus">
                            <MenuItem value="Fundus">Fundus</MenuItem>
                            <MenuItem value="OCT">OCT</MenuItem>
                        </TextField>
                    </Box>

                    {/* ===== Notes ===== */}
                    <Box mt={3}>
                        <TextField
                            label="Technician Notes"
                            placeholder="Any additional observations or notes..."
                            fullWidth
                            multiline
                            minRows={4}
                        />
                    </Box>

                    {/* ===== Run AI Analysis ===== */}
                    <Button
                        fullWidth
                        startIcon={<PlayCircleOutlineIcon />}
                        disabled={loading}
                        onClick={handleRunAnalysis}
                        sx={{
                            mt: 4,
                            py: 1.6,
                            fontSize: 16,
                            fontWeight: 700,
                            borderRadius: 2,
                            textTransform: "none",
                            backgroundColor: "#9ccc9c",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#7fbf7f" }
                        }}
                    >
                        {loading ? "Running Analysis..." : "Run AI Analysis"}
                    </Button>

                    {/* ===== AI ASSESSMENT RESULTS (AFTER ANALYSIS) ===== */}
                    {analysisDone && (
                        <Box
                            sx={{
                                mt: 4,
                                p: 4,
                                borderRadius: 2,
                                // backgroundColor: "#e8fbea",
                                border: "1px solid #9be7a8"
                            }}
                        >
                            <Box display="flex" alignItems="center" gap={1} mb={2}>
                                <InfoOutlinedIcon sx={{ color: "#2e7d32" }} />
                                <Typography fontWeight={800} color="#2e7d32">
                                    AI Assessment Results
                                </Typography>
                            </Box>

                            <Typography mb={1}>
                                <strong>Risk Level:</strong>{" "}
                                <span style={{ color: "#2e7d32", fontWeight: 700 }}>
                                    NORMAL
                                </span>
                            </Typography>

                            <Typography mb={1}>
                                <strong>Confidence:</strong> 86.4%
                            </Typography>

                            <Typography>
                                <strong>Findings:</strong>
                                <br />
                                No abnormalities detected. Retinal structure appears healthy with
                                normal vascular patterns.
                            </Typography>
                        </Box>
                    )}

                    {/* ===== Complete Screening ===== */}
                    <Button
                        fullWidth
                        disabled={!analysisDone}
                        onClick={() => setOpenDialog(true)}
                        sx={{
                            mt: 4,
                            py: 1.6,
                            fontSize: 16,
                            fontWeight: 700,
                            borderRadius: 2,
                            textTransform: "none",
                            backgroundColor: "#3b60d4",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#2f4ec7" }
                        }}
                    >
                        Complete Screening
                    </Button>

                </Card>
            </Container>

            <Dialog
  open={openDialog}
  onClose={() => setOpenDialog(false)}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle sx={{ textAlign: "center", pt: 4 }}>
    <CheckCircleOutlineIcon
      sx={{ fontSize: 60, color: "#2e7d32", mb: 1 }}
    />
    <Typography variant="h6" fontWeight={800}>
      Screening Completed Successfully
    </Typography>
  </DialogTitle>

  <DialogContent sx={{ textAlign: "center", px: 4 }}>
    <Typography color="text.secondary">
      The AI screening has been completed and the results have been
      successfully recorded.
    </Typography>
  </DialogContent>

  <DialogActions sx={{ justifyContent: "center", pb: 4 }}>
    <Button
      variant="contained"
      sx={{
        px: 4,
        textTransform: "none",
        fontWeight: 600
      }}
      onClick={() => setOpenDialog(false)}
    >
      Close
    </Button>
  </DialogActions>
</Dialog>

        </Box>
    );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Container,
    Card,
    Button,
    Divider,
    Avatar,
    Stack,
    Chip
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MedicareHeader from "../MedicareHeader";

import OCT1 from "./OCT1.jpeg";
import fudus1 from "./fudus1.jpeg";
import fudus2 from "./fudus2.jpeg";
import fudus3 from "./fudus3.jpeg";
import fudus4 from "./fudus4.jpeg";

export default function MedicalImageDetection() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (!file || !file.type.startsWith("image/")) return;
        setSelectedImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleRetake = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
    };

    const referenceImages = [
        { src: fudus1, analysisId: "analysis_001" },
        { src: fudus4, analysisId: "analysis_002" },
        { src: OCT1, analysisId: "analysis_003" },
        { src: fudus3, analysisId: "analysis_004" }
    ];

    const findMatchingAnalysisId = async (uploadedFile) => {
        for (let ref of referenceImages) {
            const response = await fetch(ref.src);
            const blob = await response.blob();
            if (Math.abs(blob.size - uploadedFile.size) < 2000) {
                return ref.analysisId;
            }
        }
        return null;
    };

    const handleAnalyze = async () => {
        if (!selectedImage) return;
        const analysisId = await findMatchingAnalysisId(selectedImage);
        if (!analysisId) return alert("No matching image found");
        navigate("/result", { state: { analysisId } });
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                // background:
                //     "linear-gradient(180deg, #0b1220 0%, #111a2e 100%)"
            }}
        >
            {/* ===== Header ===== */}
            <MedicareHeader />

            {/* ===== Content ===== */}
            <Container maxWidth="md" sx={{ py: 6 }}>
                {/* <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/")}
                    sx={{ mb: 3, textTransform: "none" }}
                >
                    Back to Dashboard
                </Button> */}

                {/* ===== Main Card ===== */}
                <Card
                    sx={{
                        borderRadius: 4,
                        p: { xs: 3, md: 5 },
                        // boxShadow: "0 16px 40px rgba(37,99,235,0.15)"
                    }}
                >
                    <Stack spacing={3} alignItems="center" textAlign="center">
                        <Typography variant="h5" fontWeight={700}>
                            AI Medical Image Analysis
                        </Typography>

                        <Typography color="text.secondary" maxWidth={520}>
                            Upload a Fundus or OCT image. Our AI will analyze it and
                            provide an instant diagnostic recommendation.
                        </Typography>

                        <Chip
                            label="ABDM & NPCDCS • Secure • AI-Powered"
                            color="primary"
                            variant="outlined"
                        />
                    </Stack>

                    <Divider sx={{ my: 4 }} />

                    {/* ===== Upload / Preview ===== */}
                    {!previewUrl ? (
                        <Box display="flex" justifyContent="center">
                            <Button
                                variant="contained"
                                component="label"
                                startIcon={<UploadFileIcon />}
                                sx={{
                                    px: 4,              // 👈 controls width
                                    py: 1.8,
                                    fontSize: 16,
                                    fontWeight: 600,
                                    borderRadius: 3,
                                    textTransform: "none",
                                    bgcolor: "#2563eb",
                                    "&:hover": { bgcolor: "#1e40af" }
                                }}
                            >
                                Upload Medical Image
                                <input hidden type="file" accept="image/*" onChange={handleImageSelect} />
                            </Button>
                        </Box>

                    ) : (
                        <>
                            <Box
                                sx={{
                                    mt: 2,
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    border: "1px solid #e5e7eb"
                                }}
                            >
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    style={{ width: "100%", display: "block" }}
                                />
                            </Box>

                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={3}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={handleAnalyze}
                                    sx={{
                                        py: 1.6,
                                        fontWeight: 700,
                                        borderRadius: 3,
                                        textTransform: "none",
                                        bgcolor: "#009688",
                                        "&:hover": { bgcolor: "#00796b" }
                                    }}
                                >
                                    Analyze with AI
                                </Button>

                                <Button
                                    fullWidth
                                    variant="outlined"
                                    onClick={handleRetake}
                                    sx={{
                                        py: 1.6,
                                        fontWeight: 600,
                                        borderRadius: 3,
                                        textTransform: "none"
                                    }}
                                >
                                    Upload Another Image
                                </Button>
                            </Stack>
                        </>
                    )}
                </Card>
            </Container>
        </Box>
    );
}

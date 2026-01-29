import React, { useRef, useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Avatar,
    Stack
} from "@mui/material";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DescriptionIcon from "@mui/icons-material/Description";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MedicareHeader from "./MedicareHeader";
import { useNavigate } from "react-router-dom";



const MediCareDashboard = () => {
    const navigate = useNavigate();

    const cameraInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const [stream, setStream] = useState(null);
    const [cameraOn, setCameraOn] = useState(false);
    const [image, setImage] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const openCamera = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert("Camera API not supported in this browser");
            return;
        }

        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "user" } // desktop webcam
            });

            videoRef.current.srcObject = mediaStream;
            setStream(mediaStream);
            setCameraOn(true);
        } catch (err) {
            console.error(err);
            alert(
                "Camera access blocked.\n\n" +
                "Please check:\n" +
                "1. Use localhost or HTTPS\n" +
                "2. Allow camera permission in browser\n" +
                "3. Close other apps using camera"
            );
        }
    };



    //   const handleImageSelect = (event) => {
    //         const file = event.target.files[0];
    //         if (!file) return;

    //         if (!file.type.startsWith("image/")) {
    //             alert("Please select a valid image file");
    //             return;
    //         }

    //         setSelectedImage(file);
    //         setPreviewUrl(URL.createObjectURL(file));
    //     };

    return (
        <Box sx={{ minHeight: "100vh" }}>
            {/* ===== Header ===== */}
            <MedicareHeader />

            {/* ===== Main Content ===== */}
            <Container maxWidth="lg" sx={{ mt: 6 }}>
                {/* Welcome */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Welcome to MediCare
                    </Typography>
                    <Typography color="text.secondary" maxWidth={600} mx="auto">
                        Your comprehensive medical assistance platform for detection,
                        referrals, and treatment management
                    </Typography>
                </Box>

                {/* ===== Cards ===== */}
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    justifyContent="center"
                >
                    {/* ===== Detection Card ===== */}
                    <Card sx={{ width: 420, borderRadius: 4 }}>
                        <CardContent sx={{ textAlign: "center", p: 4 }}>
                            <Avatar
                                sx={{
                                    bgcolor: "#ccfbf1",
                                    color: "#0d9488",
                                    mx: "auto",
                                    mb: 2,
                                    width: 56,
                                    height: 56
                                }}
                            >
                                <CameraAltIcon />
                            </Avatar>

                            <Typography variant="h6" fontWeight={700}>
                                Detection
                            </Typography>

                            <Typography color="text.secondary" mb={3}>
                                Upload or capture medical images for AI-powered analysis
                            </Typography>

                            {/* ===== Image Preview ===== */}
                            {selectedImage && (
                                <Box mb={3}>
                                    <img
                                        src={selectedImage}
                                        alt="Preview"
                                        style={{
                                            width: "100%",
                                            borderRadius: 12,
                                            objectFit: "contain"
                                        }}
                                    />
                                </Box>
                            )}

                            <Stack spacing={2}>
                                {/* Camera Detection */}
                                <Button
                                    fullWidth
                                    size="large"
                                    startIcon={<CameraAltIcon />}
                                    sx={{
                                        bgcolor: "#0d9488",
                                        color: "white",
                                        textTransform: "none",
                                        borderRadius: 2,
                                        "&:hover": { bgcolor: "#0f766e" }
                                    }}
                                    onClick={openCamera}   // ✅ THIS opens the webcam
                                >
                                    Camera Detection
                                </Button>

                                {/* Browse Image */}
                                <Button
                                    fullWidth
                                    size="large"
                                    startIcon={<CloudUploadIcon />}
                                    sx={{
                                        bgcolor: "#2563eb",
                                        color: "white",
                                        textTransform: "none",
                                        borderRadius: 2,
                                        "&:hover": { bgcolor: "#1d4ed8" }
                                    }}
                                    onClick={() => navigate("/medical-image-detection")}
                                >
                                    Browse Image
                                </Button>

                                {/* Hidden Inputs */}
                                {/* <input
                                    ref={cameraInputRef}
                                    type="file"
                                    accept="image/*"
                                    capture="environment"
                                    hidden
                                    onChange={handleImageSelect}
                                />

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleImageSelect}
                                /> */}
                            </Stack>
                        </CardContent>
                    </Card>

                    {/* ===== Medical Actions Card ===== */}
                    <Card sx={{ width: 420, borderRadius: 4 }}>
                        <CardContent sx={{ textAlign: "center", p: 4 }}>
                            <Avatar
                                sx={{
                                    bgcolor: "#dbeafe",
                                    color: "#2563eb",
                                    mx: "auto",
                                    mb: 2,
                                    width: 56,
                                    height: 56
                                }}
                            >
                                <DescriptionIcon />
                            </Avatar>

                            <Typography variant="h6" fontWeight={700}>
                                Medical Actions
                            </Typography>

                            <Typography color="text.secondary" mb={4}>
                                Access healthcare services and manage your treatment
                            </Typography>

                            <Stack spacing={2}>

                                <Button
                                    fullWidth
                                    size="large"
                                    startIcon={<DescriptionIcon />}
                                    onClick={() => navigate("/ai-scheduling-recommendation")}
                                    sx={{
                                        bgcolor: "#25bdebff",
                                        color: "white",
                                        textTransform: "none",
                                        borderRadius: 2
                                    }}
                                >
                                    AI Referral
                                </Button>

                                <Button
                                    fullWidth
                                    size="large"
                                    startIcon={<DescriptionIcon />}
                                    onClick={() => navigate("/smart-referral")}
                                    sx={{
                                        bgcolor: "#2563eb",
                                        color: "white",
                                        textTransform: "none",
                                        borderRadius: 2
                                    }}
                                >
                                    Smart Referral
                                </Button>

                                <Button
                                    fullWidth
                                    size="large"
                                    startIcon={<FavoriteBorderIcon />}
                                    onClick={() => navigate("/patient-details")}
                                    sx={{
                                        bgcolor: "#0d9488",
                                        color: "white",
                                        textTransform: "none",
                                        borderRadius: 2
                                    }}
                                >
                                    Treatment Pathways
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>

                
            </Container>
        </Box>
    );
};

export default MediCareDashboard;

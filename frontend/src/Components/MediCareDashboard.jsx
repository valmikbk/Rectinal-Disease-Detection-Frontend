import React from "react";
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

const MediCareDashboard = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f6fdfb" }}>
      {/* Header */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "#ffffff", borderBottom: "1px solid #e0e0e0" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ bgcolor: "#0d9488" }}>
              <MedicalServicesIcon />
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight={700} color="black">
                MediCare
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Medical Assistance Platform
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="right">
              <Typography fontWeight={600}>sushil</Typography>
              <Typography variant="caption" color="text.secondary">
                Patient
              </Typography>
            </Box>
            <Button
              startIcon={<LogoutIcon />}
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Sign Out
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
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

        {/* Cards */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
        >
          {/* Detection Card */}
          <Card
            sx={{
              width: 420,
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
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

              <Typography variant="h6" fontWeight={700} gutterBottom>
                Detection
              </Typography>

              <Typography color="text.secondary" mb={4}>
                Upload or capture medical images for AI-powered analysis
              </Typography>

              <Stack spacing={2}>
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
                >
                  Camera Detection
                </Button>
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
                >
                  Browse Image
                </Button>
              </Stack>
            </CardContent>
          </Card>

          {/* Medical Actions Card */}
          <Card
            sx={{
              width: 420,
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
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

              <Typography variant="h6" fontWeight={700} gutterBottom>
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
                  sx={{
                    bgcolor: "#2563eb",
                    color: "white",
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": { bgcolor: "#1d4ed8" }
                  }}
                >
                  Smart Referral
                </Button>

                <Button
                  fullWidth
                  size="large"
                  startIcon={<FavoriteBorderIcon />}
                  sx={{
                    bgcolor: "#0d9488",
                    color: "white",
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": { bgcolor: "#0f766e" }
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
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Card,
  CardContent,
  Avatar,
  Stack
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const TreatmentPathways = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f7f9fb" }}>
      {/* HEADER */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "#ffffff", borderBottom: "1px solid #e5e7eb" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
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
              sx={{ textTransform: "none", color: "#111827" }}
            >
              Sign Out
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* CONTENT */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* BACK */}
        <Button
          startIcon={<ArrowBackIcon />}
          sx={{ textTransform: "none", mb: 3, color: "#374151" }}
        >
          Back to Home
        </Button>

        {/* TREATMENT PATHWAYS CARD */}
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
          }}
        >
          <CardContent sx={{ p: 5 }}>
            {/* TITLE */}
            <Stack direction="row" spacing={1.5} alignItems="center" mb={6}>
              <ShowChartIcon sx={{ color: "#0d9488" }} />
              <Typography variant="h5" fontWeight={700}>
                Treatment Pathways
              </Typography>
            </Stack>

            {/* EMPTY STATE */}
            <Box
              sx={{
                textAlign: "center",
                py: 8
              }}
            >
              <ShowChartIcon
                sx={{
                  fontSize: 48,
                  color: "#9ca3af",
                  mb: 2
                }}
              />
              <Typography variant="h6" fontWeight={700} mb={1}>
                No Treatment Pathways Yet
              </Typography>
              <Typography color="text.secondary">
                Your treatment plans will appear here once created by your
                doctor.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default TreatmentPathways;

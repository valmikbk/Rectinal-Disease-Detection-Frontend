import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  FormControl,
  Avatar,
  Stack,
  Divider
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const SmartReferral = () => {
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Karnataka");
  const [district, setDistrict] = useState("Mysuru");

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f7f9fb" }}>
      {/* HEADER */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "#fff", borderBottom: "1px solid #e5e7eb" }}
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

        {/* SMART REFERRAL CARD */}
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            mb: 5
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight={700} mb={4}>
              Smart Referral
            </Typography>

            <Grid container spacing={3}>
              {/* Country */}
              <Grid item xs={12} md={4}>
                <Typography fontWeight={600} mb={1}>
                  Country
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* State */}
              <Grid item xs={12} md={4}>
                <Typography fontWeight={600} mb={1}>
                  State
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <MenuItem value="Karnataka">Karnataka</MenuItem>
                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* District */}
              <Grid item xs={12} md={4}>
                <Typography fontWeight={600} mb={1}>
                  District
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    <MenuItem value="Mysuru">Mysuru</MenuItem>
                    <MenuItem value="Bengaluru">Bengaluru</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* RESULTS SECTION */}
        <Grid container spacing={6}>
          {/* Hospitals */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={700} mb={1}>
              Hospitals
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography color="text.secondary">
              No hospitals found in this area.
            </Typography>
          </Grid>

          {/* Doctors */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={700} mb={1}>
              Doctors
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography color="text.secondary">
              No doctors found in this area.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SmartReferral;

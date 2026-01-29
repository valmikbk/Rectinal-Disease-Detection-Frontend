import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Card,
  Tabs,
  Tab,
  Divider,
  TextField,
  MenuItem,
  Button
} from "@mui/material";

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ReferralHeader from "./ReferralHeader";
import MedicareHeader from "../MedicareHeader";

export default function RegisterPatient() {
  const [tab, setTab] = React.useState(1);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* ================= HEADER ================= */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#fff", color: "#000" }}>
        <MedicareHeader />

        <Divider />

        {/* ================= TABS ================= */}
        <ReferralHeader tab={tab} setTab={setTab} />

      </AppBar>

      {/* ================= CONTENT ================= */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Card
          sx={{
            p: 5,
            borderRadius: 3,
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
          }}
        >
          {/* Title */}
          <Box display="flex" alignItems="center" gap={1.5} mb={4}>
            <PersonAddAltIcon sx={{ color: "#2563eb", fontSize: 28 }} />
            <Typography variant="h5" fontWeight={800}>
              Patient Registration
            </Typography>
          </Box>

          {/* ================= FORM ================= */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3
            }}
          >
            <TextField label="First Name *" fullWidth />
            <TextField label="Last Name *" fullWidth />

            <TextField
              label="Date of Birth *"
              placeholder="dd/mm/yyyy"
              fullWidth
              InputProps={{
                endAdornment: <CalendarTodayIcon fontSize="small" />
              }}
            />

            <TextField
              select
              label="Gender *"
              fullWidth
              defaultValue="Male"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <TextField label="Phone *" fullWidth />
            <TextField label="Email" fullWidth />

            {/* Address full width */}
            <Box sx={{ gridColumn: "1 / -1" }}>
              <TextField
                label="Address"
                fullWidth
                multiline
                minRows={3}
              />
            </Box>
          </Box>

          {/* ================= SUBMIT BUTTON ================= */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              py: 1.6,
              fontSize: 16,
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              backgroundColor: "#2563eb",
              "&:hover": {
                backgroundColor: "#1e40af"
              }
            }}
          >
            Register Patient
          </Button>
        </Card>
      </Container>
    </Box>
  );
}

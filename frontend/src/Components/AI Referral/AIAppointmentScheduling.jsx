import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

export default function AIAppointmentScheduling() {
    const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "white" }}>
      <Grid container minHeight="100vh">
        {/* LEFT SIDEBAR */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            bgcolor: "white",
            color: "black",
            p: 4,
            display: { xs: "none", md: "block" }
          }}
        >
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Smart Features
          </Typography>

          <Stack spacing={2} mt={3}>
            <Feature
              title="Automatic Location Detection"
              desc="Detects your GPS location automatically"
            />
            <Feature
              title="Proximity Search"
              desc="Finds nearby hospitals using distance calculations"
            />
            <Feature
              title="AI Symptom Analysis"
              desc="Matches symptoms to the right specialty"
            />
            <Feature
              title="Intelligent Ranking"
              desc="Ranks doctors by urgency, distance, and availability"
            />
            <Feature
              title="Real-Time Availability"
              desc="Only shows open appointment slots"
            />
          </Stack>
        </Grid>

        {/* RIGHT CONTENT */}
        <Grid item xs={12} md={8} sx={{ bgcolor: "#f5f8ff" }}>
          <Container maxWidth="sm" sx={{ py: 6 }}>
            <Typography variant="h4" fontWeight={700} textAlign="center">
              AI-Powered Appointment Scheduling
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              mt={1}
              mb={4}
            >
              Get connected to the right doctor at the right time, instantly
            </Typography>

            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                border: "1px solid #e0e6f0"
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={3}>
                Tell us about your visit
              </Typography>

              <Stack spacing={2.5}>
                <TextField label="Your Name" placeholder="John Doe" fullWidth />

                <TextField
                  label="Phone Number"
                  placeholder="+91 xxxxxxxxxx"
                  fullWidth
                />

                <TextField
                  label="Email (Optional)"
                  placeholder="abc@example.com"
                  fullWidth
                />

                <TextField
                  label="Symptoms or Reason for Visit"
                  placeholder="Describe your symptoms..."
                  multiline
                  minRows={4}
                  fullWidth
                />

                <TextField select label="Urgency Level" fullWidth>
                  <MenuItem value="low">Low – Routine checkup</MenuItem>
                  <MenuItem value="medium">
                    Medium – Soon as possible
                  </MenuItem>
                  <MenuItem value="high">High – Need attention today</MenuItem>
                  <MenuItem value="emergency">
                    Emergency – Urgent care needed
                  </MenuItem>
                </TextField>

                <Button
                  size="large"
                  variant="contained"
                  startIcon={<SendIcon />}
                  onClick={() => navigate("/ai-scheduling-recommendation")}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600
                  }}
                >
                  Schedule Appointment with AI
                </Button>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign="center"
                >
                  We'll detect your location and find the best nearby hospitals
                </Typography>
              </Stack>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

function Feature({ title, desc }) {
  return (
    <Box>
      <Typography fontWeight={600}>{title}</Typography>
      <Typography variant="body2" color="rgba(255,255,255,0.7)">
        {desc}
      </Typography>
    </Box>
  );
}
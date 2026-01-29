import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Button,
  Divider,
  Avatar
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function Analyze() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
      {/* ================= HEADER ================= */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar sx={{ bgcolor: "#4caf93" }}>+</Avatar>
            <Box>
              <Typography fontWeight={700}>MediCare</Typography>
              <Typography variant="caption" color="text.secondary">
                Medical Assistance Platform
              </Typography>
            </Box>
          </Box>

          <Box textAlign="right">
            <Typography fontWeight={600}>sushil</Typography>
            <Typography variant="caption" color="text.secondary">
              Patient
            </Typography>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>

      {/* ================= CONTENT ================= */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          sx={{ textTransform: "none", mb: 3 }}
        >
          Back to Home
        </Button>

        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight={700} mb={3}>
              Medical Image Detection
            </Typography>

            {/* ================= IMAGE PREVIEW ================= */}
            <Box
              sx={{
                width: "100%",
                height: 360,
                borderRadius: 2,
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                mb: 4
              }}
            >
              {image ? (
                <img
                  src={image}
                  alt="Medical Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }}
                />
              ) : (
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<UploadFileIcon />}
                  sx={{
                    px: 4,
                    py: 1.4,
                    fontSize: 16,
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: 2,
                    backgroundColor: "#2563eb",
                    "&:hover": { backgroundColor: "#1e40af" }
                  }}
                >
                  Choose Image
                  <input hidden type="file" accept="image/*" onChange={handleImageUpload} />
                </Button>
              )}
            </Box>

            {/* ================= ACTION BUTTONS ================= */}
            {image && (
              <Box display="flex" gap={2}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    py: 1.6,
                    fontWeight: 700,
                    borderRadius: 2,
                    textTransform: "none",
                    backgroundColor: "#009688",
                    "&:hover": { backgroundColor: "#00796b" }
                  }}
                >
                  Analyze Image
                </Button>

                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => setImage(null)}
                  sx={{
                    py: 1.6,
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: "none",
                    color: "#555",
                    borderColor: "#ccc"
                  }}
                >
                  Retake
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

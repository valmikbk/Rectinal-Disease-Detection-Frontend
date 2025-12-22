import React, { useRef, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Divider,
  Chip
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TimelineIcon from '@mui/icons-material/Timeline';

function Main() {
  const videoRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Start camera
  const handleCamera = async () => {
    setImageSrc(null); // Clear image if previously selected
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Cannot access camera. Please allow permissions.');
    }
  };

  // Browse image
  const handleBrowse = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        if (videoRef.current) {
          videoRef.current.srcObject = null; // Stop camera feed
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        height: '100vh',
        backgroundColor: '#f4f7fb',
        p: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant="h5" fontWeight={600} mb={3}>
        Clinical Decision Support
      </Typography>

      {/* FLEX CONTAINER FOR LEFT AND RIGHT PANELS */}
      <Box sx={{ display: 'flex', flexGrow: 1, gap: 2 }}>
        {/* LEFT PANEL – MORE SPACE */}
        <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, flexGrow: 1 }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Patient Data Acquisition
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: 'flex', flexGrow: 1, gap: 2 }}>
                {/* Left Column – Actions */}
                <Stack spacing={2} sx={{ width: '25%' }}>
                  <Button
                    variant="contained"
                    startIcon={<CameraAltIcon />}
                    sx={{ textTransform: 'none' }}
                    fullWidth
                    onClick={handleCamera}
                  >
                    Select Camera
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<UploadFileIcon />}
                    sx={{ textTransform: 'none' }}
                    fullWidth
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleBrowse}
                      id="browse-file"
                    />
                    <label htmlFor="browse-file" style={{ cursor: 'pointer', width: '100%' }}>
                      Browse Image
                    </label>
                  </Button>
                </Stack>

                {/* Right Column – Live Data */}
                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Chip label="Live" color="success" sx={{ fontWeight: 600 }} />
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      borderRadius: 2,
                      border: '1px solid #d0d7e2',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    {imageSrc ? (
                      <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    ) : (
                      <video ref={videoRef} style={{ width: '100%', height: '100%' }} />
                    )}
                    {!imageSrc && !videoRef.current?.srcObject && (
                      <Typography color="text.secondary" textAlign="center">
                        Live Patient Imaging / Data Stream
                      </Typography>
                    )}
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* RIGHT PANEL – LESS SPACE */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocalHospitalIcon color="primary" />
              <Typography variant="subtitle1" fontWeight={600}>
                Smart Referral
              </Typography>
            </Stack>
          </Card>

          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <TimelineIcon color="primary" />
              <Typography variant="subtitle1" fontWeight={600}>
                Treatment Pathway
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;

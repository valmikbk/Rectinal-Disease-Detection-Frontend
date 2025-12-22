import {
  Box,
  Button,
  Typography,
  Stack
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UploadIcon from "@mui/icons-material/Upload";

export default function DetectionPanel() {
  return (
    <Box p={6} bgcolor="#f5fafa" height="100%">
      <Typography variant="h5" gutterBottom>
        Medical Image Detection
      </Typography>

      <Stack spacing={3}>
        <Button
          variant="contained"
          startIcon={<CameraAltIcon />}
        >
          Camera Detection
        </Button>

        <Button
          variant="outlined"
          startIcon={<UploadIcon />}
          component="label"
        >
          Browse Image
          <input hidden type="file" />
        </Button>

        {/* AI Result Placeholder */}
        <Box mt={4}>
          <Typography variant="subtitle1">
            Possible Condition: Skin Infection
          </Typography>
          <Typography variant="body2">
            Confidence Score: 87%
          </Typography>

          <Stack direction="row" spacing={2} mt={2}>
            <Button href="/referral" variant="contained">
              Smart Referral
            </Button>
            <Button href="/treatment" variant="outlined">
              Treatment Pathway
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
import { Box, Button, Typography, Stack } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function MedicalActions() {
  return (
    <Box p={6} height="100%" display="flex" alignItems="center">
      <Stack spacing={4} width="100%">
        <Typography variant="h5">
          Medical Services
        </Typography>

        <Button
          size="large"
          startIcon={<LocalHospitalIcon />}
          variant="contained"
          href="/referral"
        >
          Smart Referral
        </Button>

        <Button
          size="large"
          startIcon={<TimelineIcon />}
          variant="outlined"
          href="/treatment"
        >
          Treatment Pathways
        </Button>
      </Stack>
    </Box>
  );
}
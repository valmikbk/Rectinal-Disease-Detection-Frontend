import {
  Card, CardContent, Typography, Divider, Stack, Chip
} from "@mui/material";

export default function PatientCaseRecord() {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">
          Unified Patient Case Record
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography><b>Clinical Records</b></Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip label="Baseline Fundus" />
          <Chip label="Follow-Up OCT" />
          <Chip label="AI Progression Report" />
        </Stack>

        <Typography><b>Doctor’s Notes</b></Typography>
        <Typography sx={{ mb: 2 }}>
          DR progression noted. Anti-VEGF initiated. Monitor monthly.
        </Typography>

        <Typography><b>Medications & Procedures</b></Typography>
        <Typography>
          Anti-VEGF Injection – 2 doses completed<br/>
          Laser Therapy – Not required<br/>
          Medication – As prescribed
        </Typography>
      </CardContent>
    </Card>
  );
}
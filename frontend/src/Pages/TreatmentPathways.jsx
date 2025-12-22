import { Box, Typography, List, ListItem } from "@mui/material";

export default function TreatmentPathways() {
  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Treatment Pathway
      </Typography>

      <Typography variant="subtitle1">
        Diagnosis: Skin Infection (Moderate)
      </Typography>

      <List>
        <ListItem>Medicine: Antibiotic – 7 Days</ListItem>
        <ListItem>Apply Ointment – Twice Daily</ListItem>
        <ListItem>Next Appointment: 10 Oct 2025</ListItem>
      </List>
    </Box>
  );
}
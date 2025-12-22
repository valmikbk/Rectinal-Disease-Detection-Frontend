import { Card, CardContent, Button, Typography } from "@mui/material";

export default function HospitalCard() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          City Care Hospital
        </Typography>
        <Typography variant="body2">
          Private • Dermatology
        </Typography>
        <Typography variant="body2">
          Estimated Cost: ₹1500
        </Typography>
        <Button variant="outlined" sx={{ mt: 2 }}>
          View Schedule
        </Button>
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, Button, Typography } from "@mui/material";

export default function DoctorCard() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          Dr. Anil Sharma
        </Typography>
        <Typography variant="body2">
          MD Dermatology • 12 Years
        </Typography>
        <Typography variant="body2">
          Fee: ₹500
        </Typography>
        <Button variant="outlined" sx={{ mt: 2 }}>
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
}
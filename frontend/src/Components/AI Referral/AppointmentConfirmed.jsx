import React from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Divider,
    Button,
    Stack,
    Chip
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate, useLocation } from "react-router-dom";
import MedicareHeader from "../MedicareHeader";

const DetailRow = ({ label, value }) => (
    <>
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5
            }}
        >
            <Typography color="text.secondary">{label}</Typography>
            <Typography fontWeight={600}>{value}</Typography>
        </Box>
        <Divider />
    </>
);

const AppointmentConfirmed = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const appointment = location.state?.appointment;

    if (!appointment) {
  navigate("/ai-scheduling-recommendation");
  return null;
}


    return (
        <Box
            sx={{
                minHeight: "100vh",
                // background: "linear-gradient(180deg, #f5f9ff 0%, #eef3fb 100%)",
                
            }}
        >
            <MedicareHeader />

            <Container maxWidth="md">
                {/* Header */}
                <Stack spacing={1} alignItems="center" mb={5}>
                    <Typography variant="h4" fontWeight={700}>
                        AI-Powered Appointment Scheduling
                    </Typography>
                    <Typography color="text.secondary">
                        Get connected to the right doctor at the right time, instantly
                    </Typography>
                </Stack>

                {/* Main Card */}
                <Card
                    elevation={3}
                    sx={{
                        borderRadius: 3,
                        p: 4
                    }}
                >
                    <Stack spacing={3} alignItems="center">
                        <Chip
                            icon={<CheckCircleIcon />}
                            label="Appointment Confirmed!"
                            color="success"
                            sx={{
                                fontSize: 16,
                                px: 2,
                                py: 2,
                                borderRadius: 3
                            }}
                        />

                        <Typography color="text.secondary">
                            Your appointment has been successfully scheduled
                        </Typography>
                    </Stack>

                    {/* Appointment Details */}
                    <CardContent sx={{ mt: 3 }}>
                        <DetailRow label="Hospital" value={appointment?.hospital} />
                        <DetailRow label="Specialization" value={appointment?.specialization} />
                        <DetailRow label="Doctor" value={appointment?.doctor} />
                        <DetailRow label="Doctor Specialty" value={appointment?.doctorSpecialty} />
                        <DetailRow label="Date" value={appointment?.date} />
                        <DetailRow label="Time" value={appointment?.time} />
                        <DetailRow label="Consultation Cost" value={appointment?.costRange} />

                    </CardContent>

                    {/* What happens next */}
                    <Box
                        sx={{
                            // backgroundColor: "#f3f7ff",
                            border: "1px solid #eee",
                            borderRadius: 2,
                            p: 3,
                            mt: 3
                        }}
                    >
                        <Typography fontWeight={600} mb={1}>
                            What happens next?
                        </Typography>

                        <Stack spacing={1}>
                            <Typography>1. You’ll receive a confirmation SMS</Typography>
                            <Typography>2. Arrive 15 minutes early for registration</Typography>
                            <Typography>3. Bring your ID and insurance card</Typography>
                        </Stack>
                    </Box>

                    {/* Address */}
                    <Box mt={3}>
                        <Typography>
                            <strong>Address:</strong> {appointment?.address}
                        </Typography>
                        <Typography>
                            <strong>Distance:</strong> {appointment?.distance}
                        </Typography>
                    </Box>


                    {/* CTA */}
                    <Button
                        fullWidth
                        size="large"
                        onClick={() => navigate("/ai-scheduling-recommendation")}
                        sx={{
                            mt: 4,
                            py: 1.5,
                            fontSize: 16,
                            fontWeight: 600,
                            borderRadius: 2,
                            backgroundColor: "#2563eb",
                            "&:hover": {
                                backgroundColor: "#1e4ed8"
                            }
                        }}
                        variant="contained"
                    >
                        Schedule Another Appointment
                    </Button>
                </Card>
            </Container>
        </Box>
    );
};

export default AppointmentConfirmed;

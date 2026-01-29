import * as React from "react";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Button,
    Chip,
    Divider
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useNavigate } from "react-router-dom";
import MedicareHeader from "../MedicareHeader";

const allRecommendations = [
    [
        {
            id: 1,
            hospital: "City General Hospital",
            address: "MG Road, Indiranagar, Bengaluru, Karnataka",
            specialization: "Ophthalmology",
            distance: "3.2 km",
            rating: "4.5",
            costRange: "₹500 – ₹800",
            doctor: "Dr. James Wilson",
            doctorSpecialty: "Ophthalmology",
            date: "29/12/2025",
            time: "09:00 AM",
            dotColor: "#22c55e" 
        },
        {
            id: 2,
            hospital: "Apollo Care Center",
            address: "Bannerghatta Road, Bengaluru, Karnataka",
            specialization: "Ophthalmology",
            distance: "4.8 km",
            rating: "4.6",
            costRange: "₹700 – ₹1,000",
            doctor: "Dr. Anita Rao",
            doctorSpecialty: "Ophthalmology",
            date: "29/12/2025",
            time: "10:30 AM",
            dotColor: "#22c55e"
        },
        {
            id: 3,
            hospital: "GreenLife Hospital",
            address: "Whitefield Main Road, Bengaluru, Karnataka",
            specialization: "Ophthalmology",
            distance: "5.1 km",
            rating: "4.4",
            costRange: "₹400 – ₹700",
            doctor: "Dr. Suresh Patil",
            doctorSpecialty: "Ophthalmology",
            date: "29/12/2025",
            time: "11:30 AM",
            dotColor: "#22c55e"
        }
    ],
    [
        {
            id: 4,
            hospital: "Sunrise Multispeciality",
            address: "HSR Layout, Sector 2, Bengaluru, Karnataka",
            specialization: "General Medicine",
            distance: "6.4 km",
            rating: "4.7",
            costRange: "₹600 – ₹900",
            doctor: "Dr. Meera Iyer",
            doctorSpecialty: "General Physician",
            date: "29/12/2025",
            time: "12:00 PM",
            dotColor: "#c9df6eff"
        },
        {
            id: 5,
            hospital: "Care & Cure Hospital",
            address: "Jayanagar 4th Block, Bengaluru, Karnataka",
            specialization: "Internal Medicine",
            distance: "7.2 km",
            rating: "4.3",
            costRange: "₹500 – ₹750",
            doctor: "Dr. Rohan Kulkarni",
            doctorSpecialty: "Internal Medicine",
            date: "29/12/2025",
            time: "01:30 PM",
            dotColor: "#c9df6eff"
        },
        {
            id: 6,
            hospital: "MedPlus Health",
            address: "BTM Layout, Bengaluru, Karnataka",
            specialization: "General Medicine",
            distance: "8.0 km",
            rating: "4.2",
            costRange: "₹300 – ₹600",
            doctor: "Dr. Neha Sharma",
            doctorSpecialty: "Physician",
            date: "29/12/2025",
            time: "03:00 PM",
            dotColor: "#22c55e" 
        }
    ],
    [
        {
            id: 7,
            hospital: "Lifeline Hospital",
            address: "Yelahanka New Town, Bengaluru, Karnataka",
            specialization: "Emergency Medicine",
            distance: "9.1 km",
            rating: "4.6",
            costRange: "₹1,000 – ₹1,500",
            doctor: "Dr. Vikram Desai",
            doctorSpecialty: "Emergency Physician",
            date: "29/12/2025",
            time: "04:00 PM",
            dotColor: "#e94a22ff" 
        },
        {
            id: 8,
            hospital: "Unity Health Center",
            address: "Rajajinagar, Bengaluru, Karnataka",
            specialization: "General Medicine",
            distance: "10.3 km",
            rating: "4.4",
            costRange: "₹400 – ₹650",
            doctor: "Dr. Pooja Malhotra",
            doctorSpecialty: "General Physician",
            date: "29/12/2025",
            time: "05:30 PM",
            dotColor: "#22c55e" 
        },
        {
            id: 9,
            hospital: "Prime Care Hospital",
            address: "Hebbal Ring Road, Bengaluru, Karnataka",
            specialization: "Family Medicine",
            distance: "11.6 km",
            rating: "4.1",
            costRange: "₹350 – ₹600",
            doctor: "Dr. Arjun Singh",
            doctorSpecialty: "Family Physician",
            date: "29/12/2025",
            time: "06:30 PM",
            dotColor: "#c9df6eff"
        }
    ]
];

export default function AIRecommendations() {
    const [selected, setSelected] = React.useState(2);
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);


    const recommendations = allRecommendations[page];


    return (
        <Box sx={{ minHeight: "100vh" }}>

            <MedicareHeader />

            <Container
                maxWidth={false}
                disableGutters
                sx={{ px: { xs: 2, md: 4 }, mt: 5 }}
            >
                {/* Header */}
                <Typography variant="h4" fontWeight={700} textAlign="center">
                    AI-Powered Appointment Scheduling
                </Typography>
                <Typography
                    textAlign="center"
                    color="text.secondary"
                    mt={1}
                    mb={4}
                >
                    Get connected to the right doctor at the right time, instantly
                </Typography>

                {/* AI Recommendations Info */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 3,
                        mb: 4,
                        borderRadius: 3,
                        border: "1px solid #e4ebf7",
                        textAlign: "center"
                    }}
                >
                    <Typography variant="h6" fontWeight={600}>
                        📍 AI Recommendations
                    </Typography>
                    <Typography color="text.secondary" mt={1}>
                        Based on your location, symptoms, and urgency, here are the best
                        options:
                    </Typography>
                </Paper>

                {/* Recommendation Cards */}
                <Stack
                    direction="row"
                    spacing={3}
                    useFlexGap
                    //   flexWrap="wrap"                 // 👈 wrap when needed
                    width="100%"                    // 👈 take full width
                    justifyContent="space-between"  // 👈 spread across screen
                    alignItems="stretch"
                >
                    {recommendations.map((item, index) => (
                        <Paper
                            key={item.id}
                            onClick={() => setSelected(item.id)}
                            sx={{
                                p: 3,
                                cursor: "pointer",
                                borderRadius: 3,
                                width: { xs: "100%", sm: 420, md: 460 }, // 👈 wider cards
                                minHeight: 320,                          // 👈 visual balance
                                border:
                                    selected === item.id
                                        ? "2px solid #2563eb"
                                        : "1px solid #e4ebf7",
                                transition: "0.2s",
                                "&:hover": {
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                                }
                            }}
                        >

                            <Stack spacing={2}>
                                {/* Header */}
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Chip
                                            label={index + 1}
                                            color="primary"
                                            sx={{ fontWeight: 700 }}
                                        />
                                        <Box>
                                            <Typography fontWeight={700}>
                                                {item.hospital}
                                            </Typography>
                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                alignItems="center"
                                            >
                                                {/* Colored Dot */}
                                                <Box
                                                    sx={{
                                                        width: 10,
                                                        height: 10,
                                                        borderRadius: "50%",
                                                        bgcolor: item.dotColor
                                                    }}
                                                />

                                                <Typography variant="body2" color="text.secondary">
                                                    {item.distance} away
                                                </Typography>
                                            </Stack>

                                        </Box>
                                    </Stack>

                                    <Chip
                                        icon={<StarIcon />}
                                        label={item.rating}
                                        sx={{
                                            bgcolor: "#fff7e6",
                                            color: "#92400e",
                                            fontWeight: 600
                                        }}
                                    />
                                </Stack>

                                <Divider />

                                {/* Details */}
                                <Stack
                                    direction="row"
                                    spacing={4}
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                >

                                    <Box>
                                        <Typography variant="body2" color="text.secondary">
                                            Doctor
                                        </Typography>
                                        <Typography fontWeight={600}>
                                            {item.doctor}
                                        </Typography>
                                        <Typography color="primary">
                                            {item.specialization}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="body2" color="text.secondary">
                                            Appointment
                                        </Typography>
                                        <Stack spacing={0.5}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <CalendarMonthOutlinedIcon fontSize="small" />
                                                <Typography>{item.date}</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <AccessTimeOutlinedIcon fontSize="small" />
                                                <Typography>{item.time}</Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Stack>

                                {/* Summary */}
                                <Typography color="text.secondary" mt={1}>
                                    {item.address}
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <Typography fontWeight={600}>
                                        Consultation Fee -
                                    </Typography>
                                    <Typography fontWeight={600}>
                                        {item.costRange}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Paper>
                    ))}
                </Stack>

                {/* Footer Actions */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={5}>
                    <Button
                        fullWidth
                        size="large"
                        variant="outlined"
                        disabled={page === 0}
                        onClick={() => {
                            setSelected(null);
                            setPage((p) => p - 1);
                        }}
                    >
                        Previous Recommendations
                    </Button>

                    <Button
                        fullWidth
                        size="large"
                        variant="outlined"
                        disabled={page === allRecommendations.length - 1}
                        onClick={() => {
                            setSelected(null);
                            setPage((p) => p + 1);
                        }}
                    >
                        Give More Recommendations
                    </Button>

                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        disabled={!selected}
                        sx={{ fontWeight: 600 }}
                        onClick={() =>
                            navigate("/appointment-confirmed", {
                                state: {
                                    appointment: recommendations.find(
                                        (item) => item.id === selected
                                    )
                                }
                            })
                        }

                    >
                        Confirm Booking
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
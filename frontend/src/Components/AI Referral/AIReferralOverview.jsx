import React from "react";
import { useNavigate, Link } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Container,
    Card,
    Tabs,
    Tab,
    Divider,
    Avatar,
    Grid
} from "@mui/material";

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ReferralHeader from "./ReferralHeader";
import MedicareHeader from "../MedicareHeader";

export default function AIReferralOverview() {
    const navigate = useNavigate();
    const [tab, setTab] = React.useState(0);


    return (
        <Box sx={{minHeight: "100vh" }}>
            {/* ================= HEADER ================= */}
            <AppBar position="static" elevation={0} sx={{ bgcolor: "#fff", color: "#000" }}>
                <MedicareHeader />

                <Divider />

                <ReferralHeader tab={tab} setTab={setTab} />

                {/* Tabs */}
                {/* <Tabs
                    value={tab}
                    onChange={(e, v) => setTab(v)}
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{ px: 3 }}
                >
                    <Tab label="Overview" />
                    <Tab label="Register Patient" />
                    <Tab label="AI Screening" />
                    <Tab label="Referrals" />
                    <Tab label="Follow-ups" />
                </Tabs> */}
            </AppBar>

            {/* ================= CONTENT ================= */}
            <Container maxWidth="md" sx={{ mt: 6 }}>
                {/* ================= HERO ================= */}
                <Card
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        mb: 6,
                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
                    }}
                >
                    <Typography variant="h4" fontWeight={800} mb={2}>
                        AI-Driven Referral System for Retinal Care
                    </Typography>

                    <Typography color="text.secondary" fontSize={16}>
                        An intelligent healthcare coordination platform that uses artificial
                        intelligence to analyze clinical data, assess risk, and automatically
                        route patients to the appropriate level of care at the right time.
                    </Typography>
                </Card>

                {/* ================= FEATURE CARDS (STACKED) ================= */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",        // mobile → 1 card
                            md: "1fr 1fr"     // desktop → 2 cards per row
                        },
                        gap: 4
                    }}
                >
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <FeatureCard
                        height={180}
                        icon={<PersonAddAltIcon sx={{ color: "#2563eb" }} />}
                        iconBg="#eef5ff"
                        title="Patient Registration"
                        text="Register patients with essential demographic and contact details for efficient care management."
                    />
                    </Link>

                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <FeatureCard
                        icon={<VisibilityIcon sx={{ color: "#2e7d32" }} />}
                        iconBg="#e9f8ee"
                        title="AI Risk Assessment"
                        text="Advanced AI analyzes fundus and OCT images to detect abnormalities and assign risk scores with high confidence."
                    />
                    </Link>

                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <FeatureCard
                        icon={<DescriptionIcon sx={{ color: "#ed6c02" }} />}
                        iconBg="#fff4e5"
                        title="Automated Referrals"
                        text="Intelligent routing to district or tertiary facilities based on risk assessment, with priority flagging for urgent cases."
                    />
                    </Link>

                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <FeatureCard
                        icon={<NotificationsActiveIcon sx={{ color: "#7b2cbf" }} />}
                        iconBg="#f3e8ff"
                        title="Follow-Up Tracking"
                        text="Automated reminders and escalation for missed appointments, ensuring no patient falls through the cracks."
                    />
                    </Link>
                </Box>

                {/* ================= KEY BENEFITS ================= */}
                <Box
                    sx={{
                        // background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                        border: "1px solid #dbeafe",
                        borderRadius: 3,
                        p: 5,
                        mt: 6,
                        color: "#fff"
                    }}
                >
                    <Typography variant="h5" fontWeight={800} mb={3}>
                        Key Benefits
                    </Typography>

                    {[
                        "Eliminates manual and paper-based referrals",
                        "Reduces delays in diagnosis and treatment",
                        "Ensures patients reach the right specialist at the right time",
                        "Improves follow-up adherence and patient outcomes",
                        "Scales specialist care to underserved regions"
                    ].map((item, index) => (
                        <Box key={index} display="flex" alignItems="center" mb={1.8}>
                            <Avatar
                                sx={{
                                    width: 30,
                                    height: 30,
                                    mr: 2,
                                    bgcolor: "rgba(255,255,255,0.25)",
                                    fontSize: 14
                                }}
                            >
                                {index + 1}
                            </Avatar>
                            <Typography fontSize={16}>{item}</Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({ icon, title, text, iconBg }) {
    return (
        <Card
            sx={{
                p: 4,
                borderRadius: 3,
                mb: 4,
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
            }}
        >
            <Box display="flex" gap={3}>
                <Box
                    sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2,
                        bgcolor: iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {icon}
                </Box>

                <Box>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                        {title}
                    </Typography>
                    <Typography color="text.secondary">{text}</Typography>
                </Box>
            </Box>
        </Card>
    );
}

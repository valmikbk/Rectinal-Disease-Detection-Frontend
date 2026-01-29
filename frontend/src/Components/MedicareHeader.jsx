import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Avatar,
    Stack,
    Button
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import eyeImage from "./MedicalImageDetection/eyeImage.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const MedicareHeader = ({ userName = "Sushil", role = "Patient" }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                bgcolor: "#ffffff",
                borderBottom: "1px solid #e0e0e0"
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Left: Logo & Title */}
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                        sx={{
                            bgcolor: "#e6fffa",
                            width: 40,
                            height: 40
                        }}
                    >
                        <img
                            src={eyeImage}
                            alt="Eye Detection"
                            style={{
                                width: 60,
                                height: 60,
                                objectFit: "contain"
                            }}
                        />
                    </Avatar>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Button
                            sx={{
                                p: 0,
                                minWidth: "auto",
                                textTransform: "none",
                                "&:hover": { backgroundColor: "transparent" }
                            }}
                            onClick={() => navigate("/")}
                        >
                            <Typography variant="h6" fontWeight={700} color="white">
                                VisionCare
                            </Typography>
                        </Button>
                        <Typography variant="caption" color="white">
                            Medical Assistance Platform
                        </Typography>
                    </Box>
                </Stack>

                {/* Right: User Info & Logout */}
                <Stack direction="row" spacing={2} alignItems="center">
                    {/* Profile Avatar with Name & Role */}
                    <Avatar
                        sx={{
                            width: 56,
                            height: 56,
                            bgcolor: "#dfe5e4ff",
                            color: "black",
                            fontSize: 12,
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            lineHeight: 1.1
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 13,
                                fontWeight: 700
                            }}
                        >
                            {userName}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 10,
                                opacity: 0.85
                            }}
                        >
                            {role}
                        </Typography>
                    </Avatar>

                    {/* Logout */}
                    <Box
                        sx={{
                            bgcolor: "#e8f0ff",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2
                        }}
                    >
                        <Button
                            startIcon={<LogoutIcon />}
                            //   color="inherit"
                            onClick={handleLogout}
                            sx={{
                                textTransform: "none",
                                fontWeight: 600,
                                // bgcolor:"#3876cdff"
                            }}
                        >
                            Sign Out
                        </Button>
                    </Box>
                </Stack>

            </Toolbar>
        </AppBar>
    );
};

export default MedicareHeader;

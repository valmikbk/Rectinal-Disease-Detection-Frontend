import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Container,
    Card,
    Button,
    Divider,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MedicareHeader from "../MedicareHeader";

import fudus3 from "./fudus3.jpeg";
import fundus3_analyzed from "./fundus3_analyzed.png";

import fudus4 from "./fudus4.jpeg";
import fundus4_analyzed from "./fundus4_analyzed.png";

import OCT1 from "./OCT1.jpeg";

const diseaseTreatmentMap = {
    "Diabetic Retinopathy": [
        "Medical Management",
        "Laser Therapy",
        "Anti-VEGF Injection"
    ],
    "Macular Degeneration": [
        "Anti-VEGF Injection",
        "Laser Therapy"
    ],
    "Glaucoma": [
        "Medical Management",
        "Laser Therapy"
    ],
    "Cataract": [
        "Surgical Consultation"
    ],
    "Normal": [
        "Routine Monitoring",
        "Lifestyle Modification"
    ]
};

const analyzedResults = [
    {
        id: "analysis_001",
        disease: "Luxated Intraocular Lens (IOL)",
        confidence: 92.1,
        riskLevel: "Moderate",

        Recommendation: [
            {
                title: "Urgent comprehensive ophthalmic evaluation by a cataract or retina specialist is advised.",
                points: []
            },
            {
                title: "Perform slit-lamp examination to assess IOL position and capsular support.",
                points: []
            },
            {
                title: "Conduct dilated fundus examination to rule out associated vitreoretinal complications.",
                points: []
            },
            {
                title: "Ultrasound B-scan may be required if lens position is unclear or if posterior dislocation is suspected.",
                points: []
            },
            {
                title: "Monitor intraocular pressure to rule out secondary glaucoma.",
                points: []
            }
        ],

        detectedConditions: [
            "Luxated Intraocular Lens (IOL)",
            "The intraocular lens implanted during cataract surgery has become displaced from its normal anatomical position. The displacement may be partial (subluxation) or complete (luxation), potentially into the vitreous cavity or anterior chamber. This condition can lead to visual disturbances and, if left untreated, may cause secondary complications."
        ],

        RecommendedTreatment: {
            title: "Recommended Treatment",
            note:
                "Treatment depends on symptom severity and degree of displacement:",
            steps: [
                {
                    title: "Observation (Limited cases)",
                    points: [
                        "If IOL displacement is minimal and vision is stable."
                    ]
                },
                {
                    title: "Surgical Management (Commonly Required)",
                    points: [
                        "IOL Repositioning with scleral or iris fixation if adequate support exists.",
                        "IOL Exchange if the existing lens is unstable or damaged.",
                        "Pars Plana Vitrectomy (PPV) if the IOL has migrated into the vitreous cavity."
                    ]
                },
                {
                    title: "Post-Treatment Care",
                    points: [
                        "Anti-inflammatory and antibiotic eye drops.",
                        "Regular follow-up to assess visual recovery and retinal health."
                    ]
                }
            ]
        },

        AIScreeningNote:
            "Early identification of IOL displacement allows timely surgical correction and prevents complications such as corneal edema, secondary glaucoma, cystoid macular edema, or retinal detachment."
    },

    {
        id: "analysis_002",
        disease: "Proliferative Diabetic Retinopathy (PDR)",
        confidence: 94.6,
        riskLevel: "High",

        originalImageUrl: fudus4,
        enhancedImageUrl: fundus4_analyzed,

        Recommendation: [
            {
                title: "Urgent referral to a retina specialist is strongly recommended.",
                points: []
            },
            {
                title: "Perform comprehensive dilated fundus examination to identify neovascularization.",
                points: []
            },
            {
                title: "Fundus fluorescein angiography (FFA) to assess retinal ischemia and extent of neovascularization.",
                points: []
            },
            {
                title: "Optical Coherence Tomography (OCT) to evaluate macular involvement or diabetic macular edema.",
                points: []
            },
            {
                title: "Monitor intraocular pressure to detect neovascular glaucoma.",
                points: []
            }
        ],

        detectedConditions: [
            "Proliferative Diabetic Retinopathy (PDR)",
            "An advanced stage of diabetic retinopathy characterized by abnormal growth of new blood vessels (neovascularization) on the retina or optic disc due to chronic retinal ischemia. These fragile vessels can bleed, leading to vitreous hemorrhage, tractional retinal detachment, and severe vision loss if untreated."
        ],

        RecommendedTreatment: {
            title: "Recommended Treatment",
            note:
                "Treatment aims to regress neovascularization, prevent complications, and preserve vision:",
            steps: [
                {
                    title: "Laser Therapy",
                    points: [
                        "Panretinal photocoagulation (PRP) to reduce retinal ischemia and regress neovascularization."
                    ]
                },
                {
                    title: "Intravitreal Anti-VEGF Therapy",
                    points: [
                        "Anti-VEGF injections (e.g., ranibizumab, aflibercept, bevacizumab) to control active neovascularization.",
                        "Often used as primary therapy or adjunct to laser treatment."
                    ]
                },
                {
                    title: "Surgical Management",
                    points: [
                        "Pars plana vitrectomy (PPV) for non-clearing vitreous hemorrhage.",
                        "Vitrectomy for tractional retinal detachment involving or threatening the macula."
                    ]
                },
                {
                    title: "Systemic Disease Control",
                    points: [
                        "Strict glycemic control.",
                        "Management of hypertension and dyslipidemia in coordination with a physician."
                    ]
                },
                {
                    title: "Post-Treatment Care",
                    points: [
                        "Regular retinal follow-up to monitor disease regression.",
                        "Ongoing OCT and fundus evaluations."
                    ]
                }
            ]
        },

        AIScreeningNote:
            "Early AI-based detection of proliferative changes enables timely intervention, significantly reducing the risk of irreversible vision loss, vitreous hemorrhage, tractional retinal detachment, and neovascular glaucoma."
    },

    {
        id: "analysis_003",
        disease: "Diabetic Retinopathy (DR)",
        confidence: 92.1,
        riskLevel: "Moderate",

        originalImageUrl: OCT1,
        enhancedImageUrl: OCT1,

        Recommendation: [
            {
                title: "Immediate comprehensive eye examination by an ophthalmologist or retina specialist",
                points: []
            },
            {
                title: "Perform dilated fundus examination of both eyes",
                points: []
            },
            {
                title: "Obtain Optical Coherence Tomography (OCT) to assess:",
                points: [
                    "Macular edema",
                    "Retinal thickness"
                ]
            },
            {
                title: "Consider Fundus Fluorescein Angiography (FFA) if ischemia or leakage is suspected",
                points: []
            },
            {
                title: "Review and optimize systemic diabetic control:",
                points: [
                    "Blood glucose (HbA1c)"
                ]
            },
            {
                title: "Review and optimize systemic diabetic control:",
                points: [
                    "Blood glucose (HbA1c)",
                    "Blood pressure",
                    "Lipid levels"
                ]
            },
        ],

        detectedConditions: [
            "Diabetic Retinopathy (DR)",
            "Diabetic retinopathy is a diabetes-related microvascular retinal disease caused by prolonged high blood glucose levels. The condition is characterized by damage to retinal blood vessels, leading to leakage, ischemia, and abnormal new vessel growth in advanced stages."
        ],

        RecommendedTreatment: {
            title: "Recommended Treatment",
            note:
                "Treatment depends on severity and macular involvement:",
            steps: [
                {
                    title: "Medical & Systemic Management (All stages)",
                    points: [
                        "Strict glycemic control",
                        "Blood pressure and lipid management",
                        "Lifestyle modification and regular follow-up"
                    ]
                },
                {
                    title: "Ophthalmic Treatment (If indicated)",
                    points: [
                        "Anti-VEGF injections for diabetic macular edema or proliferative disease",
                        "Focal or grid laser photocoagulation for localized leakage",
                        "Pan-retinal photocoagulation (PRP) for proliferative diabetic retinopathy"
                    ]
                },
                {
                    title: "Surgical Management (Advanced cases)",
                    points: [
                        "Pars plana vitrectomy for non-clearing vitreous hemorrhage or tractional retinal detachment",
                    ]
                }
            ]
        },

        AIScreeningNote: [
            "Early detection and timely management of diabetic retinopathy can prevent irreversible vision loss and significantly improve long-term visual outcomes."
        ]
    },

    {
        id: "analysis_004",
        disease: "Branch Retinal Artery Occlusion (BRAO)",
        confidence: 94.3,
        riskLevel: "High",
        originalImageUrl: fudus3,
        enhancedImageUrl: fundus3_analyzed,


        Recommendation: [
            {
                title: "Urgent ophthalmic evaluation by a retina specialist is strongly advised.",
                points: []
            },
            {
                title: "Treat as a medical emergency due to associated stroke risk.",
                points: []
            },
            {
                title: "Perform detailed fundus examination to identify arterial whitening or embolus.",
                points: []
            },
            {
                title: "Conduct OCT imaging to assess inner retinal ischemia and edema.",
                points: []
            },
            {
                title: "Initiate systemic evaluation for cardiovascular and cerebrovascular risk factors.",
                points: []
            }
        ],

        detectedConditions: [
            "Branch Retinal Artery Occlusion (BRAO)",
            "A blockage in a branch of the retinal artery causing reduced blood flow to a localized area of the retina. This leads to sudden, painless, sectoral vision loss and is commonly associated with embolic or vascular systemic conditions."
        ],

        RecommendedTreatment: {
            title: "Recommended Treatment",
            note:
                "Management focuses on urgent evaluation, systemic risk reduction, and prevention of future vascular events:",
            steps: [
                {
                    title: "Immediate Management",
                    points: [
                        "Urgent referral to retina specialist.",
                        "Consider ocular massage or anterior chamber paracentesis in very early presentations (as per clinician judgment)."
                    ]
                },
                {
                    title: "Systemic Risk Management",
                    points: [
                        "Blood pressure assessment and control.",
                        "Blood glucose and lipid profile evaluation.",
                        "Cardiac evaluation including ECG.",
                        "Carotid artery imaging to detect embolic sources."
                    ]
                },
                // {
                //     title: "Follow-Up Care",
                //     points: [
                //         "Regular ophthalmic follow-up to monitor retinal changes.",
                //         "Visual field assessment for functional recovery.",
                //         "Coordination with physician or cardiologist for long-term risk reduction."
                //     ]
                // }
            ]
        },

        AIScreeningNote:
            "Early AI-based detection of retinal arterial occlusion enables rapid referral, reduces the risk of permanent vision loss, and serves as a critical indicator for underlying systemic vascular disease, including stroke risk."
    }
];

export default function MedicalImageResult() {
    const navigate = useNavigate();

    const location = useLocation();

    // ✅ Extract analysisId sent from previous page
    const {
        analysisId,
        originalImage,
        enhancedImage
    } = location.state || {};


    const detectedDisease = "Diabetic Retinopathy";

    const treatments =
        diseaseTreatmentMap[detectedDisease] || ["Consult Specialist"];

    // const analysisId = "analysis_002"; // example (usually from router state)

    const selectedAnalysis = analyzedResults.find(
        (item) => item.id === analysisId
    );

    const { originalImageUrl, enhancedImageUrl } = selectedAnalysis;




    return (
        <Box sx={{ minHeight: "100vh" }}>
            {/* ================= HEADER ================= */}
            <MedicareHeader />

            {/* ================= CONTENT ================= */}
            <Container sx={{
                mt: 4,
                px: 4,               // side padding
                width: "100%",
                minHeight: "100vh"
            }}>
                {/* Back */}
                <Button startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
                    Back to Home
                </Button>

                <Card
                    sx={{
                        borderRadius: 3,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        p: 4
                    }}
                >
                    <Typography variant="h5" fontWeight={700} mb={3}>
                        Medical Image Detection
                    </Typography>

                    {/* ===== Analysis Complete ===== */}
                    <Box display="flex" alignItems="center" gap={1.5} mb={3}>
                        <CheckCircleIcon sx={{ color: "#2e7d32", fontSize: 28 }} />
                        <Box>
                            <Typography fontWeight={700} color="#2e7d32">
                                Analysis Complete
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Confidence: 87.5%
                            </Typography>
                        </Box>
                    </Box>

                    {/* ===== IMAGE COMPARISON ===== */}
                    <Box
                        sx={{
                            //   backgroundColor: "#ffffff",
                            border: "1px solid #e5e7eb",
                            borderRadius: 2,
                            p: 3,
                            mb: 3,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
                        }}
                    >
                        <Typography fontWeight={700} mb={2}>
                            Image Comparison
                        </Typography>

                        <Box
                            display="grid"
                            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
                            gap={2}
                        >
                            <Box textAlign="center">
                                <Typography variant="body2" fontWeight={600} mb={1}>
                                    Original Image
                                </Typography>
                                <Box
                                    component="img"
                                    src={originalImageUrl}
                                    alt="Original Fundus"
                                    sx={{
                                        width: "100%",
                                        borderRadius: 2,
                                        border: "1px solid #e5e7eb"
                                    }}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography variant="body2" fontWeight={600} mb={1}>
                                    AI Enhanced Image
                                </Typography>
                                <Box
                                    component="img"
                                    src={enhancedImageUrl}
                                    alt="AI Enhanced Fundus"
                                    sx={{
                                        width: "100%",
                                        borderRadius: 2,
                                        border: "1px solid #e5e7eb"
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box textAlign="center">
                            <Typography variant="caption" color="text.secondary" mt={2}>
                                Enhanced image highlights retinal vascular and structural features
                                for clinical interpretation.
                            </Typography>
                        </Box>
                    </Box>

                    {/* ===== Detected Conditions ===== */}
                    <Box
                        sx={{
                            // backgroundColor: "#eef5ff",
                            border: "1px solid #e5e7eb",
                            borderRadius: 2,
                            p: 3,
                            mb: 3
                        }}
                    >
                        <Typography fontWeight={700} mb={1}>
                            Detected Conditions
                        </Typography>

                        <List dense>
                            {selectedAnalysis.detectedConditions.map((condition, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <FiberManualRecordIcon
                                            sx={{ fontSize: 8, color: "#2563eb" }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={condition} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* ===== Recommendations ===== */}
                    <Box
                        sx={{
                            // backgroundColor: "#f0fbf7",
                            border: "1px solid #e5e7eb",
                            borderRadius: 2,
                            p: 3,
                            mb: 4
                        }}
                    >
                        <Box mt={2} border="1px solid #e5e7eb" p={2} borderRadius={2}>
                            <Typography fontWeight={700} mb={1}>
                                Recommendations
                            </Typography>

                            <List dense>
                                {selectedAnalysis.RecommendedTreatment.steps.map((step, index) => (
                                    <Box key={index} mb={2} >
                                        {/* Step Title */}
                                        <Typography fontWeight={600} color="text.secondary">
                                            {index + 1}. {step.title}
                                        </Typography>

                                        {/* Bullet Points */}
                                        {step.points.map((point, i) => (
                                            <Typography
                                                key={i}
                                                sx={{ pl: 2, mt: 0.5 }}
                                                color="text.secondary"
                                            >
                                                • {point}
                                            </Typography>
                                        ))}
                                    </Box>
                                ))}
                            </List>
                        </Box>

                        {/* ===== Recommended Treatment ===== */}
                        <Box mt={2} border="1px solid #e5e7eb" p={2} borderRadius={2}>
                            <Typography fontWeight={600} mb={1}>
                                Recommended Treatment:
                            </Typography>

                            <List dense>
                                {selectedAnalysis.Recommendation.map((step, index) => (
                                    <Box key={index} mb={2}>
                                        {/* Step Title */}
                                        <Typography fontWeight={600} color="text.secondary">
                                            {index + 1}. {step.title}
                                        </Typography>

                                        {/* Bullet Points */}
                                        {step.points.map((point, i) => (
                                            <Typography
                                                key={i}
                                                sx={{ pl: 2, mt: 0.5 }}
                                                color="text.secondary"
                                            >
                                                • {point}
                                            </Typography>
                                        ))}
                                    </Box>
                                ))}
                            </List>
                        </Box>

                        <Box
                            sx={{
                                // backgroundColor: "#eef5ff",
                                border: "1px solid #e5e7eb",
                                borderRadius: 2,
                                p: 3,
                                mb: 3,
                                mt: 3
                            }}
                        >
                            <Typography fontWeight={700} mb={1}>
                                AI Screening Note
                            </Typography>

                            <List dense>
                                {
                                    <ListItemText primary={selectedAnalysis.AIScreeningNote} />
                                }
                            </List>
                        </Box>

                    </Box>

                    {/* ===== Action Buttons ===== */}
                    <Box display="flex" gap={2} mb={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => navigate("/ai-scheduling-recommendation")}
                            sx={{
                                py: 1.6,
                                borderRadius: 2,
                                textTransform: "none",
                                fontWeight: 600,
                                backgroundColor: "#2563eb",
                                "&:hover": { backgroundColor: "#1e40af" }
                            }}

                        >
                            AI Referral
                        </Button>

                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => navigate("/smart-referral")}
                            sx={{
                                py: 1.6,
                                borderRadius: 2,
                                textTransform: "none",
                                fontWeight: 600,
                                backgroundColor: "#009688",
                                "&:hover": { backgroundColor: "#00796b" }
                            }}
                        >
                            Smart Referral
                        </Button>
                    </Box>

                    {/* ===== New Detection ===== */}
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => navigate("/")}
                        sx={{
                            py: 1.4,
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 600,
                            color: "#555",
                            borderColor: "#ccc"
                        }}
                    >
                        New Detection
                    </Button>
                </Card>
            </Container>
        </Box>
    );
}

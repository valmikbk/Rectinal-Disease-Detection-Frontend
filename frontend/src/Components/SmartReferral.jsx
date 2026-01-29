import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  FormControl,
  Avatar,
  Stack,
  Chip,
  InputLabel,
  Slider,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import MedicareHeader from "./MedicareHeader";

/* =======================
   DUMMY DATA
======================= */

const hospitals = [
  {
    id: 1,
    name: "Minto Ophthalmic Hospital",
    type: "Government",
    rating: 4.5,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Chamrajpet, Bengaluru - 560002",
    cost: "₹200 - ₹2,000",
    specializations: ["Cataract", "Glaucoma", "Pediatric Ophthalmology", "Retina"]
  },
  {
    id: 2,
    name: "Narayana Nethralaya",
    type: "Private",
    rating: 4.9,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "121/C, Chord Rd, Rajajinagar, Bengaluru - 560010",
    cost: "₹5,000 - ₹50,000",
    specializations: ["Cataract", "LASIK", "Glaucoma", "Retina", "Cornea"]
  },
  {
    id: 3,
    name: "Nethradhama Super Speciality Eye Hospital",
    type: "Private",
    rating: 4.8,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "256/14, Kanakapura Main Rd, Jayanagar, Bengaluru - 560070",
    cost: "₹4,000 - ₹40,000",
    specializations: ["Cataract", "Retina", "Glaucoma", "Pediatric Ophthalmology"]
  },
  {
    id: 4,
    name: "Shekar Eye Hospital",
    type: "Private",
    rating: 4.7,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Koramangala, Bengaluru - 560034",
    cost: "₹3,000 - ₹30,000",
    specializations: ["Cataract", "LASIK", "Glaucoma", "Retina"]
  },
  {
    id: 5,
    name: "Saai Eye Hospital and Eye Plasty Center",
    type: "Private",
    rating: 4.6,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Kundalahalli, Marathahalli, Bengaluru - 560037",
    cost: "₹2,000 - ₹25,000",
    specializations: ["General Ophthalmology", "Cataract", "Eye Plastic Surgery"]
  },
  {
    id: 6,
    name: "The Eye Foundation Eye Hospital - Bellandur",
    type: "Private",
    rating: 4.7,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "79/5, Outer Ring Rd, Bellandur, Bengaluru - 560103",
    cost: "₹3,000 - ₹35,000",
    specializations: ["Cataract", "Refractive Surgery", "Glaucoma", "Retina"]
  },
  {
    id: 7,
    name: "Karthik Netralaya Eye Hospital",
    type: "Private",
    rating: 4.6,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Basavanagudi, Bengaluru - 560050",
    cost: "₹2,000 - ₹20,000",
    specializations: ["Cataract", "Glaucoma", "General Ophthalmology"]
  },
  {
    id: 8,
    name: "Devi Eye Hospital HSR Layout",
    type: "Private",
    rating: 4.8,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "HSR Layout, Bengaluru - 560102",
    cost: "₹3,000 - ₹30,000",
    specializations: ["Cataract", "LASIK", "Cornea", "Glaucoma"]
  },
  {
    id: 9,
    name: "Devi Eye Hospital Koramangala",
    type: "Private",
    rating: 4.7,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Koramangala, Bengaluru - 560034",
    cost: "₹3,000 - ₹30,000",
    specializations: ["Cataract", "LASIK", "Cornea", "Glaucoma"]
  },
  {
    id: 10,
    name: "Prabha Eye Clinic and Research Centre",
    type: "Private",
    rating: 4.5,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Jayanagar, Bengaluru - 560011",
    cost: "₹2,500 - ₹25,000",
    specializations: ["General Ophthalmology", "Cataract", "Retina"]
  },
  {
    id: 11,
    name: "Minto Ophthalmic Hospital",
    type: "Government",
    rating: 4.4,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Old Airport Road, Bengaluru - 560017",
    cost: "₹200 - ₹2,000",
    specializations: ["Cataract", "Glaucoma", "Pediatric Ophthalmology", "Retina"]
  },
  {
    id: 12,
    name: "Sri Venkateshwara Nethralaya, Eye Hospital and Lasik Centre",
    type: "Private",
    rating: 4.6,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Rajarajeshwari Nagar, Bengaluru - 560098",
    cost: "₹3,000 - ₹35,000",
    specializations: ["Cataract", "LASIK", "Retina", "Cornea"]
  },
  {
    id: 13,
    name: "Dr Agarwals Eye Hospital - Koramangala",
    type: "Private",
    rating: 4.7,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Koramangala, Bengaluru - 560034",
    cost: "₹2,500 - ₹40,000",
    specializations: ["Cataract", "LASIK", "Glaucoma"]
  },
  {
    id: 14,
    name: "Dr Agarwals Eye Hospital | Indiranagar",
    type: "Private",
    rating: 4.6,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Indiranagar, Bengaluru - 560038",
    cost: "₹2,500 - ₹40,000",
    specializations: ["Cataract", "LASIK", "Retina"]
  },
  {
    id: 15,
    name: "Dr Agarwals Eye Hospital | Frazer Town",
    type: "Private",
    rating: 4.5,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Frazer Town, Bengaluru - 560005",
    cost: "₹2,500 - ₹40,000",
    specializations: ["Cataract", "Glaucoma", "LASIK"]
  },
  {
    id: 16,
    name: "AV Eye Hospital and Diagnostics Pvt Ltd",
    type: "Private",
    rating: 4.6,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Bellandur, Bengaluru - 560103",
    cost: "₹2,500 - ₹30,000",
    specializations: ["Cataract", "LASIK", "General Ophthalmology"]
  },
  {
    id: 17,
    name: "Bangalore Nethralaya",
    type: "Private",
    rating: 4.7,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Banashankari, Bengaluru - 560085",
    cost: "₹2,500 - ₹30,000",
    specializations: ["Cataract", "Retina", "Glaucoma"]
  },
  {
    id: 18,
    name: "Vittala International Institute of Ophthalmology",
    type: "Private",
    rating: 4.7,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Banashankari 3rd Stage, Bengaluru - 560085",
    cost: "₹3,000 - ₹40,000",
    specializations: ["Cataract", "Retina", "Cornea", "Glaucoma"]
  },
  {
    id: 19,
    name: "Sunetra Eye Hospital",
    type: "Private",
    rating: 4.5,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Banashankari, Bengaluru - 560085",
    cost: "₹2,500 - ₹30,000",
    specializations: ["Cataract", "Glaucoma", "Retina"]
  },
  {
    id: 20,
    name: "NELIVIGI Eye Hospital",
    type: "Private",
    rating: 4.6,
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    address: "Bellandur, Bengaluru - 560103",
    cost: "₹2,500 - ₹35,000",
    specializations: ["Cataract", "LASIK", "General Ophthalmology"]
  }
];


const doctors = [
  {
    id: 1,
    name: "Dr. Shiva Prasad Kakarla",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["Ophthalmology", "Eye Surgery"],
    experience: "28 years",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    rating: 4.5,
    fee: "₹600"
  },
  {
    id: 2,
    name: "Dr. Sharath Shetty",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["Cataract", "Glaucoma", "General Eye Care"],
    experience: "26 years",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    rating: 4.3,
    fee: "₹600"
  },
  {
    id: 3,
    name: "Dr. Vidya",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["Retina", "General Ophthalmology"],
    experience: "24 years",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    rating: 4.5,
    fee: "₹600"
  },
  {
    id: 4,
    name: "Dr. Aarthi Venkataraman",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["LASIK", "General Eye Care"],
    experience: "19 years",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    rating: 4.5,
    fee: "₹500"
  },
  {
    id: 5,
    name: "Dr. Sreedevi Kota",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["Ophthalmology", "Eye Diseases"],
    experience: "25 years",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    rating: 4.0,
    fee: "₹600"
  },
  {
    id: 6,
    name: "Dr. Puttaswamy P",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["General Ophthalmology", "Cataract"],
    experience: "41 years",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    rating: 3.5,
    fee: "₹500"
  },
  {
    id: 7,
    name: "Dr. Veena Prabhu",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["Eye Care", "Refractive Surgery"],
    experience: "19 years",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    rating: 2.5,
    fee: "₹500"
  },
  {
    id: 8,
    name: "Dr. Gayathri V",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["General Ophthalmology"],
    experience: "15 years",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    rating: 4.5,
    fee: "₹500"
  },
  {
    id: 9,
    name: "Dr. Kommanapalli Gowri",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["General Ophthalmology"],
    experience: "30 years",
    rating: 4.5,
    fee: "₹500"
  },
  {
    id: 10,
    name: "Dr. Raghuraj Hegde",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["General Ophthalmology"],
    experience: "17 years",
    rating: 4.5,
    fee: "₹500"
  },
  {
    id: 11,
    name: "Dr. Roopashree Devaraj",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["General Ophthalmology", "Eye Surgery"],
    experience: "25 years",
    rating: 4.5,
    fee: "₹600"
  },
  {
    id: 12,
    name: "Dr. M L Murali Krishna",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["Retina", "Ophthalmic Surgery"],
    experience: "35 years",
    rating: 1.5,
    fee: "₹600"
  },
  {
    id: 13,
    name: "Dr. Anshul Jain",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["Refractive Surgery", "Cataract"],
    experience: "8 years",
    rating: 4.5,
    fee: "₹500"
  },
  {
    id: 14,
    name: "Dr. Nihaal Ahmed F D",
    qualification: "MBBS, DNB – Ophthalmology",
    specialization: ["Cornea", "Refractive Surgery"],
    experience: "10+ years",
    rating: 4.5,
    fee: "₹600"
  },
  {
    id: 15,
    name: "Dr. K Harsha",
    qualification: "MBBS, DOMS – Ophthalmology",
    specialization: ["Cataract", "Refractive Surgery"],
    experience: "18 years",
    rating: 4.5,
    fee: "₹600"
  },
  {
    id: 16,
    name: "Dr. Shailashree",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["General Ophthalmology"],
    experience: "20 years",
    rating: 4.5,
    fee: "₹600"
  },
  {
    id: 17,
    name: "Dr. Swathi Deshpande",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["Glaucoma", "General Ophthalmology"],
    experience: "5 years",
    rating: 4.5,
    fee: "₹500"
  },
  {
    id: 18,
    name: "Dr. P Mohan",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["General Ophthalmology"],
    experience: "8+ years",
    rating: 4.5,
    fee: "₹500"
  },
  {
    id: 19,
    name: "Dr. Mamatha H",
    qualification: "MBBS, MS – Ophthalmology",
    specialization: ["General Ophthalmology"],
    experience: "8+ years",
    rating: 4.5,
    fee: "₹500"
  },
  {
    id: 20,
    name: "Dr. Ravi Dorairaj",
    qualification: "MBBS, DO – Ophthalmology",
    specialization: ["Ophthalmology", "Eye Diseases"],
    experience: "29 years",
    rating: 0.5,
    fee: "₹500"
  }
];


const CARD_HEIGHT = 250;
const CARD_WIDTH = 520;

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const karnatakaDistricts = [
  "Bagalkot",
  "Ballari (Bellary)",
  "Belagavi (Belgaum)",
  "Bengaluru",
  "Bidar",
  "Chamarajanagar",
  "Chikkaballapur",
  "Chikkamagaluru",
  "Chitradurga",
  "Dakshina Kannada",
  "Davanagere",
  "Dharwad",
  "Gadag",
  "Hassan",
  "Haveri",
  "Kalaburagi (Gulbarga)",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysuru (Mysore)",
  "Raichur",
  "Ramanagara",
  "Shivamogga (Shimoga)",
  "Tumakuru (Tumkur)",
  "Udupi",
  "Uttara Kannada (Karwar)",
  "Vijayanagara",
  "Vijayapura (Bijapur)",
  "Yadgir",
];




/* =======================
   COMPONENT
======================= */

const SmartReferral = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const [district, setDistrict] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0); // Minimum rating
  const [costFilter, setCostFilter] = useState([0, 60000]); // Cost range

  // Filter hospitals based on selected location, rating, and cost
  const filteredHospitals = hospitals.filter((h) => {
    const hospitalCost = h.cost
      .replace(/[^0-9\-]/g, "")
      .split("-")
      .map(Number);
    const minCost = hospitalCost[0] || 0;
    const maxCost = hospitalCost[1] || 0;

    return (
      h.country === country &&
      h.state === state &&
      h.district === district &&
      h.rating >= ratingFilter &&
      minCost >= costFilter[0] &&
      maxCost <= costFilter[1]
    );
  });

  // Filter doctors based on fee range
  const filteredDoctors = doctors.filter((d) => {
    const fee = Number(d.fee.replace(/[^0-9]/g, "")) || 0;

    return (
      d.country === country &&
      d.state === state &&
      d.district === district &&
      d.rating >= ratingFilter &&
      fee >= costFilter[0] &&
      fee <= costFilter[1]
    );
  });


  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* HEADER */}
      <MedicareHeader />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Button startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{ mb: 3 }}>
          Back to Home
        </Button>

        {/* FILTER */}
        <Card sx={{ borderRadius: 4, mb: 5 }}>
          <CardContent>
            <Grid container spacing={3}>
              {/* Location Filters */}
              <Grid item xs={12} md={4}>
                <FormControl variant="outlined" sx={{ width: 300, minHeight: 60 }}>
                  <Select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    displayEmpty
                    sx={{
                      minHeight: 60,
                      fontSize: 16,
                      "& .MuiSelect-select": { padding: "14px 10px" }
                    }}
                    renderValue={(selected) => (selected ? selected : "Country")}
                  >
                    {countries.map((c) => (
                      <MenuItem key={c} value={c}>
                        {c}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl
                  fullWidth
                  disabled={!country}
                  variant="outlined"
                  sx={{ width: 300, minHeight: 60 }}
                >
                  <Select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    displayEmpty
                    sx={{
                      minHeight: 60,
                      fontSize: 16,
                      "& .MuiSelect-select": { padding: "14px 10px" }
                    }}
                    renderValue={(selected) => (selected ? selected : "State")}
                  >
                    {indianStates.map((s) => (
                      <MenuItem key={s} value={s}>
                        {s}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl
                  fullWidth
                  disabled={!state}
                  variant="outlined"
                  sx={{ width: 300, minHeight: 60 }}
                >
                  <Select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    displayEmpty
                    sx={{
                      minHeight: 60,
                      fontSize: 16,
                      "& .MuiSelect-select": { padding: "14px 10px" }
                    }}
                    renderValue={(selected) => (selected ? selected : "District")}
                  >
                    {karnatakaDistricts.map((d) => (
                      <MenuItem key={d} value={d}>
                        {d}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

          </CardContent>
        </Card>

        {/* Rating Filter */}

        <Grid container spacing={3} direction="row">
          {/* Rating Filter */}
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>Minimum Rating</Typography>
            <Slider
              value={ratingFilter}
              onChange={(e, newValue) => setRatingFilter(newValue)}
              step={0.1}
              min={0}
              max={5}
              valueLabelDisplay="auto"
            />
          </Grid>

          {/* Cost Filter */}
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>Cost Range (₹)</Typography>
            <Slider
              value={costFilter}
              onChange={(e, newValue) => setCostFilter(newValue)}
              min={0}
              max={100000}
              step={1000}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              onClick={() => navigate("/ai-scheduling-recommendation")}
              sx={{
                textTransform: "none",
                ml: 80,
                height: 50,
                borderRadius: 2,
                px: 3
              }}
            >
              AI Schedule Appointment
            </Button>
          </Grid>
        </Grid>

        {/* RESULTS */}
        <Grid container spacing={6}>
          {/* HOSPITALS */}
          <Grid item xs={12} md={6}>
            <Typography fontWeight={700} mb={2}>
              Hospitals
            </Typography>

            {filteredHospitals.map((h) => (
              <Card
                key={h.id}
                sx={{ mb: 3, minHeight: CARD_HEIGHT, width: CARD_WIDTH }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontWeight={700}>{h.name}</Typography>
                      <Stack direction="row" spacing={0.5}>
                        <StarIcon sx={{ color: "#f59e0b" }} fontSize="small" />
                        <Typography>{h.rating}</Typography>
                      </Stack>
                    </Stack>

                    <Chip label={h.type} size="small" sx={{ my: 1 }} />

                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocationOnIcon fontSize="small" />
                      <Typography variant="body2">{h.address}</Typography>
                    </Stack>

                    <Typography variant="body2" mt={1}>
                      <b>Cost:</b> {h.cost}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                      {h.specializations.map((s) => (
                        <Chip key={s} label={s} size="small" />
                      ))}
                    </Stack>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<CalendarMonthIcon />}
                    onClick={() =>
                      navigate("/schedule-appointment", {
                        state: {
                          hospital: h.name,
                          address: h.address,
                          specialization: h.specializations.join(", "),
                          costRange: h.cost,
                          type: "Hospital"
                        }
                      })
                    }
                    sx={{ mt: 2, bgcolor: "#0d9488" }}
                  >
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* DOCTORS */}
          <Grid item xs={12} md={6}>
            <Typography fontWeight={700} mb={2}>
              Doctors
            </Typography>

            {filteredDoctors.map((d) => (
              <Card
                key={d.id}
                sx={{ mb: 3, minHeight: CARD_HEIGHT, width: CARD_WIDTH }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontWeight={700}>{d.name}</Typography>
                      <Stack direction="row" spacing={0.5}>
                        <StarIcon sx={{ color: "#f59e0b" }} fontSize="small" />
                        <Typography>{d.rating}</Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="body2" mt={1}>
                      {d.qualification}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                      {d.specialization.map((s) => (
                        <Chip key={s} label={s} size="small" />
                      ))}
                    </Stack>

                    <Typography variant="body2" mt={1}>
                      Experience: {d.experience}
                    </Typography>

                    <Typography variant="body2">Fee: {d.fee}</Typography>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<CalendarMonthIcon />}
                    onClick={() =>
                      navigate("/schedule-appointment", {
                        state: {
                          doctor: d.name,
                          doctorSpecialty: d.specialization.join(", "),
                          fee: d.fee,
                          experience: d.experience,
                          type: "Doctor"
                        }
                      })
                    }
                    sx={{ mt: 2, bgcolor: "#0d9488" }}
                  >
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SmartReferral;

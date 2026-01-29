import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

import MediCareDashboard from "./Components/MediCareDashboard";
import SmartReferral from "./Components/SmartReferral";
import TreatmentPathways from "./Components/TreatmentPathways";
import AIReferral from "./Components/AIReferral";
import ScheduleAppointment from "./Components/ScheduleAppointment";
import MedicalImageDetection from "./Components/MedicalImageDetection/MedicalImageDetection";
import MedicalImageResult from "./Components/MedicalImageDetection/MedicalImageResult";
import AIReferralOverview from "./Components/AI Referral/AIReferralOverview";
import RegisterPatient from "./Components/AI Referral/RegisterPatient";
import ReferralHeader from "./Components/AI Referral/ReferralHeader";
import AIScreening from "./Components/AI Referral/AIScreening";
import Referrals from "./Components/AI Referral/Referrals";
import FollowUps from "./Components/AI Referral/FollowUps";
import PatientSummary from "./Components/TreatmentPathways/PatientSummary";
import FollowUpMonitoring from "./Components/TreatmentPathways/FollowUpMonitoring";
import TreatmentDecision from "./Components/TreatmentPathways/TreatmentDecision";
import AIReferralCase from "./Components/AI Referral/AIReferralCase";
import Track from "./Components/Track/Track";
import PatientJourneyTimeline from "./Components/Track/PatientJourneyTimeline";
import PatientCaseRecord from "./Components/Track/PatientCaseRecord";
import RecoveryTracking from "./Components/Track/RecoveryTracking";
import PatientDetails from "./Components/TreatmentPathways/PatientDetails";
import PatientJourney from "./Components/TreatmentPathways/PatientJourney";
import PatientAppointments from "./Components/TreatmentPathways/PatientAppointments";
import MedicalRecords from "./Components/TreatmentPathways/MedicalRecord";
import TreatmentsPage from "./Components/TreatmentPathways/TreatmentsPage";
import RetinalImagesPage from "./Components/TreatmentPathways/RetinalImagesPage";
import ScheduleAppointmentDialog from "./Components/TreatmentPathways/ScheduleAppointmentDialog";
import TreatmentHeader from "./Components/TreatmentPathways/TreatmentHeader";
import AddMedicalRecordDialog from "./Components/TreatmentPathways/AddMedicalRecordDialog";
import AddTreatmentDialog from "./Components/TreatmentPathways/AddTreatmentDialog";
import AIAppointmentScheduling from "./Components/AI Referral/AIAppointmentScheduling";
import AIRecommendations from "./Components/AI Referral/AIRecommendations";
import AppointmentConfirmed from "./Components/AI Referral/AppointmentConfirmed";
import SmartReferralConfirmedAppointment from "./Components/SmartReferralConfirmedAppointment";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
          <Route path="/" element={<MediCareDashboard />} />
          <Route path="/medical-image-detection" element={<MedicalImageDetection />} />
          <Route path="/result" element={<MedicalImageResult />} />
          <Route path="/smart-referral" element={<SmartReferral />} />
          <Route path="/ai-referral-overview" element={<AIReferralOverview />} />
          <Route path="/register-patient" element={<RegisterPatient />} />
          <Route path="/ai-referral" element={<AIReferral />} />
          <Route path="/treatment-pathways" element={<TreatmentPathways />} />
          <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
          <Route path="/referral-header" element={<ReferralHeader />} />
          <Route path="/ai-screening" element={<AIScreening />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/follow-ups" element={<FollowUps />} />
          <Route path="/patient-summary" element={<PatientSummary />} />
          <Route path="/follow-up-monitoring" element={<FollowUpMonitoring />} />
          <Route path="/treatment-decision" element={<TreatmentDecision />} />
          <Route path="/ai-referral-case" element={<AIReferralCase />} />
          <Route path="/track" element={<Track />} />
          <Route path="/patient-journey-timeline" element={<PatientJourneyTimeline />} />
          <Route path="/patient-case-record" element={<PatientCaseRecord />} />
          <Route path="/recovery-tracking" element={<RecoveryTracking />} />
          <Route path="/patient-details" element={<PatientDetails />} />
          <Route path="/patient-journey" element={<PatientJourney />} />
          <Route path="/patient-appointments" element={<PatientAppointments />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/treatments-page" element={<TreatmentsPage />} />
          <Route path="/retinal-images" element={<RetinalImagesPage />} />
          <Route path="/schedule-appointment-dialog" element={<ScheduleAppointmentDialog />} />
          <Route path="/treatment-header" element={<TreatmentHeader />} />
          <Route path="/add-medical-record-dialog" element={<AddMedicalRecordDialog />} />
          <Route path="/add-treatment-dialog" element={<AddTreatmentDialog />} />
          <Route path="/ai-scheduling-appointment" element={<AIAppointmentScheduling />} />
          <Route path="/ai-scheduling-recommendation" element={<AIRecommendations />} />
          <Route path="/appointment-confirmed" element={<AppointmentConfirmed />} />

          <Route path="/smart-referral-confirmed" element={<SmartReferralConfirmedAppointment />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

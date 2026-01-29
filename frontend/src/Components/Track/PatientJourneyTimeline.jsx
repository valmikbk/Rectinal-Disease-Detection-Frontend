import {
  Card, CardContent, Typography,
  Stepper, Step, StepLabel
} from "@mui/material";

const steps = [
  "Screening Completed",
  "AI Risk Classified",
  "Referral to Specialist",
  "Treatment Initiated",
  "Follow-Up Ongoing",
  "Recovered / Stable"
];

export default function PatientJourneyTimeline() {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">
          Patient Journey Timeline
        </Typography>

        <Stepper activeStep={4} alternativeLabel sx={{ mt: 3 }}>
          {steps.map(step => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </CardContent>
    </Card>
  );
}
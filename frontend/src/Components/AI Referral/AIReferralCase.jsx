import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
  Stack,
  Alert
} from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab";

export default function AiReferralCase() {
  const [reminderSent, setReminderSent] = useState(false);

  const visits = [
    {
      date: "10 Jan 2025",
      title: "Initial Screening",
      notes: "AI detected Diabetic Retinopathy (Moderate)",
      meds: "—",
      status: "Detected",
      color: "warning"
    },
    {
      date: "18 Jan 2025",
      title: "Specialist Consultation",
      notes: "Confirmed DR. Advised Laser Therapy.",
      meds: "Eye drops + Glycemic control",
      status: "Treatment Planned",
      color: "info"
    },
    {
      date: "25 Jan 2025",
      title: "Treatment Visit",
      notes: "Laser therapy performed successfully",
      meds: "Post-procedure medication",
      status: "Under Treatment",
      color: "primary"
    },
    {
      date: "25 Feb 2025",
      title: "Follow-Up Visit",
      notes: "Retina stable. No progression observed.",
      meds: "Continue medication",
      status: "Recovering",
      color: "success"
    }
  ];

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h6">
          Treatment Pathway & Patient Journey
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Patient Summary */}
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Chip label="Patient: Ramesh Kumar" />
          <Chip label="Condition: DR" color="warning" />
          <Chip label="Current Status: Recovering" color="success" />
        </Stack>

        {/* Timeline */}
        <Timeline>
          {visits.map((visit, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color={visit.color} />
                {index < visits.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography fontWeight="bold">
                  {visit.title} ({visit.date})
                </Typography>
                <Typography>
                  Doctor Notes: {visit.notes}
                </Typography>
                <Typography>
                  Medication: {visit.meds}
                </Typography>
                <Chip
                  label={visit.status}
                  color={visit.color}
                  size="small"
                  sx={{ mt: 1 }}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Next Visit & Reminder */}
        <Divider sx={{ my: 2 }} />

        <Typography>
          Next Appointment: <b>25 Mar 2025</b>
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => setReminderSent(true)}
        >
          Send Auto Reminder
        </Button>

        {reminderSent && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Appointment reminder sent to patient successfully
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
# Zapier Implementation Guide
## Internal Sales Automation - No-Code Solution

**Document Version:** 1.0
**Last Updated:** October 30, 2025
**Target Audience:** IS Team, Operations

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Account Setup](#account-setup)
4. [Supporting Infrastructure](#supporting-infrastructure)
5. [Workflow 1: Meeting Reminders (24-hour)](#workflow-1-meeting-reminders-24-hour)
6. [Workflow 2: Meeting Reminders (1-hour)](#workflow-2-meeting-reminders-1-hour)
7. [Workflow 3: Call Summary Automation](#workflow-3-call-summary-automation)
8. [Workflow 4: FS Calendar Sync](#workflow-4-fs-calendar-sync)
9. [Testing & Troubleshooting](#testing--troubleshooting)
10. [Maintenance Guide](#maintenance-guide)

---

## Overview

This guide provides step-by-step instructions for setting up the Internal Sales Automation workflows using Zapier (no-code approach).

### What You'll Build

- **4 Core Zaps** that automate:
  - Meeting reminder emails (24h and 1h before meetings)
  - Automated call summary generation from transcripts
  - FS representative calendar synchronization

### Estimated Setup Time

- **Initial Setup:** 30-45 minutes
- **Workflow 1 & 2 (Reminders):** 20-30 minutes each
- **Workflow 3 (Summaries):** 45-60 minutes
- **Workflow 4 (Calendar Sync):** 30-40 minutes
- **Total:** 3-4 hours

---

## Prerequisites

### Required Access

- [ ] Zapier account (Professional plan or higher)
- [ ] HubSpot admin access
- [ ] Google Calendar access (for all FS representatives)
- [ ] OpenAI API key
- [ ] Miitel access (API or webhook capability)
- [ ] Gmail or Outlook for sending emails

### Required Plan

**Zapier Professional** ($49/month) minimum
- Unlimited tasks
- Multi-step Zaps
- Premium app integrations
- Webhooks
- Paths (conditional logic)

### Cost Estimate

```
Zapier Professional:  $49/month
OpenAI API:          $10-50/month (usage-based)
Total:               ~$60-100/month
```

---

## Account Setup

### Step 1: Sign Up for Zapier

1. Go to https://zapier.com/sign-up
2. Choose **Professional Plan** (14-day free trial available)
3. Complete account setup

### Step 2: Connect Apps

Navigate to **My Apps** in Zapier and connect:

#### 2.1 Connect HubSpot

1. Click **Add Connection**
2. Search for "HubSpot"
3. Click **Connect**
4. Log in with your HubSpot credentials
5. Authorize Zapier to access:
   - Contacts
   - Calendar
   - Deals
   - Workflows

#### 2.2 Connect Google Calendar

1. Click **Add Connection**
2. Search for "Google Calendar"
3. Click **Connect**
4. Log in with Google account
5. Grant permissions

**Repeat for each FS representative's calendar** if using separate accounts.

#### 2.3 Connect OpenAI

1. Click **Add Connection**
2. Search for "OpenAI"
3. Click **Connect**
4. Enter your OpenAI API key
5. Test connection

#### 2.4 Connect Email (Gmail or Outlook)

1. Click **Add Connection**
2. Search for "Gmail" or "Outlook"
3. Click **Connect**
4. Authorize access

#### 2.5 Connect Miitel (If Available)

**Option A:** If Miitel has direct Zapier integration
1. Search for "Miitel" in app directory
2. Connect with API credentials

**Option B:** If no direct integration
- Use **Webhooks by Zapier** (covered in Workflow 3)

---

## Supporting Infrastructure

Before building Zaps, set up these supporting resources.

### Google Sheet 1: IS-FS Team Mapping

This sheet maps Internal Sales team members to Field Sales representatives.

#### Setup Instructions

1. Create new Google Sheet: "IS-FS-Mapping"
2. Add columns:

| IS Member Email | IS Member Name | FS Rep Email | FS Rep Name | FS Calendar ID |
|----------------|----------------|--------------|-------------|----------------|
| john@company.com | John Doe | jane@company.com | Jane Smith | jane@company.com |
| sarah@company.com | Sarah Lee | mike@company.com | Mike Chen | mike@company.com |

3. Fill in your team mapping
4. Share with "Anyone with link can view"
5. Copy the sheet URL for use in Zaps

#### How to Find Calendar IDs

1. Open Google Calendar
2. Click settings gear → Settings
3. Select calendar from left sidebar
4. Scroll to "Integrate calendar"
5. Copy the Calendar ID (usually email@company.com)

### Google Sheet 2: Activity Log (Optional)

Track all automation activities for monitoring.

#### Setup Instructions

1. Create new Google Sheet: "Sales-Automation-Log"
2. Add columns:

| Timestamp | Zap Name | Action | Status | Details | Error Message |
|-----------|----------|--------|--------|---------|---------------|

3. Share with "Anyone with link can edit"
4. Copy the sheet URL

### Email Templates

Create standardized email templates for consistency.

#### Template 1: 24-Hour Meeting Reminder

```
Subject: Reminder: Meeting Tomorrow - {{Meeting Title}}

Hi {{Participant Name}},

This is a reminder about our meeting scheduled for tomorrow:

📅 Meeting: {{Meeting Title}}
🕐 Time: {{Meeting Start Time}} - {{Meeting End Time}}
📍 Location: {{Meeting Location/Link}}

Agenda:
{{Meeting Description}}

If you need to reschedule, please let me know as soon as possible.

Looking forward to speaking with you!

Best regards,
{{Your Name}}
Internal Sales Team
```

#### Template 2: 1-Hour Meeting Reminder

```
Subject: Starting in 1 Hour - {{Meeting Title}}

Hi {{Participant Name}},

Quick reminder that our meeting starts in 1 hour:

🕐 Time: {{Meeting Start Time}}
📍 Join: {{Meeting Link}}

See you soon!

{{Your Name}}
```

---

## Workflow 1: Meeting Reminders (24-hour)

### Overview

Sends email reminder 24 hours before a meeting scheduled in HubSpot.

### Step-by-Step Setup

#### 1. Create New Zap

1. Click **Create Zap**
2. Name: "Meeting Reminder - 24 Hours"

#### 2. Set Up Trigger

**App:** HubSpot
**Event:** New Engagement

1. Choose "New Engagement" as trigger
2. Connect your HubSpot account
3. **Engagement Type:** Select "Meeting"
4. Click **Continue**
5. Test trigger (should show recent meetings)

#### 3. Add Filter (Optional but Recommended)

**Purpose:** Only trigger for future meetings

1. Click **+** to add step
2. Choose **Filter**
3. **Condition:** "Meeting Start Time" → "Is After" → "(NOW)"
4. Click **Continue**

#### 4. Add Delay

**Purpose:** Wait until 24 hours before meeting

1. Click **+** to add step
2. Choose **Delay**
3. **Delay Type:** "Delay Until"
4. **Delay Until:** Custom
5. **Formula:**
   ```
   {{Meeting Start Time - 24 hours}}
   ```

   Or use Zapier's date formatter:
   - Use "Formatter by Zapier"
   - Choose "Date/Time"
   - Action "Subtract Time"
   - Subtract 24 hours from Meeting Start Time

6. Click **Continue**

#### 5. Format Email Content

1. Click **+** to add step
2. Choose **Formatter by Zapier**
3. **Event:** Text
4. **Transform:** Template

**Template:**
```
Subject: Reminder: Meeting Tomorrow - {{1. Meeting Title}}

Hi {{1. Attendee Name}},

This is a reminder about our meeting scheduled for tomorrow:

📅 Meeting: {{1. Meeting Title}}
🕐 Time: {{1. Meeting Start Time}} - {{1. Meeting End Time}}
📍 Location: {{1. Meeting Location}}

Looking forward to speaking with you!

Best regards,
[Your Name]
Internal Sales Team
```

5. Map fields from Step 1 (HubSpot trigger)
6. Test this step

#### 6. Send Email

1. Click **+** to add step
2. Choose **Gmail** (or Outlook)
3. **Action:** Send Email
4. **To:** {{1. Attendee Email}}
5. **Subject:** Use formatted subject from Step 5
6. **Body:** Use formatted body from Step 5
7. **From Name:** "Internal Sales Team"
8. Test this step

#### 7. Log Activity (Optional)

1. Click **+** to add step
2. Choose **Google Sheets**
3. **Action:** Create Spreadsheet Row
4. **Spreadsheet:** Sales-Automation-Log
5. **Worksheet:** Sheet1
6. Map fields:
   - Timestamp: {{Current Time}}
   - Zap Name: "Meeting Reminder - 24h"
   - Action: "Email Sent"
   - Status: "Success"
   - Details: {{Meeting Title}} - {{Attendee Email}}

#### 8. Turn On Zap

1. Review all steps
2. Click **Publish**
3. Toggle switch to ON

**✅ Workflow 1 Complete!**

---

## Workflow 2: Meeting Reminders (1-hour)

### Overview

Sends email reminder 1 hour before a meeting.

### Quick Setup

This is similar to Workflow 1, with one key difference:

#### Differences from Workflow 1

- **Name:** "Meeting Reminder - 1 Hour"
- **Delay Until:** {{Meeting Start Time - 1 hour}}
- **Email Subject:** "Starting in 1 Hour - {{Meeting Title}}"
- **Email Body:** Shorter, more urgent tone

### Step-by-Step

1. **Clone Workflow 1**
   - Click ⚙️ on "Meeting Reminder - 24 Hours"
   - Select "Copy Zap"
   - Rename to "Meeting Reminder - 1 Hour"

2. **Modify Step 4 (Delay)**
   - Change delay to **1 hour** instead of 24 hours

3. **Modify Step 5 (Format Email)**
   - Update template to:

```
Subject: Starting in 1 Hour - {{1. Meeting Title}}

Hi {{1. Attendee Name}},

Quick reminder that our meeting starts in 1 hour:

🕐 Time: {{1. Meeting Start Time}}
📍 Join: {{1. Meeting Link}}

See you soon!

{{Your Name}}
```

4. **Test and Publish**

**✅ Workflow 2 Complete!**

---

## Workflow 3: Call Summary Automation

### Overview

This workflow:
1. Detects new call recording in Miitel
2. Fetches transcript
3. Generates AI summary using OpenAI
4. Updates HubSpot contact/deal
5. Updates FS rep's Google Calendar

### Prerequisites

- [ ] OpenAI API key
- [ ] Miitel webhook URL or API access
- [ ] Call summary prompt template

### Step-by-Step Setup

#### 1. Create New Zap

1. Click **Create Zap**
2. Name: "Call Summary Automation"

#### 2. Set Up Trigger

**Option A: If Miitel has webhook support (Recommended)**

1. **App:** Webhooks by Zapier
2. **Event:** Catch Hook
3. Copy the webhook URL
4. Configure in Miitel to send webhook on "Call Completed"
5. Make a test call to trigger

**Option B: If using email notifications**

1. **App:** Gmail (or Email Parser)
2. **Event:** New Email Matching Search
3. **Search:** from:noreply@miitel.com subject:"Call Recorded"
4. Parse email to extract call ID

**Option C: Scheduled polling**

1. **App:** Schedule by Zapier
2. **Event:** Every 15 minutes
3. Then use Webhooks to call Miitel API

#### 3. Fetch Transcript from Miitel

1. Click **+** to add step
2. Choose **Webhooks by Zapier**
3. **Action:** GET
4. **URL:**
   ```
   https://api.miitel.com/v1/transcripts/{{Call ID}}
   ```
5. **Headers:**
   - Authorization: Bearer {{Your Miitel API Key}}
   - Content-Type: application/json
6. Test to fetch a sample transcript

**Note:** Adjust URL and authentication based on Miitel's actual API documentation.

#### 4. Generate Summary with OpenAI

1. Click **+** to add step
2. Choose **OpenAI**
3. **Action:** Create Completion (or Chat Completion)
4. **Model:** gpt-4-turbo-preview
5. **Prompt:**

```
You are an expert sales assistant. Analyze this sales call transcript and provide:

1. Key discussion points (3-5 bullet points)
2. Next steps identified (2-4 action items)
3. Customer sentiment (positive/neutral/negative)
4. Brief summary (2-3 sentences)

Format as JSON:
{
  "keyPoints": ["point 1", "point 2", "point 3"],
  "nextSteps": ["step 1", "step 2"],
  "sentiment": "positive",
  "summary": "Brief summary here"
}

Transcript:
{{3. Transcript Text}}
```

6. **Temperature:** 0.3
7. **Max Tokens:** 1000
8. Test this step

#### 5. Parse AI Response

1. Click **+** to add step
2. Choose **Formatter by Zapier**
3. **Event:** Utilities
4. **Transform:** Parse JSON
5. **Input:** {{4. OpenAI Response}}
6. Test to extract structured data

#### 6. Update HubSpot

1. Click **+** to add step
2. Choose **HubSpot**
3. **Action:** Update Contact (or Deal)
4. **Contact ID:** {{1. Contact ID from trigger}}
5. **Field to Update:** "Last Call Summary"
6. **Value:**
   ```
   Summary: {{5. summary}}

   Key Points:
   {{5. keyPoints}}

   Next Steps:
   {{5. nextSteps}}

   Sentiment: {{5. sentiment}}
   ```
7. Test this step

#### 7. Update FS Rep's Google Calendar

1. Click **+** to add step
2. Choose **Google Sheets**
3. **Action:** Lookup Spreadsheet Row
4. **Spreadsheet:** IS-FS-Mapping
5. **Lookup Column:** IS Member Email
6. **Lookup Value:** {{1. IS Member Email}}
7. **Return:** FS Calendar ID

8. Click **+** to add step
9. Choose **Google Calendar**
10. **Action:** Find Event
11. **Calendar:** Use calendar ID from step 7
12. **Search Term:** {{1. Customer Name}} OR {{1. Company Name}}
13. **Time Range:** Today

14. Click **+** to add step
15. Choose **Google Calendar**
16. **Action:** Update Event
17. **Event ID:** {{8. Event ID}}
18. **Description:** Add summary to existing description:
    ```
    {{Existing Description}}

    --- Call Summary ---
    {{5. summary}}

    Key Points:
    {{5. keyPoints}}

    Next Steps:
    {{5. nextSteps}}
    ```

#### 8. Send Notification (Optional)

1. Click **+** to add step
2. Choose **Email** or **Slack**
3. Notify IS team member that summary was created

#### 9. Test and Publish

1. Run complete test with real call
2. Verify summary quality
3. Check HubSpot and calendar updates
4. Turn Zap ON

**✅ Workflow 3 Complete!**

---

## Workflow 4: FS Calendar Sync

### Overview

When a meeting is scheduled in HubSpot, automatically create corresponding event in FS representative's Google Calendar.

### Step-by-Step Setup

#### 1. Create New Zap

1. Click **Create Zap**
2. Name: "FS Calendar Sync"

#### 2. Set Up Trigger

1. **App:** HubSpot
2. **Event:** New Engagement
3. **Engagement Type:** Meeting
4. Test trigger

#### 3. Lookup FS Representative

1. Click **+** to add step
2. Choose **Google Sheets**
3. **Action:** Lookup Spreadsheet Row
4. **Spreadsheet:** IS-FS-Mapping
5. **Lookup Column:** IS Member Email
6. **Lookup Value:** {{1. Owner Email}} (IS team member who created meeting)
7. **Return All Fields:** Yes
8. Test lookup

#### 4. Create Calendar Event

1. Click **+** to add step
2. Choose **Google Calendar**
3. **Action:** Create Detailed Event
4. **Calendar:** {{2. FS Calendar ID}}
5. **Event Title:**
   ```
   [Customer Meeting] {{1. Meeting Title}}
   ```
6. **Start Date & Time:** {{1. Meeting Start Time}}
7. **End Date & Time:** {{1. Meeting End Time}}
8. **Description:**
   ```
   Customer: {{1. Company Name}}
   Contact: {{1. Contact Name}}
   IS Rep: {{1. Owner Name}}

   Agenda:
   {{1. Meeting Description}}

   HubSpot Link: {{1. HubSpot Meeting URL}}
   ```
9. **Location:** {{1. Meeting Location}}
10. **Attendees:** {{2. FS Rep Email}}, {{1. Contact Email}}
11. Test this step

#### 5. Update HubSpot with Calendar Link

1. Click **+** to add step
2. Choose **HubSpot**
3. **Action:** Update Engagement
4. **Engagement ID:** {{1. Engagement ID}}
5. **Add Note:**
   ```
   FS Calendar event created: {{3. Calendar Event Link}}
   ```

#### 6. Log Activity

1. Click **+** to add step
2. Choose **Google Sheets**
3. **Action:** Create Spreadsheet Row
4. **Spreadsheet:** Sales-Automation-Log
5. Map fields

#### 7. Test and Publish

**✅ Workflow 4 Complete!**

---

## Testing & Troubleshooting

### Testing Workflows

#### Test Meeting Reminders

1. Create test meeting in HubSpot 25 hours in future
2. Wait or manually trigger Zap
3. Verify email received

**To test without waiting:**
- Temporarily change delay to 1 minute
- Create meeting
- Test
- Change delay back to 24 hours

#### Test Call Summaries

1. Make test call in Miitel
2. Check if Zap triggers
3. Verify summary quality
4. Check HubSpot and calendar updates

#### Test Calendar Sync

1. Create meeting in HubSpot
2. Check FS rep's Google Calendar
3. Verify all details are correct

### Common Issues & Solutions

#### Issue 1: Zap Not Triggering

**Solutions:**
- Check app connections (reconnect if needed)
- Verify trigger filters
- Check Zap history for errors
- Ensure webhook URLs are correctly configured

#### Issue 2: Delays Not Working

**Solutions:**
- Verify date/time formats match
- Check timezone settings
- Use absolute timestamps instead of relative

#### Issue 3: Email Not Sending

**Solutions:**
- Check email quota limits
- Verify recipient email addresses
- Check spam folders
- Ensure email templates are properly formatted

#### Issue 4: OpenAI Errors

**Solutions:**
- Check API key validity
- Verify sufficient credits
- Reduce max tokens if hitting limits
- Check prompt formatting

#### Issue 5: Calendar Not Updating

**Solutions:**
- Verify calendar permissions
- Check calendar ID is correct
- Ensure time zones match
- Reconnect Google Calendar connection

### Monitoring Zap Performance

1. **Zap History**
   - View all Zap runs
   - See successes and failures
   - Debug errors

2. **Activity Log Sheet**
   - Track all activities
   - Identify patterns
   - Generate reports

3. **Email Notifications**
   - Enable error notifications
   - Settings → Notifications → Email me when Zaps have errors

---

## Maintenance Guide

### Regular Maintenance Tasks

#### Daily
- [ ] Check Zap history for errors
- [ ] Monitor email delivery
- [ ] Review activity log

#### Weekly
- [ ] Review summary quality
- [ ] Check calendar sync accuracy
- [ ] Update IS-FS mapping if team changes

#### Monthly
- [ ] Review Zapier task usage
- [ ] Optimize workflows
- [ ] Update email templates if needed
- [ ] Check OpenAI costs

### How to Modify Workflows

#### Updating Email Templates

1. Open Zap
2. Go to email formatting step
3. Edit template
4. Test with sample data
5. Save changes

#### Changing Delay Times

1. Open Zap
2. Go to Delay step
3. Modify time
4. Test
5. Save

#### Adding New FS Representatives

1. Open IS-FS-Mapping sheet
2. Add new row with mapping
3. No Zap changes needed
4. Test with new meeting

### When to Upgrade or Switch

**Signs you need code-based solution:**
- Processing > 500 calls/day
- Need < 1 minute processing time
- Require complex custom logic
- Zapier costs exceed $200/month
- Need advanced error handling

---

## Best Practices

### 1. Start Simple
- Build one Zap at a time
- Test thoroughly before moving to next
- Get team feedback early

### 2. Monitor Closely
- Check Zap history daily initially
- Set up error notifications
- Review activity logs weekly

### 3. Document Changes
- Keep change log
- Note when templates are updated
- Document custom configurations

### 4. Test in Sandbox
- Use test HubSpot account if available
- Create test meetings
- Verify before going live

### 5. Have Backup Plan
- Keep manual process documented
- Train team on manual fallback
- Monitor for failures

---

## Cost Optimization

### Tips to Reduce Costs

1. **Zapier Tasks**
   - Use filters to prevent unnecessary runs
   - Combine steps where possible
   - Use scheduled triggers instead of instant (where appropriate)

2. **OpenAI API**
   - Use gpt-4-turbo instead of gpt-4 (cheaper)
   - Optimize prompt length
   - Set reasonable max tokens (500-1000)
   - Cache common summaries

3. **App Connections**
   - Use native integrations (cheaper than webhooks)
   - Batch operations where possible

---

## Support & Resources

### Zapier Resources
- Help Center: https://help.zapier.com
- Community: https://community.zapier.com
- Status Page: https://status.zapier.com

### Integration Documentation
- HubSpot API: https://developers.hubspot.com
- Google Calendar API: https://developers.google.com/calendar
- OpenAI API: https://platform.openai.com/docs

### Getting Help

1. Check Zap History for error messages
2. Search Zapier Community
3. Contact Zapier Support
4. Review this guide
5. Consult with IT team if needed

---

## Quick Reference

### Zapier Terminology

- **Zap:** Automated workflow
- **Trigger:** Event that starts a Zap
- **Action:** Task performed by Zap
- **Step:** Each part of a Zap
- **Task:** Each time a Zap runs
- **Filter:** Conditional logic
- **Path:** Branching logic
- **Formatter:** Data transformation

### Keyboard Shortcuts

- `N` - New Zap
- `S` - Save Zap
- `T` - Test step
- `E` - Edit step

---

## Appendix

### A. Sample Prompts

#### Discovery Call Summary Prompt
```
Analyze this sales discovery call and provide:
1. Customer's main pain points
2. Discussed solutions
3. Budget mentioned (if any)
4. Timeline discussed
5. Next steps
6. Sentiment: positive/neutral/negative

Format as JSON.
```

#### Demo Call Summary Prompt
```
Analyze this product demo call and provide:
1. Features demonstrated
2. Customer questions
3. Objections raised
4. Interest level
5. Next steps
6. Sentiment: positive/neutral/negative

Format as JSON.
```

### B. Email Template Variables

Common variables available from HubSpot:
- `{{Meeting Title}}`
- `{{Meeting Start Time}}`
- `{{Meeting End Time}}`
- `{{Attendee Name}}`
- `{{Attendee Email}}`
- `{{Meeting Location}}`
- `{{Meeting Description}}`
- `{{Owner Name}}`
- `{{Company Name}}`

### C. Troubleshooting Checklist

When a Zap fails:
- [ ] Check Zap is turned ON
- [ ] Verify all app connections are active
- [ ] Review Zap History for error messages
- [ ] Test each step individually
- [ ] Check data format matches expected format
- [ ] Verify API rate limits not exceeded
- [ ] Ensure required fields have data
- [ ] Check filters aren't blocking execution

---

**End of Guide**

For questions or support, contact the Operations team or create an issue in the GitHub repository.

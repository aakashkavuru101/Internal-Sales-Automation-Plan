# Zapier Implementation Checklist
## Internal Sales Automation - Step-by-Step Guide

**Start Date:** ___________
**Target Completion:** Week 1-2
**Status:** In Progress

---

## Phase 1: Account Setup & Prerequisites (Day 1 - 30 mins)

### Step 1: Sign Up for Zapier
- [ ] Go to https://zapier.com/sign-up
- [ ] Choose **Professional Plan** ($49/month)
  - 14-day free trial available
  - Cancel anytime if needed
- [ ] Complete account setup
- [ ] Verify email address

**Status:** ⏳ IN PROGRESS

---

### Step 2: Gather Required Credentials

Before connecting apps, make sure you have:

#### HubSpot Access
- [ ] HubSpot admin credentials (or account with calendar access)
- [ ] Note your HubSpot portal/account name: ___________

#### Google Account
- [ ] Gmail/Google Workspace admin access
- [ ] List all FS representative emails:
  - ___________@company.com
  - ___________@company.com
  - ___________@company.com

#### OpenAI API Key (for Phase 3)
- [ ] Sign up at https://platform.openai.com
- [ ] Add payment method (required for API access)
- [ ] Generate API key
- [ ] Save key securely: `sk-...`

#### Miitel Access (for Phase 3)
- [ ] Miitel account credentials
- [ ] Check if Miitel has:
  - [ ] Webhook capability (ask support)
  - [ ] API access (check documentation)
  - [ ] Email notifications for new calls

---

## Phase 2: Connect Apps to Zapier (Day 1 - 20 mins)

### Step 3: Connect HubSpot

1. [ ] In Zapier, go to **My Apps** (https://zapier.com/app/connections)
2. [ ] Click **Add Connection**
3. [ ] Search for "HubSpot"
4. [ ] Click **Connect**
5. [ ] Log in with HubSpot credentials
6. [ ] Authorize Zapier to access:
   - [x] Contacts
   - [x] Calendar Events/Engagements
   - [x] Deals
   - [x] Workflows
7. [ ] Click **Allow**
8. [ ] Test connection - should show ✅ "Connected"

**Troubleshooting:**
- If connection fails, ensure you have admin access
- Try incognito/private browsing mode
- Check HubSpot isn't blocking Zapier

**Status:** ⬜ NOT STARTED

---

### Step 4: Connect Google Calendar

1. [ ] In **My Apps**, click **Add Connection**
2. [ ] Search for "Google Calendar"
3. [ ] Click **Connect**
4. [ ] Choose your Google account
5. [ ] Grant permissions:
   - [x] View and edit events
   - [x] View calendar settings
6. [ ] Click **Allow**
7. [ ] Test connection - should show ✅

**Note:** If you need to access multiple FS rep calendars:
- [ ] Option A: Use one Google Workspace admin account with access to all calendars
- [ ] Option B: Connect each FS rep's account separately (they need to authorize)

**Status:** ⬜ NOT STARTED

---

### Step 5: Connect Email (Gmail or Outlook)

Choose ONE:

#### Option A: Gmail
1. [ ] In **My Apps**, click **Add Connection**
2. [ ] Search for "Gmail"
3. [ ] Click **Connect**
4. [ ] Choose your Google account
5. [ ] Grant send email permissions
6. [ ] Click **Allow**

#### Option B: Outlook
1. [ ] In **My Apps**, click **Add Connection**
2. [ ] Search for "Outlook"
3. [ ] Click **Connect**
4. [ ] Log in with Microsoft credentials
5. [ ] Grant permissions

**From Email:** ___________@company.com

**Status:** ⬜ NOT STARTED

---

## Phase 3: Create Supporting Infrastructure (Day 1 - 30 mins)

### Step 6: Create IS-FS Team Mapping Sheet

This Google Sheet maps Internal Sales members to Field Sales reps.

1. [ ] Go to https://sheets.google.com
2. [ ] Create new sheet: **"IS-FS-Team-Mapping"**
3. [ ] Add column headers in Row 1:

| A | B | C | D | E |
|---|---|---|---|---|
| IS Member Email | IS Member Name | FS Rep Email | FS Rep Name | FS Calendar ID |

4. [ ] Fill in your team data (example):

| IS Member Email | IS Member Name | FS Rep Email | FS Rep Name | FS Calendar ID |
|----------------|----------------|--------------|-------------|----------------|
| john.doe@company.com | John Doe | jane.smith@company.com | Jane Smith | jane.smith@company.com |
| sarah.lee@company.com | Sarah Lee | mike.chen@company.com | Mike Chen | mike.chen@company.com |

5. [ ] Share settings → **Anyone with the link** → **Viewer**
6. [ ] Copy and save the sheet URL:
   ```
   https://docs.google.com/spreadsheets/d/___________
   ```

**How to find Calendar IDs:**
- Open Google Calendar → Settings → Select calendar
- Scroll to "Integrate calendar"
- Copy Calendar ID (usually the email address)

**Sheet URL:** ___________

**Status:** ⬜ NOT STARTED

---

### Step 7: Create Activity Log Sheet (Optional but Recommended)

Track all automation activities for monitoring.

1. [ ] Go to https://sheets.google.com
2. [ ] Create new sheet: **"Sales-Automation-Log"**
3. [ ] Add column headers:

| Timestamp | Zap Name | Action | Status | Meeting/Call Info | Error Message |
|-----------|----------|--------|--------|-------------------|---------------|

4. [ ] Share settings → **Anyone with the link** → **Editor**
5. [ ] Copy and save the sheet URL: ___________

**Sheet URL:** ___________

**Status:** ⬜ NOT STARTED

---

## Phase 4: Build Workflow 1 - Meeting Reminder 24h (Day 2 - 45 mins)

### Step 8: Create the Zap

1. [ ] Go to Zapier Dashboard
2. [ ] Click **Create Zap** (or go to https://zapier.com/app/editor)
3. [ ] Name the Zap: **"Meeting Reminder - 24 Hours"**

---

### Step 9: Set Up Trigger (HubSpot)

1. [ ] **Choose App:** Search "HubSpot"
2. [ ] **Choose Event:** "New Engagement"
3. [ ] Click **Continue**
4. [ ] **Choose Account:** Select your connected HubSpot
5. [ ] **Engagement Type:**
   - [ ] Select "MEETING" (or "Meeting" depending on display)
6. [ ] Click **Continue**
7. [ ] **Test Trigger:** Click "Test trigger"
   - Should show recent meetings from HubSpot
   - If no results, create a test meeting in HubSpot first
8. [ ] Select a sample meeting for testing
9. [ ] Click **Continue**

**✅ Checkpoint:** You should see meeting details like title, start time, attendees

**Status:** ⬜ NOT STARTED

---

### Step 10: Add Filter (Optional but Recommended)

Filter to only process future meetings.

1. [ ] Click **+** between steps
2. [ ] Choose **Filter**
3. [ ] **Only continue if...**
4. [ ] **Condition:**
   - Field: `Start Time` (from HubSpot trigger)
   - Condition: "Is After"
   - Value: `{{zap_meta_human_now}}` (current time)
5. [ ] Click **Continue**
6. [ ] Test filter - should show "Would have continued"

**Status:** ⬜ NOT STARTED

---

### Step 11: Add Delay (Wait 24 Hours Before Meeting)

1. [ ] Click **+** to add action
2. [ ] Search for **"Delay by Zapier"**
3. [ ] **Choose Event:** "Delay Until"
4. [ ] Click **Continue**
5. [ ] **Delay Until (Date/time):**
   - Click in field
   - Select **"Use a custom value"**
   - Click **Insert Data**
   - Choose trigger step → Find "Start Time"
6. [ ] **Time Before:** Enter `-24` hours
   - This means 24 hours BEFORE the start time
7. [ ] Click **Continue**
8. [ ] **Test:** Review the calculated time
9. [ ] Click **Continue**

**Note:** For testing purposes, you can temporarily set this to `-1` minute to test quickly, then change back to `-24` hours.

**Status:** ⬜ NOT STARTED

---

### Step 12: Format Email Content

1. [ ] Click **+** to add action
2. [ ] Search for **"Formatter by Zapier"**
3. [ ] **Choose Event:** "Text"
4. [ ] Click **Continue**
5. [ ] **Transform:** Select "Default Value" or use directly in email step

**Skip this step for now - we'll format directly in the email**

---

### Step 13: Send Email Reminder

1. [ ] Click **+** to add action
2. [ ] Search for **"Gmail"** (or "Outlook")
3. [ ] **Choose Event:** "Send Email"
4. [ ] Click **Continue**
5. [ ] **Choose Account:** Select your connected email
6. [ ] **Configure Email:**

   **To:**
   - Click field → Insert Data → Choose attendee email from trigger
   - Or manually enter if field not available: `{{attendee_email}}`

   **From (optional):** Your Name <your.email@company.com>

   **Subject:**
   ```
   Reminder: Meeting Tomorrow - {{Meeting Title}}
   ```

   **Body Type:** Select "HTML" or "Plain Text"

   **Body:**
   ```
   Hi {{Attendee Name}},

   This is a reminder about our meeting scheduled for tomorrow:

   📅 Meeting: {{Meeting Title}}
   🕐 Time: {{Meeting Start Time}} - {{Meeting End Time}}
   📍 Location: {{Meeting Location}}

   {{Meeting Description}}

   If you need to reschedule, please let me know as soon as possible.

   Looking forward to speaking with you!

   Best regards,
   [Your Name]
   Internal Sales Team
   ```

   **Map fields by clicking on each {{field}} and inserting data from Step 1 (HubSpot trigger)**

7. [ ] Click **Continue**
8. [ ] **Test:** Click "Test step"
   - Check the email was sent
   - Check your inbox or test email address
9. [ ] Click **Continue**

**✅ Checkpoint:** You should receive a test email with meeting details

**Status:** ⬜ NOT STARTED

---

### Step 14: Log Activity (Optional)

1. [ ] Click **+** to add action
2. [ ] Search for **"Google Sheets"**
3. [ ] **Choose Event:** "Create Spreadsheet Row"
4. [ ] Click **Continue**
5. [ ] **Choose Account:** Select your Google account
6. [ ] **Spreadsheet:** Select "Sales-Automation-Log"
7. [ ] **Worksheet:** Select "Sheet1"
8. [ ] **Map columns:**
   - Timestamp: `{{zap_meta_human_now}}`
   - Zap Name: "Meeting Reminder - 24h"
   - Action: "Email Sent"
   - Status: "Success"
   - Meeting/Call Info: `{{Meeting Title}} - {{Attendee Email}}`
   - Error Message: (leave blank)
9. [ ] Click **Continue**
10. [ ] Test this step
11. [ ] Check Google Sheet for new row

**Status:** ⬜ NOT STARTED

---

### Step 15: Publish Zap 1

1. [ ] Review all steps
2. [ ] Check for any errors (red warnings)
3. [ ] Click **Publish** (top right)
4. [ ] **Turn Zap ON** (toggle switch)
5. [ ] Confirm: "Your Zap is on!"

**🎉 Workflow 1 Complete!**

**Status:** ⬜ NOT STARTED

---

## Phase 5: Test Workflow 1 (Day 2 - 15 mins)

### Step 16: Create Test Meeting

**For Quick Testing (1-2 minutes):**

1. [ ] Temporarily edit Zap
2. [ ] Change delay from `-24 hours` to `-1 minute`
3. [ ] Save Zap
4. [ ] Create meeting in HubSpot scheduled for 5 minutes from now
5. [ ] Wait 1-2 minutes
6. [ ] Check Zap History (should show run)
7. [ ] Check email inbox for reminder
8. [ ] Change delay back to `-24 hours`

**For Real Testing (24 hours):**

1. [ ] Create meeting in HubSpot for 25 hours from now
2. [ ] Wait 1 hour (Zap should trigger)
3. [ ] Check reminder will be sent in 23 hours
4. [ ] Wait for actual email delivery

**Testing Checklist:**
- [ ] Meeting created in HubSpot
- [ ] Zap triggered (check Zap History)
- [ ] Delay calculated correctly
- [ ] Email sent successfully
- [ ] Email content is correct
- [ ] Log entry created (if using)

**Status:** ⬜ NOT STARTED

---

## Phase 6: Build Workflow 2 - Meeting Reminder 1h (Day 2 - 20 mins)

### Step 17: Clone Zap 1

This is faster than building from scratch!

1. [ ] Go to Zapier Dashboard → **My Zaps**
2. [ ] Find "Meeting Reminder - 24 Hours"
3. [ ] Click **⚙️ Settings**
4. [ ] Select **"Duplicate Zap"**
5. [ ] Rename to: **"Meeting Reminder - 1 Hour"**

---

### Step 18: Modify Delay

1. [ ] Open the duplicated Zap
2. [ ] Go to the **Delay** step
3. [ ] Change delay from `-24 hours` to `-1 hour`
4. [ ] Save changes

---

### Step 19: Update Email Content

1. [ ] Go to **Email** step
2. [ ] Update **Subject:**
   ```
   Starting in 1 Hour - {{Meeting Title}}
   ```
3. [ ] Update **Body:**
   ```
   Hi {{Attendee Name}},

   Quick reminder that our meeting starts in 1 hour:

   🕐 Time: {{Meeting Start Time}}
   📍 Join: {{Meeting Location/Link}}

   See you soon!

   Best regards,
   [Your Name]
   Internal Sales Team
   ```
4. [ ] Save changes

---

### Step 20: Update Log Entry (if using)

1. [ ] Go to **Google Sheets** step
2. [ ] Change Zap Name to: "Meeting Reminder - 1h"
3. [ ] Save changes

---

### Step 21: Publish Zap 2

1. [ ] Review all steps
2. [ ] Click **Publish**
3. [ ] **Turn Zap ON**

**🎉 Workflow 2 Complete!**

**Status:** ⬜ NOT STARTED

---

## Phase 7: Test Workflow 2 (Day 2 - 10 mins)

### Step 22: Test 1-Hour Reminder

Use same testing method as Zap 1:

**Quick Test:**
- [ ] Change delay to `-1 minute`
- [ ] Create test meeting
- [ ] Verify email received
- [ ] Change delay back to `-1 hour`

**Real Test:**
- [ ] Create meeting for 2 hours from now
- [ ] Wait for 1-hour reminder

**Status:** ⬜ NOT STARTED

---

## Phase 8: Get OpenAI API Key (Day 3 - 15 mins)

### Step 23: Sign Up for OpenAI

1. [ ] Go to https://platform.openai.com
2. [ ] Click **Sign Up** (or log in if you have account)
3. [ ] Complete registration
4. [ ] Verify email

---

### Step 24: Add Payment Method

1. [ ] Go to **Billing** → https://platform.openai.com/account/billing
2. [ ] Click **Add payment method**
3. [ ] Enter credit card details
4. [ ] Set usage limit (recommended: $50/month to start)
5. [ ] Save

**Estimated costs for call summaries:** $10-50/month depending on volume

---

### Step 25: Generate API Key

1. [ ] Go to **API Keys** → https://platform.openai.com/api-keys
2. [ ] Click **Create new secret key**
3. [ ] Name: "Zapier Sales Automation"
4. [ ] Click **Create**
5. [ ] **IMPORTANT:** Copy the key immediately (starts with `sk-`)
6. [ ] Save securely - you won't see it again!

**API Key (save securely):** `sk-___________`

---

### Step 26: Connect OpenAI to Zapier

1. [ ] In Zapier, go to **My Apps**
2. [ ] Click **Add Connection**
3. [ ] Search for "OpenAI"
4. [ ] Click **Connect**
5. [ ] Paste your API key: `sk-___________`
6. [ ] Click **Yes, Continue**
7. [ ] Test connection - should show ✅

**Status:** ⬜ NOT STARTED

---

## Phase 9: Build Workflow 3 - Call Summary Automation (Day 3-4 - 90 mins)

**⚠️ Important:** This workflow depends on how Miitel sends notifications. We need to determine the trigger method first.

### Step 27: Determine Miitel Trigger Method

**Check which option is available:**

#### Option A: Webhook (Best)
- [ ] Contact Miitel support
- [ ] Ask: "Does Miitel support webhooks for call completed events?"
- [ ] If YES: Request webhook documentation

#### Option B: Email Notification
- [ ] Check if Miitel sends email when call is recorded
- [ ] If YES: Note the email format and sender
- [ ] Example: from:noreply@miitel.com, subject:"Call Recorded"

#### Option C: API Polling
- [ ] Check Miitel API documentation
- [ ] Look for "List Calls" or "Recent Calls" endpoint
- [ ] Note API endpoint and authentication method

**Selected Method:** ___________

**Status:** ⬜ NOT STARTED

---

### Step 28: Create Zap 3

1. [ ] Click **Create Zap**
2. [ ] Name: **"Call Summary Automation"**

---

### Step 29: Set Up Trigger (Based on Step 27)

**If using Option A (Webhook):**
1. [ ] Choose **Webhooks by Zapier**
2. [ ] Event: **Catch Hook**
3. [ ] Copy webhook URL
4. [ ] Configure in Miitel to send webhook on "Call Completed"
5. [ ] Make test call to trigger

**If using Option B (Email):**
1. [ ] Choose **Gmail**
2. [ ] Event: **New Email Matching Search**
3. [ ] Search: `from:noreply@miitel.com subject:"Call Recorded"`
4. [ ] Test trigger

**If using Option C (Scheduled):**
1. [ ] Choose **Schedule by Zapier**
2. [ ] Event: **Every 15 minutes**
3. [ ] Then add Webhooks step to call Miitel API

**⚠️ STOP HERE - We need to know your Miitel setup before continuing**

**Status:** ⬜ NOT STARTED

---

## Phase 10: Complete Call Summary Workflow (TBD)

This section will be completed once we determine the Miitel integration method.

**Status:** ⬜ NOT STARTED

---

## Phase 11: Build Workflow 4 - FS Calendar Sync (Day 5 - 45 mins)

### Step 30: Create Zap 4

1. [ ] Click **Create Zap**
2. [ ] Name: **"FS Calendar Sync"**

---

### Step 31: Set Up Trigger (HubSpot Meeting)

1. [ ] Choose **HubSpot**
2. [ ] Event: **New Engagement**
3. [ ] Engagement Type: **Meeting**
4. [ ] Test trigger

---

### Step 32: Lookup FS Representative

1. [ ] Click **+** to add action
2. [ ] Choose **Google Sheets**
3. [ ] Event: **Lookup Spreadsheet Row**
4. [ ] Spreadsheet: **IS-FS-Team-Mapping**
5. [ ] Worksheet: **Sheet1**
6. [ ] Lookup Column: **IS Member Email** (Column A)
7. [ ] Lookup Value: `{{Meeting Owner Email}}` from trigger
8. [ ] Test lookup - should return FS rep info

---

### Step 33: Create Calendar Event

1. [ ] Click **+** to add action
2. [ ] Choose **Google Calendar**
3. [ ] Event: **Create Detailed Event**
4. [ ] Calendar: `{{FS Calendar ID}}` from step 32
5. [ ] **Event Title:**
   ```
   [Customer Meeting] {{Meeting Title}}
   ```
6. [ ] **Start Date & Time:** `{{Meeting Start Time}}`
7. [ ] **End Date & Time:** `{{Meeting End Time}}`
8. [ ] **Description:**
   ```
   Customer: {{Company Name}}
   Contact: {{Contact Name}}
   IS Rep: {{Owner Name}}

   Agenda:
   {{Meeting Description}}
   ```
9. [ ] **Location:** `{{Meeting Location}}`
10. [ ] **Attendees:** `{{FS Rep Email}}, {{Contact Email}}`
11. [ ] Test this step

---

### Step 34: Publish Zap 4

1. [ ] Review all steps
2. [ ] Click **Publish**
3. [ ] Turn Zap ON

**Status:** ⬜ NOT STARTED

---

## Progress Tracker

### Overall Status

| Phase | Task | Status | Date Completed |
|-------|------|--------|----------------|
| 1 | Zapier Account Setup | ⬜ | ___ |
| 2 | Connect Apps | ⬜ | ___ |
| 3 | Create Google Sheets | ⬜ | ___ |
| 4 | Build Zap 1 (24h Reminder) | ⬜ | ___ |
| 5 | Test Zap 1 | ⬜ | ___ |
| 6 | Build Zap 2 (1h Reminder) | ⬜ | ___ |
| 7 | Test Zap 2 | ⬜ | ___ |
| 8 | Get OpenAI API Key | ⬜ | ___ |
| 9 | Build Zap 3 (Call Summaries) | ⬜ | ___ |
| 10 | Test Zap 3 | ⬜ | ___ |
| 11 | Build Zap 4 (Calendar Sync) | ⬜ | ___ |
| 12 | Test Zap 4 | ⬜ | ___ |

**Legend:** ⬜ Not Started | ⏳ In Progress | ✅ Complete | ❌ Blocked

---

## Next Action

**👉 START HERE:**

1. Go to https://zapier.com/sign-up
2. Sign up for Professional Plan (14-day trial)
3. Come back and mark Step 1 as complete
4. Move to Step 2

**When you complete each step, update the checkbox with [x]**

---

## Getting Help

**If you get stuck:**
1. Check the detailed ZAPIER_GUIDE.md for more info
2. Search Zapier Help Center: https://help.zapier.com
3. Come back here and let me know where you're stuck
4. I can help troubleshoot specific steps

**Common Questions:**
- "Can't find HubSpot engagement?" → Check HubSpot admin permissions
- "Email not sending?" → Check Gmail connection and permissions
- "Delay not working?" → Verify date/time format matches expected format

---

## Completion Checklist

Once all workflows are live:

- [ ] All 4 Zaps are published and turned ON
- [ ] Test meetings created and reminders received
- [ ] Call summaries being generated (if Zap 3 complete)
- [ ] FS calendars being updated automatically
- [ ] Activity log tracking all actions
- [ ] IS team trained on system
- [ ] Monitoring process in place
- [ ] Backup/manual process documented

**🎉 When complete, you'll have a fully automated sales workflow!**

---

**Questions or need help? Let me know which step you're on and I'll guide you through it!**

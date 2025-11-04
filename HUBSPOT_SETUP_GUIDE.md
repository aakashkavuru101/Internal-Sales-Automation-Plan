# HubSpot Setup Guide for Zapier Integration
## Beginner's Guide - Never Used HubSpot Before

**Purpose:** Learn HubSpot basics and connect it to Zapier for automation
**Time Required:** 30-45 minutes
**Prerequisite:** Company HubSpot account access

---

## Table of Contents

1. [HubSpot Basics - What You Need to Know](#hubspot-basics)
2. [Logging Into HubSpot](#logging-into-hubspot)
3. [Understanding HubSpot's Interface](#understanding-hubspots-interface)
4. [Finding Meetings/Engagements](#finding-meetings-engagements)
5. [Connecting HubSpot to Zapier](#connecting-hubspot-to-zapier)
6. [Testing the Connection](#testing-the-connection)
7. [Understanding Available Data Fields](#understanding-available-data-fields)
8. [Troubleshooting](#troubleshooting)

---

## HubSpot Basics

### What is HubSpot?

HubSpot is a CRM (Customer Relationship Management) platform that stores:
- **Contacts** - People (prospects, customers)
- **Companies** - Organizations
- **Deals** - Sales opportunities
- **Engagements** - Activities like:
  - Meetings (what we need!)
  - Calls
  - Emails
  - Tasks

### What We Need From HubSpot

For our automation, we specifically need:
- **Meeting Engagements** - scheduled meetings with prospects/customers
- **Meeting Data:**
  - Title
  - Date/Time
  - Attendees
  - Location/Link
  - Description

### HubSpot Account Types

```
┌──────────────────────────────────────────────────────────┐
│ ACCOUNT TYPE         CAN CONNECT TO ZAPIER?              │
├──────────────────────────────────────────────────────────┤
│ Free                 ✅ Yes (limited features)           │
│ Starter              ✅ Yes                              │
│ Professional         ✅ Yes (recommended)                │
│ Enterprise           ✅ Yes                              │
└──────────────────────────────────────────────────────────┘
```

**Check with your admin:** What plan does your company have?

---

## Logging Into HubSpot

### Step 1: Get Your Login Credentials

**Option A: You Already Have Access**
- Email: _______________@company.com
- Password: (ask your IT/admin)

**Option B: Need Access Created**
1. Contact HubSpot admin at your company
2. Request access with these permissions:
   - ✅ View contacts
   - ✅ View and create meetings
   - ✅ API access (for Zapier)

**Option C: Company Admin Will Connect**
- Admin connects HubSpot to Zapier
- You just use the connection

### Step 2: Log In

1. Go to: **https://app.hubspot.com/login**

2. Enter your email and password

3. Select your company's portal if prompted:
   ```
   Example: "ABC Company (ID: 12345678)"
   ```

4. You should see the HubSpot dashboard

**✅ Success:** You're now in HubSpot!

---

## Understanding HubSpot's Interface

### Main Navigation (Left Sidebar)

```
┌─────────────────────────────────────────────────────────┐
│                    HUBSPOT NAVIGATION                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🏠 Dashboard       ← Overview of your activity         │
│                                                          │
│  👥 Contacts        ← People database                   │
│     ├─ Contacts                                         │
│     └─ Companies                                        │
│                                                          │
│  💰 Sales           ← Sales tools                       │
│     ├─ Deals                                            │
│     └─ Tasks                                            │
│                                                          │
│  📅 Activities      ← THIS IS WHAT WE NEED!            │
│     ├─ Meetings     ← Scheduled meetings               │
│     ├─ Calls        ← Call logs                        │
│     └─ Emails       ← Email tracking                   │
│                                                          │
│  ⚙️  Settings       ← Account settings                  │
│     ├─ Integrations ← Connect to Zapier (here!)        │
│     └─ Account                                          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Top Bar

```
┌─────────────────────────────────────────────────────────┐
│  [Search] [Create] [Notifications] [Help] [Your Name ▼] │
└─────────────────────────────────────────────────────────┘
```

**Important Buttons:**
- **Search (🔍):** Find contacts, meetings, etc.
- **Create (+):** Create new contact, meeting, deal, etc.
- **Your Name:** Access settings, integrations

---

## Finding Meetings/Engagements

### Method 1: Via Activities Menu

**Step-by-step:**

1. **Click on left sidebar** → Look for one of these:
   - "Activities" (newer interface)
   - "Sales" → "Meetings" (older interface)
   - "Calendar" (some accounts)

2. **You should see a calendar view or list view**
   ```
   Example Calendar View:
   ┌──────────────────────────────────────────┐
   │  October 2025                             │
   ├──────────────────────────────────────────┤
   │  Mon  Tue  Wed  Thu  Fri  Sat  Sun       │
   │   1    2    3    4    5    6    7        │
   │                                           │
   │   Meeting: ABC Corp Demo (2pm)           │
   │   Meeting: XYZ Discovery Call (4pm)      │
   └──────────────────────────────────────────┘
   ```

3. **Click on any meeting** to see details:
   - Meeting title
   - Date and time
   - Attendees
   - Location/meeting link
   - Description/notes

### Method 2: Via Contact Record

1. **Go to Contacts** (left sidebar)
2. **Click on any contact name**
3. **Scroll down to "Activities" section**
4. **See all meetings with that contact**

### Method 3: Search

1. **Click search bar** (top of page)
2. **Type meeting name** or contact name
3. **Click on meeting result**

### What a Meeting Looks Like in HubSpot

```
┌──────────────────────────────────────────────────────────┐
│ Meeting: Q4 Strategy Discussion                          │
├──────────────────────────────────────────────────────────┤
│ Type:        Meeting                                     │
│ Start:       Nov 5, 2025 at 2:00 PM                     │
│ End:         Nov 5, 2025 at 3:00 PM                     │
│ Duration:    1 hour                                      │
│                                                          │
│ Attendees:                                               │
│ • John Doe (Owner) - john@company.com                   │
│ • Bob Smith (Guest) - bob@acmecorp.com                  │
│                                                          │
│ Location:    https://zoom.us/j/123456                    │
│                                                          │
│ Description:                                             │
│ Discuss Q4 goals and implementation timeline             │
│                                                          │
│ Associated with:                                         │
│ • Contact: Bob Smith                                     │
│ • Company: Acme Corp                                     │
│ • Deal: Q4 Implementation ($50K)                         │
└──────────────────────────────────────────────────────────┘
```

---

## Connecting HubSpot to Zapier

### Prerequisites

Before connecting:
- [ ] You have Zapier account (Professional plan)
- [ ] You're logged into HubSpot
- [ ] You have admin or integration permissions

### Step-by-Step Connection

#### STEP 1: Open Zapier (2 min)

1. Go to **https://zapier.com**
2. Log in to your account
3. Click **"My Apps"** in left sidebar
   - OR go directly to: https://zapier.com/app/connections

#### STEP 2: Add HubSpot Connection (1 min)

1. Click **"+ Add Connection"** button (top right)
2. In search box, type: **"HubSpot"**
3. Click on **"HubSpot"** from results
   ```
   ┌─────────────────────────────────────┐
   │  🟠 HubSpot                          │
   │  CRM, Marketing & Sales Platform    │
   │                                     │
   │  [Connect] ←── Click this button    │
   └─────────────────────────────────────┘
   ```

#### STEP 3: Authorize Zapier (3 min)

1. **You'll be redirected to HubSpot**
   - If not logged in, log in now

2. **You'll see an authorization screen:**
   ```
   ┌──────────────────────────────────────────────────┐
   │  Zapier wants to access your HubSpot account     │
   │                                                   │
   │  This will allow Zapier to:                      │
   │  ✅ Read your contacts                           │
   │  ✅ Read and create meetings                     │
   │  ✅ Read and update deals                        │
   │  ✅ Access calendar events                       │
   │  ✅ Create and update records                    │
   │                                                   │
   │  Select HubSpot Account:                         │
   │  ▼ ABC Company (ID: 12345678)                    │
   │                                                   │
   │  [ Cancel ]  [ Connect App ]                     │
   └──────────────────────────────────────────────────┘
   ```

3. **Select your company account** from dropdown

4. **Click "Connect App"** (or "Allow" or "Authorize")

5. **You'll be redirected back to Zapier**

#### STEP 4: Verify Connection (1 min)

1. **You should see success message:**
   ```
   ✅ HubSpot connected successfully!
   ```

2. **You'll see HubSpot in your "My Apps" list:**
   ```
   ┌─────────────────────────────────────────────┐
   │  Connected Apps                              │
   ├─────────────────────────────────────────────┤
   │  🟠 HubSpot                                  │
   │     ABC Company                              │
   │     Connected: Oct 30, 2025                  │
   │     [Reconnect] [Remove]                     │
   └─────────────────────────────────────────────┘
   ```

**✅ Success! HubSpot is now connected to Zapier!**

---

## Testing the Connection

### Create a Test Meeting in HubSpot

Let's create a test meeting to verify everything works.

#### STEP 1: Create Test Meeting in HubSpot (5 min)

1. **Go to HubSpot** (app.hubspot.com)

2. **Click "+ Create"** button (top navigation)
   - OR click "Activities" → "Meetings" → "+ New Meeting"

3. **Fill in meeting details:**
   ```
   Title:        Test Meeting - Zapier Integration
   Type:         Meeting
   Start Date:   [Tomorrow's date]
   Start Time:   2:00 PM
   Duration:     1 hour

   Attendees:
   • Owner:      [Your name/email]
   • Guests:     [Your personal email for testing]

   Location:     https://zoom.us/test123

   Description:  This is a test meeting to verify
                 Zapier integration is working.

   Associated:   [Select a contact or leave blank]
   ```

4. **Click "Create" or "Save"**

5. **Meeting is created!**
   ```
   ✅ Meeting saved successfully
   ```

#### STEP 2: Test in Zapier (3 min)

1. **Go to Zapier** → **Create Zap**

2. **Choose Trigger:**
   ```
   App:   HubSpot
   Event: New Engagement
   ```

3. **Click Continue**

4. **Choose Account:** Select your connected HubSpot account

5. **Set Engagement Type:**
   ```
   Engagement Type: MEETING
   ```

6. **Click Continue**

7. **Click "Test trigger"**

8. **You should see your test meeting!**
   ```
   ✅ We found a meeting!

   Recent Meetings:
   • Test Meeting - Zapier Integration
     Start: Nov 1, 2025 2:00 PM
     Owner: You
   ```

9. **Click on it to see all the data**

**✅ If you see your test meeting, the connection works!**

---

## Understanding Available Data Fields

When you test the trigger, you'll see many fields. Here are the important ones:

### Meeting Data Available from HubSpot

```
┌─────────────────────────────────────────────────────────┐
│ FIELD NAME (in Zapier)    WHAT IT CONTAINS              │
├─────────────────────────────────────────────────────────┤
│ ID                        Unique meeting ID             │
│ Title / Name              Meeting title                 │
│ Start Time / Timestamp    When meeting starts           │
│ End Time                  When meeting ends             │
│ Duration                  Length in minutes             │
│ Type                      "MEETING"                     │
│ Owner ID / Owner Email    IS rep who owns it           │
│ Owner Name                IS rep's name                 │
│ Body / Description        Meeting notes/agenda          │
│ Location                  Meeting link or address       │
│ Attendees                 List of participants          │
│ Created At                When meeting was created      │
│ Updated At                Last modification time        │
│ Associations              Linked contacts/companies     │
└─────────────────────────────────────────────────────────┘
```

### Example of What You'll See in Zapier

```json
{
  "id": "123456789",
  "title": "Test Meeting - Zapier Integration",
  "startTime": "2025-11-01T14:00:00Z",
  "endTime": "2025-11-01T15:00:00Z",
  "ownerEmail": "john@company.com",
  "ownerName": "John Doe",
  "body": "This is a test meeting to verify Zapier integration",
  "location": "https://zoom.us/test123",
  "type": "MEETING"
}
```

**These are the fields you'll use in your email templates and calendar sync!**

---

## Common HubSpot Tasks for Your Automation

### Task 1: Find a Contact's Email

1. Go to **Contacts**
2. Search for contact name
3. Email is displayed on contact record

### Task 2: Schedule a New Meeting

1. Click **"+ Create"** → **"Meeting"**
2. Fill in details
3. Save
4. Zapier will detect it automatically!

### Task 3: View All Upcoming Meetings

1. Go to **Activities** or **Calendar**
2. Filter by date range
3. See all scheduled meetings

### Task 4: Edit a Meeting

1. Find the meeting (via Calendar or Contact)
2. Click on meeting
3. Click **"Edit"**
4. Make changes
5. Save

### Task 5: Check Meeting Associations

1. Open meeting
2. Scroll to **"Associations"** section
3. See which contacts, companies, deals are linked

---

## Troubleshooting

### Issue 1: Can't Find HubSpot Integration Option

**Possible Causes:**
- You don't have admin permissions
- Your HubSpot plan doesn't include API access
- You're on HubSpot Free tier with limitations

**Solutions:**
1. Contact your HubSpot admin
2. Ask them to grant you integration permissions
3. OR: Ask admin to connect HubSpot to Zapier for you

---

### Issue 2: Authorization Fails

**Error Message:**
```
❌ Unable to authorize HubSpot
```

**Solutions:**
1. Make sure you're logged into the correct HubSpot account
2. Try in incognito/private browser window
3. Clear browser cache and cookies
4. Contact HubSpot support if issue persists

---

### Issue 3: No Meetings Showing in Zapier Test

**Possible Causes:**
- No meetings created yet
- Meetings are in the past
- Wrong engagement type selected

**Solutions:**
1. Create a test meeting (see above)
2. Make sure it's scheduled for future
3. In Zapier, ensure "Engagement Type" = "MEETING"
4. Try "Test trigger" again

---

### Issue 4: Can't See All Meeting Details

**Possible Causes:**
- Limited permissions
- Some fields are custom and not standard

**Solutions:**
1. Check with admin about field permissions
2. Make sure you selected the right meeting in test
3. Some fields might be blank if not filled in HubSpot

---

### Issue 5: "Insufficient Permissions" Error

**Error Message:**
```
❌ This account doesn't have sufficient permissions
```

**Solution:**
Contact your HubSpot admin and request:
- API access
- Read/Write permissions for meetings
- Integration permissions

---

## Permission Checklist

To connect HubSpot to Zapier, you need:

### In HubSpot:
- [ ] User account created
- [ ] Login credentials
- [ ] API access enabled
- [ ] Permissions for:
  - [ ] View contacts
  - [ ] Create/edit meetings
  - [ ] Access calendar
  - [ ] Integration settings

### In Zapier:
- [ ] Professional account (or higher)
- [ ] Access to "My Apps"
- [ ] Ability to create Zaps

**If you don't have these, contact:**
- **HubSpot Admin:** [Name: __________ Email: __________]
- **IT Support:** [Email: __________]

---

## Quick Reference Card

### HubSpot URLs

```
Login:        https://app.hubspot.com/login
Calendar:     https://app.hubspot.com/calendar/[your-portal-id]
Contacts:     https://app.hubspot.com/contacts/[your-portal-id]
Settings:     https://app.hubspot.com/settings/[your-portal-id]
Integrations: https://app.hubspot.com/integrations/[your-portal-id]
```

### Zapier HubSpot Connection

```
My Apps:      https://zapier.com/app/connections
Add HubSpot:  Click "+ Add Connection" → Search "HubSpot"
Test:         Create Zap → HubSpot trigger → Test
```

---

## Next Steps After Connection

Once HubSpot is connected to Zapier:

1. ✅ **Test with a sample meeting** (done above)
2. ✅ **Verify all data fields are available**
3. ✅ **Connect other apps** (Gmail, Google Calendar)
4. ✅ **Build Zap 1** - Meeting Reminder 24h
5. ✅ **Build remaining Zaps**

**Continue to:** ZAPIER_IMPLEMENTATION_CHECKLIST.md (Step 9)

---

## HubSpot Resources

### Official Documentation
- HubSpot Help Center: https://knowledge.hubspot.com
- API Documentation: https://developers.hubspot.com
- Integration Guide: https://knowledge.hubspot.com/integrations

### Video Tutorials
- HubSpot Academy: https://academy.hubspot.com
- YouTube Channel: HubSpot official channel

### Support
- HubSpot Support: support@hubspot.com
- Community Forum: https://community.hubspot.com
- Your Company Admin: __________

---

## Glossary

**CRM:** Customer Relationship Management - system to manage customer data

**Engagement:** Any activity/interaction (meeting, call, email, task)

**Contact:** Individual person in your database

**Company:** Organization/business in your database

**Deal:** Sales opportunity

**Owner:** Person responsible for the contact/deal/meeting

**Association:** Link between records (e.g., meeting linked to contact)

**Portal:** Your company's HubSpot account/instance

**API:** Application Programming Interface - how Zapier talks to HubSpot

---

## Checklist: Am I Ready to Build Zaps?

Before starting Zap building, verify:

- [ ] I can log into HubSpot
- [ ] I can navigate to the Calendar/Activities section
- [ ] I can see existing meetings
- [ ] I created a test meeting successfully
- [ ] HubSpot is connected to Zapier
- [ ] Test trigger in Zapier shows my test meeting
- [ ] I can see all meeting data fields
- [ ] I understand what each field contains
- [ ] I have permissions to create/edit meetings

**If all checked:** ✅ You're ready to build Zaps!

**Continue to:** ZAPIER_IMPLEMENTATION_CHECKLIST.md

---

## Visual Guide: HubSpot Interface

### Main Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│  HubSpot  [Search] [+ Create]  [🔔]  [Help]  [You ▼]       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  SIDEBAR        │  MAIN CONTENT AREA                        │
│  ────────────   │  ──────────────────                       │
│                 │                                            │
│  🏠 Dashboard   │  📊 Your Dashboard                        │
│                 │                                            │
│  👥 Contacts    │  Welcome back!                            │
│                 │                                            │
│  💼 Companies   │  Today's Activities:                      │
│                 │  • 3 meetings scheduled                   │
│  💰 Deals       │  • 5 tasks due                            │
│                 │  • 2 calls to make                        │
│  📅 Activities  │                                            │
│     ├ Meetings  │  Upcoming Meetings:                       │
│     ├ Calls     │  ┌──────────────────────────────┐        │
│     └ Tasks     │  │ 2:00 PM - ABC Corp Demo      │        │
│                 │  │ 4:00 PM - XYZ Discovery       │        │
│  📧 Marketing   │  └──────────────────────────────┘        │
│                 │                                            │
│  ⚙️ Settings    │                                            │
│                 │                                            │
└─────────────────┴────────────────────────────────────────────┘
```

### Meeting Detail View
```
┌──────────────────────────────────────────────────────────────┐
│  ← Back to Calendar    [Edit] [Delete] [More ▼]             │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Meeting: Q4 Strategy Discussion                             │
│  ═══════════════════════════════════════                     │
│                                                               │
│  📅 Nov 5, 2025 • 2:00 PM - 3:00 PM                          │
│  🔗 https://zoom.us/j/123456                                 │
│  👤 Owner: John Doe                                          │
│                                                               │
│  Attendees:                                                  │
│  • John Doe (Owner)                                          │
│  • Bob Smith (bob@acmecorp.com)                             │
│                                                               │
│  Description:                                                │
│  Discuss Q4 goals and implementation timeline                │
│                                                               │
│  Associated Records:                                         │
│  • 👤 Bob Smith (Contact)                                    │
│  • 🏢 Acme Corp (Company)                                    │
│  • 💰 Q4 Implementation ($50K)                               │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

---

**You're now ready to connect HubSpot to Zapier and start building your automation!** 🚀

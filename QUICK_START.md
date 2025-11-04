# Quick Start Guide - Meeting Reminders in 2 Hours
## Get Your First Automation Working TODAY

**Goal:** Build automated meeting reminders (24h & 1h before meetings)
**Time:** 2 hours
**Difficulty:** Beginner-friendly
**Prerequisites:** None! Just start.

---

## What You'll Build

```
Meeting scheduled in HubSpot
         ↓
    (Automatic)
         ↓
24 hours before → Email reminder sent
         ↓
1 hour before → Urgent reminder sent
         ↓
    ✅ Done!
```

**Result:** Never manually send meeting reminders again!

---

## Step 1: Sign Up for Zapier (5 minutes)

### What to Do:

1. **Go to:** https://zapier.com/sign-up

2. **Choose Plan:** Professional ($49/month)
   - 14-day free trial available
   - Cancel anytime

3. **Create account:**
   - Enter email
   - Create password
   - Verify email

4. **You're in!** You should see the Zapier dashboard

✅ **Done with Step 1**

---

## Step 2: Connect Your Apps (10 minutes)

### 2A: Connect HubSpot

1. **In Zapier**, click **"My Apps"** (left sidebar)
   - OR go to: https://zapier.com/app/connections

2. **Click "+ Add Connection"** (top right)

3. **Search:** Type "HubSpot"

4. **Click "Connect"** on HubSpot

5. **You'll be redirected to HubSpot:**
   - Log in with your company HubSpot account
   - Select your company portal
   - Click "Connect App" or "Allow"

6. **Success!** You'll see "HubSpot connected"

✅ **HubSpot Connected**

---

### 2B: Connect Google Calendar

1. **Click "+ Add Connection"** again

2. **Search:** Type "Google Calendar"

3. **Click "Connect"**

4. **Log in with your Google account**

5. **Grant permissions** (allow Zapier to access calendar)

6. **Success!** You'll see "Google Calendar connected"

✅ **Google Calendar Connected**

---

### 2C: Connect Gmail

1. **Click "+ Add Connection"** again

2. **Search:** Type "Gmail"

3. **Click "Connect"**

4. **Log in with your Google account**

5. **Grant permissions** (allow Zapier to send emails)

6. **Success!** You'll see "Gmail connected"

✅ **Gmail Connected**

---

**Check:** You should now see all 3 apps in "My Apps":
- 🟠 HubSpot
- 📅 Google Calendar
- 📧 Gmail

✅ **Done with Step 2**

---

## Step 3: Create Test Meeting in HubSpot (5 minutes)

We need a test meeting to verify everything works.

### What to Do:

1. **Go to HubSpot:** https://app.hubspot.com

2. **Click "+ Create"** (top navigation)

3. **Select "Meeting"**

4. **Fill in:**
   ```
   Title:        Test Meeting - Zapier
   Start Date:   Tomorrow
   Start Time:   2:00 PM
   Duration:     1 hour

   Your Email:   [your email]
   Guest Email:  [your personal email for testing]

   Location:     https://zoom.us/test

   Description:  This is a test meeting to verify
                 Zapier automation is working.
   ```

5. **Click "Save"** or "Create"

✅ **Test Meeting Created**

---

## Step 4: Build Zap 1 - 24 Hour Reminder (30 minutes)

### 4A: Create New Zap

1. **In Zapier**, click **"Create Zap"** (or go to https://zapier.com/app/editor)

2. **Name it:** "Meeting Reminder - 24 Hours"

---

### 4B: Set Up Trigger

1. **Search for app:** Type "HubSpot"

2. **Choose trigger event:** "New Engagement"

3. **Click "Continue"**

4. **Choose account:** Select your HubSpot connection

5. **Engagement Type:** Select "MEETING"

6. **Click "Continue"**

7. **Click "Test trigger"**
   - You should see your test meeting!

8. **Click on the test meeting** to select it

9. **Click "Continue"**

✅ **Trigger Set Up**

---

### 4C: Add Delay

1. **Click the "+" button** to add a step

2. **Search for:** "Delay by Zapier"

3. **Choose event:** "Delay Until"

4. **Click "Continue"**

5. **Delay Until:**
   - Click in the field
   - Click "Custom"
   - Click "Insert Data"
   - Find and select "Start Time" (from HubSpot)

6. **Time Before:** Type `-24` and select "hours"
   - This means 24 hours BEFORE the meeting

7. **Click "Continue"**

8. **Click "Test step"**
   - It will show when the delay would trigger

9. **Click "Continue"**

✅ **Delay Added**

---

### 4D: Send Email Reminder

1. **Click the "+" button** to add another step

2. **Search for:** "Gmail"

3. **Choose event:** "Send Email"

4. **Click "Continue"**

5. **Choose account:** Select your Gmail connection

6. **Configure email:**

   **To:**
   - Click in field
   - Click "Insert Data"
   - Find "Attendee Email" or similar
   - If not found, type a test email manually for now

   **Subject:**
   ```
   Reminder: Meeting Tomorrow - {{Meeting Title}}
   ```
   - To insert Meeting Title: Click "Insert Data" → Find "Title" from HubSpot

   **Body:**
   ```
   Hi there,

   This is a reminder about our meeting scheduled for tomorrow:

   📅 Meeting: {{Meeting Title}}
   🕐 Time: {{Start Time}}
   📍 Location: {{Location}}

   Looking forward to speaking with you!

   Best regards,
   [Your Name]
   ```

   - Insert data fields by clicking "Insert Data" and selecting from HubSpot trigger

7. **Click "Continue"**

8. **Click "Test step"**
   - **THIS WILL SEND A REAL EMAIL!**
   - Check your inbox to verify

9. **Click "Continue"**

✅ **Email Step Added**

---

### 4E: Publish Zap 1

1. **Click "Publish"** (top right)

2. **Toggle the switch to ON**

3. **You'll see:** "Your Zap is on!"

✅ **ZAP 1 IS LIVE!**

---

## Step 5: Build Zap 2 - 1 Hour Reminder (15 minutes)

This is faster - we'll clone Zap 1 and modify it!

### 5A: Clone Zap 1

1. **Go to "My Zaps"** (left sidebar)

2. **Find "Meeting Reminder - 24 Hours"**

3. **Click the ⚙️ icon** (settings)

4. **Click "Duplicate Zap"**

5. **Rename to:** "Meeting Reminder - 1 Hour"

---

### 5B: Modify the Delay

1. **Click on the "Delay" step**

2. **Change from `-24 hours` to `-1 hour`**

3. **Click "Continue"**

---

### 5C: Update Email

1. **Click on the "Gmail" step**

2. **Change Subject to:**
   ```
   Starting in 1 Hour - {{Meeting Title}}
   ```

3. **Change Body to:**
   ```
   Hi there,

   Quick reminder - our meeting starts in 1 hour:

   🕐 Time: {{Start Time}}
   📍 Join: {{Location}}

   See you soon!
   ```

4. **Click "Continue"**

5. **Click "Test step"** (will send another email)

---

### 5D: Publish Zap 2

1. **Click "Publish"** (top right)

2. **Toggle ON**

✅ **ZAP 2 IS LIVE!**

---

## Step 6: Test Your Automation (10 minutes)

### Quick Test Method:

1. **Go back to both Zaps**

2. **Temporarily change delays:**
   - Zap 1: Change `-24 hours` to `-2 minutes`
   - Zap 2: Change `-1 hour` to `-1 minute`

3. **Create a new test meeting in HubSpot:**
   - Schedule for 5 minutes from now
   - Use your email as attendee

4. **Wait 2-3 minutes**

5. **Check your email:**
   - You should receive the first reminder (2 min)
   - Then the second reminder (1 min)

6. **If emails arrived: SUCCESS! ✅**

7. **Change delays back to:**
   - Zap 1: `-24 hours`
   - Zap 2: `-1 hour`

8. **Save both Zaps**

---

### Real-World Test:

1. **Create a real meeting in HubSpot for tomorrow**

2. **Wait 1 hour** (for Zap to process)

3. **Check Zap History:**
   - Go to "Zap History" in left sidebar
   - See if Zap triggered successfully
   - Should show "Scheduled" status

4. **Tomorrow, check for actual email delivery**

✅ **Automation Tested**

---

## ✅ You're Done!

### What You've Accomplished:

- ✅ Connected HubSpot, Google Calendar, and Gmail to Zapier
- ✅ Built Zap 1: 24-hour meeting reminder
- ✅ Built Zap 2: 1-hour meeting reminder
- ✅ Tested the automation
- ✅ **You now have working automation!**

### What Happens Now:

**Every time you create a meeting in HubSpot:**
1. Zapier automatically detects it
2. Schedules reminders for 24h and 1h before
3. Sends professional reminder emails
4. **You do nothing!**

---

## Next Steps (Optional - Do Later)

### Week 2: Build More Automation

When ready, build the advanced workflows:

**Zap 3: Call Summary Automation**
- Needs: Miitel access + Claude/OpenAI API
- See: ZAPIER_IMPLEMENTATION_CHECKLIST.md Phase 9

**Zap 4: Calendar Sync**
- Needs: IS-FS team mapping spreadsheet
- See: ZAPIER_IMPLEMENTATION_CHECKLIST.md Phase 11

**For now, enjoy your working meeting reminders!** 🎉

---

## Monitoring Your Zaps

### Check Zap History Daily:

1. **Go to "Zap History"** (left sidebar)

2. **Look for:**
   - ✅ Green checkmarks (success)
   - ⚠️ Yellow warnings (needs attention)
   - ❌ Red errors (failed)

3. **Click on any run** to see details

### What to Watch:

- Are reminders sending on time?
- Are emails formatted correctly?
- Any errors or failures?

**Set a reminder:** Check Zap History once per day for the first week

---

## Troubleshooting

### Issue: No email received

**Check:**
1. Spam folder
2. Email address is correct in Zap
3. Gmail connection is still active
4. Test step sent email successfully

**Fix:**
- Reconnect Gmail if needed
- Update email address in Zap
- Check Zap History for errors

---

### Issue: Zap not triggering

**Check:**
1. Zap is turned ON
2. Meeting is in HubSpot
3. Meeting is in the future
4. Meeting type is "MEETING"

**Fix:**
- Turn Zap on if off
- Create new test meeting
- Check HubSpot connection

---

### Issue: Wrong timing

**Check:**
1. Delay is set correctly
2. Time zone matches your location
3. Start time in HubSpot is correct

**Fix:**
- Edit delay step
- Check time zone settings in Zapier
- Verify meeting time in HubSpot

---

## Tips for Success

### 1. Start Small
- ✅ Just use Zaps 1 & 2 for now
- ✅ Get comfortable before building more
- ✅ Validate with team

### 2. Test Often
- ✅ Create test meetings weekly
- ✅ Verify emails look professional
- ✅ Check recipient feedback

### 3. Iterate
- ✅ Adjust email templates as needed
- ✅ Add/remove information
- ✅ Improve based on feedback

### 4. Monitor
- ✅ Check Zap History weekly
- ✅ Fix errors quickly
- ✅ Keep Zapier connections active

---

## Cost Breakdown

### What You're Paying For:

```
Zapier Professional:  $49/month
Gmail:                Free (if using company Gmail)
HubSpot:              Already have it
Google Calendar:      Free (if using company Google)

Total New Cost:       $49/month
```

### Return on Investment:

**Time Saved:**
- Before: 15-30 min/day sending reminders manually
- After: 0 minutes (automatic)
- **Savings: 2+ hours per week**

**Value:**
- 2 hours/week × 4 weeks = 8 hours/month
- 8 hours × $50/hour = **$400/month value**
- Cost: $49/month
- **ROI: 716%**

**Payback period: 3 days** 🚀

---

## Success Metrics

### Track These Numbers:

**Week 1:**
- [ ] How many meetings created?
- [ ] How many reminders sent?
- [ ] Any errors?
- [ ] Team feedback?

**Week 2:**
- [ ] Time saved vs manual process?
- [ ] Reminder delivery rate?
- [ ] Email open rates?
- [ ] Any missed reminders?

**Week 4:**
- [ ] Total reminders sent?
- [ ] Total time saved?
- [ ] Team satisfaction?
- [ ] Ready for Zap 3 & 4?

---

## Getting Help

### If You Get Stuck:

1. **Check the detailed guides:**
   - HUBSPOT_SETUP_GUIDE.md - HubSpot help
   - ZAPIER_IMPLEMENTATION_CHECKLIST.md - Full details
   - ZAPIER_GUIDE.md - Complete reference

2. **Search Zapier Help:**
   - https://help.zapier.com

3. **Check Zap History:**
   - See exactly what went wrong
   - Error messages are helpful

4. **Community Support:**
   - Zapier Community: https://community.zapier.com
   - HubSpot Community: https://community.hubspot.com

---

## Checklist: Am I Done?

Before marking this complete, verify:

- [ ] Zapier Professional account active
- [ ] HubSpot connected to Zapier
- [ ] Google Calendar connected to Zapier
- [ ] Gmail connected to Zapier
- [ ] Zap 1 (24h reminder) built and ON
- [ ] Zap 2 (1h reminder) built and ON
- [ ] Test meeting created in HubSpot
- [ ] Test emails received
- [ ] Real meeting scheduled for testing
- [ ] Zap History shows successful runs
- [ ] Team notified automation is live
- [ ] Monitoring process in place

**All checked?** 🎉 **You're done! Celebrate!**

---

## What's Next?

### This Week:
- ✅ Use your new meeting reminder automation
- ✅ Create meetings normally in HubSpot
- ✅ Let automation handle reminders
- ✅ Gather feedback from recipients

### Next Week:
- Review automation performance
- Optimize email templates if needed
- Train team members on the system
- Consider building Zap 3 & 4

### This Month:
- Measure time savings
- Calculate ROI
- Share success with management
- Plan for code-based solution if needed

---

## Congratulations! 🎉

**You've built your first sales automation!**

You went from:
- ❌ Manually sending reminders daily
- ❌ Forgetting reminders sometimes
- ❌ Inconsistent timing

To:
- ✅ Automatic reminders 24/7
- ✅ Never miss a reminder
- ✅ Perfect timing every time
- ✅ Professional, consistent emails
- ✅ More time for actual selling

**Time invested:** 2 hours
**Time saved:** Forever! ♾️

---

## Quick Reference

### Zapier URLs

```
Dashboard:      https://zapier.com/app/dashboard
My Apps:        https://zapier.com/app/connections
My Zaps:        https://zapier.com/app/zaps
Zap History:    https://zapier.com/app/history
Create Zap:     https://zapier.com/app/editor
```

### HubSpot URLs

```
Login:          https://app.hubspot.com/login
Calendar:       https://app.hubspot.com/calendar
Create Meeting: Click "+ Create" → "Meeting"
```

### Email Template Quick Copy

**24-Hour Reminder:**
```
Subject: Reminder: Meeting Tomorrow - {{Meeting Title}}

Hi there,

This is a reminder about our meeting scheduled for tomorrow:

📅 Meeting: {{Meeting Title}}
🕐 Time: {{Start Time}}
📍 Location: {{Location}}

Looking forward to speaking with you!

Best regards,
[Your Name]
```

**1-Hour Reminder:**
```
Subject: Starting in 1 Hour - {{Meeting Title}}

Hi there,

Quick reminder - our meeting starts in 1 hour:

🕐 Time: {{Start Time}}
📍 Join: {{Location}}

See you soon!
```

---

**You did it! Now go automate!** 🚀

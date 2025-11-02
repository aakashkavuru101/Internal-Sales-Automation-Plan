# Internal Sales Automation - Code Solution

A TypeScript/Node.js application for automating internal sales workflows including meeting reminders, call summary generation, and calendar synchronization.

## Features

- 🔔 **Automated Meeting Reminders** - Send reminders 24h and 1h before meetings
- 📝 **AI-Powered Call Summaries** - Auto-generate summaries from Miitel transcripts
- 📅 **Calendar Synchronization** - Sync meetings to FS representatives' Google Calendars
- 🔗 **Multi-Platform Integration** - HubSpot, Miitel, Google Calendar, OpenAI
- 📊 **Activity Logging** - Track all automation activities
- 🚀 **Scalable Architecture** - Built for high volume and reliability

## Tech Stack

- **Runtime:** Node.js 18+
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Queue:** Bull (Redis-based)
- **AI:** OpenAI GPT-4
- **Integrations:** HubSpot, Miitel, Google Calendar

## Prerequisites

- Node.js 18 or higher
- PostgreSQL 14 or higher
- Redis 6 or higher
- API access to:
  - HubSpot
  - Miitel
  - Google Calendar
  - OpenAI

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/aakashkavuru101/Internal-Sales-Automation-Plan.git
cd sales-automation-code
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and add your API keys and configuration:

```env
# HubSpot
HUBSPOT_ACCESS_TOKEN=your_token_here

# Miitel
MIITEL_API_KEY=your_key_here

# Google Calendar
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret

# OpenAI
OPENAI_API_KEY=your_api_key
```

### 4. Set up database

```bash
npm run db:setup
```

### 5. Start the development server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Project Structure

```
sales-automation-code/
├── src/
│   ├── config/               # Configuration files
│   │   ├── database.ts       # Database connection
│   │   └── environment.ts    # Environment variables
│   ├── services/             # Business logic services
│   │   ├── hubspot/         # HubSpot integration
│   │   ├── miitel/          # Miitel integration
│   │   ├── google-calendar/ # Google Calendar integration
│   │   ├── ai/              # AI summary generation
│   │   └── email/           # Email service
│   ├── jobs/                # Background jobs
│   │   ├── meeting-reminders.ts
│   │   ├── transcript-processing.ts
│   │   └── calendar-sync.ts
│   ├── models/              # Data models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   └── app.ts               # Main application
├── tests/                   # Test files
├── scripts/                 # Setup scripts
└── docs/                    # Documentation
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Compile TypeScript to JavaScript
npm start            # Run production server

# Database
npm run db:setup     # Initialize database schema

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm test             # Run tests
```

## API Endpoints

### Health Check
```
GET /health
```

Returns server health status.

### Webhooks
```
POST /webhooks/hubspot      # HubSpot webhook handler
POST /webhooks/miitel       # Miitel webhook handler
```

### Admin
```
GET  /admin/meetings        # List all meetings
GET  /admin/summaries       # List all call summaries
POST /admin/test-reminder   # Test reminder email
```

## Configuration

### Meeting Reminders

Configure reminder timing in `.env`:

```env
MEETING_REMINDER_24H=true   # Send 24-hour reminder
MEETING_REMINDER_1H=true    # Send 1-hour reminder
```

### AI Summary Prompts

Customize summary generation prompts in `src/services/ai/summary-generator.ts`

### Calendar Mapping

Map IS team members to FS representatives in the database `user_mappings` table.

## Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: AWS

See `docs/AWS_DEPLOYMENT.md` for detailed instructions.

### Option 3: Docker

```bash
# Build image
docker build -t sales-automation .

# Run container
docker run -p 3000:3000 --env-file .env sales-automation
```

## Development Workflow

### 1. Create a new feature branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make changes and test

```bash
npm run dev
npm test
```

### 3. Commit and push

```bash
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

### 4. Create pull request

## Monitoring

### Logs

Logs are written to console and can be configured in `.env`:

```env
LOG_LEVEL=info  # Options: debug, info, warn, error
```

### Health Checks

Monitor `/health` endpoint for uptime monitoring.

## Troubleshooting

### Database Connection Issues

```bash
# Test database connection
psql -h localhost -U postgres -d sales_automation
```

### API Integration Issues

Check API credentials in `.env` and test connections:

```bash
npm run test:integrations
```

### Redis Connection Issues

```bash
# Test Redis connection
redis-cli ping
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT

## Support

For issues and questions:
- GitHub Issues: https://github.com/aakashkavuru101/Internal-Sales-Automation-Plan/issues
- Email: support@yourcompany.com

## Next Steps

- [ ] Complete database schema implementation
- [ ] Add comprehensive tests
- [ ] Implement webhook handlers
- [ ] Add monitoring and alerting
- [ ] Create admin dashboard
- [ ] Write API documentation

## Related Documentation

- [Product Requirements Document](../PRD.md)
- [Implementation Strategy](../IMPLEMENTATION_STRATEGY.md)
- [Zapier Setup Guide](../ZAPIER_GUIDE.md)

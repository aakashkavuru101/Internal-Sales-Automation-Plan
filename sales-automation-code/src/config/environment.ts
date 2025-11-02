import dotenv from 'dotenv';

dotenv.config();

export const config = {
  // Server
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),

  // Database
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    name: process.env.DB_NAME || 'sales_automation',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
  },

  // Redis
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD || undefined,
  },

  // HubSpot
  hubspot: {
    apiKey: process.env.HUBSPOT_API_KEY || '',
    accessToken: process.env.HUBSPOT_ACCESS_TOKEN || '',
  },

  // Miitel
  miitel: {
    apiUrl: process.env.MIITEL_API_URL || 'https://api.miitel.com',
    apiKey: process.env.MIITEL_API_KEY || '',
    apiSecret: process.env.MIITEL_API_SECRET || '',
  },

  // Google Calendar
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    redirectUri: process.env.GOOGLE_REDIRECT_URI || '',
    serviceAccountKeyPath: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || '',
  },

  // OpenAI
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
  },

  // Email
  email: {
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      user: process.env.SMTP_USER || '',
      password: process.env.SMTP_PASSWORD || '',
    },
    from: process.env.EMAIL_FROM || 'sales@company.com',
  },

  // Application Settings
  app: {
    summaryPromptTemplate: process.env.SUMMARY_PROMPT_TEMPLATE || 'default',
    meetingReminder24h: process.env.MEETING_REMINDER_24H === 'true',
    meetingReminder1h: process.env.MEETING_REMINDER_1H === 'true',
  },

  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};

export default config;

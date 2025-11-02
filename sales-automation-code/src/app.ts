import express, { Express, Request, Response } from 'express';
import config from './config/environment';
import { testConnection } from './config/database';

const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
  });
});

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Internal Sales Automation API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      webhooks: '/webhooks',
      admin: '/admin',
    },
  });
});

// Start server
async function startServer() {
  try {
    // Test database connection
    const dbConnected = await testConnection();
    if (!dbConnected) {
      console.warn('⚠️  Starting server without database connection');
    }

    app.listen(config.port, () => {
      console.log('╔════════════════════════════════════════════════════╗');
      console.log('║   Internal Sales Automation - Code Solution       ║');
      console.log('╚════════════════════════════════════════════════════╝');
      console.log('');
      console.log(`🚀 Server running on port ${config.port}`);
      console.log(`📝 Environment: ${config.nodeEnv}`);
      console.log(`🔗 Health check: http://localhost:${config.port}/health`);
      console.log('');
      console.log('Press Ctrl+C to stop');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\nSIGINT signal received: closing HTTP server');
  process.exit(0);
});

startServer();

export default app;

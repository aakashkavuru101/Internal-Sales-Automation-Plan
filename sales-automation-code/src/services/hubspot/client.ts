import { Client } from '@hubspot/api-client';
import config from '../../config/environment';

// Initialize HubSpot client
export const hubspotClient = new Client({
  accessToken: config.hubspot.accessToken,
});

/**
 * Test HubSpot connection
 */
export async function testHubSpotConnection(): Promise<boolean> {
  try {
    const accountInfo = await hubspotClient.apiRequest({
      method: 'GET',
      path: '/account-info/v3/api-usage/daily',
    });
    console.log('✅ HubSpot connection successful');
    return true;
  } catch (error) {
    console.error('❌ HubSpot connection failed:', error);
    return false;
  }
}

export default hubspotClient;

import axios, { AxiosInstance } from 'axios';
import config from '../../config/environment';

// Create Miitel API client
class MiitelClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: config.miitel.apiUrl,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': config.miitel.apiKey,
      },
    });
  }

  /**
   * Fetch transcript by call ID
   */
  async getTranscript(callId: string): Promise<string> {
    try {
      // TODO: Update endpoint based on actual Miitel API documentation
      const response = await this.client.get(`/transcripts/${callId}`);
      return response.data.transcript;
    } catch (error) {
      console.error(`Error fetching transcript for call ${callId}:`, error);
      throw error;
    }
  }

  /**
   * List recent calls
   */
  async listCalls(limit: number = 50): Promise<any[]> {
    try {
      // TODO: Update endpoint based on actual Miitel API documentation
      const response = await this.client.get('/calls', {
        params: { limit },
      });
      return response.data.calls || [];
    } catch (error) {
      console.error('Error listing calls:', error);
      throw error;
    }
  }
}

export const miitelClient = new MiitelClient();
export default miitelClient;

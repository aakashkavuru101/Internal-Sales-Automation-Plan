import OpenAI from 'openai';
import config from '../../config/environment';

const openai = new OpenAI({
  apiKey: config.openai.apiKey,
});

export interface CallSummary {
  keyPoints: string[];
  nextSteps: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  fullSummary: string;
}

/**
 * Generate call summary from transcript using AI
 */
export async function generateCallSummary(
  transcript: string,
  callType: 'discovery' | 'demo' | 'follow-up' = 'discovery'
): Promise<CallSummary> {
  try {
    const prompt = getPromptForCallType(callType);

    const completion = await openai.chat.completions.create({
      model: config.openai.model,
      messages: [
        {
          role: 'system',
          content: prompt,
        },
        {
          role: 'user',
          content: `Summarize this sales call transcript:\n\n${transcript}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    const summaryText = completion.choices[0]?.message?.content || '';

    // Parse the AI response into structured format
    return parseSummaryResponse(summaryText);
  } catch (error) {
    console.error('Error generating call summary:', error);
    throw error;
  }
}

/**
 * Get prompt template based on call type
 */
function getPromptForCallType(callType: string): string {
  const prompts = {
    discovery: `You are an expert sales assistant. Analyze the following sales discovery call transcript and provide:
1. Key points discussed (3-5 bullet points)
2. Next steps identified (2-4 action items)
3. Overall sentiment (positive/neutral/negative)
4. A brief summary (2-3 sentences)

Format your response as JSON with keys: keyPoints, nextSteps, sentiment, fullSummary`,

    demo: `You are an expert sales assistant. Analyze the following product demo call transcript and provide:
1. Key features demonstrated (3-5 bullet points)
2. Customer questions and concerns (if any)
3. Next steps (2-4 action items)
4. Overall sentiment (positive/neutral/negative)
5. A brief summary (2-3 sentences)

Format your response as JSON with keys: keyPoints, nextSteps, sentiment, fullSummary`,

    'follow-up': `You are an expert sales assistant. Analyze the following follow-up call transcript and provide:
1. Key discussion points (3-5 bullet points)
2. Objections or concerns raised (if any)
3. Next steps agreed upon (2-4 action items)
4. Overall sentiment (positive/neutral/negative)
5. A brief summary (2-3 sentences)

Format your response as JSON with keys: keyPoints, nextSteps, sentiment, fullSummary`,
  };

  return prompts[callType] || prompts.discovery;
}

/**
 * Parse AI response into structured format
 */
function parseSummaryResponse(response: string): CallSummary {
  try {
    // Try to parse as JSON first
    const parsed = JSON.parse(response);
    return {
      keyPoints: parsed.keyPoints || [],
      nextSteps: parsed.nextSteps || [],
      sentiment: parsed.sentiment || 'neutral',
      fullSummary: parsed.fullSummary || '',
    };
  } catch {
    // Fallback: return raw text if JSON parsing fails
    return {
      keyPoints: [],
      nextSteps: [],
      sentiment: 'neutral',
      fullSummary: response,
    };
  }
}

export default {
  generateCallSummary,
};

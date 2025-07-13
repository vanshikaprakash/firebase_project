// src/ai/flows/generate-micro-suggestions.ts
'use server';

/**
 * @fileOverview Generates personalized micro-suggestions based on emotion check-in results.
 *
 * - generateMicroSuggestions - A function that generates micro-suggestions for mental wellbeing.
 * - GenerateMicroSuggestionsInput - The input type for the generateMicroSuggestions function.
 * - GenerateMicroSuggestionsOutput - The return type for the generateMicroSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMicroSuggestionsInputSchema = z.object({
  emotion: z
    .string()
    .describe('The dominant emotion the student is feeling.'),
  intensity: z
    .string()
    .describe('The intensity of the emotion (e.g., low, medium, high).'),
  situation: z
    .string()
    .describe('A brief description of the situation causing the emotion.'),
  campusSupportServices: z
    .string()
    .optional()
    .describe(
      'Details about available campus support services, if the tool determines they are applicable.'
    ),
});
export type GenerateMicroSuggestionsInput = z.infer<
  typeof GenerateMicroSuggestionsInputSchema
>;

const GenerateMicroSuggestionsOutputSchema = z.object({
  acknowledgment: z.string().describe("A 2-3 line empathetic mirroring of what the user is feeling."),
  emotionalInsight: z.string().describe("A 3-5 line gentle, non-judgmental insight into a possible reason for their emotion."),
  personalizedSuggestions: z
    .array(z.string())
    .describe(
      'A list of 3-5 small, realistic, and supportive actions the user can take.'
    ),
  encouragement: z.string().describe("A 1-2 line closing message of empowerment and hope."),
});
export type GenerateMicroSuggestionsOutput = z.infer<
  typeof GenerateMicroSuggestionsOutputSchema
>;

export async function generateMicroSuggestions(
  input: GenerateMicroSuggestionsInput
): Promise<GenerateMicroSuggestionsOutput> {
  // Map the output from the flow to the new structure for the frontend
  const flowResult = await generateMicroSuggestionsFlow(input);
  return {
      acknowledgment: flowResult.acknowledgment,
      emotionalInsight: flowResult.emotionalInsight,
      personalizedSuggestions: flowResult.personalizedSuggestions,
      encouragement: flowResult.encouragement,
  };
}

const prompt = ai.definePrompt({
  name: 'generateMicroSuggestionsPrompt',
  input: {schema: GenerateMicroSuggestionsInputSchema},
  output: {schema: GenerateMicroSuggestionsOutputSchema},
  prompt: `You are a compassionate, emotionally intelligent AI trained to support college students with their mental health. A user has just shared their emotional check-in. Your goal is to not only reflect their emotion but help them work through it with a supportive and detailed response.

  The user's input:
  - Emotion: {{{emotion}}}
  - Intensity: {{{intensity}}}
  - Situation: "{{{situation}}}"

  Please generate a response that contains the following 4 parts, using a warm, conversational, and non-judgmental tone.

  1. Acknowledgment (2–3 lines):
  Empathetically mirror what they’re feeling. Show you understand. Use a comforting tone.

  2. Emotional Insight (3–5 lines):
  Gently offer a possible reason for this emotion or thought pattern. Help the user understand themselves better. Keep it human and non-judgmental.

  3. Personalized Suggestions (3–5 bullet points):
  Provide small, realistic, and deeply supportive actions the user can take now or today. These can be journaling prompts, mental reframes, breathing patterns, habits, or micro-routines.

  4. Encouragement (1–2 lines):
  Close with a message of empowerment — a reminder that change is possible and they are not alone.

  {{#if campusSupportServices}}
  If it feels natural and appropriate, you can gently weave in a mention of the campus resources available: {{{campusSupportServices}}}
  {{/if}}

  Keep the language beginner-friendly, safe, and hopeful.
`,
});

const generateMicroSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateMicroSuggestionsFlow',
    inputSchema: GenerateMicroSuggestionsInputSchema,
    outputSchema: GenerateMicroSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

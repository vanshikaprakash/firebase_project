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
  reflection: z.string().describe("A gentle, reflective paragraph acknowledging the user's feelings."),
  microSuggestions: z
    .array(z.string())
    .describe(
      'A list of 1-2 personalized and actionable micro-suggestions for the student to improve their mental wellbeing.'
    ),
});
export type GenerateMicroSuggestionsOutput = z.infer<
  typeof GenerateMicroSuggestionsOutputSchema
>;

export async function generateMicroSuggestions(
  input: GenerateMicroSuggestionsInput
): Promise<GenerateMicroSuggestionsOutput> {
  return generateMicroSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMicroSuggestionsPrompt',
  input: {schema: GenerateMicroSuggestionsInputSchema},
  output: {schema: GenerateMicroSuggestionsOutputSchema},
  prompt: `You are a supportive mental health companion for college students. A student has shared how they are feeling.

  Student's input:
  - Emotion: {{{emotion}}}
  - Intensity: {{{intensity}}}
  - Situation: "{{{situation}}}"

  Your task is to respond in a gentle and supportive tone.
  1.  First, write a short, reflective paragraph that acknowledges their feelings and validates their experience.
  2.  Then, suggest 1-2 very small, realistic, and actionable steps they could take. Examples: drinking a glass of water, stretching for 2 minutes, writing down one sentence about their day.

  {{#if campusSupportServices}}
  If it feels appropriate, you can also mention the campus resources they provided: {{{campusSupportServices}}}
  {{/if}}

  Keep the entire response gentle, non-clinical, and encouraging.
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

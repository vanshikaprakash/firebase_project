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
  microSuggestions: z
    .array(z.string())
    .describe(
      'A list of personalized and actionable micro-suggestions for the student to improve their mental wellbeing.'
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
  prompt: `You are a mental health support chatbot designed to help college students.

  Based on the student's emotion check-in, provide a list of 3 personalized and actionable micro-suggestions to improve their mental wellbeing.

  Emotion: {{{emotion}}}
  Intensity: {{{intensity}}}
  Situation: {{{situation}}}

  {{#if campusSupportServices}}
  In addition to suggestions, include relevant campus support services:
  {{{campusSupportServices}}}
  {{/if}}

  Ensure the suggestions are very small and easy to accomplish. Focus on actionable steps the student can take immediately.
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

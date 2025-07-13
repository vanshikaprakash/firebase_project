// src/ai/flows/incorporate-campus-resources.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow that generates personalized micro-suggestions for students,
 * conditionally incorporating relevant campus support services based on their emotional check-in results.
 *
 * - generateMicroSuggestions: The main function to generate personalized micro-suggestions.
 * - MicroSuggestionsInput: The input type for the generateMicroSuggestions function.
 * - MicroSuggestionsOutput: The output type for the generateMicroSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the flow
const MicroSuggestionsInputSchema = z.object({
  emotion: z.string().describe('The primary emotion the student is feeling.'),
  details: z.string().describe('Additional details about the student\'s situation and feelings.'),
  campusSupportServices: z
    .array(z.string())
    .optional()
    .describe('A list of campus support services that may be relevant.'),
});
export type MicroSuggestionsInput = z.infer<typeof MicroSuggestionsInputSchema>;

// Define the output schema for the flow
const MicroSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of personalized micro-suggestions for the student.'),
});
export type MicroSuggestionsOutput = z.infer<typeof MicroSuggestionsOutputSchema>;

// Exported function to generate micro-suggestions
export async function generateMicroSuggestions(input: MicroSuggestionsInput): Promise<MicroSuggestionsOutput> {
  return generateMicroSuggestionsFlow(input);
}

// Define the prompt for generating micro-suggestions
const microSuggestionsPrompt = ai.definePrompt({
  name: 'microSuggestionsPrompt',
  input: {schema: MicroSuggestionsInputSchema},
  output: {schema: MicroSuggestionsOutputSchema},
  prompt: `You are a warm, empathetic, and non-judgmental AI assistant designed to help college students process their emotions and receive actionable steps.

  A student is feeling {{emotion}} and has provided the following details: {{details}}.

  {% if campusSupportServices %}
  The following campus support services are available and may be relevant: {{campusSupportServices}}.
  Please consider incorporating these resources into your suggestions if appropriate.
  {% endif %}

  Generate a list of 3-5 personalized micro-suggestions that the student can take to improve their situation. The suggestions should be very small and actionable.
  `,
});

// Define the Genkit flow
const generateMicroSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateMicroSuggestionsFlow',
    inputSchema: MicroSuggestionsInputSchema,
    outputSchema: MicroSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await microSuggestionsPrompt(input);
    return output!;
  }
);

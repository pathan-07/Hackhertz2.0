'use server';

/**
 * @fileOverview A hackathon track suggestion AI agent.
 *
 * - suggestHackathonTracks - A function that handles the hackathon track suggestion process.
 * - SuggestHackathonTracksInput - The input type for the suggestHackathonTracks function.
 * - SuggestHackathonTracksOutput - The return type for the suggestHackathonTracks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestHackathonTracksInputSchema = z.object({
  teamSkills: z
    .array(z.string())
    .describe('An array of skills possessed by the team members.'),
});
export type SuggestHackathonTracksInput = z.infer<typeof SuggestHackathonTracksInputSchema>;

const SuggestHackathonTracksOutputSchema = z.object({
  suggestedTracks: z
    .array(z.string())
    .describe('An array of suggested hackathon tracks based on the team skills.'),
});
export type SuggestHackathonTracksOutput = z.infer<typeof SuggestHackathonTracksOutputSchema>;

export async function suggestHackathonTracks(
  input: SuggestHackathonTracksInput
): Promise<SuggestHackathonTracksOutput> {
  return suggestHackathonTracksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestHackathonTracksPrompt',
  input: {schema: SuggestHackathonTracksInputSchema},
  output: {schema: SuggestHackathonTracksOutputSchema},
  prompt: `You are an AI assistant designed to suggest relevant hackathon tracks based on a team\'s skills.

  Given the following team skills:
  {{#each teamSkills}}
  - {{{this}}}
  {{/each}}

  Suggest hackathon tracks that would be a good fit for the team. Be specific and provide a variety of options.
  Format your response as a list of suggested tracks.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const suggestHackathonTracksFlow = ai.defineFlow(
  {
    name: 'suggestHackathonTracksFlow',
    inputSchema: SuggestHackathonTracksInputSchema,
    outputSchema: SuggestHackathonTracksOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

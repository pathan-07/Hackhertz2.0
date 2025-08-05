'use server';

import { suggestHackathonTracks } from '@/ai/flows/suggest-hackathon-tracks';
import { z } from 'zod';

const formSchema = z.object({
  skills: z.string().min(10, 'Please describe your team skills in more detail.'),
});

interface SuggestionsState {
    message: string | null;
    suggestions: string[];
}

export async function getTrackSuggestions(
  input: {skills: string}
): Promise<SuggestionsState> {
  const validatedFields = formSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.skills?.[0] || 'Invalid input.',
      suggestions: [],
    };
  }

  const skillsArray = validatedFields.data.skills.split(/[,;]+/).map(skill => skill.trim()).filter(Boolean);

  if (skillsArray.length === 0) {
    return {
        message: 'Please provide a list of skills.',
        suggestions: [],
    }
  }

  try {
    const result = await suggestHackathonTracks({ teamSkills: skillsArray });
    if (!result.suggestedTracks || result.suggestedTracks.length === 0) {
        return {
            message: 'Could not generate suggestions based on the provided skills. Try being more specific.',
            suggestions: [],
        }
    }
    return {
      message: 'Suggestions generated successfully.',
      suggestions: result.suggestedTracks,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred while generating suggestions.',
      suggestions: [],
    };
  }
}

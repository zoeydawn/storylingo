import { OPENAI_API_KEY } from '$env/static/private';
import { OpenAI } from 'openai';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { topic, language, level } = await request.json();

		if (!topic || !language || !level) {
			throw error(400, 'Missing required parameters');
		}

		const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

		const prompt = `Write a 4-5 sentence micro-story in ${language} for a ${level} language learner. 
        Topic: ${topic}. Use simple grammar structures, common vocabulary, and keep sentences short. 
        Avoid complex idioms. Include a mix of verbs in present and past tense.`;

		const response = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content:
						'You are a helpful language teacher that creates engaging micro-stories for language learners.'
				},
				{
					role: 'user',
					content: prompt
				}
			],
			temperature: 0.7,
			max_tokens: 300
		});

		const storyContent = response.choices[0]?.message?.content?.trim() || '';

		if (!storyContent) {
			throw error(500, 'Failed to generate story content');
		}

		return json({ storyContent });
	} catch (err) {
		console.error('OpenAI API error:', err);
		throw error(500, 'Failed to generate story');
	}
};

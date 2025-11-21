import { OPENAI_API_KEY } from '$env/static/private';
import { OpenAI } from 'openai';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { LanguageLevel, LanguageString } from '$lib';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const {
			topic,
			language,
			level
		}: { topic: string; language: LanguageString; level: LanguageLevel } = await request.json();

		if (!topic || !language || !level) {
			throw error(400, 'Missing required parameters');
		}

		const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

		const levelInstructions = {
			a1: 'Level A1, focus exclusively on the present moment. Keep sentences short and simple, built from the 500 most common words. Describe concrete objects and actions that can be seen or touched right now. Avoid connectors, tenses, or abstract ideas.',
			a2: 'Level A2, narrate yesterday and tomorrow with the basic past and future forms. Link two or three short clauses with simple connectors. Add everyday adjectives and high-frequency multi-word expressions. Stay inside the world of familiar routines and personal experience.',
			b1: 'Level B1, shape a full story with a clear beginning-middle-end. Use a wider set of connectors to join related ideas and introduce reasons, plans, and simple opinions. Deploy common idioms and mid-frequency abstract nouns. Keep the timeline linear and the viewpoint consistent.',
			b2: 'Level B2, craft clear, detailed texts on concrete and abstract topics. Weave in complex structures—subordinate clauses, passive forms, mixed tenses—for nuance and precision. Integrate idiomatic language, strong collocations, and rhetorical devices. Allow flashbacks, multiple perspectives, and persuasive asides.',
			c1: 'Level C1, write fluently, flexibly, and with stylistic control. Manipulate grammar for emphasis, hedging, or irony. Draw on a vast lexical reservoir, including rare words and cultural references. Signal subtext, attitude, and layered meaning. Maintain cohesion across long, information-dense passages.',
			c2: 'Level C2, write with the precision and creativity of an educated native. Exploit every register, trope, and nuance the language allows. Play with rhythm, allusion, and lexical novelty. Persuade, amuse, or provoke without ever losing clarity, elegance, or idiomatic authenticity.'
		};

		const prompt = `Create a 4-5 paragraph story in ${language} for someone learning the language. Use this following information:
**Language**: ${language}
**Topic**: ${topic}
**Language Level**: ${levelInstructions[level]}

Please provide the following properties:
1. **Title**: A short and descriptive title
2. **Body**: The story content

Format the response as JSON with these exact keys: title and body.`;

		const response = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content:
						'You are a helpful language teacher that creates engaging micro-stories for language learners. Always respond with valid JSON format only - no markdown formatting, no code blocks, no additional text.'
				},
				{
					role: 'user',
					content: prompt
				}
			],
			temperature: 0.7,
			max_tokens: 1000
		});

		const content = response.choices[0]?.message?.content;

		if (!content) {
			throw error(500, 'Failed to generate story content');
		}

		// Parse JSON response
		const storyContent = JSON.parse(content);

		// Ensure paragraphs are separated by new lines
		storyContent.body = storyContent.body.replace(/\\n/g, '\n\n');
		console.log('Token usage:', response.usage);

		console.log(storyContent);
		// console.log({ prompt, level });
		return json({ ...storyContent });
	} catch (err) {
		console.error('OpenAI API error:', err);
		throw error(500, 'Failed to generate story');
	}
};

import type { PageServerLoad } from './$types';
import type { RES_DATA } from '@libs/utils';

export const load = (async ({ fetch }): Promise<RES_DATA> => {
	const res = await fetch('http://localhost:3000');
	return res.json();
}) satisfies PageServerLoad;

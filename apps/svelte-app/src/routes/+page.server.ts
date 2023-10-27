import type { PageServerLoad } from './$types';
import type { RES_DATA } from '@libs/utils';
import type { MyModel } from '@libs/prisma';

export const load = (async (): Promise<{ data: RES_DATA; myModel: MyModel }> => {
	const res = await fetch('http://localhost:3000');
	return await res.json();
}) satisfies PageServerLoad;

import db from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { QueryError, RowDataPacket } from 'mysql2';

export const load = async ({ params }) => {
	const [r, e] = await db.query<RowDataPacket[]>(
		'SELECT technique_id, technique_name, technique_guide FROM Techniques'
	);

	console.log(r);
	return {
		items: r
	};
};

export const actions = {
	addItem: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		const name = data.get('name');
		console.log(name);
		const guide = data.get('guide');

		db.execute('INSERT INTO Techniques (technique_name, technique_guide) VALUES (?, ?)', [
			name,
			guide
		]);
		const [r, e] = await db.query<RowDataPacket[]>(
			'SELECT technique_id, technique_name, technique_guide FROM Techniques'
		);

		console.log(r);
		return {
			items: r
		};
	}
};

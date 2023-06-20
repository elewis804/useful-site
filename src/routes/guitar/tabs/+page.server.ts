import db from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { QueryError, RowDataPacket } from 'mysql2';

export const load = async ({ params }) => {
	const [r, e] = await db.query<RowDataPacket[]>(
		'SELECT tab_id, tab_name, tab_song, tab_guide FROM Tabs'
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
		const song = data.get("song");
		const guide = data.get('guide');

		db.execute('INSERT INTO Tabs (tab_name, tab_song, tab_guide) VALUES (?, ?, ?)', [
			name,
			song,
			guide
		]);
		const [r, e] = await db.query<RowDataPacket[]>(
			'SELECT tab_id, tab_name, tab_song, tab_guide FROM Tabs'
		);

		console.log(r);
		return {
			items: r
		};
	}
};

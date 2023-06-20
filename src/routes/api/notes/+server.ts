import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from '$lib/server/db'
import type { QueryError, RowDataPacket } from "mysql2";

export const DELETE = (async ({ request }) => {
    const data = await request.json();
    console.log(data);
    db.query("DELETE FROM Notes WHERE notes_id = ?", [data]);
    const [r, e] = await db.query<RowDataPacket[]>("SELECT notes_id, notes_name, notes_date FROM Notes");
    return json(r);
}) satisfies RequestHandler;
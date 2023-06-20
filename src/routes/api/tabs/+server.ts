import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from '$lib/server/db'
import type { QueryError, RowDataPacket } from "mysql2";

export const DELETE = (async ({ request }) => {
    const data = await request.json();
    console.log(data);
    db.query("DELETE FROM Tabs WHERE tab_id = ?", [data]);
    const [r, e] = await db.query<RowDataPacket[]>("SELECT tab_id, tab_name, tab_song, tab_guide FROM Tabs");
    return json(r);
}) satisfies RequestHandler;
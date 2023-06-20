import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from '$lib/server/db'
import type { QueryError, RowDataPacket } from "mysql2";

export const DELETE = (async ({ request }) => {
    const data = await request.json();
    console.log(data);
    db.query("DELETE FROM Todo WHERE task_id = ?", [data]);
    const [r, e] = await db.query<RowDataPacket[]>("SELECT * FROM Todo");
    return json(r);
}) satisfies RequestHandler;
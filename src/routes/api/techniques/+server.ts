import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from '$lib/server/db'
import type { QueryError, RowDataPacket } from "mysql2";

export const DELETE = (async ({ request }) => {
    const data = await request.json();
    console.log(data);
    db.query("DELETE FROM Techniques WHERE technique_id = ?", [data]);
    const [r, e] = await db.query<RowDataPacket[]>("SELECT technique_id, technique_name, technique_guide FROM Techniques");
    return json(r);
}) satisfies RequestHandler;
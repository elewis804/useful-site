import db from "$lib/server/db";
import { error } from "@sveltejs/kit";
import type { QueryError, RowDataPacket } from "mysql2";

export const load = (async ({ params }) => {
    const [r, e] = await db.query<RowDataPacket[]>("SELECT notes_id, notes_name, notes_date FROM Notes");
    
    console.log(r);
    return {
        items: r
    };
});

export const actions = {
    addItem: async ({request}) => {
        const data = await request.formData();
        console.log(data);
        const name = data.get("name");
        console.log(name);
        const date = data.get("date");

        db.execute("INSERT INTO Notes (notes_name, notes_date) VALUES (?, ?)", [name, date])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT notes_id, notes_name, notes_date FROM Notes");
    
        console.log(r);
        return {
            items: r
        };
    }
}
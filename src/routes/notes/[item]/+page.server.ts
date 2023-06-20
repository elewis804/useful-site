import db from "$lib/server/db";
import type { RowDataPacket } from "mysql2";

export const load = (async ({ params }) => {
    const [r, e] = await db.query<RowDataPacket[]>("SELECT * FROM Notes WHERE notes_id = ?", [params.item]);
    
    console.log(r);
    return {
        item: r
    };
});

export const actions = {
    saveItem: async ({request, params}) => {
        const data = await request.formData();
        console.log(data);
        const name = data.get("name");
        console.log(name);
        const date = data.get("date");
        console.log(date);

        db.execute("UPDATE Notes SET notes_name= ?, notes_date= ? WHERE notes_id= ?", [name, date, params.item])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Notes WHERE notes_id= ?", [params.item]);
    
        console.log(r);
        return {
            items: r
        };
    },

    saveNotes: async ({request, params}) => {
        const data = await request.formData();
        const notes = data.get("notes");
        db.execute("UPDATE Notes SET notes=? WHERE notes_id= ?", [notes, params.item])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Notes WHERE notes_id= ?", [params.item]);
    
        console.log(r);
        return {
            items: r
        };
    }
}
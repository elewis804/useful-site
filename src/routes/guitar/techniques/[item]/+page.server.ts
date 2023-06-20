import db from "$lib/server/db";
import type { RowDataPacket } from "mysql2";

export const load = (async ({ params }) => {
    const [r, e] = await db.query<RowDataPacket[]>("SELECT * FROM Techniques WHERE technique_id = ?", [params.item]);
    
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
        const guide = data.get("guide");
        console.log(guide);

        db.execute("UPDATE Techniques SET technique_name= ?, technique_guide= ? WHERE technique_id= ?", [name, guide, params.item])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Techniques WHERE technique_id= ?", [params.item]);
    
        console.log(r);
        return {
            items: r
        };
    },

    saveNotes: async ({request, params}) => {
        const data = await request.formData();
        const notes = data.get("notes");
        db.execute("UPDATE Techniques SET notes=? WHERE technique_id= ?", [notes, params.item])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Techniques WHERE technique_id= ?", [params.item]);
    
        console.log(r);
        return {
            items: r
        };
    }
}
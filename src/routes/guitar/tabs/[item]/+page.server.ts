import db from "$lib/server/db";
import type { RowDataPacket } from "mysql2";

export const load = (async ({ params }) => {
    const [r, e] = await db.query<RowDataPacket[]>("SELECT * FROM Tabs WHERE tab_id = ?", [params.item]);
    
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
        const song = data.get("song");
        const guide = data.get("guide");
        console.log(guide);

        db.execute("UPDATE Tabs SET tab_name= ?, tab_song=?, tab_guide= ? WHERE tab_id= ?", [name, song, guide, params.item])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Tabs WHERE tab_id= ?", [params.item]);
    
        console.log(r);
        return {
            items: r
        };
    },

    saveNotes: async ({request, params}) => {
        const data = await request.formData();
        const notes = data.get("notes");
        db.execute("UPDATE Tabs SET notes=? WHERE tab_id= ?", [notes, params.item])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Tabs WHERE tab_id= ?", [params.item]);
    
        console.log(r);
        return {
            items: r
        };
    }
}
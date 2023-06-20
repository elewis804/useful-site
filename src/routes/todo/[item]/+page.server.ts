import db from "$lib/server/db";
import type { RowDataPacket } from "mysql2";

export const load = (async ({ params }) => {
    const [r, e] = await db.query<RowDataPacket[]>("SELECT * FROM Todo WHERE task_id = ?", [params.item]);
    
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
        const link = data.get("duedate");
        console.log(link);
        const desc = data.get("description");
        console.log(desc);

        db.execute("UPDATE Todo SET task_name= ?, task_desc= ?, task_duedate= ? WHERE task_id= ?", [name, desc, link, params.item])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Todo WHERE task_id= ?", [params.item]);
    
        console.log(r);
        return {
            items: r
        };
    }
}
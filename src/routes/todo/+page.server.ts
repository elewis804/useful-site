import db from "$lib/server/db";
import { error } from "@sveltejs/kit";
import type { QueryError, RowDataPacket } from "mysql2";

export const load = (async ({ params }) => {
    const [r, e] = await db.query<RowDataPacket[]>("SELECT * FROM Todo");
    
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
        const duedate = data.get("duedate");
        console.log(duedate);
        const desc = data.get("description");
        console.log(desc);

        db.execute("INSERT INTO Todo (task_name, task_desc, task_duedate) VALUES (?, ?, ?)", [name, desc, duedate])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Todo");
    
        console.log(r);
        return {
            items: r
        };
    }
}
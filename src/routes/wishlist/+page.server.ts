import db from "$lib/server/db";
import { error } from "@sveltejs/kit";
import type { QueryError, RowDataPacket } from "mysql2";

export const load = (async ({ params }) => {
    const [r, e] = await db.query<RowDataPacket[]>("SELECT * FROM Wishlist");
    
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
        const link = data.get("link");
        console.log(link);
        const desc = data.get("description");
        console.log(desc);

        db.execute("INSERT INTO Wishlist (item_name, item_desc, item_link) VALUES (?, ?, ?)", [name, desc, link])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Wishlist");
    
        console.log(r);
        return {
            items: r
        };
    }
}
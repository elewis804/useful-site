import db from "$lib/server/db";
import type { RowDataPacket } from "mysql2";

export const load = (async ({ params }) => {
    const [r, e] = await db.query<RowDataPacket[]>("SELECT * FROM Wishlist WHERE item_id = ?", [params.item]);
    
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
        const link = data.get("link");
        console.log(link);
        const desc = data.get("description");
        console.log(desc);

        db.execute("UPDATE Wishlist SET item_name= ?, item_desc= ?, item_link= ? WHERE item_id= ?", [name, desc, link, params.item])
        const [r, e] = await db.execute<RowDataPacket[]>("SELECT * FROM Wishlist WHERE item_id= ?", [params.item]);
    
        console.log(r);
        return {
            items: r
        };
    }
}
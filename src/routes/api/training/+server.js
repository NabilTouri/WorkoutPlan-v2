import { mysqlconnFn } from "../../../hooks.server";

export const DELETE = async ({ params }) => {
    const user = fetch('/api/user').then(res => res.json()).then(data => data)
    if (!user) {
        return json(401,'Unauthorized')
    }
    //tira fuori i parametri dal body
    const { id } = params;
    const mysqlconn = await mysqlconnFn();
    try {
        await mysqlconn.query(`DELETE FROM trainings WHERE id = ${id}`)
    }
    catch (error) {
        return json(500,'Internal Server Error')
    }

    return json(200,'OK')
}
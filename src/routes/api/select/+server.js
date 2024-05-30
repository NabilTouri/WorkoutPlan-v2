import { mysqlconnFn } from "../../../hooks.server"
import { json } from "@sveltejs/kit"

export const GET = async () => {
    const mysqlconn = await mysqlconnFn()

    const response = await mysqlconn.query('SELECT * FROM exercises')
    .then(([rows]) => {
        return rows
    })

    console.log('exercises', response)
    
    return json(response)
}
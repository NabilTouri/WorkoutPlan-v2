import { json, error } from '@sveltejs/kit'
import { mysqlconnFn } from '../../../../hooks.server.js'

export const GET = async () => {
    try {
        // Get the user from the database
        const mysqlconn = await mysqlconnFn();
        const user = await mysqlconn.query("SELECT * FROM user")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        // Return the user
        return json(user, { status: 200 });
    } catch (error) {
        console.error("Error during the retrieval of user:", error);
        return {
            status: 500,
            body: { error: "Internal Server Error" }
        };
    }  
}

export const POST = async (requestEvent) => {
    console.log("POST request received");
    try {
        // Get the data from the request
        const { request } = requestEvent
        const data = await request.json()
        // Insert the user into the database
        const mysqlconn = await mysqlconnFn();
        await mysqlconn.query("INSERT INTO user (name, surname, age, gender, username, password) VALUES (?, ?, ?, ?, ?, ?)", [data.name, data.surname, data.age, data.gender, data.username, data.hashedPassword])
        // Return the result
        return json({ message: "Successfull insertion of user" }, { status: 200 });
    } catch (error) {
        console.error("Error during the insertion of user:", error);
        return error(500, { error: "Internal Server Error" });
    }
}
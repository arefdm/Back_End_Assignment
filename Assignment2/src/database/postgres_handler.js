import { POSTGRES_SECRETS } from "../config.js";
import {Client} from 'pg';



export async function query(sqlQuery,variables){
    const client = new Client(POSTGRES_SECRETS);
    await client.connect();
    const res = await client.query(sqlQuery,variables);
    await client.end();
    return res.rows;
};
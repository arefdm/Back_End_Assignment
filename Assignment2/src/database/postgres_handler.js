import { POSTGRES_SECRETS } from "../config";
import {Client} from 'pg';

const client = new Client(POSTGRES_SECRETS);

export async function query(sqlQuery,variables){
    await client.connect();
    const res = await client.query(sqlQuery,variables);
    await client.end();
    return res;
};
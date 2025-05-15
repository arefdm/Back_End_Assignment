import { query } from "../database/postgres_handler";

export async function getTableData(tableSchema,tableName){
    const sqlQuery = `select *
    from ${tableSchema}.${tableName}`;
    return query(sqlQuery);
};
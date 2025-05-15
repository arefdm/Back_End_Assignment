const POSTGRES_SECRETS = {
    user: process.env.PGUSER,
    password:process.env.PGPASSWORD,
    host:process.env.PGHOST,
    port:process.env.PGPORT,
    database:process.env.PGDATABASE,
    ssl: true
}

export {
    POSTGRES_SECRETS
};
const POSTGRES_SECRETS = {
    user: process.env.PGUSER,
    password:process.env.PGPASSWORD,
    host:process.env.PGHOST,
    port:process.env.PGPORT,
    database:process.env.PGDATABASE,
    ssl: true
};

const EMAIL_SECRETS = {
host: process.env.MAILHOST,
  port: process.env.MAILPORT,
  auth: {
    user: process.env.MAILUSER,
    pass: process.env.MAILPASSWORD
  }
};
const MYEMAILADDRESS = process.env.MYEMAILADDRESS;

export {
    POSTGRES_SECRETS,
    EMAIL_SECRETS,
    MYEMAILADDRESS
};
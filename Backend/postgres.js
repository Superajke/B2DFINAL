import pkg from "pg";

const postpool = new pkg.Pool({
    user: "postgres",
    host: "localhost",
    database: "Maraton_BD",
    password: "123321",
    port: 5432,
});
export default postpool;

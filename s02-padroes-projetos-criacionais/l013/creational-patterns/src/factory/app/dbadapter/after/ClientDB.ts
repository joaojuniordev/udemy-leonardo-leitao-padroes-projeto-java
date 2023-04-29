import DB from "./db/DB"
import OracleFactory from "./factory/OracleFactory"
import PostgresFactory from "./factory/PostgresFactory"

//main
export default ()=>{
    console.log("### CLIENT DB ###")
    // const db:DB = new PostgresFactory().getDatabase()
    const db:DB = new OracleFactory().getDatabase()
    db.query("SELECT * FROM users")
    db.update("INSERT INTO users VALUES ('User', 25)")
}
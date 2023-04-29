import DB from "../db/DB" 
import PostgresDB from "../db/PostgresDB"
import DBFactory from "./DBFactory"

class PostgresFactory implements DBFactory{

    getDatabase=():DB=>{
        return new PostgresDB()
    }
}

export default PostgresFactory
import DB from "../db/DB" 
import OracleDB from "../db/OracleDB"
import DBFactory from "./DBFactory"

class OracleFactory implements DBFactory{

    getDatabase=():DB=>{
        return new OracleDB()
    }
}

export default OracleFactory
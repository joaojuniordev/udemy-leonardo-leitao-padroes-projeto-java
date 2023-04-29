import DB from "../db/DB"

interface DBFactory{
    getDatabase():DB
}

export default DBFactory
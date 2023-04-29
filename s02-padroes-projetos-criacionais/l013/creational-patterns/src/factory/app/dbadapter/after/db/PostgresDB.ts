import DB from "./DB"

class PostgresDB implements DB{
    public query(sql:string):void {
		console.log("Querying " + sql + " in Postgres database")
	}
	
	public update(sql:string):void {
		console.log("Uptade query " + sql + " in Postgres database")
	}
}

export default PostgresDB
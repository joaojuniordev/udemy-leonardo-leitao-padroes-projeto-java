import DB from "./DB"

class OracleDB implements DB{
    public query(sql:string):void {
		console.log("Querying " + sql + " in Oracle database")
	}
	
	public update(sql:string):void {
		console.log("Uptade query " + sql + " in Oracle database")
	}
}

export default OracleDB
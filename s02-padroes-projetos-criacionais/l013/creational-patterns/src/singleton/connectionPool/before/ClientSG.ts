import Connection from "./conn/Connection"
import ConnectionPool from  "./conn/ConnectionPool"

const doQuery1=():void=> {
	const pool:ConnectionPool = new ConnectionPool()
	const conn:Connection = pool.getConnection()
	if(conn != null)
		conn.query("SELECT * FROM A1")
}
	
const doQuery2 = ():void =>{
	const pool:ConnectionPool = new ConnectionPool()
	const conn:Connection = pool.getConnection()
	if(conn != null)
		conn.query("SELECT * FROM A2")
}

const doQuery3 = ():void =>{
	const pool:ConnectionPool = new ConnectionPool()
	const conn:Connection = pool.getConnection()
	if(conn != null)
		conn.query("SELECT * FROM A3")
}


export default ()=> {
	console.log("\n\n### BEFORE NO-SINGLETON ###")
	doQuery1()
	doQuery2()
	doQuery3()
	
	//3 connections was made, even with 2 connections limit
}

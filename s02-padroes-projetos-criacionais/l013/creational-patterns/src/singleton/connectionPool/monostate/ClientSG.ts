import Connection from "./conn/Connection" 
import ConnectionPool from "./conn/ConnectionPool" 


const doQuery1 = () => {
	const pool:ConnectionPool = new ConnectionPool() 
	const conn:Connection = pool.getConnection() 
	if(conn != null)
		conn.query("SELECT * FROM A1") 
}

const doQuery2= () => {
	const pool:ConnectionPool = new ConnectionPool() 
	const conn:Connection = pool.getConnection() 
	if(conn != null)
		conn.query("SELECT * FROM A2") 
}

const doQuery3= () => {
	const pool:ConnectionPool = new ConnectionPool() 
	const conn:Connection = pool.getConnection() 
	if(conn != null)
		conn.query("SELECT * FROM A3") 
}

export default () => {
	console.log("\n\n### Monostate ###") 

	console.log("Connection Pool Size: " + ConnectionPool.POOL_SIZE) 
	const pool:number = ConnectionPool.POOL_SIZE 
	console.log(pool) 
	doQuery1() 
	doQuery2() 
	doQuery3() 
}


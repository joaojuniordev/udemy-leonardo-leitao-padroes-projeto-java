import ConnectionPool from "./conn/ConnectionPool" 
import Connection from "./conn/Connection" 

const doQuery1 = ()=> {
	const pool:ConnectionPool = ConnectionPool.getInstance() 
	const conn:Connection = pool.getConnection() 
	if(conn != null)
		conn.query("SELECT * FROM A1") 
}

const doQuery2 = () => {
	const pool:ConnectionPool = ConnectionPool.getInstance() 
	const conn:Connection = pool.getConnection() 
	if(conn != null)
		conn.query("SELECT * FROM A2") 
		// pool.leaveConnection(conn)//liberar conexao
}

const doQuery3 = () =>{
	const pool:ConnectionPool = ConnectionPool.getInstance() 
	const conn:Connection = pool.getConnection() 
	if(conn != null)
		conn.query("SELECT * FROM A3") 
}

export default () => {
	console.log("\n\n### SINGLETON AFTER ###")

	const pool:number = ConnectionPool.POOL_SIZE
	console.log("Connection Pool Size: ", pool)
	doQuery1() 
	doQuery2() 
	doQuery3() 
}


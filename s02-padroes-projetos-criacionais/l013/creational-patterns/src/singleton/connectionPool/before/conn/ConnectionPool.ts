import Connection from "./Connection"

class ConnectionPool {
	public static POOL_SIZE:number = 2
	private connectionsPool:Array<Connection> 
	
	constructor() {
		console.log("Creating Connection Pool...")		
		this.connectionsPool = new Array<Connection>()
		// add Connection:
		for(let i=0; i < ConnectionPool.POOL_SIZE; i++) {
			this.connectionsPool.push(new Connection())
		}
	}
	
	public getConnection():any {		
		console.log("getConnection...")
		let avaiable = null
		for(let conn of this.connectionsPool) {
			if(!conn.isInUse()) {
				console.log("for ava::inUse", conn.isInUse())
				avaiable = conn
				break
			}
		}
		if(avaiable === null) {
			console.log("No Connections avaiable")
			return null
		}
		avaiable.setInUse(true)
		console.log("for ava::", avaiable.isInUse())
		return avaiable
	}
	
	public leaveConnection(conn:Connection):void {
		conn.setInUse(false)
	}
}

export default ConnectionPool
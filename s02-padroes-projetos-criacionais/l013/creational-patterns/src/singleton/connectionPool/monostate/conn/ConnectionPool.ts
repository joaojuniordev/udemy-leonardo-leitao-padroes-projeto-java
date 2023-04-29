import Connection from "./Connection" 

/**
 * @MONOSTATE	Consegue trabalhar com interface.
 * 				Nao usa metodo static
 * 
 */
class ConnectionPool {
	public static POOL_SIZE:number = 2 
	private static connectionsPool:Array<Connection> 
	
	//Bloco de inicializacao:
	static {
		console.log("Creating Connection Pool...") 
		this.connectionsPool = new Array<Connection>() 
		// add Connection:
		for(let i = 0;  i < this.POOL_SIZE;  i++) {
			this.connectionsPool.push(new Connection()) 
		}
	}
	
	constructor() {
		 console.log("New instance of Connection Pool") 
	}
	
	public getConnection():any {
		let avaiable = null 
		for(let conn of ConnectionPool.connectionsPool) {
			if(!conn.isInUse()) {
				avaiable = conn 
				break 
			}
		}
		if(avaiable == null) {
			 console.log("No Connections avaiable") 
			return null 
		}
		avaiable.setInUse(true) 
		return avaiable 
	}
	
	public leaveConnection(conn:Connection):void {
		conn.setInUse(false) 
	}
}

export default ConnectionPool
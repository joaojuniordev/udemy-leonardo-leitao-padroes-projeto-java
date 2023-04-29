import Connection from "./Connection"

/**
 * @SINGLETON	Garantir que essa classe tenha uma ÚNICA INSTANCIA para acesso GLOBAL.
 * @CRITICAS	Não consegue usar interface por causa do metodo static.
 * 				Tem problemas com o SOLID: 
 * 					Fere algums principios (Alternativa: monostate).
 * 					Nesse caso, o metodo getInstance teria mais de uma responsabilidade: gerar a instancia e gerencia as 'coisas'
 * @Passos	Como criar?
 * @Item1	Esconder o construtor dessa class
 * @Item2	Definir um ponto de criação static
 * @Item3	Retorne apenas esta instância única
 */

class ConnectionPool {
	public static POOL_SIZE:number = 2
	private connectionsPool:Array<Connection>
	/**
	 * @Item3 Static garante uma unica instancia
	 */
	private static singleton:ConnectionPool = new ConnectionPool()//Item1: Chamando o private constructor 
	
	/**
	 * @Item2
	 */
	public static getInstance():ConnectionPool {
		return this.singleton
	}
	
	/**
	 * @Item1
	 */
	private constructor() {
		this.connectionsPool = new Array<Connection>()
		// add Connection:
		for(let i = 0; i < ConnectionPool.POOL_SIZE; i++) {
			this.connectionsPool.push(new Connection())
		}
		console.log("Creating Connection Pool...", ConnectionPool.POOL_SIZE)
	}

	public getConnection():any {
		console.log("getConnection...")
		let avaiable = null
		for(let conn of this.connectionsPool) {
			console.log("for avaiable::", conn.isInUse())
			if(!conn.isInUse()) {
				avaiable = conn
				break
			}
		}
		if(avaiable === null) {
			console.log("No Connections avaiable")
			return null
		}
		avaiable.setInUse(true)
		return avaiable
	}
	
	public leaveConnection(conn:Connection):void {		
		conn.setInUse(false)
		console.log("leaveConnection... conn.isInUse()", conn.isInUse())
	}
}

export default ConnectionPool
class Connection {
	private inUse:boolean
	
	constructor() {
		this.inUse = false
		// console.log("Connection.inUse", this.inUse)
	}
	
	public query = (sql:string):any =>{
		console.log("Running '" + sql + "' in Connection " + this)
		return null
	}
	
	public isInUse = ():boolean =>{
		return this.inUse
	}
	
	public setInUse = (status:boolean):void =>{
		this.inUse = status
	}
}

export default Connection

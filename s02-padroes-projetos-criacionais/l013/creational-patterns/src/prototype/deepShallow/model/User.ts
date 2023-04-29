import Address from "./Address"

// class User implements Cloneable {
	class User{	
	public name:string
	public age:number
	public address:Address
	
	constructor(name:string, age:number, address:Address) {
		// super()
		this.name = name
		this.age = age
		this.address = address
	}

	public toString():string {
		return "User [name=" + this.name + ", age=" + this.age + ", address=" + this.address + "]"
	}
	
	public clone():User {
		//Error: Faz uma shallow copy (No Java)
		// return (User) super.clone()
		
		// Address é um outro Object, com o shallow copy, ao alterar a copia, tambem o original sera alterado! 
		//Solution: Faz um clone para todo artibudo com composicao!
		// User cloneUser = (User) super.clone()
		const cloneUser:User = new User(this.name, this.age, this.address)
		cloneUser.address = (cloneUser.address.clone() as Address)
		return cloneUser
	}
}


export default User
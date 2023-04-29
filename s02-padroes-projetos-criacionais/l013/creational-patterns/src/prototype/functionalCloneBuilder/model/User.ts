import Address from "./Address"

// class User implements Cloneable {
class User {

	private readonly name:string
	private readonly age:number
	private readonly address:Address
	
	constructor(name:string, age:number, address:Address) {
		// super()
		this.name = name
		this.age = age
		this.address = address
	}
	
	public getName():string {
		return this.name
	}

	public getAge():number {
		return this.age
	}

	public getAddress():Address {
		return this.address
	}

	public toString():string {
		return "User [name=" + this.name + ", age=" + this.age + ", address=" + this.address + "]"
	}
	
	protected clone():User{
		const cloneAddress:Address = (this.address.clone() as Address)
		return new User(this.name, this.age, cloneAddress)
	}

	public cloneBuilder() {
		return new User.Builder(this.name, this.age, this.address)
	}
	
	public static Builder = class Builder {
		private name:string
		private age:number
		private address:Address
		
		constructor(name:string, age:number, address:Address) {
			this.name = name
			this.age = age
			this.address = address
		}
		
		public withName(name:string):Builder {
			this.name = name
			return this
		}
		
		public withAge(age:number):Builder {
			this.age = age
			return this
		}

		public withAddress(address:Address):Builder {
			this.address = address
			return this
		}
		
		public now():User {
			return new User(this.name, this.age, this.address)
		}
	}	
}


export default User	
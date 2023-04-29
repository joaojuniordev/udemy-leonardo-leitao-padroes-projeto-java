// class Address implements Cloneable {
class Address {
	private readonly street:string
	private readonly number:number

	constructor(street:string, number:number) {
		// super()
		this.street = street
		this.number = number
	}

	public getStreet():string {
		return this.street
	}

	public getNumber():number {
		return this.number
	}

	public toString():string {
		return "Address [street=" + this.street + ", number=" + this.number + "]"
	}

	public clone():Object {
		// return super.clone()//Nao existe cloneable em TS.
		return new Address(this.street,this.number)
	}

	public static Builder = class Builder {
		private street:string
		private number:number

		private constructor(street:string, number:number) {
			this.street = street
			this.number = number
		}

		public withStreet(street:string):Builder {
			this.street = street
			return this
		}

		public withNumber(number:number):Builder {
			this.number = number
			return this
		}

		public now():Address {
			return new Address(this.street, this.number)
		}
	}
}


export default Address
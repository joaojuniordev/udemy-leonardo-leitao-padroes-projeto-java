// class Address implements Cloneable {
class Address {	
	public street:string;
	public number:number;
	
	constructor(street:string, number:number) {
		// super();
		this.street = street;
		this.number = number;
	}

	public toString():string {
		return "Address [street=" + this.street + ", number=" + this.number + "]";
	}

	public clone():Object {
		// return super.clone();//Nao existe cloneable em TS.
		return new Address(this.street, this.number)
	}
}


export default Address
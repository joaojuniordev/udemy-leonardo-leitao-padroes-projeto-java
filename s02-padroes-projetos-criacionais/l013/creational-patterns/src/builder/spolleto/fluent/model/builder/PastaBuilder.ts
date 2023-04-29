import Pasta from "../Pasta"
import Size from "../Size"

class PastaBuilder {
	//Mandatory
	protected size:Size
	
	//Optional
	protected toppings:Array<string>
	protected sauces:Array<string>
	protected cheese:boolean
	protected pepper:boolean
	
	constructor(size:Size) {
		this.size = size
		this.toppings = []
		this.sauces = []
		this.cheese = false
		this.pepper = false
	}

	public withSauces(sauces:Array<string>):PastaBuilder {
		this.sauces = sauces
		return this
	}

	public withToppings(toppings:Array<string> ):PastaBuilder {
		this.toppings = toppings
		return this
	}

	public withCheese():PastaBuilder {
		this.cheese = true
		return this
	}

	public withPepper():PastaBuilder {
		this.pepper = true
		return this
	}
	
	public now():Pasta {
		return new Pasta(this.toppings, this.sauces, this.size, this.cheese, this.pepper)
	}
}


export default PastaBuilder
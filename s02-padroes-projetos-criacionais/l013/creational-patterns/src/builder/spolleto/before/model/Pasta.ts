import Size from "./Size"

class Pasta {
	private toppings:Array<string> | undefined
	private sauces:Array<string> | undefined
	private size:Size | undefined
	private cheese:boolean | undefined
	private pepper:boolean | undefined
	
	// constructor(size:Size) {
	// 	this.size = size
	// }

	// constructor(sauces:Array<string> , size:Size ) {
	// 	this.sauces = sauces
	// 	this.size = size
	// }

	// constructor(toppings:Array<string>, sauces:Array<string> , size:Size ) { 
	// 	this.toppings = toppings
	// 	this.sauces = sauces
	// 	this.size = size
	// }

	// constructor(toppings:Array<string>, sauces:Array<string> , size:Size, cheese:boolean ) { 
	// 	this.toppings = toppings
	// 	this.sauces = sauces
	// 	this.size = size
	// 	this.cheese = cheese
	// }

	constructor(toppings?:Array<string>, sauces?:Array<string>, size?:Size, cheese?:boolean, pepper?:boolean ) {
		this.toppings = toppings
		this.sauces = sauces
		this.size = size
		this.cheese = cheese
		this.pepper = pepper
	}

	
	public toString():string {
		return "Pasta [toppings=" + this.toppings + ", sauces=" + this.sauces + ", size=" + this.size + ", cheese=" + this.cheese
				+ ", pepper=" + this.pepper + "]"
	}
}


export default Pasta
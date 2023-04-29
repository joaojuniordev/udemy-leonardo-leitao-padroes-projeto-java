import Size from "../../before/model/Size"

abstract class Meal {
	protected toppings:Array<string> | undefined
	protected sauces:Array<string> | undefined
	protected size:Size | undefined
	protected cheese:boolean | undefined
	protected pepper:boolean | undefined
	
	constructor(toppings?:Array<string>, sauces?:Array<string>, size?:Size, cheese?:boolean, pepper?:boolean) {
		this.toppings = toppings
		this.sauces = sauces
		this.size = size
		this.cheese = cheese
		this.pepper = pepper
	}

	public getToppings():Array<string> | undefined {
		return this.toppings
	}

	public setToppings(toppings:Array<string>):void {
		this.toppings = toppings
	}

	public getSauces():Array<string> | undefined {
		return this.sauces
	}

	public setSauces(sauces:Array<string>):void {
		this.sauces = sauces
	}

	public getSize():Size | undefined {
		return this.size
	}

	public setSize(size:Size):void {
		this.size = size
	}

	public isCheese():boolean | undefined {
		return this.cheese
	}

	public setCheese(cheese:boolean):void {
		this.cheese = cheese
	}

	public isPepper():boolean | undefined {
		return this.pepper
	}

	public setPepper(pepper:boolean):void {
		this.pepper = pepper
	}
}

export default Meal

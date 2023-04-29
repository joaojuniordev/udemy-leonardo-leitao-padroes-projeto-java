import Size from "../Size"

abstract class MealBuilderOpt {
	protected toppings:Array<string> | undefined
	protected sauces:Array<string> | undefined
	protected size:Size | undefined
	protected cheese:boolean | undefined
	protected pepper:boolean | undefined

	public setSize(size:Size):void {
		this.size = size
	}

	public setSauce(sauces:Array<string>):void {
		this.sauces = sauces
	}

	public setToppings(toppings:Array<string>):void {
		this.toppings = toppings
	}

	public setCheese(cheese:boolean):void {
		this.cheese = cheese
	}

	public setPepper(pepper:boolean):void {
		this.pepper = pepper
	}
}


export default MealBuilderOpt
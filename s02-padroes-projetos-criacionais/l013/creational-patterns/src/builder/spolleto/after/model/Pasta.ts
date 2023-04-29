import Size from "./Size"
import Meal from "./Meal"

class Pasta extends Meal {

	constructor(
		toppings:Array<string> | undefined, 
		sauces:Array<string> | undefined, 
		size:Size | undefined, 
		cheese:boolean | undefined, 
		pepper:boolean | undefined
	) {
		super(toppings, sauces, size, cheese, pepper)
	}

	public toString():string {
		return "Pasta [toppings=" + this.toppings + ", sauces=" + this.sauces + ", size=" + this.size + ", cheese=" + this.cheese
				+ ", pepper=" + this.pepper + "]"
	}
}

export default Pasta
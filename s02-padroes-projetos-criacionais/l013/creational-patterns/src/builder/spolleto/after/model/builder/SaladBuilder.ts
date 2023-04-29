import Salad from "../Salad"
import MealBuilderOpt from "./MealBuilderOpt"

class SaladBuilder extends MealBuilderOpt {

	public getResult():Salad {
		return new Salad(this.toppings, this.sauces, this.size, this.cheese, this.pepper)
	}
}


export default SaladBuilder
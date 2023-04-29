import Pasta from "../Pasta"
import MealBuilderOpt from "./MealBuilderOpt"

class PastaBuilder extends MealBuilderOpt {

	public getResult():Pasta {
		return new Pasta(this.toppings, this.sauces, this.size, this.cheese, this.pepper)
	}
}


export default PastaBuilder
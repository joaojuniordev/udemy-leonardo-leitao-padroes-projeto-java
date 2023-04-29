import FastFoodMealBuilder from "./builder/FastFoodMealBuilder"
import FatMealBuilder from "./builder/FatMealBuilder"
import JustFriesBuilder from "./builder/JustFriesBuilder"
import Menu1Builder from "./builder/Menu1Builder"
import Menu2Builder from "./builder/Menu2Builder" 
import MealDirector from "./director/MealDirector"

	
const order = (name:string, builder:FastFoodMealBuilder):void => {
	console.log("Ordering a " + name)
	const director:MealDirector = new MealDirector(builder)
	director.constructCombo()
	console.log(director.getCombo())
	
	console.log("------------------")
}

export default () => {
	order("Burguer", new Menu1Builder())
	order("Veggie Burguer", new Menu2Builder())
	order("Just Fries", new JustFriesBuilder())
	order("Heart Atack", new FatMealBuilder())
}

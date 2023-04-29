import FastFoodMealBuilder from "../builder/FastFoodMealBuilder"
import FastFoodMeal from "../model/FastFoodMeal"

class MealDirector {

	private builder:FastFoodMealBuilder

	constructor(builder:FastFoodMealBuilder) {
		this.builder = builder
	}
	
	public constructCombo():void {
		this.builder.buildDrink()
		this.builder.buildMain()
		this.builder.buildSide()
		this.builder.buildDessert()
		this.builder.buildGift()
	}
	
	public getCombo():FastFoodMeal {
		return this.builder.getMeal()
	}
}

export default MealDirector
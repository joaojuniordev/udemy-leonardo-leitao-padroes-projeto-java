import FastFoodMeal from "../model/FastFoodMeal"

abstract class FastFoodMealBuilder {
	protected meal:FastFoodMeal
	
	constructor() {
		this.meal = new FastFoodMeal()
	}
	
	public getMeal():FastFoodMeal {
		return this.meal
	}
	/*
	 * Exemplo sem usar abstract Method: Assim, não é obrigatorio implementar na subclass.
	 * public buildDrink():void{}
	 */
	public abstract buildDrink():void
	public abstract buildMain():void
	public abstract buildSide():void
	public abstract buildDessert():void
	public abstract buildGift():void
}

export default FastFoodMealBuilder

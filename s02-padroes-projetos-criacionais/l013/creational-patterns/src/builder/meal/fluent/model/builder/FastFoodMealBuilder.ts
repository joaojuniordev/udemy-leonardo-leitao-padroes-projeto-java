import FastFoodMeal from "../FastFoodMeal"

class FastFoodMealBuilder {
	//Mandatory
	private side:string
	
	//Optionals
	private drink:string
	private main:string
	private dessert:string
	private gift:string
	
	constructor(side:string) {
		this.side = side
		this.drink = ""
		this.main = ""
		this.dessert = ""
		this.gift = ""
	}

	/**
	 * @OBS Para poder chamar outros metodos encadeadamente retornamos a instancia do objeto, ou seja, o this.
	 * @returns 
	 */
	public forDrink(drink:string):FastFoodMealBuilder {
		this.drink = drink
		return this
	}
	
	public andMain(main:string):FastFoodMealBuilder {
		this.main = main
		return this
	}

	public andDessert(dessert:string):FastFoodMealBuilder {
		this.dessert = dessert
		return this
	}

	public andGift(gift:string):FastFoodMealBuilder {
		this.gift = gift
		return this
	}
	
	public thatsAll():FastFoodMeal {
		return new FastFoodMeal(this.drink, this.main, this.side, this.dessert, this.gift)
	}
}


export default FastFoodMealBuilder
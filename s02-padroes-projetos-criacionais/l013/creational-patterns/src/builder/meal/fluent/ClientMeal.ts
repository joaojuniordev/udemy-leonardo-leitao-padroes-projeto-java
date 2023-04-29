import FastFoodMeal from "./model/FastFoodMeal"
import FastFoodMealBuilder from "./model/builder/FastFoodMealBuilder"


export default () => {
	console.log("\n\n### MEAL FLUENT ###")

	const burguerCombo:FastFoodMeal = new FastFoodMealBuilder("Fries")
			.andMain("CheeseBurger")
			.forDrink("Code")
			.thatsAll()
	console.log(burguerCombo)
	
	const justFries:FastFoodMeal = new FastFoodMealBuilder("Fries").thatsAll()
	console.log(justFries)
	
	const heartAtackCombo:FastFoodMeal = new FastFoodMealBuilder("Large Fries")
			.andMain("Monster Burguer")
			.forDrink("Milk Shake")
			.andDessert("Fudge Cake")
			.andGift("2 Kilograms")
			.thatsAll()
	console.log(heartAtackCombo)

}

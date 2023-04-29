import FastFoodMeal from "./model/FastFoodMeal"

export default() =>{

	const burguerCombo:FastFoodMeal = new FastFoodMeal.Builder("Fries")
			.andMain("CheeseBurger")
			.forDrink("Code")
			.thatsAll();
	console.log(burguerCombo);
	
	const justFries:FastFoodMeal = new FastFoodMeal.Builder("Fries").thatsAll();
	console.log(justFries);
	
	const heartAtackCombo:FastFoodMeal = new FastFoodMeal.Builder("Large Fries")
			.andMain("Monster Burguer")
			.forDrink("Milk Shake")
			.andDessert("Fudge Cake")
			.andGift("2 Kilograms")
			.thatsAll();
	console.log(heartAtackCombo);

}

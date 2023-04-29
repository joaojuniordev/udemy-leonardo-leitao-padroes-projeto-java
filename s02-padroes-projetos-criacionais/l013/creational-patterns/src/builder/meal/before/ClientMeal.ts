import FastFoodMeal from "./model/FastFoodMeal"


export default ()=> {
	console.log("\n\n### MEAL BEFORE NO-BUILDER ###")
	const burguerCombo:FastFoodMeal = new FastFoodMeal("Coke", "CheeseBurguer", "Fries") 
	console.log(burguerCombo) 
	
	const justFries:FastFoodMeal = new FastFoodMeal(undefined, '', "Fries") 
	console.log(justFries) 
	
	const heartAtackCombo:FastFoodMeal = new FastFoodMeal("Milk Shake", "Monster Burguer", "Large Fries", "Fudge Cake", "2 Kilograms") 
	console.log(heartAtackCombo) 
}


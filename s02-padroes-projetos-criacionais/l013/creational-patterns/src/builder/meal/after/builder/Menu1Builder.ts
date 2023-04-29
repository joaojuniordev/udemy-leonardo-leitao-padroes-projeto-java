import FastFoodMealBuilder from "./FastFoodMealBuilder"

class Menu1Builder extends FastFoodMealBuilder {
	
	public buildDrink():void {
		this.meal.setDrink("Coke")
	}

	
	public buildMain() :void{
		this.meal.setMain("Cheeseburguer")
	}

	
	public buildSide() :void{
		this.meal.setSide("Fries")
	}

	
	public buildDessert():void {
		this.meal.setDessert("Apple Pie")
	}

	
	public buildGift():void{
		this.meal.setToy("Avenger's Toy")
	}
}

export default Menu1Builder

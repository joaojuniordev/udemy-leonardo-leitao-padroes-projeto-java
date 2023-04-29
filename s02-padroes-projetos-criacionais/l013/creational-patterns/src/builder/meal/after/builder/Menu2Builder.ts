import FastFoodMealBuilder from "./FastFoodMealBuilder";

class Menu2Builder extends FastFoodMealBuilder {
	
	public buildDrink():void {
		this.meal.setDrink("Water");
	}

	
	public buildMain() :void{
		this.meal.setMain("VeggieBurguer");
	}

	
	public buildSide() :void{
		this.meal.setSide("Salad");
	}

	
	public buildDessert():void {
		this.meal.setDessert("Apple");
	}

	
	public buildGift() :void{
		this.meal.setToy("I'm Veggie's Stamp");
	}
}

export default Menu2Builder
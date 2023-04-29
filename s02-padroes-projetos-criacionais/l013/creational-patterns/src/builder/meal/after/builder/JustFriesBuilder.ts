import FastFoodMealBuilder from "./FastFoodMealBuilder";

class JustFriesBuilder extends FastFoodMealBuilder {
	
	public buildDrink():void {
		// no drink
	}

	
	public buildMain():void {
		// no main
	}

	
	public buildSide():void {
		this.meal.setSide("Large Fries");
	}

	
	public buildDessert():void {
		// no dessert
	}

	
	public buildGift():void {
		// no gift
	}
}

export default JustFriesBuilder
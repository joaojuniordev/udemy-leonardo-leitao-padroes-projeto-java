import FastFoodMealBuilder from "./FastFoodMealBuilder";

class FatMealBuilder extends FastFoodMealBuilder {
	public buildDrink():void {
		this.meal.setDrink("MilkShake");
	}

	public buildMain():void {
		this.meal.setMain("TripleCheddarBaconBurguer");
	}

	
	public buildSide():void {
		this.meal.setSide("Onion Rings");
	}

	
	public buildDessert():void {
		this.meal.setDessert("Large IceCream");
	}

	
	public buildGift():void {
		this.meal.setToy("Hospital pass");
	}
}

export default FatMealBuilder

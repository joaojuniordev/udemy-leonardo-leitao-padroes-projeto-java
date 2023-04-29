class FastFoodMeal {

	private drink:string | undefined 
	private main:string | undefined	
	private side:string | undefined
	private dessert:string | undefined
	private gift:string | undefined
	
	public getDrink():string | undefined {
		return this.drink 
	}

	public setDrink(drink:string):void {
		this.drink = drink 
	}

	public getMain():string | undefined {
		return this.main 
	}

	public setMain(main:string):void {
		this.main = main 
	}

	public getSide():string | undefined {
		return this.side 
	}

	public setSide(side:string):void {
		this.side = side 
	}

	public getDessert():string | undefined {
		return this.dessert 
	}

	public setDessert(dessert:string):void {
		this.dessert = dessert 
	}

	public getToy():string | undefined {
		return this.gift 
	}

	public setToy(toy:string):void {
		this.gift = toy 
	}

	public toString():string {
		return "Combo [drink=" + this.drink + ", main=" + this.main + ", side=" 
				+ this.side + ", dessert=" + this.dessert + ", gift=" + this.gift + "]" 
	}
}

export default FastFoodMeal
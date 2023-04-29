class FastFoodMeal {

	private drink:string
	private main:string
	private side:string
	private dessert:string
	private gift:string
	
	constructor(drink:string, main:string, side:string, dessert:string, gift:string) {
		this.drink = drink
		this.main = main
		this.side = side
		this.dessert = dessert
		this.gift = gift
	}

	public getDrink():string {
		return this.drink
	}

	public setDrink(drink:string):void {
		this.drink = drink
	}

	public getMain():string {
		return this.main
	}

	public setMain(main:string):void {
		this.main = main
	}

	public getSide():string {
		return this.side
	}

	public setSide(side:string):void {
		this.side = side
	}

	public getDessert():string {
		return this.dessert
	}

	public setDessert(dessert:string):void {
		this.dessert = dessert
	}

	public getGift():string {
		return this.gift
	}

	public setGift(gift:string):void {
		this.gift = gift
	}

	public toString():string {
		return "FastFoodMeal [drink=" + this.drink + ", main=" + this.main + ", side=" + this.side + ", dessert=" + this.dessert + ", gift="
				+ this.gift + "]"
	}
}


export default FastFoodMeal
class FastFoodMeal {

	private drink:string | undefined 
	private main:string | undefined 
	private side:string | undefined 
	private dessert:string | undefined 
	private gift:string | undefined 
	
	//Too many constructors
	//It's difficult to know the order's parameters 
	
	// constructor(drink:string) {
	// 	this.drink = drink
	// }

	// constructor(drink:string, main:string) {
	// 	this.drink = drink
	// 	this.main = main
	// }

	// constructor(drink:string, main:string, side:string) {
	// 	this.drink = drink
	// 	this.main = main
	// 	this.side = side
	// }

	// constructor(drink:string, main:string, side:string, dessert:string) {
	// 	this.drink = drink
	// 	this.main = main
	// 	this.side = side
	// 	this.dessert = dessert
	// }

	// Typescript nao suporta multiplos construtor:
	constructor(drink?:string, main?:string, side?:string, dessert?:string, gift?:string) {
		this.drink = drink
		this.main = main
		this.side = side
		this.dessert = dessert
		this.gift = gift
	}

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

	public getGift():string | undefined {
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
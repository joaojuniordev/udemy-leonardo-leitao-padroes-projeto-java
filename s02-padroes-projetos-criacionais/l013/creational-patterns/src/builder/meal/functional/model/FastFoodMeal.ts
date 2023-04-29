/**
 * @PROGRAMACAO_FUNCIONAL Outra Versao da FLUENT.
 * 	+ Trabalha com objeto imutavel
 * 	+ Aqui, trabalhamos com uma classe sem os metodos sets, 
 * 		ou seja, depois de criar nao é possivel alterar o objeto.
 * 
 * @INNERCLASS Classe dentro de outra class
 */
class FastFoodMeal {

	// CONSTANTs
	private readonly drink:string
	private readonly main:string
	private readonly side:string
	private readonly dessert:string
	private readonly gift:string
	
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

	public getMain():string {
		return this.main
	}

	public getSide():string {
		return this.side
	}

	public getDessert():string {
		return this.dessert
	}

	public getGift():string {
		return this.gift
	}

	public toString() {
		return "FastFoodMeal [drink=" + this.drink + ", main=" + this.main + ", side=" + this.side + ", dessert=" + this.dessert + ", gift="
				+ this.gift + "]"
	}
	
	public static Builder = class Builder {
		//Mandatory
		private side:string
		
		//Optionals
		private drink:string
		private main:string
		private dessert:string
		private gift:string
		
		constructor(side:string) {
			this.side = side
			this.side = side
			this.drink = ""
			this.main = ""
			this.dessert = ""
			this.gift = ""

		}

		public forDrink(drink:string):Builder {
			this.drink = drink
			return this
		}
		
		public andMain(main:string):Builder {
			this.main = main
			return this
		}

		public andDessert(dessert:string):Builder {
			this.dessert = dessert
			return this
		}

		public andGift(gift:string):Builder {
			this.gift = gift
			return this
		}
		
		public thatsAll():FastFoodMeal {
			return new FastFoodMeal(this.drink, this.main, this.side, this.dessert, this.gift)
		}
	}
}

export default FastFoodMeal
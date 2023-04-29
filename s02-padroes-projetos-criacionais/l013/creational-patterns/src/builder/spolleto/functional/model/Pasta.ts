import Size from "./Size"

class Pasta {
	private readonly toppings:Array<string>
	private readonly sauces:Array<string>
	private readonly size:Size
	private readonly cheese:boolean
	private readonly pepper:boolean
	
	constructor(toppings:Array<string>, sauces:Array<string>, size:Size, cheese:boolean, pepper:boolean) {
		this.toppings = toppings
		this.sauces = sauces
		this.size = size
		this.cheese = cheese
		this.pepper = pepper
	}

	public getToppings():Array<string> {
		return this.toppings
	}

	public getSauces():Array<string> {
		return this.sauces
	}

	public getSize():Size {
		return this.size
	}

	public isCheese():boolean {
		return this.cheese
	}

	public isPepper():boolean {
		return this.pepper
	}

	public toString():string {
		return "Pasta [toppings=" + this.toppings + ", sauces=" + this.sauces + ", size=" + this.size + ", cheese=" + this.cheese
				+ ", pepper=" + this.pepper + "]"
	}
	
	public static Builder = class Builder {
		//Mandatory
		protected size:Size
		
		//Optional
		protected toppings:Array<string>
		protected sauces:Array<string>
		protected cheese:boolean
		protected pepper:boolean
		
		constructor(size:Size) {
			this.size = size
			this.toppings = []
			this.sauces = []
			this.cheese = false
			this.pepper = false
		}

		public withSauces(sauces:Array<string>):Builder {
			this.sauces = sauces
			return this
		}

		public withToppings(toppings:Array<string>):Builder {
			this.toppings = toppings
			return this
		}

		public withCheese():Builder {
			this.cheese = true
			return this
		}

		public withPepper():Builder {
			this.pepper = true
			return this
		}
		
		public now():Pasta {
			return new Pasta(this.toppings, this.sauces, this.size, this.cheese, this.pepper)
		}
	}
}


export default Pasta
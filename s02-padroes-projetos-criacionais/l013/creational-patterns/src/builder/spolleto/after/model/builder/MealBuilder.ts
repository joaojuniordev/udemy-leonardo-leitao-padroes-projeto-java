import Size from "../Size"

interface MealBuilder {
	setSize(size:Size):void
	setSauce(sauces:Array<string>):void
	setToppings(toppings:Array<string>):void
	setCheese(cheese:boolean):void
	setPepper(pepper:boolean):void
}


export default MealBuilder
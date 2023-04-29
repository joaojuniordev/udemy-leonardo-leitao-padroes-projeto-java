import Pasta from "./model/Pasta"
import Size from "./model/Size"
import PastaBuilder from "./model/builder/PastaBuilder"


export default ()=> {
	console.log("\n\n### BUILDER FLUENT SPOLLETO ###")

	const p1:Pasta = new PastaBuilder(Size.LARGE).now()
	console.log(p1)
	
	const p2:Pasta = new PastaBuilder(Size.SMALL)
			.withToppings(["Bacon", "Broccoli"])
			.withSauces(["Tomato"])
			.withCheese()
			.now()
	console.log(p2)
	
	const p3:Pasta = new PastaBuilder(Size.STANDARD)
			.withToppings(["Garlic"])
			.withSauces(["Funghi", "Cheese"])
			.withCheese()
			.withPepper()
			.now()
	console.log(p3)
}
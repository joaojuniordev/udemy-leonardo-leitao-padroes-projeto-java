import Pasta from "./model/Pasta"
import Salad from "./model/Salad"
import Size from "./model/Size"
import PastaBuilder from "./model/builder/PastaBuilder"
import SaladBuilder from "./model/builder/SaladBuilder"



export default ()=> {
console.log("\n\n### BUILDER AFTER SPOLLETO ###")

	let pastaBuilder:PastaBuilder = new PastaBuilder()
	pastaBuilder.setSize(Size.LARGE)
	const p1:Pasta = pastaBuilder.getResult()
	console.log(p1)
	
	const saladBuilder = new SaladBuilder()
	saladBuilder.setSize(Size.SMALL)
	saladBuilder.setToppings(["Bacon", "Broccoli"])
	saladBuilder.setSauce(["Ceasar"])
	saladBuilder.setCheese(true)
	const p2:Salad = saladBuilder.getResult()
	console.log(p2)
	
	pastaBuilder = new PastaBuilder()
	pastaBuilder.setToppings(["Garlic"])
	pastaBuilder.setSauce(["Funghi", "Cheese"])
	pastaBuilder.setSize(Size.STANDARD)
	pastaBuilder.setCheese(true)
	pastaBuilder.setPepper(true)
	const p3:Pasta = pastaBuilder.getResult()
	console.log(p3)
}
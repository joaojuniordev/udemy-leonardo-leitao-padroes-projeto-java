import Pasta from "./model/Pasta";
import Size from "./model/Size";


export default ()=>{
	console.log("\n\n### BUILDER FUNCIONAL SPOLLETO ###");
	const p1:Pasta = new Pasta.Builder(Size.LARGE).now();
	console.log(p1);
	
	const p2:Pasta = new Pasta.Builder(Size.SMALL)
			.withToppings(["Bacon", "Broccoli"])
			.withSauces(["Tomato"])
			.withCheese()
			.now();
	console.log(p2);
	
	const p3:Pasta = new Pasta.Builder(Size.STANDARD)
			.withToppings(["Garlic"])
			.withSauces(["Funghi", "Cheese"])
			.withCheese()
			.withPepper()
			.now();
	console.log(p3);
}
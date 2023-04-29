import Pasta from "./model/Pasta"
import Size from "./model/Size"

export default () => {
	console.log("\n\n### BEFORE NO-BUILDER SPOLLETO ###")
	const p1:Pasta = new Pasta(undefined, undefined, Size.LARGE, undefined, undefined)
	console.log(p1)
	
	const p2:Pasta = new Pasta(["Bacon", "Broccoli"], ["Tomato"], Size.SMALL, true)
	console.log(p2)
	
	const p3:Pasta = new Pasta(["Garlic"], ["Funghi", "Cheese"], Size.STANDARD, false, true)
	console.log(p3)
	
}


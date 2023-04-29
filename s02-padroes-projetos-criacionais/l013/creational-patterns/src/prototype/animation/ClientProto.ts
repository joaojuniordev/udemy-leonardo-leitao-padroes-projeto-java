import Person from "./model/Person"
import PersonSamples from "./model/PersonSamples"

let frames:Array<Person> = new Array<Person>()

const sleep = (ms:number) => new Promise(r => setTimeout(r, ms))

const animate = async(animation:string) =>{
	console.log("*********************************\n")
	console.log(`* ${animation}\n`)
	console.log("* Adjust your screen's height!\n")
	console.log("* \n")
	console.log("*********************************")
	await sleep(3000)
	for (let frame of frames) {
		frame.draw()
		await sleep(500)
	}
	console.log("**********************")
	console.log("* ")
	console.log("* The End!")
	console.log("* ")
	console.log("**********************")
}

const addLeft = (p:Person):Person =>{
	const person:Person = (p.clone() as Person)//cast
	person.left()
	frames.push(person)
	return person
}

const addRight = (p:Person):Person =>{
	const person:Person =  (p.clone() as Person)
	person.right()
	frames.push(person)
	return person
}

export default async()=> {
	console.log("\n\n### PROTOTYPE ANIMATION ###")

	const samples:PersonSamples = new PersonSamples()

	const animations = ["fatMan","stickMan"]
	for (let animation of animations) {
		let person:Person = samples.get(animation)
		frames.push(person)
		person = addLeft(person)
		person = addLeft(person)
		person = addLeft(person)
		person = addRight(person)
		person = addRight(person)
		person = addRight(person)
		person = addRight(person)
		person = addRight(person)
		person = addRight(person)
		person = addRight(person)
		person = addLeft(person)
		person = addLeft(person)
		person = addLeft(person)
		await animate(animation)
		//Reiniciar(zerar):
		frames = new Array<Person>()
	}
}


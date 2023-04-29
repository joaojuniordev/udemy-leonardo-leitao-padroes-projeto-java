import Person from "./Person"

class PersonSamples {
	private samples:Map<string, Person>
	
	constructor() {
		this.samples = new Map<string, Person>()
		this.loadSamples()
	}
	
	public get(type:string):Person {
		return (this.samples.get(type) as Person)//cast to Person
	}
	
	private loadSamples():void {
		this.samples.set("stickMan", new Person(
				"                   ",
				"        o          ",
				"       /|\\          ",
				"_______/_\\___________"	
				))
		this.samples.set("fatMan", new Person(
				"                   ",
				"       (^ ^)          ",
				"       <)  )\\         ",
				"_______/__\\___________"	
				))
	}
}


export default PersonSamples
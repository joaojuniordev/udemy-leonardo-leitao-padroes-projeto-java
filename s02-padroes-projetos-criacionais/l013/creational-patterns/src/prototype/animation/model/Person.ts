// class Person implements cloneable {
class Person {	
	private line1:string
	private line2:string
	private line3:string
	private line4:string	
	
	constructor(line1:string, line2:string, line3:string, line4:string) {
		this.line1 = line1
		this.line2 = line2
		this.line3 = line3
		this.line4 = line4
	}

	public draw():void {
		console.log("")
		console.log(this.line1)
		console.log(this.line2)
		console.log(this.line3)
		console.log(this.line4)
	}
	
	public left():void {
		this.line1 = this.line1.substring(1)
		this.line2 = this.line2.substring(1)
		this.line3 = this.line3.substring(1)
		this.line4 = this.line4.substring(1)
	}

	public right():void {
		this.line1 = " " + this.line1
		this.line2 = " " + this.line2
		this.line3 = " " + this.line3
		this.line4 = "_" + this.line4
	}

	public clone():Object{
		// return super.clone()//Nao existe cloneable em TS
		return new Person(this.line1, this.line2, this.line3, this.line4)
	}
}


export default Person
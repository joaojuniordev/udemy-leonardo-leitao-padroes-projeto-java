import IPhone from "./IPhone"

class IPhone11 extends IPhone {

	getHardware() {
		console.log("Hardware list") 
		console.log("\t- 6.1in Screen") 
		console.log("\t- A13 Chipset") 
		console.log("\t- 4Gb RAM") 
		console.log("\t- 256Gb Memory") 
	}
}

export default IPhone11
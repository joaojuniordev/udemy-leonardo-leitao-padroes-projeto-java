abstract class IPhone {
	
    abstract getHardware():void
	
	assemble() {
		console.log("Assembling all the hardwares") 
	}

	certificates() {
		console.log("Testing all the certificates") 
	}

	pack() {
		console.log("Packing the device") 
	}
}

export default IPhone
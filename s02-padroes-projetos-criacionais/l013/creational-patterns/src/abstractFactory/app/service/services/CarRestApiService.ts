import CarService from "./CarService"

class CarRestApiService implements CarService {

	public save(model:string):void {
		console.log("Saving " + model + " car through Rest's interface")
	}

	public update(newModel:string):void {
		console.log("Updating " + newModel + " car through Rest's interface")
	}	
}

export default CarRestApiService

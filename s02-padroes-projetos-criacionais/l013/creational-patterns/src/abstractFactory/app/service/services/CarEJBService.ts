import CarService from "./CarService"

class CarEJBService implements CarService {

	public save(model:string):void {
		console.log("Saving " + model + " car through EJB's interface")
	}

	public update(newModel:string):void {
		console.log("Updating " + newModel + " car through EJB's interface")
	}	
}

export default CarEJBService

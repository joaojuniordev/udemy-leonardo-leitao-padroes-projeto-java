import EJBAbstractFactory from "./factory/EJBAbstractFactory"
import RestAbstractFactory from "./factory/RestAbstractFactory"
import ServicesAbstractFactory from "./factory/ServicesAbstractFactory"
import CarService from "./services/CarService"
import UserService from "./services/UserService"


export default () =>{
	console.log("\n\n### ABSTRACT FACTORY::APP ###")
		const factory:ServicesAbstractFactory = new EJBAbstractFactory()
		// const factory:ServicesAbstractFactory = new RestAbstractFactory()
		
		const userService:UserService = factory.getUserService()
		userService.save("Jhon")
		userService.delete(5)
		
		const carService:CarService = factory.getCarService()
		carService.save("Prius")
		carService.update("Tesla X")
}


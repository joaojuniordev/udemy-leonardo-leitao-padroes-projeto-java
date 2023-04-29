import CarService from "../services/CarService"
import UserService from "../services/UserService"

interface ServicesAbstractFactory {

	getUserService():UserService
	
	getCarService():CarService
}

export default ServicesAbstractFactory
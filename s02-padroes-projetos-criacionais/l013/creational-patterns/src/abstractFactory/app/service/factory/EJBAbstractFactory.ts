import ServicesAbstractFactory from "./ServicesAbstractFactory"

import CarEJBService from "../services/CarEJBService"
import CarService from "../services/CarService"
import UserEJBService from "../services/UserEJBService"
import UserService from "../services/UserService"

class EJBAbstractFactory implements ServicesAbstractFactory {

	public getUserService():UserService {
		return new UserEJBService()
	}

	public getCarService():CarService {
		return new CarEJBService()
	}
}

export default EJBAbstractFactory
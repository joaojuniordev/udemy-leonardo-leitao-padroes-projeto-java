import ServicesAbstractFactory from "./ServicesAbstractFactory"

import CarRestApiService from "../services/CarRestApiService"
import CarService from "../services/CarService"
import UserRestApiService from "../services/UserRestApiService"
import UserService from "../services/UserService"

class RestAbstractFactory implements ServicesAbstractFactory {

	public getUserService():UserService {
		return new UserRestApiService()
	}

	public getCarService():CarService {
		return new CarRestApiService()
	}
}

export default RestAbstractFactory
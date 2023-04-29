import IPhoneFactory from "./IPhoneFactory"
import IPhoneX from "../../model/IPhoneX"
import IPhone from "../../model/IPhone"


class IPhoneXFactory extends IPhoneFactory{
    createIPhone(): IPhone {
		return new IPhoneX()
	}
}

export default IPhoneXFactory
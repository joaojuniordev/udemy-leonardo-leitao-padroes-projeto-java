import IPhoneFactory from "./IPhoneFactory"
import IPhoneX from "../../model/IPhoneX"
import IPhoneXSMax from "../../model/IPhoneXSMax"
import IPhone from "../../model/IPhone"


class IPhoneXFactory extends IPhoneFactory{
    createIPhone(level:string):IPhone{
		if(level==="highEnd"){
			return new IPhoneXSMax()
		}else{//standard
			return new IPhoneX()
		}
	}
}

export default IPhoneXFactory
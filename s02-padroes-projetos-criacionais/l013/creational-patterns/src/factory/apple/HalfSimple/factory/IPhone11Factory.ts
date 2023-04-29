import IPhoneFactory from "./IPhoneFactory"
import IPhone11 from "../../model/IPhone11"
import IPhone11Pro from "../../model/IPhone11Pro"
import IPhone from "../../model/IPhone"


class IPhone11Factory extends IPhoneFactory{
    createIPhone(level:string):IPhone {
		if(level==="highEnd"){
			return new IPhone11Pro()
		}else{//standard
			return new IPhone11()
		}
	}
}

export default IPhone11Factory
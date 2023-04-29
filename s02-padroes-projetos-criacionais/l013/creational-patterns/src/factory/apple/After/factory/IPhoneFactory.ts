import IPhone from "../../model/IPhone"

abstract class IPhoneFactory{
    
    orderIPhone = ()=>{
        let device: IPhone 

        device = this.createIPhone()
        if(device != null){
            device.getHardware()
            device.assemble()
            device.certificates()
            device.pack()
        }

        return device
    }

    abstract createIPhone():IPhone
}

export default IPhoneFactory
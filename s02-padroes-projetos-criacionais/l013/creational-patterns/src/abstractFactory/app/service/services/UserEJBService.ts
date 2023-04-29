import UserService from "./UserService"

class UserEJBService implements UserService {

	public save(name:string):void {
		console.log("Saving " + name + " through EJB's interface")
	}

	public delete(id:number):boolean {
		console.log("Removing User #" + id + " through EJB's interface")
		return true
	}

}

export default UserEJBService
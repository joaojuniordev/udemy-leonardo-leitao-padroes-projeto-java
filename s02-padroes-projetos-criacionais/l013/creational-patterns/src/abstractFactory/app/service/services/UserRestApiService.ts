import UserService from "./UserService"

class UserRestApiService implements UserService {

	public save(name:string):void {
		console.log("Saving " + name + " through Rest's interface")
	}

	public delete(id:number):boolean {
		console.log("Removing User #" + id + " through Rest's interface")
		return true
	}
}

export default UserRestApiService

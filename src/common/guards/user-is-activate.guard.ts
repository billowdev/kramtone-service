import { AuthGuard } from "@nestjs/passport";

export class UserIsActivateAuthGuard extends AuthGuard('isuseractivate'){
	constructor () {
		super();
	}
}
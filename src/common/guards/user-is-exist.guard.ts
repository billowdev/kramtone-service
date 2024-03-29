import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './../../modules/user-account/services/user-account.service';

@Injectable()
export class UserIsExist implements CanActivate {
    constructor(private readonly userService: UserService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request: any) {
        const userExist = await this.userService.findOneByUsername(request.body.username);
        if (userExist) {
            throw new ForbiddenException('This username already exist');
        }
        return true;
    }
}
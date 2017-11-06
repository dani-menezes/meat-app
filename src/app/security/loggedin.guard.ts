
import {CanLoad, Route} from '@angular/router'
import {Injectable} from '@angular/core'
import {LoginService} from './login/login.service'

@Injectable()
export class LoggedInGuard implements CanLoad {

    constructor(private loginServie: LoginService){}

    canLoad(route: Route): boolean {
        const loggedIn = this.loginServie.isLoggedIn()
        
        if (!loggedIn){
            this.loginServie.handleLogin(`/${route.path}`);
        }
        
        return loggedIn
    }
}
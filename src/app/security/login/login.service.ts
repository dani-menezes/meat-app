import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import {BACKEND_API} from '../../app.backend-api'
import {User} from './user.model'

@Injectable()
export class LoginService {

    user: User


    constructor (private http: HttpClient, private router: Router) {}

    login(email: String, passwd: string): Observable<User> {
        return this.http.post<User>(`${BACKEND_API}/login`, {email: email, passwd: passwd}).do(user=> this.user = user)
    }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    handleLogin(path?: string) {
        this.router.navigate(['/login', path])
    }
}
export class User {
    constructor(public email: string, public name: string, private passwd: string){}

    validate(another: User): boolean {
        return another !== undefined && another.email === this.email && another.passwd === this.passwd
    }
}

export const users: {[key: string]: User} = {
    "daniel.afmenezes@gmail.com": new User('daniel.afmenezes@gmail.com', 'Daniel', '1234'),
    "daniel.menezes@leapmind.com.br": new User('daniel.menezes@leapmind.com.br', 'Daniel Leap', '1234'),
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', '1234')
}
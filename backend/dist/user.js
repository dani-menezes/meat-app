"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, passwd) {
        this.email = email;
        this.name = name;
        this.passwd = passwd;
    }
    User.prototype.validate = function (another) {
        return another !== undefined && another.email === this.email && another.passwd === this.passwd;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "daniel.afmenezes@gmail.com": new User('daniel.afmenezes@gmail.com', 'Daniel', '1234'),
    "daniel.menezes@leapmind.com.br": new User('daniel.menezes@leapmind.com.br', 'Daniel Leap', '1234'),
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', '1234')
};

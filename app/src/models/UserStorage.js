'use strict';

class UserStorage {
    static #users = { // #을 통해 은닉 변수로 만듦 public -> private 외부에서 불러올 수 없음
        id: ["park", "lee", "kim"],
        pw: ["1234", "5678", "1357"],
        name: ["박", "이", "김"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;

        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
export class Account {
    'id'?: number;
    'name': string;
    'email': string;
    'password': string;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}

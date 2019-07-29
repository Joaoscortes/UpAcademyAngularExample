export class Product {
    'id': string;
    'name': string;
    'iva': number;
    'pvp': number;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}

export class Product {
    'id': number;
    'name': string;
    'iva': number;
    'pvp': number;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}

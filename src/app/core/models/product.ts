export class Product {
    'iva': number;
    'pvp': number;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}

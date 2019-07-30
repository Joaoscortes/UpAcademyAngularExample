export class Product {
    'id'?: number;
    'iva': number;
    'pvp': number;
    'discount': number;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}

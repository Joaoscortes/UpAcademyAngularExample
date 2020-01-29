export class Product {
    'name'?: string;
    'id'?: number;
    'iva': number;
    'pvp': number;
    'discount': number;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}

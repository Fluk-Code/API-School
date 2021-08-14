class NotFound extends Error {
    constructor (field: string, value: any) {
        super(`The ${field} '${value}' is not exists !`);
        this.name = 'NotFound'
    }
};

export { NotFound };
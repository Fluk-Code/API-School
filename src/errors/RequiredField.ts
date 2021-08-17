class RequiredField extends Error {
    status: number;

    constructor (field: string) {
        super(`The ${field} is required !`);
        this.name = 'RequiredField';
        this.status = 400;
    }
};

export { RequiredField }
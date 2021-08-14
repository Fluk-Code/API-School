class InvalidField extends Error {
    constructor (field: string) {
        super(`The field ${field} is required !`);
        this.name = 'InvalidField';
    }
};

export { InvalidField }
class MaxLengthField extends Error {
    status: number;

    constructor (field: string, maxLength: number) {
        super(`The ${field} too long, maximum value of ${maxLength} characters !`);
        this.name = 'MaxLengthField';
        this.status = 400;
    }
};

export { MaxLengthField }
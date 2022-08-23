class SyntaxError extends Error {

}
class FormatError extends SyntaxError {
    constructor(message) {
        super(message); // (1)
        this.name = this.constructor.name; // (2)
    }
}
let err = new FormatError("formatting error");
console.log(err.message); // formatting error
console.log(err.name); // FormatError
console.log(err.stack); // stack
console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (because inherits from SyntaxError)
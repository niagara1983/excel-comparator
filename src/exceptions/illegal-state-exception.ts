export default class IllegalStateException implements Error {
    message: string;
    name: string;

    constructor(msg: string) {
        this.message = msg;
    }
}

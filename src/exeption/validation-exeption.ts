import { HttpException, HttpStatus } from "@nestjs/common";

export class validationExeption extends HttpException {
    messages

    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST)
        console.log('RESPONSE ', response)
        this.messages = response
    }
}
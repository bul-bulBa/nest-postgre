import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'example@gmail.com', description: 'email'})
    @IsString({message: 'must be a strict'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;

    @ApiProperty({example: '1234', description: 'user password'})
    @Length(4, 16, {message: 'no less than 4 and no more than 16'})
    readonly password: string;
}
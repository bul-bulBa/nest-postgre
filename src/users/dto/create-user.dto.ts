import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'example@gmail.com', description: 'email'})
    readonly email: string;

    @ApiProperty({example: '1234', description: 'user password'})
    readonly password: string;
}
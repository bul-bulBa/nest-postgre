import { IsNumber, IsString } from "class-validator"

export class addRoleDto {
    @IsString({message: 'value must be a strict'})
    readonly value: string

    @IsNumber({}, {message: 'must be a number'})
    readonly userId: number
}
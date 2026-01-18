import { IsString, IsNumber} from "class-validator"

export class CreatePostDto {

    @IsString({message: 'must be a strict'})
    title: string

    @IsString({message: 'must be a strict'})
    content: string

    // @Type(() => Number)
    // @IsNumber()
    @IsString()
    userId: number
}
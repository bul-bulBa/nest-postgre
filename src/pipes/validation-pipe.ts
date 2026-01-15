import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { validationExeption } from "src/exeption/validation-exeption";

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if (!metadata.metatype || this.isPrimitive(metadata.metatype)) {
            return value
        }
        
        const obj = plainToClass(metadata.metatype, value)
        const errors = await validate(obj)

        if(errors.length) {
            console.log(" --- ERROR --- ", errors)
            let messages = errors.map(err => {
                const constraints = err.constraints 
                ? Object.values(err.constraints).join(', ')
                : 'Invalid value'

                return `${err.property} - ${constraints}`
            })
            throw new validationExeption(messages)
        }
        return value
    }

    private isPrimitive(metatype: any): boolean {
        const types = [String, Boolean, Number, Array, Object]
        return types.includes(metatype)
    }
}
import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";


@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    
    // @ApiProperty({ example: 'abministrator', description: 'role descriprion'})
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER})
    userId: number

    // @ApiProperty({ example: 'ADMIN', description: 'unique user role'})
    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER})
    roleId: number
} 
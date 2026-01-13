import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '1', description: 'unique identifier'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: 'example@gmail.com', description: 'email address'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string

    @ApiProperty({ example: '1234', description: 'user password'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string

    @ApiProperty({ example: 'true', description: 'user banned?'})
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean

    @ApiProperty({ example: 'debil', description: 'reason of ban'})
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string


    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
} 
import { Model, Column, DataType, Table, BelongsToMany, HasMany } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs{
    value:string;
    description:string;
}

@Table({tableName:'roles', createdAt:false,updatedAt: false})
export class Role extends Model<Role, RoleCreationAttrs> {

    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id: number;

    @Column({type: DataType.STRING, unique:true, allowNull:false})
    value: string;

    @BelongsToMany(()=>User,()=>UserRoles)
    roles:User[];
}
import { Model, Column, DataType, Table, BelongsToMany, HasMany } from "sequelize-typescript";

interface UserCreationAttrs{
    login:string;
    password:string;
}
@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs> {

    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;

    login:string;

    password:string;

}
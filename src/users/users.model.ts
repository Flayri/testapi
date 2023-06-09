import { Model, Column, DataType, Table, BelongsToMany, HasMany } from "sequelize-typescript";
import { Comment } from "src/comments/comments.model";
import { Images } from "src/images/images.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs{
    login:string;
    password:string;
}
@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs> {

    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;

    @Column({type: DataType.STRING, unique:true, allowNull:false})
    login:string;

    @Column({type: DataType.STRING, allowNull:false})
    password:string;

    @BelongsToMany(()=>Role,()=>UserRoles)
    roles:Role[];

    // @HasMany(()=>Comment)
    // comment:Comment[]

    // @HasMany(()=>Images)
    // images:Images[]
}
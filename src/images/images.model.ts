import { Model, Column, DataType, Table, BelongsToMany, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Comment } from "src/comments/comments.model";
import { User } from "src/users/users.model";

interface ImagesCreationAttrs{
    base64Images:string;
    date:number;
    lat:number;
    lng:number;
}
@Table({tableName:'images',updatedAt: false})
export class Images extends Model<Images,ImagesCreationAttrs> {
    
    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;

    @Column({type: DataType.STRING, unique:true, allowNull:false})
    base64Images:string

    @Column({type: DataType.STRING})
    url:string

    @Column({type: DataType.DOUBLE, allowNull:false})
    lat:number;

    @Column({type: DataType.DOUBLE, allowNull:false})
    lng:number;

    @Column({type: DataType.INTEGER, allowNull:false})
    date:number;

    @HasMany(()=>Comment)
    comment:Comment[];

    // @ForeignKey(() => User)
    // @Column({type: DataType.INTEGER})
    // userId: number;

    // @BelongsTo(() => User)
    // user: User

}

import { Model, Column, DataType, Table, BelongsTo, HasMany,ForeignKey } from "sequelize-typescript";
import { Images } from "src/images/images.model";

interface CommentCreationAttrs {
    text:string
}

@Table({tableName:'coments', updatedAt: false})
export class Comment extends Model<Comment, CommentCreationAttrs>{

    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id: number;

    @Column({type: DataType.STRING, allowNull:false})
    text: string;

    // @Column({type: DataType.DATE, allowNull:false,})
    // date: number;

    @ForeignKey(() => Images)
    @Column({type: DataType.INTEGER})
    imagesId: number;

    @BelongsTo(() => Images)
    images: Images

    // @ForeignKey(() => User)
    // @Column({type: DataType.INTEGER})
    // userId: number;

    // @BelongsTo(() => User)
    // user: User
}
import { Model, Table, Column } from 'sequelize-typescript'

@Table({ tableName: 'users', timestamps: false})
export class UserModel extends Model<UserModel> {
    @Column
    name: string

    @Column
    email: string

    @Column
    password: string
}

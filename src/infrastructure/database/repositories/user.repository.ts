import { UserRepositoryInterface } from '../../../domain/repositories/user.repository.interface'
import { UserMapper } from '../mappers/user.mapper'
import { User } from '../../../domain/entities/user'
import { UserModel } from '../models/user.model'

export class UserRepository implements UserRepositoryInterface {
    constructor(private readonly userMapper: UserMapper) { }

    async find(userId: number): Promise<User> {
        let userModel = await UserModel.findByPk(userId)
        if (!userModel) {
            return null
        }
        return this.userMapper.toDomain(userModel)
    }

    async findAll(): Promise<User[]> {
        let arrUserModel = await UserModel.findAll()
        return arrUserModel.map(userModel =>this.userMapper.toDomain(userModel))
    }
}
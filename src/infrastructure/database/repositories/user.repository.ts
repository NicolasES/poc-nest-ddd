import { UserRepositoryInterface } from 'src/domain/repositories/user.repository.interface'
import { User } from 'src/domain/entities/user'
import { PaginationDto } from 'src/domain/repositories/pagination.dto'
import { UserMapper } from '../mappers/user.mapper'
import { UserModel } from '../models/user.model'

export class UserRepository implements UserRepositoryInterface {
    constructor(private readonly userMapper: UserMapper) { }

    async find(userId: number): Promise<User | null> {
        let userModel = await UserModel.findByPk(userId)
        if (!userModel) {
            return null
        }
        return this.userMapper.toDomain(userModel)
    }

    async findByEmail(email: string): Promise<User | null> {
        let userModel = await UserModel.findOne({ where: { email } })
        if (!userModel) {
            return null
        }
        return this.userMapper.toDomain(userModel)
    }

    async findAll(limit: number = 20, offset: number = 0): Promise<PaginationDto<User>> {
        let queryResult = await UserModel.findAndCountAll({
            limit,
            offset
        })

        return {
            total: queryResult.count,
            limit,
            offset,
            data: queryResult.rows.map(userModel =>this.userMapper.toDomain(userModel))
        }
    }
}
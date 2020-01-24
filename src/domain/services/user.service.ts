import { UserServiceInterface } from './contracts/user.service.interface'
import { UserRepositoryInterface } from '../../domain/repositories/user.repository.interface'
import { User } from '../../domain/entities/user'

export class UserService implements UserServiceInterface {
    constructor(private readonly userRepositoryInterface: UserRepositoryInterface) { }

    find(userId: number): Promise<User> {
        return this.userRepositoryInterface.find(userId)
    }

    findAll(): Promise<User[]> {
        return this.userRepositoryInterface.findAll()
    }
}

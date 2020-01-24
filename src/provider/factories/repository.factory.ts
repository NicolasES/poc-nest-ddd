import { UserRepositoryInterface } from '../../domain/repositories/user.repository.interface'
import { UserRepository } from '../../infrastructure/database/repositories/user.repository'
import { UserMapper } from '../../infrastructure/database/mappers/user.mapper'

export class RepositoryFactory {
    getRepository(rep: string) :any {
        if (rep.toUpperCase() == 'userRepository'.toUpperCase()) {
            return this.userRepository()
        }
    }

    private userRepository(): UserRepositoryInterface {
        return new UserRepository(new UserMapper())
    }
}
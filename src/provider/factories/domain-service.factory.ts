import { RepositoryFactory } from './repository.factory'
import { UserServiceInterface } from '../../domain/services/contracts/user.service.interface'
import { UserService } from '../../domain/services/user.service'

const repositoryFactory = new RepositoryFactory()

export class DomainServiceFactory {
    getService(serv: string) :any {
        if (serv.toUpperCase() == 'userService'.toUpperCase()) {
            return this.userService()
        }
    }

    userService(): UserServiceInterface {
        const userRepository = repositoryFactory.getRepository('userRepository')
        return new UserService(userRepository)
    }
}
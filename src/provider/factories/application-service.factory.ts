import { DomainServiceFactory } from './domain-service.factory'
import { UserService } from '../../application/services/user.service'

const domainServiceFactory = new DomainServiceFactory()

export class ApplicationServiceFactory {
    getService(serv: string) :any {
        if (serv.toUpperCase() == 'userService'.toUpperCase()) {
            return this.userService()
        }
    }

    userService(): UserService {
        return new UserService(domainServiceFactory.userService())
    }
}
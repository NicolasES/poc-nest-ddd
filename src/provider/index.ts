import { UserService } from '../application/services/user.service'
import { ApplicationServiceFactory } from './factories/application-service.factory'

const applicationServiceFactory = new ApplicationServiceFactory()

const ApplicationUserServiceProvider = {
    provide: UserService,
    useFactory: () => applicationServiceFactory.getService('userService')
}

export default [
    ApplicationUserServiceProvider
]

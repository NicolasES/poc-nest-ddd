import { Provider } from '@nestjs/common';

import { UserService } from '../application/services/user.service'
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';

const ApplicationUserServiceProvider: Provider = {
    provide: 'UserService',
    useFactory: (userRepository: UserRepository) => {
        return new UserService(userRepository)
    },
    inject: [UserRepository]
}

export default [
    ApplicationUserServiceProvider
]

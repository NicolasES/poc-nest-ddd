import { Provider } from '@nestjs/common';

import { UserRepository } from '../infrastructure/database/repositories/user.repository'
import { UserMapper } from '../infrastructure/database/mappers/user.mapper'

const UserRepositoryProvider: Provider = {
    provide: 'UserRepository',
    useFactory: () => new UserRepository(new UserMapper())
}

export default [
    UserRepositoryProvider
]
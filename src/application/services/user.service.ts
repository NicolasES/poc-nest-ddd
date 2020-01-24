import { UserServiceInterface } from '../../domain/services/contracts/user.service.interface'
import { User } from '../../domain/entities/user'

export class UserService {
    constructor(private readonly domainUserService: UserServiceInterface) { }

    getAll(): Promise<User[]> {
        return this.domainUserService.findAll()
    }

    find(userId: number): Promise<User> {
        return this.domainUserService.find(userId)
    }
}

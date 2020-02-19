import { UserRepositoryInterface } from 'src/domain/repositories/user.repository.interface'
import { User } from 'src/domain/entities/user'
import { PaginationDto } from 'src/domain/repositories/pagination.dto'

export class UserService {
    constructor(private readonly userRepository: UserRepositoryInterface) { }

    findAll(): Promise<PaginationDto<User>> {
        return this.userRepository.findAll()
    }

    find(userId: number): Promise<User | null> {
        return this.userRepository.find(userId)
    }

    create(body: Partial<User>): Promise<User | null> {
        console.log(body)
        return this.find(1)
    }
}

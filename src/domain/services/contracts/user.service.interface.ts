import { User } from '../../entities/user'

export interface UserServiceInterface {
    find(userId: number): Promise<User>
    findAll(): Promise<User[]>
}

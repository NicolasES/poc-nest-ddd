import { User } from '../entities/user'

export interface UserRepositoryInterface {
    find(id: number): Promise<User>
    findAll() : Promise<User[]>
}
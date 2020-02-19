import { User } from '../entities/user'
import { PaginationDto } from './pagination.dto';

export interface UserRepositoryInterface {
    find(id: number): Promise<User | null>
    findAll(limit?: number, offset?: number) : Promise<PaginationDto<User>>
}
import { User } from '../../../domain/entities/user'
import { UserModel } from '../models/user.model'

export class UserMapper {
    toPersistence(use: User): any {
        return {}
    }

    toDomain(model: UserModel): User {
        let user = new User(model.name, model.email, model.password)
        user.id = model.id
        return user
    }
}
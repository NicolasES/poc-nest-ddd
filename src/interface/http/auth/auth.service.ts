import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/domain/entities/user'
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) { }

    private async validate(login: string, password: string): Promise<User | null> {
        const user = await this.userRepository.findByEmail(login)
        if (user && user.password == password) {
            return user
        }
        return null
    }

    public async login(login: string, password: string): Promise<any | { status: number }> {
        return this.validate(login, password).then((user) => {
            if (!user) {
                return { status: 404 }
            }

            let payload = { userName: user.name, userId: user.id }
            const accessToken = this.jwtService.sign(payload)

            return {
                access_token: accessToken,
            }

        })
    }
}
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module'
import provider from './provider'
import { JwtModule } from '@nestjs/jwt';

//controllers
import { UserController } from './interface/http/controllers/user.controller'
import { AuthController } from './interface/http/controllers/auth.controller'

//auth
import { AuthService } from 'src/interface/http/auth/auth.service'
import { JwtStrategy } from './interface/http/auth/jwt.strategy'

@Module({
	imports: [
		DatabaseModule,
		JwtModule.register({
			secret: 'TOKEN_JWT',
		})
	],
	controllers: [UserController, AuthController],
	providers: [...provider, AuthService, JwtStrategy]
})
export class AppModule { }

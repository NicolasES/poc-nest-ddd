import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module'
import provider from './provider'

//controllers
import { UserController } from './interface/http/controllers/user.controller'

@Module({
	imports: [DatabaseModule],
	controllers: [UserController],
	providers: [...provider]
})
export class AppModule { }

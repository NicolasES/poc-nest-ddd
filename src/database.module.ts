import { Module } from '@nestjs/common'
import databaseConfig from './infrastructure/database/database.config'

const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: databaseConfig
    }
]

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})

export class DatabaseModule { }

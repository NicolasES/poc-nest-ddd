import { Sequelize } from 'sequelize-typescript';
import models from './models'

export default () => {
    const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'poc-nest-ddd',
        username: 'root',
        password: '',
    })
    sequelize.addModels([...models]);
    return sequelize;
}
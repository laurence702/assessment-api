import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions'

const config: MysqlConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123-Aquifer",
    database: "cloudfift",
    entities: ["src/**/**.entity{.ts,.js}"],
    synchronize: true,
    migrations :[
      'src/db/migrations/*.js'
    ],
    cli: {
      migrationsDir: 'src/db/migrations'
    }
}

export default config
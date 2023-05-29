import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CasaModule } from './casa/casa.module';
import { databaseConfigFactory } from './configuracion/database.config';
import { NodeEnv } from './configuracion/environment/env-node.enum';
import { AppLogger } from './configuracion/logger.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
    providers:[AppLogger],
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: databaseConfigFactory,
            inject: [ConfigService],
        }),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `env/${process.env.NODE_ENV}.env`,
            validationSchema: Joi.object({
                NODE_ENV: Joi.string()
                .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
                .required(),
            })
        }),
        UsuarioModule,
        CasaModule
    ]
})
export class InfraestructuraModule {}

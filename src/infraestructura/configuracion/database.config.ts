import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './environment/env-variables.enum';
import { UsuarioEntidad } from '../usuario/entidad/usuario.entidad';
import { CasaEntidad } from '../casa/entidad/casa.entidad';

export const databaseConfigFactory = (configService: ConfigService) => ({
    type: configService.get(EnvVariables.DATABASE_TYPE),
    host: configService.get(EnvVariables.DATABASE_HOST),
    port: configService.get(EnvVariables.DATABASE_PORT),
    username: configService.get(EnvVariables.DATABASE_USER),
    password: configService.get(EnvVariables.DATABASE_PASSWORD),
    database: configService.get(EnvVariables.DATABASE_NAME),
    entities: [UsuarioEntidad, CasaEntidad],
    synchronize: true,
})
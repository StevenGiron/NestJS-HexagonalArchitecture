import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';

import { EntityManager } from 'typeorm';

import { CasaDto } from 'src/aplicacion/casa/consulta/dto/casa.dto';
import { DaoCasa } from '../../../../dominio/casa/puerto/dao/dao-casa';
import { CasaEntidad } from '../../entidad/casa.entidad';

@Injectable()
export class DaoCasaMysql implements DaoCasa {
    constructor(
        @InjectEntityManager()
        private readonly entityManager: EntityManager
    ){} 

    async listar(): Promise<CasaDto[]> {
    return await this.entityManager
        .createQueryBuilder(CasaEntidad, 'c')
        .leftJoinAndSelect('c.usuario', 'u')
        .getMany();
    }
}
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

import { UsuarioDto } from '../../../../aplicacion/usuario/consulta/dto/usuario.dto';
import { DaoUsuario } from '../../../../dominio/usuario/puerto/dao/dao-usuario';
import { UsuarioEntidad } from '../../entidad/usuario.entidad';


@Injectable()
export class DaoUsuarioMysql implements DaoUsuario {
    constructor(
        @InjectEntityManager()
        private readonly entityManager: EntityManager
    ){}
    
    async listar(): Promise<UsuarioDto[]> {
        return await  this.entityManager
        .createQueryBuilder(UsuarioEntidad, 'u')
        .leftJoinAndSelect('u.casas', 'c')
        .getMany()
        }

    async buscarPorId(id: number): Promise<UsuarioDto> {
        return this.entityManager.findOneBy(UsuarioEntidad,{id: id})
    }
    
}
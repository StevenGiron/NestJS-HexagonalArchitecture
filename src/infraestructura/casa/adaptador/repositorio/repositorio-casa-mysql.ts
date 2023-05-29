import { Injectable } from '@nestjs/common';
import { RepositorioCasa } from '../../../../dominio/casa/puerto/repositorio/respositorio-casa';
import { Casa } from 'src/dominio/casa/modelo/casa';
import { InjectRepository } from '@nestjs/typeorm';
import { CasaEntidad } from '../../entidad/casa.entidad';
import { Repository } from 'typeorm';
import { UsuarioEntidad } from '../../../usuario/entidad/usuario.entidad';

@Injectable()
export class RepositorioCasaMysql implements RepositorioCasa{
    constructor(
        @InjectRepository(CasaEntidad)
        private readonly repositorio: Repository<CasaEntidad>,
    ) {
        
    }
    async existeCasaPorId(id: number): Promise<boolean> {
        return (await this.repositorio.count({where: {id:id}})>0)
        
    }
    async guardar(casa: Casa) {
        const entidad = new CasaEntidad();

        entidad.direccion = casa.direccion;
        entidad.habitaciones = casa.habitaciones;
        
        entidad.usuario = casa.usuario as UsuarioEntidad
        await this.repositorio.save(entidad)
    }
}
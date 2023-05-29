import { Injectable } from '@nestjs/common';
import { DaoUsuario } from '../../../dominio/usuario/puerto/dao/dao-usuario';
import { UsuarioDto } from './dto/usuario.dto';


@Injectable()
export class ManejadorBuscarUsuarioId {
    constructor(private _daoUsuario: DaoUsuario){}
    
    async ejecutar(id: number): Promise<UsuarioDto>{
        return this._daoUsuario.buscarPorId(id);
    }

}
import { Injectable } from '@nestjs/common';

import { DaoUsuario } from '../../../dominio/usuario/puerto/dao/dao-usuario';
import { UsuarioDto } from './dto/usuario.dto';

@Injectable()
export class ManejadorListarUsuario {
    constructor(private _daoUsuario: DaoUsuario){}
    
    async ejecutar(): Promise<UsuarioDto[]>{
        return this._daoUsuario.listar();
    }

}
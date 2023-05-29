import { ServicioEliminarUsuario } from '../../../dominio/usuario/servicio/servicio-eliminar-usuario';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManejadorEliminarUsuario{

    constructor(private _servicioEliminarUsuario: ServicioEliminarUsuario){}

    async ejecutar(id: number){   
        await this._servicioEliminarUsuario.ejecutar(id);
    }
}
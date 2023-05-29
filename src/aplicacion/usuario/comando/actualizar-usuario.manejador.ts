import { Injectable } from '@nestjs/common';
import { ServicioActualizarUsuario } from '../../../dominio/usuario/servicio/servicio-actualizar-usuario';
import { ComandoActualizarUsuario } from './actualizar-usuario.comando';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';


@Injectable()
export class ManejadorActualizarUsuario {
    constructor(private _servicioActualizarUsuario: ServicioActualizarUsuario){}

    async ejecutar(id: number, comandoActualizarUsuario: ComandoActualizarUsuario){
        await this._servicioActualizarUsuario.ejecutar(
            id,
            new Usuario(
                comandoActualizarUsuario.nombre,
                comandoActualizarUsuario.clave,
                comandoActualizarUsuario.fechaCreacion,
                comandoActualizarUsuario.casas
            )
        )
    }
}
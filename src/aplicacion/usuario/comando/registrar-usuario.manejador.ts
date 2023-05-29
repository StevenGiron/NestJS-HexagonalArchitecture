import { Injectable } from '@nestjs/common';
import { ServicioRegistrarUsuario } from '../../../dominio/usuario/servicio/servicio-registrar-usuario';
import { ComandoRegistrarUsuario } from './registrar-usuario.comando';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';


@Injectable()
export class ManejadorRegistrarUsuario {
    constructor(private _servicioRegistrarUsuario: ServicioRegistrarUsuario){}

    async ejecutar(comandoRegistrarUsuario: ComandoRegistrarUsuario){
        return (await this._servicioRegistrarUsuario.ejecutar(
            new Usuario(
                comandoRegistrarUsuario.nombre,
                comandoRegistrarUsuario.clave,
                comandoRegistrarUsuario.fechaCreacion,
                comandoRegistrarUsuario.casas
            )
        ))
    }

}
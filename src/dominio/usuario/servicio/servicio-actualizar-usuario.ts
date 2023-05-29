import { RepositorioUsuario } from '../puerto/repositorio/repositorio-usuario';
import { Usuario } from '../modelo/usuario';
import { NotFoundException } from '@nestjs/common';


export class ServicioActualizarUsuario {
    constructor(
        private readonly __repositorioUsuario: RepositorioUsuario,
        ){}

    async ejecutar(id: number, usuario: Usuario){
        if (!await this.__repositorioUsuario.existeUsuarioPorId(id)){
            throw new NotFoundException(`El usuario con id #${id} no existe`);
        }
        await this.__repositorioUsuario.actualizar(id, usuario)       
    }
}
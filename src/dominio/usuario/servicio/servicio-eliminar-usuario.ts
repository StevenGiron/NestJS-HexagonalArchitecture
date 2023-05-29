import { RepositorioUsuario } from '../puerto/repositorio/repositorio-usuario';
import { NotFoundException } from '@nestjs/common';


export class ServicioEliminarUsuario {
    constructor(private readonly _repositorioUsuario: RepositorioUsuario){}

    async ejecutar(id: number){
        
        if(!await this._repositorioUsuario.existeUsuarioPorId(id)){
            throw new NotFoundException(`El usuario con id #${id} no existe`)
        }
        await this._repositorioUsuario.eliminar(id);
    }
}
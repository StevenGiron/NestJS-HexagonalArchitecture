import { RepositorioUsuario } from '../puerto/repositorio/repositorio-usuario';
import { Usuario } from '../modelo/usuario';
import { ComandoRegistrarUsuario } from '../../../aplicacion/usuario/comando/registrar-usuario.comando';



export class ServicioRegistrarUsuario {
    
    constructor(private readonly _repositorioUsuario: RepositorioUsuario){}

    async ejecutar(usuario: Usuario): Promise<ComandoRegistrarUsuario>{
        if(await this._repositorioUsuario.existeNombreUsuario(usuario.nombre)) {
            throw new Error(`El nombre de usuario ${usuario.nombre} ya existe`);
        };
        return(await this._repositorioUsuario.guardar(usuario))
    }
}
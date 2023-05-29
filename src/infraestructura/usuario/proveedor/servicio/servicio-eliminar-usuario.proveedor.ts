import { RepositorioUsuario } from '../../../../dominio/usuario/puerto/repositorio/repositorio-usuario';
import { ServicioEliminarUsuario } from '../../../../dominio/usuario/servicio/servicio-eliminar-usuario';


export function servicioEliminarUsuarioProveedor(repositorioUsuario: RepositorioUsuario) {
    return new ServicioEliminarUsuario(repositorioUsuario);
  }
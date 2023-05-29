import { RepositorioUsuario } from '../../../../dominio/usuario/puerto/repositorio/repositorio-usuario';
import { ServicioActualizarUsuario } from '../../../../dominio/usuario/servicio/servicio-actualizar-usuario';

export function servicioActualizarUsuarioProveedor(repositorioUsuario: RepositorioUsuario) {
    return new ServicioActualizarUsuario(repositorioUsuario);
  }
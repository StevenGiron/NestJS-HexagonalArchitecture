import { RepositorioUsuario } from '../../../../dominio/usuario/puerto/repositorio/repositorio-usuario';
import { ServicioRegistrarUsuario } from '../../../../dominio/usuario/servicio/servicio-registrar-usuario';

export function servicioRegistrarUsuarioProveedor(repositorioUsuario: RepositorioUsuario) {
    return new ServicioRegistrarUsuario(repositorioUsuario);
  }
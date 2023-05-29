import { Usuario } from '../../modelo/usuario';
import { ComandoRegistrarUsuario } from '../../../../aplicacion/usuario/comando/registrar-usuario.comando';

export abstract class RepositorioUsuario {
  abstract existeNombreUsuario(nombre: string): Promise<boolean>;
  abstract existeUsuarioPorId(id: number): Promise<boolean>
  abstract guardar(usuario: Usuario): Promise<ComandoRegistrarUsuario>;
  abstract actualizar(id: number, usuario: Usuario);
  abstract eliminar(id: number);
}
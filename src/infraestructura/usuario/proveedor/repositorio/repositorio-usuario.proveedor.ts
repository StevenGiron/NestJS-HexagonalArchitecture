import { RepositorioUsuario } from '../../../../dominio/usuario/puerto/repositorio/repositorio-usuario';
import { RepositorioUsuarioMysql } from '../../adaptador/repositorio/repositorio-usuario-mysql';

export const repositorioUsuarioProvider = {
    provide: RepositorioUsuario,
    useClass: RepositorioUsuarioMysql,
  };
  
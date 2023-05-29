import { DaoUsuario } from '../../../../dominio/usuario/puerto/dao/dao-usuario';
import { DaoUsuarioMysql } from '../../adaptador/dao/dao-usuario-mysql';

export const daoUsuarioProvider = {
    provide: DaoUsuario,
    useClass: DaoUsuarioMysql,
  };
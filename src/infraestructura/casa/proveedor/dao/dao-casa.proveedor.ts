import { DaoCasa } from '../../../../dominio/casa/puerto/dao/dao-casa';
import { DaoCasaMysql } from '../../adaptador/dao/dao-casa-mysql';

export const daoCasaProvider = {
    provide: DaoCasa,
    useClass: DaoCasaMysql,
  };
import { RepositorioCasa } from '../../../../dominio/casa/puerto/repositorio/respositorio-casa';
import { RepositorioCasaMysql } from '../../adaptador/repositorio/repositorio-casa-mysql';

export const repositorioCasaProvider = {
    provide: RepositorioCasa,
    useClass: RepositorioCasaMysql,
  };
  
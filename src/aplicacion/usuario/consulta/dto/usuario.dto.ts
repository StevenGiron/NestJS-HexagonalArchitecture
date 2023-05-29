import { CasaEntidad } from '../../../../infraestructura/casa/entidad/casa.entidad';

export class UsuarioDto {
    
    nombre:string;
    
    fechaCreacion: Date;

    casas: CasaEntidad[]
}
import { IsDateString, IsOptional, IsString } from 'class-validator';
import { CasaEntidad } from '../../../infraestructura/casa/entidad/casa.entidad';


export class ComandoRegistrarUsuario {
    @IsString()
    public nombre: string;

    @IsString()
    public clave: string;

    @IsDateString()
    public fechaCreacion: Date;

    @IsOptional()
    public casas: CasaEntidad[]
}
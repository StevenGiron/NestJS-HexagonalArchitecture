import { IsDateString, IsOptional, IsString } from "class-validator";
import { CasaEntidad } from '../../../infraestructura/casa/entidad/casa.entidad';

export class ComandoActualizarUsuario {
    @IsOptional()
    @IsString()
    public nombre: string;

    @IsOptional()
    @IsString()
    public clave: string;

    @IsOptional()
    // @IsDateString()
    public fechaCreacion: Date;

    @IsOptional()
    public casas: CasaEntidad[]
}
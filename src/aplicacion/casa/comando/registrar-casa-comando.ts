import { IsNumber, IsString, IsOptional } from 'class-validator';
import { UsuarioEntidad } from '../../../infraestructura/usuario/entidad/usuario.entidad';

export class ComandoRegistrarCasa {
    @IsString()
    public direccion: string;

    @IsNumber()
    public habitaciones: number;

    @IsOptional()
    public usuario: UsuarioEntidad;
}
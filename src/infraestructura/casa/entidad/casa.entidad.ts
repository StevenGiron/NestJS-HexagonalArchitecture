import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntidad } from '../../usuario/entidad/usuario.entidad';

@Entity({name: 'casas'})
export class CasaEntidad {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    direccion: string;

    @Column()
    habitaciones: number;

    @ManyToOne(() => UsuarioEntidad, (usuario: UsuarioEntidad) => usuario.casas)
    usuario: UsuarioEntidad
}

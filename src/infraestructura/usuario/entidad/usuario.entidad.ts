import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CasaEntidad } from '../../casa/entidad/casa.entidad';

@Entity({ name: 'usuarios' })
export class UsuarioEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  clave: string;

  @Column()
  fechaCreacion: Date;

  @OneToMany(() => CasaEntidad, (casa: CasaEntidad) => casa.usuario, {
    cascade: true
  })
  casas: CasaEntidad[]

}
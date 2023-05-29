import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Usuario } from "src/dominio/usuario/modelo/usuario";
import { ComandoRegistrarUsuario } from '../../../../aplicacion/usuario/comando/registrar-usuario.comando';
import { RepositorioUsuario } from '../../../../dominio/usuario/puerto/repositorio/repositorio-usuario';
import { UsuarioEntidad } from '../../entidad/usuario.entidad';

@Injectable()
export class RepositorioUsuarioMysql implements RepositorioUsuario{
  constructor(
    @InjectRepository(UsuarioEntidad)
    private readonly repositorio: Repository<UsuarioEntidad>,
  ) {}
  

  async existeUsuarioPorId(id: number): Promise<boolean> {
    return (await this.repositorio.count({where: {id: id}})) > 0;
  }
  
  async existeNombreUsuario(nombre: string): Promise<boolean> {
    return (await this.repositorio.count({ where:{nombre: nombre} })) > 0;
  }
   
  async guardar(usuario: Usuario): Promise<ComandoRegistrarUsuario>{
    const entidad = new UsuarioEntidad();

    entidad.clave = usuario.clave;
    entidad.fechaCreacion = usuario.fechaCreacion;
    entidad.nombre = usuario.nombre;
    entidad.casas = usuario.casas;

    return (await this.repositorio.save(entidad));
  }

  async actualizar(id: number, usuario: Usuario) {
    const usuarioActual = await this.repositorio.findOne({where: {id:id}});

    usuarioActual.nombre = usuario.nombre;
    usuarioActual.clave = usuario.clave;
    usuarioActual.fechaCreacion = usuarioActual.fechaCreacion

    await this.repositorio.update(id, usuarioActual)
  }

  async eliminar(id: number) {
    await this.repositorio.delete(id)
  }
}
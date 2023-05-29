import { Module } from '@nestjs/common';
import { ServicioRegistrarUsuario } from '../../../dominio/usuario/servicio/servicio-registrar-usuario';
import { RepositorioUsuario } from '../../../dominio/usuario/puerto/repositorio/repositorio-usuario';
import { servicioRegistrarUsuarioProveedor } from './servicio/servicio-registrar-usuario.proveedor';
import { repositorioUsuarioProvider } from './repositorio/repositorio-usuario.proveedor';
import { daoUsuarioProvider } from './dao/dao-usuario.proveedor';
import { ManejadorRegistrarUsuario } from '../../../aplicacion/usuario/comando/registrar-usuario.manejador';
import { DaoUsuario } from '../../../dominio/usuario/puerto/dao/dao-usuario';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntidad } from '../entidad/usuario.entidad';
import { ManejadorListarUsuario } from '../../../aplicacion/usuario/consulta/listar-usuarios.manejador';
import { ManejadorBuscarUsuarioId } from '../../../aplicacion/usuario/consulta/buscar-usuario-id.manejador';
import { ServicioActualizarUsuario } from '../../../dominio/usuario/servicio/servicio-actualizar-usuario';
import { servicioActualizarUsuarioProveedor } from './servicio/servicio-actualizar-usuario.proveedor';
import { ManejadorActualizarUsuario } from '../../../aplicacion/usuario/comando/actualizar-usuario.manejador';
import { ServicioEliminarUsuario } from '../../../dominio/usuario/servicio/servicio-eliminar-usuario';
import { servicioEliminarUsuarioProveedor } from './servicio/servicio-eliminar-usuario.proveedor';
import { ManejadorEliminarUsuario } from '../../../aplicacion/usuario/comando/eliminar-usuario.manejador';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntidad])],
    providers: [
        {provide: ServicioRegistrarUsuario, inject: [RepositorioUsuario], useFactory: servicioRegistrarUsuarioProveedor},
        {provide: ServicioActualizarUsuario, inject: [RepositorioUsuario], useFactory: servicioActualizarUsuarioProveedor},
        {provide: ServicioEliminarUsuario, inject: [RepositorioUsuario], useFactory: servicioEliminarUsuarioProveedor},
        repositorioUsuarioProvider,
        daoUsuarioProvider,
        ManejadorListarUsuario,
        ManejadorBuscarUsuarioId,
        ManejadorRegistrarUsuario,
        ManejadorActualizarUsuario,
        ManejadorEliminarUsuario
    ],
    exports: [
        ServicioRegistrarUsuario,
        ManejadorListarUsuario,
        ManejadorBuscarUsuarioId,
        ManejadorRegistrarUsuario,
        ManejadorActualizarUsuario,
        ManejadorEliminarUsuario,
        RepositorioUsuario,
        DaoUsuario
    ]
})
export class UsuarioProveedorModule{}
import { Module } from '@nestjs/common';
import { UsuarioProveedorModule } from './proveedor/usuario-proveedor.module';
import { UsuarioControlador } from './controlador/usuario.controlador';

@Module({
    imports: [
      UsuarioProveedorModule
    ],
    controllers: [UsuarioControlador],
  })
  export class UsuarioModule {}
  
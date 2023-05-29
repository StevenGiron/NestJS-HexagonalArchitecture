import { Module } from '@nestjs/common';
import { CasaControlador } from './controlador/casa.controlador';
import { CasaProveedorModule } from './proveedor/casa-proveedor.module';

@Module({
    imports: [
      CasaProveedorModule
    ],
    controllers: [CasaControlador],
  })
  export class CasaModule {}
  
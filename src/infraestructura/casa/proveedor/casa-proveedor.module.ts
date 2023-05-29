import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasaEntidad } from '../entidad/casa.entidad';
import { daoCasaProvider } from './dao/dao-casa.proveedor';
import { ManejadorListarCasa } from '../../../aplicacion/casa/consulta/listar-casas.manejador';
import { ManejadorRegistrarCasa } from '../../../aplicacion/casa/comando/registrar-casa-manejador';
import { ServicioRegistrarCasa } from '../../../dominio/casa/servicio/servicio-registrar-casa';
import { RepositorioCasa } from '../../../dominio/casa/puerto/repositorio/respositorio-casa';
import { servicioRegistrarCasaProveedor } from './servicio/servicio-registrar-casa.proveedor';
import { repositorioCasaProvider } from './repositorio/repositorio-casa.proveedor';
import { DaoCasa } from '../../../dominio/casa/puerto/dao/dao-casa';

@Module({
    imports: [TypeOrmModule.forFeature([CasaEntidad])],
    providers: [
        {provide: ServicioRegistrarCasa, inject: [RepositorioCasa], useFactory: servicioRegistrarCasaProveedor},
        daoCasaProvider,
        repositorioCasaProvider,
        ManejadorListarCasa,
        ManejadorRegistrarCasa
    ],
    exports: [
        RepositorioCasa,
        DaoCasa,
        ManejadorListarCasa,
        ManejadorRegistrarCasa,
        ServicioRegistrarCasa
    ]
})
export class CasaProveedorModule{}
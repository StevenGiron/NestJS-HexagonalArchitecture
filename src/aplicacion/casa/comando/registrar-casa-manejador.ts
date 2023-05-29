import { Injectable } from '@nestjs/common';
import { ServicioRegistrarCasa } from '../../../dominio/casa/servicio/servicio-registrar-casa';
import { ComandoRegistrarCasa } from './registrar-casa-comando';
import { Casa } from 'src/dominio/casa/modelo/casa';

@Injectable()
export class ManejadorRegistrarCasa {
    constructor(
        private _servicioRegistrarCasa: ServicioRegistrarCasa
    ){}

    async ejecutar(comandoRegistrarCasa: ComandoRegistrarCasa){
        await this._servicioRegistrarCasa.ejecutar(
            new Casa(
                comandoRegistrarCasa.direccion,
                comandoRegistrarCasa.habitaciones,
                comandoRegistrarCasa.usuario,
            )
        )
    }
}
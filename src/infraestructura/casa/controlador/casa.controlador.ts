import { Controller, Get, Post, Body } from '@nestjs/common';
import { ManejadorListarCasa } from '../../../aplicacion/casa/consulta/listar-casas.manejador';
import { CasaDto } from '../../../aplicacion/casa/consulta/dto/casa.dto';
import { ManejadorRegistrarCasa } from '../../../aplicacion/casa/comando/registrar-casa-manejador';
import { ComandoRegistrarCasa } from '../../../aplicacion/casa/comando/registrar-casa-comando';

@Controller("casas")
export class CasaControlador {
    constructor(
        private readonly _manejadorListarUsuario: ManejadorListarCasa,
        private readonly _manejadorRegitrarCasa: ManejadorRegistrarCasa
    ){}

    @Get()
    async listar(): Promise<CasaDto[]>{
        return this._manejadorListarUsuario.ejecutar()
    }

    @Post()
    async guardar(@Body() casa: ComandoRegistrarCasa){
        this._manejadorRegitrarCasa.ejecutar(casa)
    }
}
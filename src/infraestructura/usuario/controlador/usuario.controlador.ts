import { Body, Controller, Delete, Get, Param, Patch, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';

import { ManejadorRegistrarUsuario } from 'src/aplicacion/usuario/comando/registrar-usuario.manejador';
import { ManejadorBuscarUsuarioId } from 'src/aplicacion/usuario/consulta/buscar-usuario-id.manejador';
import { ComandoActualizarUsuario } from '../../../aplicacion/usuario/comando/actualizar-usuario.comando';
import { ManejadorActualizarUsuario } from '../../../aplicacion/usuario/comando/actualizar-usuario.manejador';
import { ManejadorEliminarUsuario } from '../../../aplicacion/usuario/comando/eliminar-usuario.manejador';
import { ComandoRegistrarUsuario } from '../../../aplicacion/usuario/comando/registrar-usuario.comando';
import { UsuarioDto } from '../../../aplicacion/usuario/consulta/dto/usuario.dto';
import { ManejadorListarUsuario } from '../../../aplicacion/usuario/consulta/listar-usuarios.manejador';

@Controller("usuarios")
export class UsuarioControlador {
    constructor(
        private readonly _manejadorRegistrarUsuario: ManejadorRegistrarUsuario,
        private readonly _manejadorListarUsuario: ManejadorListarUsuario,
        private readonly _manejadorBuscarUsuarioId: ManejadorBuscarUsuarioId,
        private readonly _manejadorActualizarUsuario: ManejadorActualizarUsuario,
        private readonly _manejadorEliminarUsuario: ManejadorEliminarUsuario
    ){}

    @Get()
    async listar(): Promise<UsuarioDto[]> {
        return this._manejadorListarUsuario.ejecutar();
    }
    
    @Get(':id')
    async buscarPorId(@Param('id') id: number): Promise<UsuarioDto> {
        return this._manejadorBuscarUsuarioId.ejecutar(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async crear(@Body() comandoRegistrarUsuario: ComandoRegistrarUsuario, @Res() response: Response){
        const usuario = await this._manejadorRegistrarUsuario.ejecutar(comandoRegistrarUsuario)
        response.json({
            message: `Usuario ${usuario.nombre} registrado correctamente`,
            usuario
            }
        )  
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({transform: true}))
    async actualizar(
        @Param('id') id:number,
        @Body() comandoActualizarUsuario: ComandoActualizarUsuario){
        await this._manejadorActualizarUsuario.ejecutar(id, comandoActualizarUsuario)
    }

    @Delete(':id')
    @UsePipes(new ValidationPipe({transform: true}))
    async eliminar(@Param('id') id:number){
        
            await this._manejadorEliminarUsuario.ejecutar(id)
        }
}


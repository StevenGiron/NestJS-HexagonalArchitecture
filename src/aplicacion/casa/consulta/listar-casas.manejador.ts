import { DaoCasa } from '../../../dominio/casa/puerto/dao/dao-casa';
import { CasaDto } from './dto/casa.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManejadorListarCasa {
    constructor(private _daoCasa: DaoCasa ){}

    async ejecutar(): Promise<CasaDto[]>{
        return this._daoCasa.listar();
    }
}
import { ErrorDeNegocio } from './error-de-negocio';

export class ErrorFechaInvalida extends ErrorDeNegocio {
    constructor(mensaje:string){
        super(mensaje);
    }
}
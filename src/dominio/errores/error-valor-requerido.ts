import { ErrorDeNegocio } from './error-de-negocio';

export class ErrorValorRequerido extends ErrorDeNegocio {
    constructor(mesanje: string){
        super(mesanje, ErrorValorRequerido.name);
    }
}
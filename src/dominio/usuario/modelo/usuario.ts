import * as moment from 'moment';

import { CasaEntidad } from '../../../infraestructura/casa/entidad/casa.entidad';
import { ErrorFechaInvalida } from '../../errores/error-fecha-invalida';
import { ErrorLongitudInvalida } from '../../errores/error-longitud-invalida';
import { ErrorValorRequerido } from '../../errores/error-valor-requerido';
import { constantes } from '../../shared/constantes.enum';

export class Usuario{
    readonly #nombre: string;
    readonly #clave: string;
    readonly #fechaCreacion: Date;
    #casas: CasaEntidad[];

    constructor(nombre: string, clave: string, fechaCreacion: Date, casas: CasaEntidad[]){ 
        this.validarNombreRequerido(nombre);
        this.validarTamanoClave(clave);
        this.validarFormatoFecha(fechaCreacion)
        this.#nombre = nombre;
        this.#clave = clave;
        this.#fechaCreacion = new Date(fechaCreacion);
        this.#casas = casas;
    }

    private validarNombreRequerido (nombre: string){
        if(nombre.trim() === ""){
            throw new ErrorValorRequerido(
                'El campo nombre es requerido'
            );
        }
    }

    private validarTamanoClave(clave: string){
        if(clave.length < constantes.NUMERO_MINIMO_CARACTERES_CLAVE){
            throw new ErrorLongitudInvalida(
                `El tamaño mínimo de la clave debe ser ${constantes.NUMERO_MINIMO_CARACTERES_CLAVE}`
            );
        }
    }

    private validarFormatoFecha(fecha:Date){
        if(!moment(fecha, constantes.FORMATO_FECHA, true)){
            throw new ErrorFechaInvalida(`${fecha} no es un formato valido`)
        } 
    }

    get nombre(): string{
        return this.#nombre;
    }

    get clave(): string{
        return this.#clave;
    }
    get fechaCreacion(): Date{
        return this.#fechaCreacion;
    }

    get casas(): CasaEntidad[]{
        return this.#casas  
    }
    
}

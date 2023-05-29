import { UsuarioEntidad } from '../../../infraestructura/usuario/entidad/usuario.entidad';
export class Casa {
    readonly #direccion: string;
    readonly #habitaciones: number;
    #usuario: UsuarioEntidad;

    constructor(direccion: string, habitaciones: number, usuario: UsuarioEntidad){
        this.#direccion = direccion;
        this.#habitaciones = habitaciones;
        this.#usuario = usuario;
    }

    get direccion ():string {
        return this.#direccion;
    }

    get habitaciones():number {
        return this.#habitaciones;
    }

    get usuario(): UsuarioEntidad {
        return this.#usuario;
    }

    set usuario(usuario: UsuarioEntidad){
        this.#usuario = usuario;
    }
}
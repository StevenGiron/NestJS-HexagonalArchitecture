import { RepositorioCasa } from '../puerto/repositorio/respositorio-casa';
import { Casa } from '../modelo/casa';
export class ServicioRegistrarCasa {
    constructor(
        private readonly _repositorioCasa: RepositorioCasa
    ){}
    async ejecutar(casa: Casa){
        await this._repositorioCasa.guardar(casa)
    }
}
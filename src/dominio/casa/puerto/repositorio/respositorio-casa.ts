import { Casa } from '../../modelo/casa';
export abstract class RepositorioCasa {
    abstract existeCasaPorId(id: number): Promise<boolean>;
    abstract guardar(casa: Casa)
}
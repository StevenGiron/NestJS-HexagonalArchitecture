import { CasaDto } from '../../../../aplicacion/casa/consulta/dto/casa.dto';

export abstract class DaoCasa {
    abstract listar(): Promise<CasaDto[]>;
}
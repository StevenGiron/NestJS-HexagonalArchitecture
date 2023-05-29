import { UsuarioDto } from '../../../../aplicacion/usuario/consulta/dto/usuario.dto';

export abstract class DaoUsuario {
    abstract listar(): Promise<UsuarioDto[]>;
    abstract buscarPorId(id: number): Promise<UsuarioDto>
}
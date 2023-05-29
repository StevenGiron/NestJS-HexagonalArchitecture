import { RepositorioCasa } from '../../../../dominio/casa/puerto/repositorio/respositorio-casa';
import { ServicioRegistrarCasa } from '../../../../dominio/casa/servicio/servicio-registrar-casa';

export function servicioRegistrarCasaProveedor(repositorioCasa: RepositorioCasa) {
    return new ServicioRegistrarCasa(repositorioCasa);
  }
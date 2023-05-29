import { ServicioRegistrarUsuario } from '../../../../src/dominio/usuario/servicio/servicio-registrar-usuario';
import { SinonStubbedInstance } from 'sinon';
import { RepositorioUsuario } from '../../../../src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { createStubObj } from '../../../util/create-object.stub';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';


describe('ServicioRegistrarUsuario', ()=>{
    let servicioRegistrarUsuario: ServicioRegistrarUsuario;
    let repositorioUsuarioStub: SinonStubbedInstance<RepositorioUsuario>;

    beforeEach(()=>{
        repositorioUsuarioStub = createStubObj<RepositorioUsuario>(['existeNombreUsuario', 'guardar']);
        servicioRegistrarUsuario = new ServicioRegistrarUsuario(repositorioUsuarioStub)
    });

    it('Si el nombre de usuario ya existe no se debe crear y debe retornar un error',async () => {
        repositorioUsuarioStub.existeNombreUsuario.returns(Promise.resolve(true))

        await expect(
            servicioRegistrarUsuario.ejecutar(
                new Usuario('juan', '1234', new Date(), []),
            ),
        ).rejects.toThrow('El nombre de usuario juan ya existe')
    });

    it('Si el nombre de usuario no existe se crea el nuevo usuario',async () => {
        const usuario = new Usuario('juan', '1234', new Date(), [])
        repositorioUsuarioStub.existeNombreUsuario.returns(Promise.resolve(false));
        
        await servicioRegistrarUsuario.ejecutar(usuario)

        expect(repositorioUsuarioStub.existeNombreUsuario.getCalls().length).toBe(1)
        expect(repositorioUsuarioStub.guardar.getCalls().length).toBe(1)
        expect(repositorioUsuarioStub.guardar.calledWith(usuario)).toBeTruthy()
    })
})
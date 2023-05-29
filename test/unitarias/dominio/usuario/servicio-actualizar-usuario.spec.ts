import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { ServicioActualizarUsuario } from 'src/dominio/usuario/servicio/servicio-actualizar-usuario';
import { SinonStubbedInstance } from 'sinon';
import { createStubObj } from 'test/util/create-object.stub';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { NotFoundException } from '@nestjs/common';


describe('ServicioActualizarUsuario', ()=>{ 
    let servicioActualizarUsuario: ServicioActualizarUsuario;
    let repositorioUsuarioStub: SinonStubbedInstance<RepositorioUsuario>;

    beforeEach(()=>{
        repositorioUsuarioStub = createStubObj<RepositorioUsuario>(['actualizar', 'existeUsuarioPorId'])
        servicioActualizarUsuario = new ServicioActualizarUsuario(repositorioUsuarioStub)
    })

    it('Si no existe el usuario con el id no se actualiza el usuario', async () => {
        repositorioUsuarioStub.existeUsuarioPorId.returns(Promise.resolve(false))

        await expect(
            servicioActualizarUsuario.ejecutar(1, new Usuario('juan', '1234', new Date(), []))
        ).rejects.toThrow(NotFoundException)
    })

    it('Si existe el usuario con el id se actualiza el usuario',async () => {
        const usuario =  new Usuario('juan', '1234', new Date(), [])
        repositorioUsuarioStub.existeUsuarioPorId.returns(Promise.resolve(true))

        await servicioActualizarUsuario.ejecutar(1, usuario)

        expect(repositorioUsuarioStub.existeUsuarioPorId.getCalls().length).toBe(1);
        expect(repositorioUsuarioStub.existeUsuarioPorId.calledWith(1)).toBeTruthy();
        expect(repositorioUsuarioStub.actualizar.getCalls().length).toBe(1);
        expect(repositorioUsuarioStub.actualizar.calledWith(1, usuario)).toBeTruthy();
    })
})
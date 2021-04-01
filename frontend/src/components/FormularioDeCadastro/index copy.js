import React, { useState } from 'react'
import logo from "../../assets/icons/logo.svg"
import "./styles.css"

const FormPasso1 = () => {
    return (
        <form className="form">
            <h2 className="titulo-do-form-do-passo">Seu acesso</h2>
            <p>Defina seus dados de acesso</p>
            <p>Coloque seu nome de usuário:</p>
            <input type="text" name="" placeholder="Seu nome de usuario" />
            <p>Coloque seu email:</p>
            <input type="email" name="" placeholder="Seu email" />
            <p>Crie uma senha:</p>
            <input type="password" />
            <p>Repita a senha:</p>
            <input type="password" />
        </form>
    )
}

const FormPasso2 = () => {
    return (
        <form className="form">
            <h2 className="titulo-do-form-do-passo">Coloque seu endereço abaixo</h2>
            <p>Esse endereço é para o qual enviaremos seus produtos. Você também pode fazer envios para outros endereços.</p>
            <p>CEP</p>
            <input type="number" name="" placeholder="Seu cep. O endereço será preenchido automaticamente." />
            <p>Rua</p>
            <input type="text" name="" placeholder="Sua rua" />
            <p>Complemento</p>
            <input type="text" name="" placeholder="Complemento" />
            <p>Bairro</p>
            <input type="text" name="" placeholder="Seu bairro" />
            <p>Cidade</p>
            <input type="text" name="" placeholder="Sua cidade" />
            <p>Estado</p>
            <input type="text" name="" placeholder="Seu estado" />
        </form>
    )
}

const FormPasso3 = () => {
    return (
        <form className="form">
            <h2 className="titulo-do-form-do-passo">Email de confirmação</h2>
            <p>Você receberá um e-mail para confirmar seu cadastro. Acesse-o para ativar a sua conta.</p>
        </form>
    )
}

const FormularioDeCadastro = () => {

    const [formAtual, setPasso] = useState(FormPasso1)

    const proximo = () => {
            setPasso(FormPasso2)
    }

    return (
        <div class="container-externo">
            <div class="container-interno">
                <img src={logo} className="icone-container-interno" width="100" height="100" alt="" />
                <h1 className="titulo-cadastro">Cadastro</h1>
                <div className="container-formulario">
                    <div className="coluna-esquerda">
                        <div className="lista-de-passos">
                            <div className="passo">
                                <h3>Passo 1</h3>
                                <p>Dados de acesso</p>
                            </div>
                            <div className="passo">
                                <h3>Passo 2</h3>
                                <p>Endereço de entrega</p>
                            </div>
                            <div className="passo">
                                <h3>Passo 3</h3>
                                <p>Email de confirmação</p>
                            </div>
                        </div>
                        <button onClick={proximo}>Próximo</button>
                    </div>
                    <div className="formularioAtual">
                        {formAtual}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioDeCadastro
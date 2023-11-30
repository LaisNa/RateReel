import React, { useState } from 'react';
import 'Front/styles.css'

const App = () => {
    const [visibleMain, setVisibleMain] = useState(1);

    const showMain = (mainNumber) => {
        setVisibleMain(mainNumber);
    };

    return (
        <body>
            <nav>
                <img src="Front/Imagens/logoPequeno.svg" alt="Logo do RateReel"></img>

                <div id="botoesNav">
                    <button onClick={() => showMain(1)} class="ancoraLaranja">Página Inicial</button>
                    <button onClick={() => showMain(1)} class="botaoAzulPequeno">Entrar</button>
                    <button onClick={() => showMain(1)} class="botaoLaranjaPequeno">Cadastrar</button>
                </div>
            </nav>

            <main style={{ display: visibleMain === 1 ? 'block' : 'none' }}>
                <div id="parteUm">
                    <div id="subParteUm">
                        <img id="hugoImagem" src="Front/Imagens//hugoFilme.jpg" alt="Imagem do filme Hugo"></img>

                        <div id="textoPrincipal">
                            <img src="Front/Imagens/logoGrande.svg" alt="Logo do RateReel"></img>
                            <h1>Sua vida cinematográfica em foco</h1>
                        </div>
                    </div>

                    <img id="setaBaixo" src="Front/Imagens/setasBaixo.svg" alt="Setas para Baixo"></img>
                </div>
                <div id="parteDois">
                    <div id="textoDois">
                        <h1>Registre, avalie, favorite.</h1>
                        <h1> <span id="destaqueTextoDois">Viva o cinema</span> como nunca antes!</h1>
                    </div>

                    <div id="topicosImportantes">
                        <div class="topico">
                            <img src="Front/Imagens/estrelaIcon.svg" alt="Icone de Estrela"></img>
                            <h2>Avalie em uma escala de cinco estrelas.</h2>
                        </div>

                        <div class="topico">
                            <img src="Front/Imagens/coracaoIcon.svg" alt="Icone de Coração"></img>
                            <h2>Curta os filmes favoritos.</h2>
                        </div>

                        <div class="topico">
                            <img src="Front/Imagens/listaIcon.svg" alt="Icone de Lista"></img>
                            <h2>Crie listas personalizadas.</h2>
                        </div>
                    </div>
                </div>

            </main>
            <main style={{ display: visibleMain === 2 ? 'block' : 'none' }}>
                <div id="caixaLoginCadastro">
                    <h1>Login</h1>

                    <form>
                        <input type="text" id="inputUsuario" placeholder="Usuário" required></input>

                        <div id="divEsqueceuSenha">
                            <input type="text" id="inputSenha" placeholder="Senha" required></input>
                            <a class="ancoraLaranja">Esqueceu a senha?</a>

                        </div>

                        <button type="botaoLogin" id="botaoLogin" class="botaoAzulGrande">Entrar</button>

                        <p class="pBold">Não possui uma conta? <a class="ancoraLaranja">Cadastre-se</a></p>

                    </form>
                </div>
            </main>


            <main style={{ display: visibleMain === 3 ? 'block' : 'none' }}>
                <div id="caixaLoginCadastro">
                    <h1>Cadastro</h1>

                    <form>
                        <input type="text" id="inputEmailCadastro" placeholder="E-mail" required></input>

                        <input type="text" id="inputUsuarioCadastro" placeholder="Usuário" required></input>

                        <input type="text" id="inputSenhaCadastro" placeholder="Senha" required></input>

                        <input type="text" id="inputSenhaConfirmarCadastro" placeholder="Confirmar senha" required></input>

                        <button type="botaoLCadastro" id="botaoCadastro" class="botaoLaranjaGrande">Cadastrar</button>

                    </form>
                </div>
            </main>

            <footer>
                <p>&copy;RateReel - Todos os direitos reservados. </p>
            </footer>
        </body>
    );
};

export default App;

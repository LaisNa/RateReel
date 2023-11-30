/* PÁGINA INICIAL, LOGIN, CADASTRO */

document.addEventListener("DOMContentLoaded", function () {
    // Função para mostrar uma main e ocultar as outras
    function exibirMain(mainParaExibir) {
        var mains = document.querySelectorAll("main");
        mains.forEach(function (main) {
            main.style.display = (main === mainParaExibir) ? "block" : "none";
        });
    }

    // Adicionar ouvintes de eventos aos botões
    document.getElementById("botaoPaginaInicio").addEventListener("click", function () {
        exibirMain(document.getElementById("paginaInicial"));
    });

    document.getElementById("botaoPaginaEntrar").addEventListener("click", function () {
        exibirMain(document.getElementById("paginaLogin"));
    });

    document.getElementById("botaoPaginaCadastrar").addEventListener("click", function () {
        exibirMain(document.getElementById("paginaCadastro"));
    });
});

/* PÁGINA INICIAL, LOGIN, CADASTRO */


/* PÁGINA MENU, FILMES, AVALIAÇÕES */

document.addEventListener("DOMContentLoaded", function () {
    // Função para mostrar uma main e ocultar as outras
    function exibirMain(mainParaExibir) {
        var mains = document.querySelectorAll("main");
        mains.forEach(function (main) {
            main.style.display = (main === mainParaExibir) ? "block" : "none";
        });
    }

    // Adicionar ouvintes de eventos aos botões
    document.getElementById("homeBotao").addEventListener("click", function () {
        exibirMain(document.getElementById("home-page"));
    });

    document.getElementById("moviesBotao").addEventListener("click", function () {
        exibirMain(document.getElementById("allMovies"));
    });

    document.getElementById("ratingsBotao").addEventListener("click", function () {
        exibirMain(document.getElementById("allRatings"));
    });
});

/* PÁGINA MENU, FILMES, AVALIAÇÕES */
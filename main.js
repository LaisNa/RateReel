function mostrarMain(mainId) {
    var mains = document.querySelectorAll('main');

    mains.forEach(function(main) {
        main.style.display = 'none';
    })

    var selecionarMain = document.getElementById(mainId);

    if(selecionarMain) {
        selecionarMain.style.display = 'block';
    }
}

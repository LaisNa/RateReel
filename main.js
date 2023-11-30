import React, { useState } from 'react';

const App = () => {
    const [mainVisivel, mainVisivelEscolhida] = useState(1);

    const mostrarMain = (numeroMain) => {
        mainVisivelEscolhida(numeroMain);
    };

    return (mostrarMain);
}

export default App;
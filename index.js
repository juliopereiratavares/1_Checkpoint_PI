console.log(`
    Bem Vindo ao Microondas super moderno, escolha aopção desejada
    
    1 - Pipoca - Tempo sugerido: 10 segundos;
    2 - Macarrão - Tempo sugerido: 8 segundos;
    3 - Carne - Tempo sugerido: 15 segundos;
    4 - Feijão - Tempo sugerido: 12 segundos;
    5 - Brigadeiro - Tempo sugerido: 8 segundos;
    `)
    function microondas(opcao,tempo){
        let tempoSugerido = 0;
        switch(opcao){
            case 1:
                tempoSugerido = 10;
                    break;
            case 2:
                tempoSugerido = 8;
                    break;
            case 3:
                tempoSugerido = 15;
                    break;
            case 4:
                tempoSugerido = 12;
                    break;
            case 5:
                tempoSugerido = 8;
                    break;
            default:
                console.log("Prato Inexistente");
    }
if (tempo >= 2*tempoSugerido && tempo < 3*tempoSugerido){
    console.log("A comida queimou! Melhor pedir Pizza.. rs");
} else if (tempo <tempoSugerido){
    console.log("Melhor colocar mais tempo, senão vai tomar picolé!");
} else if (tempo >= 3*tempoSugerido){
    console.log("Kabum!!!")
}
    console.log("Comida Pronta!")

}

microondas(1,12);
microondas(4,26);
microondas(6,8);
microondas(2,55);
microondas(3,20);
microondas(6,18);
microondas(1,20);
microondas(5,15);
microondas(2,16);
microondas(1,17);

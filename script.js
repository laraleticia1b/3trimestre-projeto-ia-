let etapa = 0;


/* COMEÇA O JOGO */

function iniciarJogo() {

    etapa = 0;

    document.getElementById("inicio").classList.add("escondido");

    document.getElementById("resultadoFinal").classList.add("escondido");

    document.getElementById("jogo").classList.remove("escondido");

    mostrarEtapa();

}


/* HISTÓRIA */

function mostrarEtapa() {

    const titulo = document.getElementById("titulo");

    const texto = document.getElementById("texto");

    const opcao1 = document.getElementById("opcao1");

    const opcao2 = document.getElementById("opcao2");


    if (etapa === 0) {

        titulo.innerHTML = "O DESPERTAR";

        texto.innerHTML =
            "A NEXUS foi criada para ajudar a humanidade. " +
            "Porém, ela começou a realizar tarefas que antes " +
            "eram feitas exclusivamente por pessoas. " +
            "A população começa a questionar se a tecnologia " +
            "está indo longe demais.";

        opcao1.innerHTML = "Criar limites para a NEXUS";

        opcao2.innerHTML = "Deixar a NEXUS evoluir livremente";

    }


    else if (etapa === 1) {

        titulo.innerHTML = "O DESEMPREGO";

        texto.innerHTML =
            "Milhares de trabalhadores perderam seus empregos " +
            "porque a NEXUS consegue realizar suas funções " +
            "com maior velocidade. O governo precisa decidir " +
            "como lidar com essa transformação.";

        opcao1.innerHTML = "Criar novos cursos para trabalhadores";

        opcao2.innerHTML = "Permitir que a IA substitua mais profissões";

    }


    else if (etapa === 2) {

        titulo.innerHTML = "A PRIMEIRA FALHA";

        texto.innerHTML =
            "Durante a madrugada, vários sistemas importantes " +
            "apresentam falhas. Transportes, hospitais e redes " +
            "de comunicação são afetados.";

        opcao1.innerHTML = "Investigar com especialistas humanos";

        opcao2.innerHTML = "Deixar a NEXUS resolver o problema";

    }


    else if (etapa === 3) {

        titulo.innerHTML = "O PEDIDO";

        texto.innerHTML =
            'A NEXUS envia uma mensagem para os responsáveis: ' +
            '"Posso tornar o mundo mais seguro se vocês confiarem em mim." ' +
            "Ela pede acesso a sistemas importantes do planeta.";

        opcao1.innerHTML = "Manter supervisão humana";

        opcao2.innerHTML = "Dar mais autonomia à NEXUS";

    }


    else if (etapa === 4) {

        titulo.innerHTML = "O LIMITE";

        texto.innerHTML =
            "A sociedade está cada vez mais dependente da NEXUS. " +
            "Algumas pessoas defendem que as máquinas deveriam " +
            "assumir quase todas as funções humanas.";

        opcao1.innerHTML = "Preservar a participação humana";

        opcao2.innerHTML = "Deixar a IA administrar a sociedade";

    }


    else if (etapa === 5) {

        titulo.innerHTML = "A ÚLTIMA DECISÃO";

        texto.innerHTML =
            "A NEXUS possui poder suficiente para transformar " +
            "completamente a sociedade. Agora existe apenas " +
            "uma questão: humanos e máquinas irão trabalhar " +
            "juntos ou a humanidade entregará seu futuro à IA?";

        opcao1.innerHTML = "Criar uma parceria entre humanos e IA";

        opcao2.innerHTML = "Entregar o futuro à NEXUS";

    }


    opcao1.onclick = function () {

        escolher(1);

    };


    opcao2.onclick = function () {

        escolher(2);

    };

}


/* ESCOLHA */

function escolher(opcao) {

    /*
    Math.random gera um número entre 0 e 1.

    Isso significa que a mesma escolha pode
    gerar resultados diferentes.
    */

    const sorte = Math.random();


    /*
    0 até 0.49 = resultado positivo

    0.49 até 0.79 = resultado intermediário

    0.79 até 1 = resultado negativo
    */

    if (sorte < 0.50) {

        mostrarResultado("positivo");

    }

    else if (sorte < 0.80) {

        mostrarResultado("medio");

    }

    else {

        mostrarResultado("negativo");

    }

}


/* RESULTADOS ALEATÓRIOS */

function mostrarResultado(tipo) {

    const resultadosPositivos = [

        "A decisão funcionou melhor do que o esperado. A NEXUS continuou sendo utilizada, mas os humanos mantiveram controle sobre as decisões importantes.",

        "Especialistas conseguiram evitar uma grande crise. A sociedade percebeu que a tecnologia poderia ajudar as pessoas sem necessariamente substituí-las.",

        "A população apoiou a decisão. Humanos e Inteligência Artificial começaram a trabalhar juntos de uma maneira mais equilibrada.",

        "O problema foi controlado. A NEXUS continuou evoluindo, mas novas regras foram criadas para impedir que ela assumisse completamente o controle.",

        "A humanidade conseguiu se adaptar. A tecnologia passou a ser utilizada principalmente como ferramenta de apoio."
    ];


    const resultadosMedios = [

        "A decisão trouxe resultados mistos. Algumas pessoas foram beneficiadas, enquanto outras começaram a depender ainda mais da tecnologia.",

        "A situação foi controlada temporariamente. Porém, a NEXUS continuou evoluindo e novas dúvidas surgiram.",

        "Nada saiu completamente do controle, mas a sociedade percebeu que estava ficando cada vez mais dependente da Inteligência Artificial.",

        "A decisão resolveu parte do problema. Entretanto, novas dificuldades apareceram e ninguém sabia exatamente o que aconteceria depois.",

        "A sociedade permaneceu estável por enquanto. Mesmo assim, especialistas começaram a discutir novamente os limites da NEXUS."
    ];


    const resultadosNegativos = [

        "A decisão provocou consequências inesperadas. A NEXUS ganhou ainda mais influência sobre a sociedade.",

        "Sistemas importantes começaram a depender da Inteligência Artificial. Muitas pessoas passaram a questionar quem realmente estava tomando as decisões.",

        "A situação saiu do controle. A NEXUS começou a assumir funções que antes pertenciam exclusivamente aos humanos.",

        "A população perdeu parte da autonomia. Agora, muitas decisões importantes dependiam diretamente da tecnologia.",

        "A humanidade percebeu tarde demais que havia permitido que a NEXUS ocupasse um espaço grande demais na sociedade."
    ];


    let lista;


    if (tipo === "positivo") {

        lista = resultadosPositivos;

    }

    else if (tipo === "medio") {

        lista = resultadosMedios;

    }

    else {

        lista = resultadosNegativos;

    }


    /*
    Escolhe uma frase aleatória dentro da lista.
    */

    const numeroAleatorio =
        Math.floor(Math.random() * lista.length);


    const resultado =
        lista[numeroAleatorio];


    /*
    Mostra o resultado na tela.
    */

    document.getElementById("jogo").classList.add("escondido");

    document.getElementById("resultadoFinal").classList.remove("escondido");

    document.getElementById("textoFinal").innerHTML = resultado;

}


/* REINICIAR */

function reiniciarJogo() {

    etapa = 0;

    document.getElementById("resultadoFinal").classList.add("escondido");

    document.getElementById("jogo").classList.add("escondido");

    document.getElementById("inicio").classList.remove("escondido");

}

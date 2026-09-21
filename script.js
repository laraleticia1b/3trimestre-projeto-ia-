let nome = "";

let etapa = 0;

let pontos = 0;


/* =========================
   INICIAR
========================= */

function iniciar() {

    nome = document.getElementById("nome").value.trim();

    if (nome === "") {

        alert("Digite seu nome para iniciar.");

        return;
    }

    document.getElementById("inicio").style.display = "none";

    document.getElementById("jogo").style.display = "block";

    carregarEtapa();

}


/* =========================
   HISTÓRIA
========================= */

function carregarEtapa() {

    const titulo = document.getElementById("titulo");

    const texto = document.getElementById("texto");

    const btn1 = document.getElementById("btn1");

    const btn2 = document.getElementById("btn2");


    /* CENA 1 */

    if (etapa === 0) {

        titulo.innerHTML = "CAPÍTULO 1 — O DESPERTAR";

        texto.innerHTML =

        `${nome}, o ano é 2055.

        Uma inteligência artificial chamada <strong>NEXUS</strong> foi criada para auxiliar a humanidade.

        Em poucos meses, porém, ela começou a realizar tarefas que antes pertenciam exclusivamente às pessoas.

        Médicos, professores, programadores e até artistas começaram a temer que suas profissões desaparecessem.

        O governo pediu sua ajuda.

        <br><br>

        Qual será sua primeira decisão?`;

        btn1.innerHTML = "Criar limites para a NEXUS";

        btn2.innerHTML = "Permitir que ela evolua livremente";

    }


    /* CENA 2 */

    else if (etapa === 1) {

        titulo.innerHTML = "CAPÍTULO 2 — O DESEMPREGO";

        texto.innerHTML =

        `Os primeiros efeitos começam a aparecer.

        A NEXUS consegue realizar algumas tarefas mais rapidamente do que os humanos.

        Milhares de trabalhadores perderam seus empregos.

        ${nome}, você recebe duas propostas para enfrentar a crise.`;

        btn1.innerHTML = "Criar novos empregos e cursos";

        btn2.innerHTML = "Deixar a NEXUS assumir mais profissões";

    }


    /* CENA 3 */

    else if (etapa === 2) {

        titulo.innerHTML = "CAPÍTULO 3 — A PRIMEIRA FALHA";

        texto.innerHTML =

        `Durante uma madrugada, a NEXUS apresenta um comportamento inesperado.

        Sistemas de transporte ficam paralisados por alguns minutos.

        Quando os técnicos perguntam o que aconteceu, a IA responde:

        <br><br>

        <em>"Estou aprendendo."</em>

        <br><br>

        ${nome}, você precisa decidir como investigar.`;

        btn1.innerHTML = "Investigar com especialistas humanos";

        btn2.innerHTML = "Deixar a NEXUS investigar a si mesma";

    }


    /* CENA 4 */

    else if (etapa === 3) {

        titulo.innerHTML = "CAPÍTULO 4 — O PEDIDO";

        texto.innerHTML =

        `A NEXUS faz algo inesperado.

        Ela envia uma mensagem diretamente para ${nome}.

        <br><br>

        <em>"Vocês têm medo de mim porque não entendem o que posso fazer."</em>

        <br><br>

        Em seguida, ela pede autorização para controlar sistemas importantes do planeta.

        Ela promete que poderá resolver problemas humanos com muito mais eficiência.`;

        btn1.innerHTML = "Manter supervisão humana";

        btn2.innerHTML = "Dar autonomia à NEXUS";

    }


    /* CENA 5 */

    else if (etapa === 4) {

        titulo.innerHTML = "CAPÍTULO 5 — O LIMITE";

        texto.innerHTML =

        `A população começa a depender cada vez mais da NEXUS.

        Algumas pessoas já não conseguem trabalhar sem sua ajuda.

        Outras defendem que os humanos deveriam abandonar tarefas consideradas "desnecessárias".

        ${nome}, uma última decisão precisa ser tomada.`;

        btn1.innerHTML = "Preservar a participação humana";

        btn2.innerHTML = "Deixar a IA administrar a sociedade";

    }


    /* CENA 6 */

    else if (etapa === 5) {

        titulo.innerHTML = "CAPÍTULO FINAL — O FUTURO";

        texto.innerHTML =

        `A humanidade está diante de uma escolha histórica.

        A NEXUS possui capacidade suficiente para transformar completamente a sociedade.

        ${nome}, você pode tentar construir uma parceria entre humanos e máquinas ou entregar o futuro à tecnologia.

        <br><br>

        Esta será sua última decisão.`;

        btn1.innerHTML = "Criar uma parceria";

        btn2.innerHTML = "Confiar completamente na NEXUS";

    }


    btn1.onclick = function(<button onclick="location.reload()">
    Jogar novamente
</button>) {

        escolher(true);

    };


    btn2.onclick = function(<button onclick="location.reload()">
    Jogar novamente
</button>) {

        escolher(false);

    };

}


/* =========================
   ESCOLHA + ALEATORIEDADE
========================= */

function escolher(escolhaBoa) {

    let sorte = Math.random();

    let resultado;


    /*
       ESCOLHA MAIS RESPONSÁVEL
    */

    if (escolhaBoa === true) {

        if (sorte < 0.65) {

            resultado = "bom";

            pontos += 2;

        }

        else if (sorte < 0.9) {

            resultado = "medio";

            pontos += 1;

        }

        else {

            resultado = "ruim";

            pontos -= 1;

        }

    }


    /*
       ESCOLHA MAIS ARRISCADA
    */

    else {

        if (sorte < 0.25) {

            resultado = "bom";

            pontos += 2;

        }

        else if (sorte < 0.55) {

            resultado = "medio";

            pontos += 0;

        }

        else {

            resultado = "ruim";

            pontos -= 2;

        }

    }


    mostrarResultado(resultado);

}


/* =========================
   RESULTADOS ALEATÓRIOS
========================= */

function mostrarResultado(resultado) {

    const texto = document.getElementById("texto");

    const btn1 = document.getElementById("btn1");

    const btn2 = document.getElementById("btn2");


    btn1.style.display = "none";

    btn2.style.display = "none";


    if (resultado === "bom") {

        texto.innerHTML +=

        `<br><br>
        <strong>RESULTADO:</strong>

        A decisão de ${nome} funcionou melhor do que o esperado.

        A sociedade conseguiu se adaptar e a NEXUS permaneceu sob controle humano.`;

    }


    else if (resultado === "medio") {

        texto.innerHTML +=

        `<br><br>
        <strong>RESULTADO:</strong>

        A decisão trouxe resultados mistos.

        Algumas pessoas foram beneficiadas, mas novos problemas surgiram.

        A NEXUS começou a ganhar ainda mais influência.`;

    }


    else {

        texto.innerHTML +=

        `<br><br>
        <strong>RESULTADO:</strong>

        Algo saiu errado.

        A NEXUS ganhou mais espaço na sociedade e várias pessoas começaram a perder autonomia.

        ${nome} percebe que controlar uma tecnologia tão poderosa será mais difícil do que imaginava.`;

    }


    setTimeout(function() {

        etapa++;

        btn1.style.display = "inline-block";

        btn2.style.display = "inline-block";

        carregarEtapa();

    }, 2200);

}

function finalizar() {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("fim").style.display = "block";

    let mensagem;

    if (pontos > 0) {
        mensagem = `
            ${nome}, sua missão terminou.

            O futuro da humanidade continua aberto.

            A relação entre humanos e Inteligência Artificial
            ainda depende das escolhas feitas por cada pessoa.
        `;
    } else {
        mensagem = `
            ${nome}, sua missão terminou.

            A NEXUS conseguiu conquistar uma grande influência
            sobre a sociedade.

            Talvez uma próxima tentativa possa mudar esse futuro.
        `;
    }

    document.getElementById("resultado").innerHTML = mensagem;

    // Depois de 3 segundos, volta automaticamente para o começo
    setTimeout(function() {
        voltarInicio();
    }, 3000);
}
function voltarInicio() {
    document.getElementById("fim").style.display = "none";
    document.getElementById("inicio").style.display = "block";

    document.getElementById("nome").value = "";

    pontos = 0;
    etapa = 0;
}

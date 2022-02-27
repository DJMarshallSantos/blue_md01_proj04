// Simulador de votação --------------------------------------------------------------------

// Imports ---------------------------------------------------------------------------------
const prompt = require("prompt-sync")();
const color = require("colors");

// Globais ---------------------------------------------------------------------------------
let date_ob = new Date();

// Construtor dos candidatos ---------------------------------------------------------------
class Candidato{
    constructor (numero, nome, votos){
        this.numero = numero;
        this.nome = nome;
        this.votos = votos;
    }
}
const candidato1 = new Candidato(13, "Lula", 0);
const candidato2 = new Candidato(17, "Bolsonaro", 0);
const candidato3 = new Candidato(25, "Sergio Moro", 0);

// Construtor dos votos nulo e branco ------------------------------------------------------
class Invalido{
    constructor (entrada, votos){
        this.entrada = entrada;
        this.votos = votos;
    }
}
const branco = new Invalido("branco", 0);
const nulo = new Invalido("nulo", 0);

// Construtor da urna ----------------------------------------------------------------------
class Urna{
    constructor (candidato1, candidato2, candidato3, nulo, branco){
        this.candidato1 = candidato1;
        this.candidato2 = candidato2;
        this.candidato3 = candidato3;
        this.nulo = nulo;
        this.branco = branco;
    }
}
const urna = new Urna(candidato1, candidato2, candidato3, nulo, branco);

// Função que valida o ano de nascimento ---------------------------------------------------
function validarAno(){
    let anoNascimento = +prompt("Entre o ano de nascimento (AAAA): ".green);
    while(isNaN(anoNascimento)){
        console.log("Entre um ano válido!");
        anoNascimento = +prompt("Entre o ano de nascimento (AAAA): ".green);
    }
    let anoAtual = date_ob.getFullYear();
    let mesAtual = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    mesAtual = 12-mesAtual;
    let anosEleitor = Math.floor((((anoAtual - anoNascimento) *12) - mesAtual) / 12);
    return anosEleitor;
}

// Lista candidatos ------------------------------------------------------------------------
function listaCandidatos(){
    console.log(`Lista de candidatos:`.magenta +`
    ` + `${candidato1.numero} - ${candidato1.nome}`.red +`
    ` + `${candidato2.numero} - ${candidato2.nome}`.yellow +`
    ` + `${candidato3.numero} - ${candidato3.nome}`.cyan);
}
// Função autorizaVoto(validarAno) retornando: "Negado`, "Opcional" ou "Obrigatório" -------
function autorizaVoto(validarAno){
    if (validarAno > 130 ){
    console.log("Você deve ter menos de 130 anos!");
    iniciarVotacao();
    }
    if (validarAno <16 ){
        console.log(`A autorização para você votar foi ` + `NEGADO`.red.bold);
        return 1;
    } else if (validarAno > 15 && validarAno < 18 || validarAno > 69 && validarAno < 131) {
        console.log(`O seu voto é ` + `OPCIONAL`.green);
        let respEleitor = +prompt("Deseja votar? 1 = Sim ou 2 = Não: ");
        if (respEleitor === 1){
            listaCandidatos();
            votacao();
        }else{
            votarNovamente();
        }
        return 2;
    } else {
        console.log(`O seu voto é ` + `OBRIGATÓRIO`.green);
        return 3;    
    }
} 

// Função chamada votacao(autorizacao, voto) -----------------------------------------------
function votacao(){  
    // Valida e contabiliza o voto ou retorna a mensagem: "Você não pode votar"    
    let voto = prompt("Digite o número do seu candidato: ")
    if (Number(voto) === 13){
        candidato1.votos +=1;
    }else if (Number(voto) === 17){
        candidato2.votos +=1;
    }else if (Number(voto) ===  25){
        candidato3.votos +=1;
    }else if (branco.entrada == voto.toLocaleLowerCase()){
        branco.votos +=1;
    }else{
        nulo.votos +=1;
    }
    votarNovamente();            
}

// Ter uma função chamada exibirResultados() -----------------------------------------------
function exibirResultados(a, b, c){
    // Exibe o total de votos nulos, brancos e de cada candidato
    console.clear();
    prompt(`Pressione ` +`ENTER`.magenta +` para seguir
    `);
    console.log(`Total de votos de cada candidato:`.yellow);
    console.log(`${candidato1.nome}`.red +` obteve `+ `${candidato1.votos}`.red+` voto(s)`);
    console.log(`${candidato2.nome}`.yellow +` obteve `+ `${candidato2.votos}`.yellow+` voto(s)`);
    console.log(`${candidato3.nome}`.cyan +` obteve `+ `${candidato3.votos}`.cyan+` voto(s)`);
    console.log(`${branco.votos}`.green +` voto(s) em ` +`${branco.entrada}`.green +` contabilizado(s).`);
    console.log(`${nulo.votos}`.green + ` voto(s) `+`${nulo.entrada}`.green +` contado(s).
    `);

    // Qual candidato venceu a votação
    if (candidato1.votos > candidato2.votos && candidato1.votos > candidato3.votos){
        console.log(`${candidato1.nome} venceu as eleições!`.italic.red);
    }else if (candidato2.votos > candidato1.votos && candidato2.votos > candidato3.votos){
        console.log(`${candidato2.nome} venceu as eleições!`.italic.yellow);
    }else if (candidato3.votos > candidato1.votos && candidato3.votos > candidato2.votos){
        console.log(`${candidato3.nome} venceu as eleições!`.italic.cyan);
    }else if (candidato1.votos == candidato2.votos){
    console.log(`Teremos segundo turno entre ` +`${candidato1.nome}`.red + ` e` +` ${candidato2.nome}`.yellow);
    }else if (candidato1.votos == candidato3.votos){
        console.log(`Teremos segundo turno entre ` +`${candidato1.nome}`.red + ` e` +` ${candidato3.nome}`.cyan);
    }else if (candidato2.votos == candidato3.votos){
        console.log(`Teremos segundo turno entre ` +`${candidato2.nome}`.yellow + ` e` +` ${candidato3.nome}`.cyan);
    }
        
}

// Função que pergunta se há mais eleitores para votar -------------------------------------
function votarNovamente() {
	let seguir = +prompt("Digite 1 = Votar ou 2 = Ninguém para votar: ");
	if (seguir === 2) {
        exibirResultados(candidato1.votos, candidato2.votos, candidato3.votos);
        process.exit();
	} else if (seguir === 1) {
        iniciarVotacao();
    } else { 
		while (seguir !== 2 && seguir !== 1) {
			console.log("Entrada Inválida!".yellow);
			seguir = +prompt("Digite 1 = Votar ou 2 = Ninguém para votar: ");
		}
        iniciarVotacao();
	}
}

// Função principal do simulador -----------------------------------------------------------
function iniciarVotacao(){
    let anosEleitor = validarAno();
    if(autorizaVoto(anosEleitor) === 1){
        console.log("Você não pode votar");
        votarNovamente();              
    }
    listaCandidatos();  
    votacao();
}

console.clear();
console.log(`SIMULADOR DE VOTAÇÃO
`.rainbow.underline.italic);
iniciarVotacao();

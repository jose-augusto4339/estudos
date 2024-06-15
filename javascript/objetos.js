/*Assim como em qualquer outra linguagem, em javascript, objeto é um conjunto de dados ee/ou funcionalidades relacionadas.
*/

//sintaxe básica de objetos em javascrept

let objeto = {};

console.log(objeto);

//criacao de um objeto mais elaborado
//OBJETO LITERAL - escrevemos o conteúdo do objeto conforme o criamos
let pessoa = {
	nome: {
		primeiro: 'José',
		ultimo:'Augusto'
	},
	idade: 26,
	sexo: "Masculino",
	interesses:["programacao", "leitura"],
	bio: function() {
		console.log(
		this.nome.primeiro +
			" " +
			this.nome.ultimo +
			" tem " +
			this.idade +
			" anos de idade. Ele gosta de " +
			this.interesses[0] +
			" e " +
			this.interesses[1] +
			"."
		);
	},

	saudacao: function() {
		console.log("Oi! Eu sou " + this.nome.primeiro + " " + this.nome.ultimo + ".");
	},
};

console.log(pessoa.nome);
console.log(pessoa.nome[0]);
console.log(pessoa.idade);
console.log(pessoa.interesses[1]);
pessoa.bio();
pessoa.saudacao();

//Acessar as propriedades do objeto usando a notação de colchetes.

pessoa.idade;
pessoa.nome.primeiro;

pessoa["idade"];
pessoa["nome"]["primeiro"];

//Setando membros do objeto

pessoa.idade = 45;
pessoa["nome"]["ultimo"] = "Crachit"

console.log(pessoa.idade + " " + pessoa.nome.ultimo);

//Podemos também criar membros completamente novos

pessoa["olhos"] = "castanho";
pessoa.despedida = function(){
	console.log("Até mais galera!")
}

pessoa.despedida();

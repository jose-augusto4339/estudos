//HERANCA

function Person(first, last, age, gender, interest){
	this.name = {
		first,
		last,
	};
	this.agr = age;
	this.gender = gender;
	this.interest = interest;

// METODOS SERÃO DEFINIDOS NO PROTÓTIPO DO CONSTRUTOR
}

Person.prototype.greeting = function(){
	console.log("Hi! My name is " + this.name.first + " " + this.name.last);
}

//Contruindo uma classe Teacher que herda Person, onde, será adicionado um membro subject e será sobreescrito o método greeting.

//Criar construtor Teacher()

function Teacher(first, last, age, gender, interest, subject) {
	Person.call(this, first, last, age, gender, interest, subject);

	this.subject = subject;
}

//Para que o prototy herde os métodos definidos no prototype de Person deveremos fazer o seguinte

Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, "constructor", {
	value: Teacher,
	enumerable: false,
	writable: true,
});

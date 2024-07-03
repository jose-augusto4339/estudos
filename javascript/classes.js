//O ECMAScript 2015 introduz a sintaxe de classe em JavaScript como uma maneira de escrever classes reutilizáveis usando uma sintaxe mais fácil e mais limpa, que é mais semelhante a classes em C ++ ou Java. 

class Person() {
	constructor(first, last, age, gender, interests){
		this.name = {
			first,
			last,
		};
		
		this.age = age;
		this.gender = gender;
		this.interests = interests;
	}

	greeting() {
		console.log(`Hi! I'm ${this.name.first}`);
	}
	
	farewell(){
		console.log(`${this.name.first} has left the building. Bye for now!`);
	}
}

//HERANCA COM SINTAXE DE CLASSE
//Para criar uma subclasse, usamos a palavra-chave extends para informar ao JavaScript a classe na qual queremos basear nossa classe.

class Teacher extends Person{
	constructor(first, last, age, gender, interests, subject, grade){
		this.name = {
			first,
			last,
		};

		this.age = age;
		this.gender = gender;
		this.interests = interests;

		this.subject = subject;
		this.grade = grade;
	}
}

//GETTERS E SETTER
//
//Os getters e setters trabalham em pares. Um getter retorna o valor atual da variável e seu setter correspondente altera o valor da variável para o que ela define.
//Podemos tornar o código mais legível definindo o operador super() como o primeiro item dentro do constructor(). Isso chamará o construtor da classe pai e herdará os membros que especificarmos como parâmetros de super(), desde que sejam definidos lá

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

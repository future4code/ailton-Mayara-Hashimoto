
// Exercio 1
// a)
// Construtores são basicamente funções de inicialização de uma classe, 
//as quais são invocadas no momento em que objetos desta classe são criadas.

// b)
type Transaction = {
    description: string,
    value: number,
    date: string
  };

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  };
  // b)
  // uma vez ._.
  // c)
  // os membros da classe declarados como privados podem ser acessados ​​apenas pelas funções dentro da classe

// Exercicio 2

class Transactions {
   private date: string;
   private value: number;
   private description: string;
   
   constructor(date: string, value: number, description: string) {
     this.date = date;
     this.value = value;
     this.description = description
   }
 };

   class Bank {
   private accounts: UserAccount[];
 
   constructor(accounts: UserAccount[]) {
     this.accounts = accounts;
   }
 
 };

 const test = new UserAccount("07502905630", "May", 200)
 const testss = new UserAccount("07502945630", "Hyujnjin", 200)

// Exercicio 3

const tests = new Bank([test, testss])
console.table(tests)
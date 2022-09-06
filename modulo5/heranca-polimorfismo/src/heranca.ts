import { Client } from "./polimorfismo";

// Exercicio 1
export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
  constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ){
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name 
        this.password = password
    }
    public getId(): string { return this.id  }
    public getEmail(): string { return this.email }
    public getName(): string { return this.name } 
       // Exercicio 4 e 5
    public introduceYourself(): string { 	return `Olá, sou ${this.name}. Bom dia!` }
}
  // a)
  // b) o construtor aparece uma vez

// Exercicio 2

export class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string { return this.creditCard; }

  
}
export const useme = new Customer("001", "aonosorah@naver.com", "May", "password", "credcard")
console.table(useme)
  // a) uma vez
  // b) uma vez

// Exercicio 3
  // a) sim, pq a filha herda as informações da mãe, caso chame todo o objeto.

// Exercicio 4
  // a) 
  const customer = new Customer("001", "aonosorah@naver.com", "May", "password", "credcard")
  customer.introduceYourself()

console.log(customer)

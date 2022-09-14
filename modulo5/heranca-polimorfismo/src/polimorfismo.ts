// Exercicio 1

export interface Client {
    name: string;  
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
  };

  const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => { return 2; }
  };
  console.log(client)
    // a) Foi possivel imprimir todas as informações fornecidas.

  //  Exercicio 2
  export abstract class Place {
    constructor(protected cep: string) {}
    public getCep(): string { return this.cep; }
  }; 
  export class Residence extends Place {
    constructor( private dwellersQuantity: number, cep: string ) {
      super(cep);
    }
    public getDwellersQuantity(): number { return this.dwellersQuantity }
  }
  // Exercicio 3

  export class Industry extends Place {
    constructor( private machinesQuantity: number, cep: string ) { super(cep); }
    public getMachinesQuantity(): number { return this.machinesQuantity; }
  }
  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number, cep: string ) {
      super(cep); }
  }
  // Exercicio 4
  class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) { super(residentsQuantity, cep); }
  
    public getCpf(): string { return this.cpf; }
    public calculateBill(): number { return this.consumedEnergy * 0.75; }
  }

  // Exercicio 5
  class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) { super(floorsQuantity, cep); }
    public calculateBill(): number { return this.consumedEnergy * 0.53; }
    public getCnpj(): string { return this.cnpj; }
  }
  
  // Exercicio 6
  class IndustrialClinet extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, 
      getMachinesQuantity: number,
      cep: string
    ) { super(getMachinesQuantity, cep); }
  
    public getIndustryNumber(): string { return this.insdustryNumber; }
    public calculateBill(): number { return this.consumedEnergy * 0.45 + this.getMachinesQuantity() * 100; }
  }

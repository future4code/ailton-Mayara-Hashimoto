// Exercicio Quatro

enum setor {
    MKT = "Marketing",
    SALES = "Vendas",
    FINANCE = "Financeiro"
}

type profile = {
    nome: string,
    salario: number,
    setor: string,
    presencial: boolean
}

const employees: profile[] = [
	{ nome: "Marcos", salario: 2500, setor: setor.MKT, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: setor.SALES, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: setor.FINANCE, presencial: true},
	{ nome: "João" ,salario: 2800, setor: setor.MKT, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: setor.FINANCE, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: setor.SALES, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: setor.MKT, presencial: true }
]

console.table(employees)
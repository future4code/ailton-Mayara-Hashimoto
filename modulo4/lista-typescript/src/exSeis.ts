type client = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientList: client[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
const debts = clientList.map((value) => {
    return value.debitos
})
const sum = clientList.map((item) => {
	return item.debitos?.reduce((a:number, b:number) => a + b , 0)})
const lendMoney = clientList.map((item, index) => {
	if (item.saldoTotal - sum[index] < 0) {
		return { cliente:item.cliente, saldoTotal: item.saldoTotal - sum[index], debitos:[] }
	}
	
})

console.table(lendMoney)
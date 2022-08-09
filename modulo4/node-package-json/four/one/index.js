// 1 - a)
//       para chamar os processos no node, contamos como array, pulando sempre os dois primeiros parâmetros [0] e [1],
//       ou seja, a partir do process.argv[2], nós podemos atribuir valores

// 1 - b)

const par = () => {
    if (process.argv.length === 4) {
        console.log(`Olá," ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)
    } else {
        console.log("Esperava mais parâmetros")
    };
    
};
par()

    

// 1 - c)
const parDois = () => {
    if (process.argv.length === 4) {
        console.log(`Olá, ${process.argv[2]}, você tem ${process.argv[3]} anos. 
    E em sete anos você terá ${Number(process.argv[3]) + 7} anos. `)
    } else {
        console.log("Esperava mais parâmetros")
    };
};
    parDois()
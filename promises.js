// AULA 1 e 2 - COMANDOS:
//Executa uma Chamada a função fornecida (comunicacaoPerdida)
//Caso a comunicação tenha sido perdida, rejeita a promessa com: “Comunicação perdida”
//Caso a comunicação tenha sido enviada, resolve a promessa com: “Ok, todos vivos na estação”
//Trata o caso de sucesso (then) exibindo: `Sucesso: ${msgSucesso}`
//Trata o caso de falha (catch) exibindo: `Falha: ${msgFalha}`

import chalk from "chalk"
const comunicacao1 = 'enviada';

function comunicacaoPerdida() {

    return new Promise((resolve, reject) => {
    
        if(comunicacao1 == 'enviada'){
            resolve(chalk.green('Ok, todos vivos na estação'))
        } else {
            reject(chalk.red('Comunicacao perdida'))
        }
    })
}
comunicacaoPerdida()
.then((msgSucesso) => {
    console.log(`Sucesso: ${msgSucesso}`);
})
.catch((msgFalha) => {
    console.log(`Falha: ${msgFalha}`);
});


//CORRECAO COM O FACILITADOR
function comunicacaoPerdida(boolean){
    return new Promise((resolvido, rejeitado) => {
        setTimeout(() => {
            if(boolean){
                resolvido({Sucesso: "Todos estão vivos na estação!"})
            } else {
                rejeitado({Error: "Comunicação perdida!"})
            }
        }, 2500);
    })
}

// Informar se a comunicação teve sucesso ou não.
const comunicacao = true

comunicacaoPerdida(comunicacao)
.then((resposta) => {
    console.log(resposta)
})
.catch((e) => {
    console.log(e)
})
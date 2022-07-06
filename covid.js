import chalk from "chalk"

//AULA 2 - COMANDOS:
//Executa uma Chamada a função fornecida (temperaturaPaciente) com um delay de 3 segundos
//Caso a temperatura não seja febril, rejeita a promessa com: “Paciente não-febril”
//Caso a temperatura seja febril, resolve a promessa com: “Paciente febril”
//Trata o caso de sucesso (then) exibindo: `[ALERTA]: ${msgSucesso}` na cor vermelha
//Trata o caso de falha (catch) exibindo: `[INFO]: ${msgFalha}` na cor verde

const paciente = false;

function temperaturaPaciente(boolean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (boolean) {
                resolve(chalk.red("Paciente Febril"))
            } else {
                reject(chalk.green("Paciente não-febril"))
            }
        }, 3000);
    })

}

temperaturaPaciente(paciente)
    .then((msgSucesso) => {
        console.log(`[ALERTA]: ${msgSucesso}`)
    })
    .catch((msgFalha) => {
        console.log(`[INFO]: ${msgFalha}`)
    })
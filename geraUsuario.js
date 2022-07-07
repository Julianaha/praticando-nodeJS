// aula 3

import fetch from "node-fetch";
import chalk from "chalk";

const url = `https://randomuser.me/api/`

async function geraUsuarios(numero){
    try {
        const response = await fetch(`${url}?results=${numero}`)
        var data = await response.json()
        data.results.map((atual) => {
            console.log(chalk.green(atual.name.first," ", atual.name.last))
        })
    } catch(e) {
        console.log(e)
    }
}
geraUsuarios(4)


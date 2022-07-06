//AULA 1
//Passar uma Callback, uma string e executar em 5 segundos
function receba(string){
    console.log(string)
}

function qualquer(string, receba){
    setTimeout(() => {
        receba(string)
     }, 5000);
}

console.log(qualquer('olaaaa', receba))
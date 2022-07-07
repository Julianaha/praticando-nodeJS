//aula 3

//usando node-fetch
import fetch from "node-fetch"; // import node-fetch

const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camisa&source=nanook`

//Uso do fetch com then e catch

fetch(url)
.then(response => response.json())
.then(response => console.log(response))

// fetch com async/await e try catch
try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
} catch (e) {
    console.log(e)
}

//usando com axios
import axios from "axios"; 

//Uso do axios com then e catch
axios.get(url)
.then((response) => {console.log(response.data)})
.catch(e => console.log(e))

// axios com async/await e try catch
try {
    const request = await axios.get(url)
    console.log(request.data)
} catch (e) {
    console.log(e)
}
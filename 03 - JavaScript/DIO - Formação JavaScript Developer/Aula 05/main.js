//let url = 'https://pokeapi.co/api/v2/pokemon/?'

let offset = 1;
let limit = 150;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function pokemonToHtml (pokemon){
    return `
        <li id="pokemonList" class="planta">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img  src="./img/001.png" alt="${pokemon.name}">
            </div>
        </li>
    `;
} 


const pokemonLista = document.getElementById('pokemonList');
// Retorna um processamento assincrono, que é executado e onde se obterá a resposta em algum momento, ou seja um promise, uma hora, dando certo vc obtem um resultado
fetch(url)
    .then(function (response) {
    /*         response
            .json()
            .then(function(responseBody){
                console.log(responseBody);
            }) // Você pode tratar dentro do primeiro then, ou fazer ele retornar o valor convertido e tratar em um segundo then na sequencia, reduzindo o número de catch
 */
    return response.json();
})
//  .then((response) => response.jason()) // outra possibilidade também é substituir essa função acima por uma arrow function, simplificando o código
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonLista.innerHTML += pokemonToHtml(pokemon);
        }
    })
    .catch((error) => console.error(error))
    .finally(() => console.log("Requisição concluída.")); 











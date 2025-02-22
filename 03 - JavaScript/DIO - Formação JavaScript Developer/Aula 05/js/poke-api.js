


const pokeApi = {}; // Objeto


pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
};


// Função do objeto, que faz o consumo da PokeAPI
// Retorna um processamento assincrono, que é executado e onde se obterá a resposta em algum momento, ou seja um promise, uma hora, dando certo vc obtem um resultado
pokeApi.getPokemons =  (offset = 0, limit = 151) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)

        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
        .then((detalheRequisicao) => Promise.all(detalheRequisicao))
        .then((detalhePokemon) => detalhePokemon)
        
        .catch((error) => console.error(error));
};







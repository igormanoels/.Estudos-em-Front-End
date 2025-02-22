
function typesToLi(pokemonTypes){
    return pokemonTypes.map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`)
}

function pokemonToHtml (pokemon){
    console.log(pokemon)
    return `
        <li id="pokemonList" class="${pokemon.types[0].type.name}">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name.toUpperCase()}</span>
            <div class="detail">
                <ol class="types">
                   ${typesToLi(pokemon.types).join("")}
                </ol>
                <img  src="${pokemon.sprites.other.dream_world.front_default}">
            </div>
        </li>
    `;
} 


const pokemonLista = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    
    const novoHtml = pokemons.map((pokemon) => pokemonToHtml(pokemon));

    //    const htmlAtualizado = novaLista.join(''); 
    //    pokemonLista.innerHTML += htmlAtualizado;

    // Outra forma de fazer  
    pokemonLista.innerHTML = novoHtml.join(""); // É preciso usar o join, do contrário os valores serão criados no html com ','



    /*  
        Outra forma de fazer fora o 'map'   
        const listItens = [];

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            listItens.push(pokemonToHtml(pokemon));
        }
        console.log(listItens);
        pokemonLista.innerHTML += pokemonToHtml(pokemon); 
    */
});













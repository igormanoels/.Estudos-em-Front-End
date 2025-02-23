


function typesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function pokemonToHtml(pokemon) {
  console.log(pokemon);
  return `
        <li id="pokemonList" class="${pokemon.types[0].type.name}">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name.toUpperCase()}</span>
            <div class="detail">
                <ol class="types">
                   ${typesToLi(pokemon.types).join("")}
                </ol>
                <img  src="${
                  pokemon.sprites.other.dream_world.front_default
                }" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

const pokemonLista = document.getElementById("pokemonList");

/* pokeApi.getPokemons().then((pokemons = []) => {
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
    
}); */

function requisitarAPI(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const novoHtml = pokemons.map((pokemon) => pokemonToHtml(pokemon));
    pokemonLista.innerHTML = novoHtml.join("");
  });
}



function buscaGeracao() {
    let gen = parseInt(document.getElementById("opcoes").value);

    let offset;
    let limit;

    switch (gen) {
        case 0:
            offset = 0;
            limit = 1025;
        break;

        case 1:
            offset = 0;
            limit = 151;
        break;

        case 2:
            offset = 151;
            limit = 100;
        break;

        case 3:
            offset = 251;
            limit = 135;
        break;

        case 4:
            offset = 386;
            limit = 107;
        break;

        case 5:
            offset = 493;
            limit = 156;
        break;

        case 6:
            offset = 649;
            limit = 72;
        break;
    }

    requisitarAPI(offset, limit);

  /*     pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const novoHtml = pokemons.map((pokemon) => pokemonToHtml(pokemon));
        pokemonLista.innerHTML = novoHtml.join("");
    }); */
}

window.onload = () => requisitarAPI(0, 1025);


//requisitarAPI(0, 1025);
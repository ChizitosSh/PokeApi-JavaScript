const pokeApi = 'https://pokeapi.co/api/v2/generation/1/'

function selectPoke() {
    fetch(pokeApi, {
        method: 'get'
    })
    .then((response) => response.json())
    .then((data) => {
        const pokemons = data.pokemon_species;
        let html = '';
        
        for (const i in pokemons) {
            html += '<option value=' + pokemons[i].id + '>' + pokemons[i].name + '</option>'
        }

        document.getElementById('pokemon').innerHTML = html;
    //     for (const index in pokemons) {
    //         document.write(pokemons[index].name);
    //         document.write("<br>");
    // }
    });
    
}

selectPoke()


// function selectPoke() {
//     fetch(pokeApi, {
//         method: 'get'
//     })
//     .then((response) => response.json())
//     .then(function (allpokemon) {
//         allpokemon.results.forEach(function (pokemon){
//             fetchPokemonData(pokemon);
//         })
//     })
    
// }

// function fetchPokemonData(pokemon){
    
// }
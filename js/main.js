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
            html += '<option value=' + pokemons[i].name + '>' + pokemons[i].name + '</option>'
        }

        document.getElementById('pokemon').innerHTML = html;
    });
    
}

selectPoke()

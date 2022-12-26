function selectPoke() {
    const pokeApi = 'https://pokeapi.co/api/v2/generation/1/'
    
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

    document.getElementById('pokemon').addEventListener('change', (e) => {
        showPokemonImg(e.target.value);
    });
    
}

selectPoke()


function showPokemonImg(pokemonName) {
    const urlImg = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(urlImg, {
        method: 'get'
    })
    .then((response) => response.json())
    .then((data) => {
        const img = data.sprites.front_default;
        console.log(img);
        const img_container = document.getElementById('img_container');
        img_container.innerHTML = `<img src="${img}" alt="${pokemonName}">`;
    });
}



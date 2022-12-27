// Se obtienen los datos de los pokemones

const pokemon = document.getElementById('pokemon')

pokemon.addEventListener('change', addPokemons)

function addPokemons(e) {
    showPokemonImg(e.target.value);
    showPokemonName(e.target.value);
}

function selectPoke() {
    const pokeApi = 'https://pokeapi.co/api/v2/generation/1/'
    
    fetch(pokeApi, {
        method: 'get'
    })
    .then((response) => response.json())
    .then((data) => {
        const pokemons = data.pokemon_species;
        let html = '';

        sortByName(pokemons)
        
        for (const i in pokemons) {
            html += '<option value=' + pokemons[i].name + '>' + pokemons[i].name + '</option>'
        }

        pokemon.innerHTML = html; // Añade los options con los nombres de los pokemones al select
    });
}

selectPoke()

// Muestra las imágenes del pokemon seleccionado

function showPokemonImg(pokemonName) {
    const urlImg = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(urlImg, {
        method: 'get'
    })
    .then((response) => response.json())
    .then((data) => {
        const img = data.sprites.front_default;
        
        const img_container = document.getElementById('img_container');
        img_container.innerHTML = `<img src="${img}" alt="${pokemonName}">`;
    });
}

// Muestra el nombre del pokemon seleccionado

function showPokemonName(pokemonName) {
    const pokeName = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(pokeName, {
        method: 'get'
    })
    .then((response) => response.json())
    .then((data) => {
        const name = data.name;

        const text_container = document.getElementById('text_container');
        text_container.innerHTML = `<h2 class="text-center">${name}</h2><i class="bi bi-suit-heart" id="${name}"></i>`;
    })
    
}

// Se ordena los nombres alfabéticamente

function sortByName(pokemons) {
    pokemons.sort((a, b) => a.name.localeCompare(b.name))
}



// Botón agregar a favoritos Listo

const btn_add_favourites = document.getElementById('btn_add_favourites');

btn_add_favourites.addEventListener('click', confirmAddFavourites)



// Debe solicitar la confirmación de usuario
function confirmAddFavourites() {
    if(confirm('está usted seguro?')) { // Si le da a aceptar llama a la función addFavourites
        addFavourites()
    } else {
        console.log('vuelva pronto')
    }
}

// Obtenemos los datos en un object
function addFavourites() {
    const pokemonName = pokemon.value; // Obtiene el value del option seleccionado
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const heart = document.getElementById(pokemonName); 
    
    fetch(url, {
        method: 'get'
    })
    .then((response) => response.json())
    .then((data) => {
        const img = data.sprites.front_default;
        const name = data.name;
        const type = data.types[0].type.name;

        let pokeData = { // Este objeto debería enviarse a la base de datos
            name: name,
            img: img,
            type: type
        }

        console.log(pokeData);

        if('bi-suit-heart'){
            heart.classList.remove('bi-suit-heart') // Remueve la clase bi-suit-heart
            heart.classList.add('bi-suit-heart-fill') // Añade la clase bi-suit-heart-fill
        }
        
    });
}

// Agrega los datos del pokemon a la base de datos



// El background del nombre del pokemon debe cambiar
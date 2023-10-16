const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

function searchPokemon(){
    const pokeName = document.getElementById('pokemon').value.toLowerCase();
    const pokeImg = document.getElementById('pokeImg');

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const pokemonData = JSON.parse(this.responseText);
            console.log(pokemonData);
            document.getElementById('pokeName').innerHTML = pokemonData.name;
            pokeImg.setAttribute('src', pokemonData.sprites.front_default);
            pokeImg.setAttribute('alt', pokemonData.name);
        }
    };
    xhttp.open('GET', pokeApi + pokeName, true);
    xhttp.send();
}

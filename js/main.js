const listaPokemon = document.querySelector("#lista-pokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/"

for (let i = 1; i <= 1; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => console.log(data))
}

function mostrarPokemon(data) {

}
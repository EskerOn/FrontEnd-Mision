
const fetchPokemon = () => {

    const pokeNameInput = document.getElementById("pokeName");
    const nameScreen = document.getElementById('name-screen'); //name-screen
    const aboutScreen = document.getElementById('about-screen'); // about-text screen
    const heightScreen = document.getElementById('height-screen'); // type screen
    const weightScreen = document.getElementById('weight-screen'); // spices screen
    
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/sad-pikachu.gif");
            nameScreen.innerHTML = "No encontrado";
            weightScreen.innerHTML = "--";
            heightScreen.innerHTML = "--";
            aboutScreen.innerHTML = "--";
            pokeNameInput.value = '';
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            console.log(pokeImg);
            nameScreen.innerHTML = data.name;
            weightScreen.innerHTML = `Peso: ${data.weight / 10}kg`;
            heightScreen.innerHTML = `Altura: ${data.height * 10}cm`;
            aboutScreen.innerHTML = `No.${data.id}<br>Tipo:${data.types[0].type.name}<br>Experiencia base:${data.base_experience}<br>Movimiento:${data.moves[0].move.name}`;
            pokeNameInput.value = '';
            pokeImage(pokeImg);
           
            
        }
    });
}

const pokeImage = (url) => {
    const imageScreen = document.getElementById('main-screen'); // image screen
    imageScreen.src = url;
}




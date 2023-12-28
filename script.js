const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };


const url = " https://pokeapi.co/api/v2/pokemon/";
let card = document.querySelector('.card')
let btn = document.querySelector('button')
let heading = document.querySelector('.heading')

const getpokedata = async() => {
    let id = Math.floor(Math.random()* 151)
    let response = await fetch(url + id)
    let data = await response.json()
    console.log(data);
    generatecard(data)
    return data
}


getpokedata()


const generatecard  = (data) => {
   let hp = data.stats[0].base_stat
   let imgsrc = data.sprites.other.dream_world.front_default;
   let pokename = data.name[0].toUpperCase() + data.name.slice(1);
   const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;
  const themeColor = typeColor[data.types[0].type.name];
   console.log(pokename);

    card.innerHTML = `
    <p class="hp"> <span> <b>HP</b><span class="hpNum"> ${hp} </span> </span></p>
    <img src="${imgsrc}" alt="" srcset="">

    <h2>${pokename}</h2>
    
    <div class="types">
            
    </div>
    <div class="items">
        <p> <b>${statAttack}</b> <br> Attack</p>
        <p><b>${statDefense} </b>  <br> Defence</p> 
        <p><b>${statSpeed}</b> <br> Speed</p>

    </div>
    
    `
    typesname(data.types);
    styleCard(themeColor);

}

let typesname = (types) => {

    types.forEach((item) => {
     let span = document.createElement('span')
     span.textContent = item.type.name;
     document.querySelector('.types').appendChild(span)

    })
}

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.style.boxShadow = `1px 1px 7px ${color}`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
      
    });
  };


  btn.addEventListener("click", getpokedata);
window.addEventListener("load", getpokedata);
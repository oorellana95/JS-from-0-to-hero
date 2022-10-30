// Ahora que tenemos nuestro HTML y CSS, es hora de darle vida con JavaScript <3

const getRandomNumber = (numMin, numMax) => {
  return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}; 

const pokemon1I = getRandomNumber(1, 150)
const pokemon2ID = getRandomNumber(1, 150)

const getPokemon = async (pokeID) => {
  const response = await fetch(` https://pokeapi.co/api/v2/pokemon/${pokeID}`);
  const data = await response.json();
  return data;
}; 

const catchEmPokemons = () => {
  preparePokemon(1)
  preparePokemon(2)
}

const preparePokemon = async (pokemonNumber) => {
  const pokemonId = getRandomNumber(1, 150)
  const pokemonData = await getPokemon(pokemonId)
  console.log(pokemonData.stats[0].base_stat)
  document.querySelector(`.pokemon-${pokemonNumber}__img`).src = pokemonData.sprites.other['official-artwork']['front_default']
  document.querySelector(`.pokemon-${pokemonNumber}__hp`).innerHTML = pokemonData.stats[0]['base_stat']
  document.querySelector(`.pokemon-${pokemonNumber}__name`).innerHTML = pokemonData['name']
  document.querySelector(`.pokemon-${pokemonNumber}__attack`).innerHTML = pokemonData.stats[1]['base_stat']
  document.querySelector(`.pokemon-${pokemonNumber}__defense`).innerHTML = pokemonData.stats[2]['base_stat']
  document.querySelector(`.pokemon-${pokemonNumber}__type`).innerHTML = pokemonData.types.map((objType) => objType.type.name);
}

document.querySelector(`.button__catch`).addEventListener('click', catchEmPokemons)


// 🎁 Bonus! - Vamos a crear la función fightPokemons que permitirá que los pokemons interactúen y peleen

  // 1. Seleccionar los datos que ahora tenemos en el HTML y que trajimos desde la API: para ambos pokemon: HP, attack, defense y name.


  // 2. Crear una función que calcule el daño hecho a cada pokemon. Necesitamos el poder del atacante y la defensa y los HP del que defiende
  // - Calcular el daño restando el ataque de la defensa, con esto definimos si el pokemon sufrió daño.
  // - Calcular los nuevos HP: Si la defensa es menor a 0, significa que el ataque logró perforarla e hizo daño, en este caso vamos a restar el daño de los HP, si no, la HP debe quedar igual pues no hubo da˜ño
  // En esta función vamos a devolver la nueva HP del pokemon atacado y además el da˜ñó que sufrió. - Luego vamos a necesitar estos datos -


  // 3. Narrar la batalla ;). Para esto vamos a usar el elemento modal__text, aquí vamos a ir llenando su innerHTML.
  // Empecemos con el Pokemon 1.



  // Ahora calculemos el daño que le hizo a pokemon2 y cuánta vida le queda, usemos la función de calcular daño



  // Vamos a narrar qué pasó en este ataque.Si el pokemon 1 tiene un ataque mayor a la denfesa del pokemon 2, debemos narrar que logra perforar su defensa
  // y describir cuánto daño recibió y cuáles son ahora sus puntos de vida
  // Si el ataque del pokemon 1 no es mayor que la denfesa del pokemon 2, significa que no logra perforarla y por lo tanto no hay daño.


  // Ahora el Pokemon2, mismo procedimiento.


  // Definamos el ganador que sería el más daño haya hecho al otro pokemon.
  // Recordemos que los puntos de daño son negativos!!
  // - Si el daño recibido por pokemon 2 es menor al de pokemon 1, (es decir un mayor número negativo), significa que pokemon 1 hizo más daño, por lo tanto es el gandor!
  // - En caso de que sea menor el daño de pokemon 1, significa que pokemon 2 es el gandor
  // - El último caso posible es que ambos hayan recibido el mismo daño, en ese caso sería un empate.



// 7️⃣ - Vamos a practicar eventos en JS, de esta manera vamos a poder controlar cuándo traer pokemons desde la interfaz
// Nuestra función fetch va a traer pokemons cada que el código es ejecutado, es decir cuando la página se recarga
// Vamos a añadir un botón que recargue la página en cada click, así podemos obtener nuevos pokemons random cada vez.
// 🤓 Pista: - Seleccionar el elmento HTML del botón
//           - Llamar a la función createPokemons solo cuando se dé click a ese botón (lee sobre eventListeners https://www.w3schools.com/js/js_htmldom_eventlistener.asp )
// 🕵🏻‍♀️ En nuestra app tenemos 3 botones. El de Catch!, Fight! y el que OK! que aparece en el modal cuando pelean los pokemons
// Cada botón tendrá atado un eventListener que vamos a construir juntos ❤️



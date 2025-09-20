// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si me miras, yo no lo dejo pasar", time: 18.8 },
  { text: "que tu buscas dime y te puedo ayudar", time: 20 },
  { text: "nunca dice nada", time: 25 },
  { text: "quizas yo te vuelva a encontrar", time: 28 },
  { text: "y es verdad yo sí quería hacerte bailar", time: 31.5 },
  { text: "Pero pasan los vasos y miro tus labios", time: 43 },
  { text: "Y solo me queda pensar", time: 46 },
  { text: "Que tu eres tan bonita y a el no lo necesitas", time: 50 },
  { text: "Si quieres que te sane mi niña solo invita", time: 53 },
  { text: "Al lugar que tu sabes, te llevo, dejamos que el fuego", time: 60 },
  { text: "Por si solo nos deje actuar, tu te ves tan bonita", time: 65 },
  { text: "Falso amor ya no lo necesitas", time: 72.5 },
  { text: "Miento si te digo que vi a otra mejor", time: 73.5 },
  { text: "No hay otra mejor, si solo me dejas actuar", time: 80 },
  { text: "La verdad si quiero estar con vos", time:  87},
  { text: "Pero pasan los vasos y miro tus labios y solo me queda pensar", time: 96 },
  { text: "Yo creo que te voy a tener jamas", time: 108 },
  { text: "En otra vida quizas me puedas amar", time: 111 },
  { text: "Quizas en otra vida el no está y no pasa na", time: 117 },
  { text: "No me arrepiento, casi atino la primera vez", time: 124 },
  { text: "Nena lo siento, si es que nunca te lo confesé", time: 128 },
  { text: "Aunque tus labios esten mudos, fui tu momento mas duro", time: 133 },
  { text: "Y es verdad yo si quería hacerte bailar", time: 141 },
  { text: "Pero pasan los vasos y miros tus labios y solo me queda pensar", time: 150 },
  { text: "que tu eres tan bonita y a el no lo necesitas", time: 158 },
  { text: "Si quieres que te sane mi niña solo invita", time: 162 },
  { text: "Al lugar que tu sabes, te llevo, dejamos que el fuego", time: 168 },
  { text: "Por si solo nos deje actuar, tu te ves tan bonita", time: 173 },
  { text: "Falso amor ya no lo necesitas", time: 180 },
  { text: "Miento si te digo que vi a otra mejor, no hay otra mejor", time: 185 },
  { text: "Si solo me dejas actuar", time: 191 },
  { text: "La verdad si quiero estar con vos<3", time: 193 },
  { text: "Pero pasan los vasos y miro tus labios", time: 205 },
  { text: "y solo me queda pensar", time: 206 },
  { text: "Tu te ves tan bonita, falso amor ya no lo necesitas", time: 231 },
  { text: "Miento si te digo que vi a otra mejor, no hay otra mejor", time: 239 },
  { text: "Si solo me dejas actuar, la verdad si quiero estar con vos", time: 245 },
  { text: "Pero pasan los vasos y miro tus labios y solo me queda pensar", time: 259 },
  { text: "Te amo infinito junto a la kikis<3", time: 266 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
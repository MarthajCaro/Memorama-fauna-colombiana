/* ===================================
   1. INFORMACIÓN DE LOS ANIMALES
   =================================== */

// Cada objeto representa un animal.
// Contiene la ruta de su imagen, nombre y dato curioso.

const TEMAS = {
  fauna: {
    titulo: "🌿 Memorama Fauna Colombiana",
    cartas: [
      {
        img: "img/fauna/guacamaya.jpg",
        nombre: "Guacamaya",
        dato: "Las guacamayas pueden vivir más de 50 años.",
      },
      {
        img: "img/fauna/colibri.jpg",
        nombre: "Colibrí",
        dato: "Los colibríes pueden volar hacia atrás.",
      },
      {
        img: "img/fauna/rana-dorada.jpg",
        nombre: "Rana dorada",
        dato: "Es uno de los animales más venenosos del mundo.",
      },
      {
        img: "img/fauna/jaguar.jpg",
        nombre: "Jaguar",
        dato: "Es el felino más grande de América.",
      },
      {
        img: "img/fauna/mariposa-morfo.jpg",
        nombre: "Mariposa morfo",
        dato: "Sus alas presentan un llamativo color azul.",
      },
      {
        img: "img/fauna/condor.jpg",
        nombre: "Cóndor andino",
        dato: "Es el ave nacional de Colombia.",
      },
      {
        img: "img/fauna/tortuga-marina.jpg",
        nombre: "Tortuga marina",
        dato: "Algunas llegan a las playas colombianas a poner sus huevos.",
      },
      {
        img: "img/fauna/delfin-rosado.jpg",
        nombre: "Delfín rosado",
        dato: "Habita en los ríos de la Amazonía.",
      },
      {
        img: "img/fauna/perezoso.jpg",
        nombre: "Perezoso",
        dato: "Es conocido por sus movimientos lentos.",
      },
      {
        img: "img/fauna/titi-cabeciblanco.jpg",
        nombre: "Tití cabeciblanco",
        dato: "Es una especie endémica de Colombia.",
      },
      {
        img: "img/fauna/ballena-jorobada.jpg",
        nombre: "Ballena jorobada",
        dato: "Visita el Pacífico colombiano para reproducirse.",
      },
      {
        img: "img/fauna/flamenco.jpg",
        nombre: "Flamenco",
        dato: "Su coloración rosada está relacionada con su alimentación.",
      },
    ],
  },

  instrumentos: {
    titulo: "🎵 Memorama de Instrumentos",
    cartas: [
      {
        img: "img/instrumentos/acordeon.png",
        nombre: "Acordeón vallenato",
        dato: "Es el instrumento principal del vallenato.",
      },
      {
        img: "img/instrumentos/arpa.png",
        nombre: "Arpa llanera",
        dato: "Es el instrumento principal de la música llanera.",
      },
      {
        img: "img/instrumentos/bandola.png",
        nombre: "Bandola llanera",
        dato: "Es un instrumento de cuerda típico de los Llanos que lleva la melodía del joropo.",
      },
      {
        img: "img/instrumentos/bombo.png",
        nombre: "Bombo del Pacífico",
        dato: "Marca el ritmo en la música del Pacífico, como el currulao.",
      },
      {
        img: "img/instrumentos/caja.png",
        nombre: "Caja vallenata",
        dato: "Es un tambor pequeño que se toca con las manos y marca el ritmo del vallenato.",
      },
      {
        img: "img/instrumentos/cuatro.png",
        nombre: "Cuatro llanero",
        dato: "Es una guitarra pequeña de cuatro cuerdas usada en el joropo.",
      },
      {
        img: "img/instrumentos/guacharaca.png",
        nombre: "Guacharaca",
        dato: "Es un instrumento que se raspa con una varilla y acompaña al vallenato.",
      },

      {
        img: "img/instrumentos/maracas.png",
        nombre: "Maracas llaneras",
        dato: "Llevan semillas dentro y se agitan para marcar el ritmo del joropo.",
      },
      {
        img: "img/instrumentos/llamador.png",
        nombre: "Llamador",
        dato: "Es un tambor pequeño y agudo de la cumbia que marca el pulso.",
      },
      {
        img: "img/instrumentos/marimba.png",
        nombre: "Marimba de chonta",
        dato: "Sus teclas se hacen con madera de palma de chonta y es el símbolo de la música del Pacífico.",
      },
      {
        img: "img/instrumentos/tambora.png",
        nombre: "Tambora",
        dato: "Es un tambor grande y grave que marca el ritmo de la cumbia y el bullerengue del Caribe colombiano.",
      },
      {
        img: "img/instrumentos/tiple.png",
        nombre: "Tiple",
        dato: "Es una guitarra pequeña de 12 cuerdas típica de la música andina.",
      },
    ],
  },

  platos: {
    titulo: "🍲 Memorama de Platos Típicos",
    cartas: [
      {
        img: "img/platos/ajiaco.png",
        nombre: "Ajiaco santafereño",
        dato: "Es la sopa típica de Bogotá, con tres tipos de papa y guascas.",
      },
      {
        img: "img/platos/arepa.png",
        nombre: "Arepa con queso",
        dato: "Se hace con maíz y queso, y se come en el desayuno o la merienda.",
      },
      {
        img: "img/platos/arroz.png",
        nombre: "Arroz con pollo",
        dato: "Mezcla arroz, pollo y verduras, y es común en reuniones familiares.",
      },
      {
        img: "img/platos/bandeja.png",
        nombre: "Bandeja paisa",
        dato: "Lleva frijoles, arroz, chicharrón, huevo, carne, chorizo, morcilla, plátano y aguacate.",
      },
      {
        img: "img/platos/caldo.png",
        nombre: "Caldo de costilla",
        dato: "Es una sopa de costilla de res con papa, típica del desayuno.",
      },
      {
        img: "img/platos/changua.png",
        nombre: "Changua",
        dato: "Es una sopa de leche y huevo del altiplano cundiboyacense.",
      },
      {
        img: "img/platos/chicharron.png",
        nombre: "Chicharrón",
        dato: "Es la piel del cerdo frita hasta quedar crocante.",
      },
      {
        img: "img/platos/empanada.png",
        nombre: "Empanada",
        dato: "Es una masa de maíz frita, rellena de carne y papa.",
      },
      {
        img: "img/platos/lechona.png",
        nombre: "Lechona",
        dato: "Es típica del Tolima: un cerdo relleno de arroz y arvejas.",
      },
      {
        img: "img/platos/patacon.png",
        nombre: "Patacón con hogao",
        dato: "Es plátano verde aplastado y frito, con salsa de tomate y cebolla.",
      },
      {
        img: "img/platos/sancocho.png",
        nombre: "Sancocho",
        dato: "Es una sopa con carne, plátano y yuca.",
      },
      {
        img: "img/platos/tamal.png",
        nombre: "Tamal tolimense",
        dato: "Se envuelve en hoja de plátano y lleva arroz, cerdo, pollo y huevo.",
      },
    ],
  },

  frutas: {
    titulo: "🍓 Memorama de Frutas Colombianas",
    cartas: [
      {
        img: "img/frutas/carambolo.png",
        nombre: "Carambolo",
        dato: "Al cortarlo en rodajas forma una estrella de cinco puntas.",
      },
      {
        img: "img/frutas/chontaduro.png",
        nombre: "Chontaduro",
        dato: "Es el fruto de una palma y es típico del Pacífico colombiano.",
      },
      {
        img: "img/frutas/curuba.png",
        nombre: "Curuba",
        dato: "Es alargada, de pulpa anaranjada y sabor ácido, muy usada en jugos.",
      },
      {
        img: "img/frutas/granadilla.png",
        nombre: "Granadilla",
        dato: "Tiene cáscara dura y semillas cubiertas de pulpa gelatinosa.",
      },
      {
        img: "img/frutas/guanabana.png",
        nombre: "Guanábana",
        dato: "Su pulpa blanca y cremosa se usa en jugos y postres.",
      },
      {
        img: "img/frutas/lulo.png",
        nombre: "Lulo",
        dato: "También se le conoce como naranjilla.",
      },
      {
        img: "img/frutas/mamoncillo.png",
        nombre: "Mamoncillo",
        dato: "Se come chupando la pulpa que cubre una semilla grande.",
      },
      {
        img: "img/frutas/mango.png",
        nombre: "Mango",
        dato: "Es una de las frutas tropicales más populares.",
      },
      {
        img: "img/frutas/maracuya.png",
        nombre: "Maracuyá",
        dato: "Su pulpa es muy aromática y ácida, ideal para jugos.",
      },
      {
        img: "img/frutas/moras.png",
        nombre: "Moras",
        dato: "Crecen en clima frío y se usan en jugos y dulces.",
      },
      {
        img: "img/frutas/pitahaya.png",
        nombre: "Pitahaya",
        dato: "La amarilla es dulce y tiene semillas pequeñas que se comen con la pulpa.",
      },
      {
        img: "img/frutas/uchuva.png",
        nombre: "Uchuva",
        dato: "Viene protegida por una cáscara en forma de capuchón.",
      },
    ],
  },
};

/* ===================================
   2. VARIABLES DEL JUEGO
   =================================== */

// Función para seleccionar elementos HTML por su ID.
const $ = (id) => document.getElementById(id);

let temaActual = "fauna";
let totalPairs = 8;
let firstCard = null;
let lock = false;
let moves = 0;
let found = 0;
let seconds = 0;
let timer = null;
let finished = false;

/* ===================================
   3. FUNCIÓN PARA MEZCLAR
   =================================== */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

/* ===================================
   4. GENERAR TARJETAS
   =================================== */

function createCards() {
  // Tomamos las cartas del tema elegido según la dificultad.
  const selected = shuffle([...TEMAS[temaActual].cartas]).slice(0, totalPairs);

  // Creamos dos tarjetas por cada carta.
  const cards = shuffle([...selected, ...selected]);

  const board = $("board");

  board.innerHTML = "";

  cards.forEach((item) => {
    const card = document.createElement("div");

    card.className = "card";
    card.dataset.name = item.nombre;

    card.innerHTML = `
      <div class="inner">
        <div class="face back">
          <div class="logo">?</div>
        </div>

        <div class="face front">
          <img src="${item.img}" alt="${item.nombre}">
          <span class="name">${item.nombre}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      flipCard(card, item);
    });

    board.appendChild(card);
  });

  fitBoard();
}

/* ===================================
   4.1 AJUSTAR EL TABLERO A LA PANTALLA
   =================================== */

function fitBoard() {
  const board = $("board");
  const gap = 10;

  // Fácil: 4x3, Medio: 4x4, Difícil: 6x4
  const cols = totalPairs === 12 ? 6 : 4;
  const rows = Math.ceil((totalPairs * 2) / cols);

  const maxW = (board.clientWidth - gap * (cols - 1)) / cols;
  const maxH = ((board.clientHeight - gap * (rows - 1)) / rows) * (3 / 4);

  const cardW = Math.max(40, Math.min(maxW, maxH));

  board.style.gridTemplateColumns = `repeat(${cols}, ${cardW}px)`;
  board.style.setProperty("--card-w", `${cardW}px`);
  board.style.setProperty("--card-h", `${(cardW * 4) / 3}px`);
  board.style.setProperty(
    "--name-size",
    `${Math.max(10, Math.min(15, cardW * 0.13))}px`,
  );
}

window.addEventListener("resize", fitBoard);

/* ===================================
   5. MOSTRAR EL TIEMPO
   =================================== */

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = String(seconds % 60).padStart(2, "0");

  return `${minutes}:${remaining}`;
}

/* ===================================
   6. VOLTEAR Y COMPARAR TARJETAS
   =================================== */

function flipCard(card, item) {
  if (
    lock ||
    finished ||
    card === firstCard ||
    card.classList.contains("matched")
  ) {
    return;
  }

  // El cronómetro comienza con el primer clic.
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      $("time").textContent = formatTime(seconds);
    }, 1000);
  }

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  moves++;
  $("moves").textContent = moves;

  if (firstCard.dataset.name === card.dataset.name) {
    firstCard.classList.add("matched");
    card.classList.add("matched");

    found++;

    $("pairs").textContent = `${found}/${totalPairs}`;
    $("fact").textContent = `💡 ${item.nombre}: ${item.dato}`;

    firstCard = null;

    if (found === totalPairs) {
      winGame();
    }
  } else {
    lock = true;

    const first = firstCard;
    const second = card;

    setTimeout(() => {
      first.classList.remove("flipped");
      second.classList.remove("flipped");

      firstCard = null;
      lock = false;
    }, 900);
  }
}

/* ===================================
   7. GUARDAR EL MEJOR RESULTADO
   =================================== */

// Cada tema y nivel guarda su propio récord.
function saveBest() {
  const key = `memorama-best-${temaActual}-${totalPairs}`;

  const currentBest = JSON.parse(localStorage.getItem(key));

  const newBest = {
    moves: moves,
    seconds: seconds,
  };

  if (
    !currentBest ||
    moves < currentBest.moves ||
    (moves === currentBest.moves && seconds < currentBest.seconds)
  ) {
    localStorage.setItem(key, JSON.stringify(newBest));
  }

  showBest();
}

/* ===================================
   8. MOSTRAR EL MEJOR RESULTADO
   =================================== */

function showBest() {
  const key = `memorama-best-${temaActual}-${totalPairs}`;

  const best = JSON.parse(localStorage.getItem(key));

  if (best) {
    $("best").textContent =
      `${best.moves} movimientos - ${formatTime(best.seconds)}`;
  } else {
    $("best").textContent = "Sin récord todavía";
  }
}

/* ===================================
   9. FINALIZAR EL JUEGO
   =================================== */

function winGame() {
  finished = true;

  clearInterval(timer);
  timer = null;

  saveBest();

  $("result").textContent =
    `¡Excelente! Terminaste en ${moves} movimientos y ${formatTime(seconds)}.`;

  $("modal").classList.add("show");
}

/* ===================================
   10. INICIAR O REINICIAR PARTIDA
   =================================== */

function startGame() {
  clearInterval(timer);

  firstCard = null;
  lock = false;
  finished = false;

  moves = 0;
  found = 0;
  seconds = 0;
  timer = null;

  $("time").textContent = "0:00";
  $("moves").textContent = "0";
  $("pairs").textContent = `0/${totalPairs}`;

  $("fact").textContent =
    "Encuentra las parejas para descubrir datos curiosos.";

  $("modal").classList.remove("show");

  showBest();
  createCards();
}

/* ===================================
   11. CONFIGURAR LOS NIVELES
   =================================== */

$("levels")
  .querySelectorAll("button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      $("levels")
        .querySelectorAll("button")
        .forEach((item) => {
          item.classList.remove("active");
        });

      button.classList.add("active");

      totalPairs = Number(button.dataset.pairs);

      startGame();
    });
  });

/* ===================================
   11.1 CONFIGURAR LOS TEMAS
   =================================== */

$("themes")
  .querySelectorAll("button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      $("themes")
        .querySelectorAll("button")
        .forEach((item) => {
          item.classList.remove("active");
        });

      button.classList.add("active");

      // Cambiamos de tema y actualizamos el título.
      temaActual = button.dataset.theme;
      document.querySelector(".game-header h1").textContent =
        TEMAS[temaActual].titulo;

      startGame();
    });
  });

/* ===================================
   12. BOTONES DE REINICIO
   =================================== */

$("restart").addEventListener("click", startGame);

$("again").addEventListener("click", startGame);

/* ===================================
   13. INICIAR EL JUEGO
   =================================== */

startGame();

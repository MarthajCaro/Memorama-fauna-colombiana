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
        img: "img/instrumentos/guitarra.jpg",
        nombre: "Guitarra",
        dato: "Normalmente tiene 6 cuerdas.",
      },
      // ...las otras 11 cartas
    ],
  },

  platos: {
    titulo: "🍲 Memorama de Platos Típicos",
    cartas: [
      // ...las 12 cartas
    ],
  },

  frutas: {
    titulo: "🍓 Memorama de Frutas Colombianas",
    cartas: [
      {
        img: "img/frutas/lulo.jpg",
        nombre: "Lulo",
        dato: "También se le conoce como naranjilla.",
      },
      {
        img: "img/frutas/mora.jpg",
        nombre: "Mora",
        dato: "Es muy usada en jugos y crece bien en clima frío.",
      },
    ],
  },
};

/* ===================================
   2. VARIABLES DEL JUEGO
   =================================== */

// Función para seleccionar elementos HTML por su ID.
const $ = (id) => document.getElementById(id);

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

// Mezcla aleatoriamente los elementos de un arreglo.
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
  // Seleccionamos los animales según la dificultad.
  const selected = shuffle([...ANIMALES]).slice(0, totalPairs);

  // Creamos dos tarjetas por cada animal.
  const cards = shuffle([...selected, ...selected]);

  const board = $("board");

  board.innerHTML = "";

  cards.forEach((animal) => {
    const card = document.createElement("div");

    card.className = "card";
    card.dataset.name = animal.nombre;

    card.innerHTML = `
      <div class="inner">
        <div class="face back">
          <div class="logo">?</div>
        </div>

        <div class="face front">
          <img src="${animal.img}" alt="${animal.nombre}">
          <span class="name">${animal.nombre}</span>
        </div>
      </div>
    `;

    // Cuando hacemos clic, ejecutamos flipCard.
    card.addEventListener("click", () => {
      flipCard(card, animal);
    });

    board.appendChild(card);
  });

  // Ajustamos el tamaño de las tarjetas a la pantalla.
  fitBoard();
}

/* ===================================
   4.1 AJUSTAR EL TABLERO A LA PANTALLA
   =================================== */

// Calcula el tamaño de las tarjetas para que todo quepa sin scroll.
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

// Reajusta si cambia el tamaño de la ventana.
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

function flipCard(card, animal) {
  // Evitamos clics cuando no se puede jugar.
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

  // Guardamos la primera tarjeta.
  if (!firstCard) {
    firstCard = card;
    return;
  }

  // Ya seleccionamos la segunda tarjeta.
  moves++;
  $("moves").textContent = moves;

  // Comparamos los nombres.
  if (firstCard.dataset.name === card.dataset.name) {
    firstCard.classList.add("matched");
    card.classList.add("matched");

    found++;

    $("pairs").textContent = `${found}/${totalPairs}`;

    $("fact").textContent = `💡 ${animal.nombre}: ${animal.dato}`;

    firstCard = null;

    // Verificamos si encontramos todas las parejas.
    if (found === totalPairs) {
      winGame();
    }
  } else {
    // Las tarjetas no coinciden.
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

function saveBest() {
  const key = `memorama-best-${totalPairs}`;

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
  const key = `memorama-best-${totalPairs}`;

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
    "Encuentra las parejas para descubrir datos de la fauna colombiana.";

  $("modal").classList.remove("show");

  showBest();

  // Generamos las tarjetas del nivel seleccionado.
  createCards();
}

/* ===================================
   11. CONFIGURAR LOS NIVELES
   =================================== */

$("levels")
  .querySelectorAll("button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      // Quitamos la selección del nivel anterior.
      $("levels")
        .querySelectorAll("button")
        .forEach((item) => {
          item.classList.remove("active");
        });

      // Activamos el nivel seleccionado.
      button.classList.add("active");

      // Actualizamos la cantidad de parejas.
      totalPairs = Number(button.dataset.pairs);

      // Comenzamos una nueva partida.
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

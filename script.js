const fotos = [
    { archivo: "01.jpg", frase: "Bueno esta foto, es la primera que nos tomamos, con la chichis de perra jajajaja" },
    { archivo: "02.jpg", frase: "Aquí fue la primera foto que nos tomamos juntas, donde ya nos hablábamos más..." },
    { archivo: "03.jpg", frase: "Aquí salimos en un blog muy famoso de la bola roja..." },
    { archivo: "04.jpg", frase: "Esta foto no me acuerdo a qué debió la ocasión, solo me acuerdo que ahí ya éramos muy unidas" },
    { archivo: "05.jpg", frase: "Me acuerdo que en los tiempos de esta foto, tu agarrabas mi celular para jugar pubg..." },
    { archivo: "06.jpg", frase: "Unas semanas antes de que nos dejáramos de hablar, no sé por qué no había otros filtros..." },
    { archivo: "07.jpg", frase: "Ya habíamos vuelto a hablar y salíamos a cuajis o Santa Fe, a hacernos pendejas" },
    { archivo: "08.jpg", frase: "Esta tiene 2 años, la tomaste en tu cumple 20, donde me quedé en tu casa jajajaja" },
    { archivo: "09.jpg", frase: "Ese día me ibas a acompañar al hospital Escandón, por lo de la fiscalía, gracias por estar" },
    { archivo: "10.jpg", frase: "En casa del pretendiente de Jimena, que iba emputada y nos apropiamos de la bocina" },
    { archivo: "11.jpg", frase: "Fackkkk esto fue un día después de que me fui de tu casa, Jimena veía brillitos en el mojito" },
    { archivo: "12.jpg", frase: "La peda en el depa, cuando Amanda Miguel se puso como cabello de India jajaja" },
    { archivo: "13.jpg", frase: "Tú estabas ensayando y no podíamos por la risa, Jimena ya nos iba a correr" },
    { archivo: "14.jpg", frase: "Camino a Acapulco, ibas bien dormida y yo mandando señales de vida a tu mamá" },
    { archivo: "15.jpg", frase: "Ya en la playita, tomando corona jajajaja" },
    { archivo: "16.jpg", frase: "Intentamos una foto aesthetic pero el sol nos chingó la vista" },
    { archivo: "17.jpg", frase: "Vídeo documentado por tu mamá, bailando el payaso dorado jajaja" },
    { archivo: "18.jpg", frase: "Te acompañé por primera vez a Devlyn y nos burlábamos de la colmuda" },
    { archivo: "19.jpg", frase: "La tomaste tú, de esas veces que no tenías nada que hacer" },
    { archivo: "20.jpg", frase: "Fiesta de Halloween, la cual terminé con cruda pesada jajajaja" },
    { archivo: "21.jpg", frase: "La venta, cuando fuimos a dormir a tu house y Abril azotaba puertas" }
  ];
  
  let index = 0;
  let musica = document.getElementById('musica');
  
  // Reproducir música con interacción del usuario
  document.body.addEventListener('click', function() {
    musica.play().catch(e => console.log("La reproducción automática fue bloqueada:", e));
  }, { once: true });
  
  function comenzar() {
    document.querySelector('.portada').style.display = 'none';
    document.getElementById('pagina').style.display = 'block';
    mostrarFoto();
    
    // Intentar reproducir música nuevamente al comenzar
    musica.play().catch(e => console.log("Error al reproducir música:", e));
  }
  
  function mostrarFoto() {
    const contenedor = document.getElementById('pagina');
    contenedor.style.animation = 'none';
    void contenedor.offsetWidth; // Trigger reflow
    contenedor.style.animation = 'pasarHoja 1s ease-out';
    
    contenedor.innerHTML = `
      <img src="https://github.com/tu_usuario/tu_repositorio/raw/main/assets/img/${fotos[index].archivo}" alt="Foto ${index + 1}">
      <div class="frase">${fotos[index].frase}</div>
      <div class="navegacion">
        <button onclick="anterior()">← Anterior</button>
        <button onclick="siguiente()">Siguiente →</button>
      </div>
      <div class="contador">Foto ${index + 1} de ${fotos.length}</div>
    `;
  }
  
  function siguiente() {
    if (index < fotos.length - 1) {
      index++;
      mostrarFoto();
    }
  }
  
  function anterior() {
    if (index > 0) {
      index--;
      mostrarFoto();
    }
  }
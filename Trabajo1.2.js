const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});


let tareas = [];


function menu() {
  console.log("\n--- MENÚ ---");
  console.log("1. Listar tareas");
  console.log("2. Agregar tarea");
  console.log("0. Salir");

  readline.question("Seleccione una opción: ", (opcion) => {
    if(opcion === "1") listarTareas();
    else if(opcion === "2") agregarTarea();
    else if(opcion === "0") {
      console.log("¡Hasta luego!");
      readline.close();
    } else {
      console.log("Opción inválida");
      menu();
    }
  });
}

// Listar tareas
function listarTareas() {
  if(tareas.length === 0) {
    console.log("No hay tareas.");
    menu();
    return;
  }

  tareas.forEach((t, i) => {
    console.log(`${i+1}. ${t.titulo} (Estado: ${t.estado}, Dificultad: ${"⭐".repeat(t.dificultad)})`);
  });

  readline.question("Seleccione una tarea para ver detalle (0 para volver): ", (num) => {
    const index = parseInt(num)-1;
    if(num === "0") menu();
    else if(index >=0 && index < tareas.length) {
      const t = tareas[index];
      console.log("---------------------");
      console.log("Título: " + t.titulo);
      console.log("Estado: " + t.estado);
      console.log("Creación: " + t.fechaCreacion.toLocaleString());
      console.log("Dificultad: " + "⭐".repeat(t.dificultad));
      console.log("---------------------");
      readline.question("Cambiar estado (pendiente/en curso/terminada) o ENTER para volver: ", (estado) => {
        if(estado.trim() !== "") t.estado = estado;
        menu();
      });
    } else {
      console.log("Número inválido");
      listarTareas();
    }
  });
}

// Agregar tarea
function agregarTarea() {
  readline.question("Título: ", (titulo) => {
    readline.question("Dificultad (1=fácil,2=medio,3=difícil): ", (dif) => {
      const tarea = {
        titulo: titulo,
        estado: "pendiente",
        fechaCreacion: new Date(),
        dificultad: parseInt(dif) || 1
      };
      tareas.push(tarea);
      console.log("Tarea agregada");
      menu();
    });
  });
}


menu();

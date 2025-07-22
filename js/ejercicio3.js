const crearTarea = document.getElementById('formTareas')


formTareas.addEventListener('submit', function(Event){
    Event.preventDefault();

    const inputTarea = document.getElementById('tarea').value.trim();
    const divcol = document.createElement('div');
    const divcard = document.createElement("div");
    const divcardBody = document.createElement("div"); 
    const h5 = document.createElement("h5"); 
    const p = document.createElement("p");
    const btnEliminar = document.createElement('button')
    
    divcol.className = "col-md-4 col-lg-3"; 
    divcard.className = "card h-100";
    divcardBody.className = "card-body";
    h5.className = "card-title";
    h5.textContent = "Tarea";
    p.className = "card-text";
    p.textContent = inputTarea;

    btnEliminar.className = 'btn btn-danger btn-sm mt-3'
    btnEliminar.textContent = 'Eliminar'

    btnEliminar.addEventListener('click', function(){
        divcol.remove();
    })

    const row = document.querySelector(".row-gap-3");
  
  row.appendChild(divcol);
  divcol.appendChild(divcard);
  divcard.appendChild(divcardBody);
  divcardBody.appendChild(h5);
  divcardBody.appendChild(p);
  divcardBody.appendChild(btnEliminar);
  formularioTarea.reset();
})
const formTareas = document.getElementById('formTareas')



formTareas.addEventListener('submit', function(Event){
    Event.preventDefault();

    const inputTarea = document.getElementById('tarea').value.trim();
    const divcol = document.createElement('div');
    const divcard = document.createElement("div");
    const divcardBody = document.createElement("div");  
    const p = document.createElement("p");
    const btnEliminar = document.createElement('button')
    
    divcol.className = "col-12"; 
    divcard.className = "card h-100";
    divcardBody.className = "card-body d-flex flex-column justify-content-between align-items-center";
    const divAdicional = document.createElement('div');
    divAdicional.className = 'd-flex justify-content-between align-items-between'
    p.className = "card-text m-0";
    p.textContent = inputTarea;

    btnEliminar.className = 'btn btn-danger btn-sm mt-3'
    btnEliminar.textContent = 'Eliminar'


    btnEliminar.addEventListener('click', function(){
        divcol.remove();
    });

    const row = document.querySelector(".row-gap-3");
  
  row.appendChild(divcol);
  divcol.appendChild(divcard);
  divcard.appendChild(divcardBody);
  divAdicional.appendChild(p);
  divAdicional.appendChild(btnEliminar);
  divcardBody.appendChild(divAdicional);
  formTareas.reset();
})
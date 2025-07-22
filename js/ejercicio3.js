const crearTarea = document.getElementById('formTareas')
const tareas = document.querySelector('.row-gap-3');

tareas.addEventListener('click', function(Event){
    const clickedCard = Event.target.closest('card');
    if(clickedCard){
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            if (card !== clickedCard) {
                card.classList.remove('selected');
            }
            })
        clickedCard.classList.toggle('selected')
    }
})

formTareas.addEventListener('submit', function(Event){
    Event.preventDefault();

    const inputTarea = document.getElementById('tarea').value.trim();
    const divcol = document.createElement('div');
    const divcard = document.createElement("div");
    const divcardBody = document.createElement("div");  
    const p = document.createElement("p");
    const btnEliminar = document.createElement('button')
    const inputCheckbox = document.createElement('input')
    
    divcol.className = "col-12"; 
    divcard.className = "card h-100";
    divcardBody.className = "card-body d-flex justify-content-between align-items-center";
    p.className = "card-text ";
    inputCheckbox.type = 'checkbox'
    p.textContent = inputTarea;

    btnEliminar.className = 'btn btn-danger btn-sm mt-3'
    btnEliminar.textContent = 'Eliminar'

    btnEliminar.addEventListener('click', function(){
        const cardToRemove = Event.target.closest('.col-12');
        if (cardToRemove) {
            cardToRemove.remove();
        }
    });

    const row = document.querySelector(".row-gap-3");
  
  row.appendChild(divcol);
  divcol.appendChild(divcard);
  divcard.appendChild(divcardBody);
  divcardBody.appendChild(inputCheckbox);
  divcardBody.appendChild(p);
  divcardBody.appendChild(btnEliminar);
  formTareas.reset();
})
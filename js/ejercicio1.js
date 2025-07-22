const botonIniciar = document.getElementById('botonIniciar');
const ingresoNumero = document.getElementById('ingresoNumero');
const submitNumero = document.getElementById('submitNumero');
const adivinanza = document.getElementById('adivinanza');

let numeroMag = 0;

function iniciarJuego(){
    numeroMag = Math.floor(Math.random() * 100 + 1);
    adivinanza.value = '';
    ingresoNumero.classList.remove('d-none');
    console.log(numeroMag)
}

function numCorrecto(){
    const numeroCheck = parseInt(adivinanza.value);
    if(isNaN(numeroCheck) || numeroCheck < 1 || numeroCheck > 100){
        alert('Ingresá un número válido')
        adivinanza.value='';
        return;
    }
    if(numeroCheck===numeroMag){
        alert(`¡Adivinaste! El número mágico es ${numeroMag}`)
        resetJuego();
    }else{
        alert('Número incorrecto. Intenta nuevamente')
    }
    adivinanza.value = '';
}

function resetJuego(){
    ingresoNumero.classList.add('d-none');
}

botonIniciar.addEventListener('click', iniciarJuego);
submitNumero.addEventListener('click', numCorrecto);
adivinanza.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        numCorrecto();
    }
})
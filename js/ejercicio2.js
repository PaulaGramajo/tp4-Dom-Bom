class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,anioNac){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNac = anioNac;
    }
    mostrarGeneracion(){
        if(this.anioNac>=1994 && this.anioNac<=2010){
            alert(`${this.nombre} pertenece a la Generación Z, el rasgo característico que los representa es la irreverencia`)
        } else if(this.anioNac>=1981 && this.anioNac<=1993){
            alert(`${this.nombre} pertenece a la Generación Y (millennials), el rasgo característico que los representa es la frustración`)
        } else if(this.anioNac>=1969 && this.anioNac<=1980){
            alert(`${this.nombre} pertenece a la Generación X, el rasgo característico que los representa es la obsesión por el éxito`)
        } else if(this.anioNac>=1949 && this.anioNac<=1968){
            alert(`${this.nombre} pertenece a la Generación Baby Boom, el rasgo característico que los representa es la ambición`)
        } else if(this.anioNac>=1930 && this.anioNac<=1948){
            alert(`${this.nombre} pertenece a la Generación de los niños de la posguerra (Silent Generation), el rasgo característico que los representa es la austeridad`)
        } else{
            alert(`No puede determinarse a que generación pertenece ${this.nombre}`)
        }
    };

    esMayorDeEdad(){
        if(this.edad>=18){
            alert(`${this.nombre} es mayor de edad`)
        } else{
            alert(`${this.nombre} es menor de edad`)
        }  
    };

    mostrarDatos(){
        return alert(`
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            DNI: ${this.dni}
            Sexo: ${this.sexo === 'F' ? 'Femenino' : 'Masculino'}
            Peso: ${this.peso} kg
            Altura: ${this.altura} cm
            Año de Nacimiento: ${this.anioNac}
            `)
        
    };
}

let persona = null
const formPersona = document.getElementById('formPersona');
const botonMetodos = document.getElementById('botonMetodos');
const datosPersona = document.getElementById('datosPersona');
const btnMostrarGen = document.getElementById('btnMostrarGen');
const btnMayorEdad = document.getElementById('btnMayorEdad');

formPersona.addEventListener('submit',function(Event){
    Event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseInt(document.getElementById('altura').value);
    const anioNac = parseInt(document.getElementById('anioNac').value);


persona = new Persona(nombre,edad,dni,sexo,peso, altura,anioNac);

datosPersona.textContent = persona.mostrarDatos();
botonMetodos.classList.remove('d-none');
});

btnMostrarGen.addEventListener('click', function(){
    if(persona){
        persona.mostrarGeneracion()
    }
});

btnMayorEdad.addEventListener('click',function(){
    if(persona){
        persona.esMayorDeEdad();
    };
})
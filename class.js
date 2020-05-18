"use strict";

/**
 * Azucar sintáctico
 * podemos usarlos como los objetos habituales
 */
class Libro {
    constructor(autor, titulo){
        this.autor = autor,
        this.titulo = titulo
    }

    mostrar(){
        console.log(this);
    }
}

class LibroTec extends Libro{
    constructor(autor, titulo, categoria = "valor por defecto"){
        super(autor, titulo),
        this.categoria = categoria
    }
}

let libro1 = new Libro("J. Perez", "Aprende angular");
let libro2 = new LibroTec("A. Peres", "Aprende React")

libro1.mostrar() //Libro { autor: 'J. Perez', titulo: 'Aprende angular' }
libro2.mostrar() //LibroTec { autor: 'A. Peres', titulo: 'Aprende React', categoria: 'valor por defecto' }

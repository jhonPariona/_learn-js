"use strict";

/*----------------------------------------------------------------------------/*
    $Mantener el scope de declaración
/*----------------------------------------------------------------------------*/
let oDatos = {
    precio : 12,
    iva : 1.16
}

oDatos.calcularIvaAsync = function () {
    setTimeout(function(){
        let precioFInal = this.precio * this.iva
        console.log('🔥: oDatos.calcularIvaAsync -> precioFInal', precioFInal) //NaN
    }, 1000);
}

oDatos.calcularIvaAsync()

oDatos.calcularIvaAsyncArrowFunctions = function () {
    setTimeout(() => {
        let precioFInal = this.precio * this.iva
        console.log('🔥: oDatos.calcularIvaAsync -> precioFInal', precioFInal) //13.919999999999998
    }, 1000);
}

oDatos.calcularIvaAsyncArrowFunctions()

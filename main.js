import {Base} from './modules/base.js'
import {Ruta} from './modules/ruta.js'
//const Base = require ('./modules/base.js');
/*
let base =  new Base('Colima', '1');
let ruta = new Ruta('1')
console.log(base);
console.log(ruta);
*/

//Botones
var btnAdd = document.querySelector('#addBase')
var btnDel = document.querySelector('#delBase')
var btnSearch = document.querySelector('#searchBase')
var btnList = document.querySelector('#listBase')
var btnChangePos = document.querySelector('#changePosBase')
var btnCreateCard = document.querySelector('#btnCreateCard')


//Inputs

var xbaseList = document.querySelector('#baseList')
var xbaseName = document.querySelector('#baseName')
var xbaseTime = document.querySelector('#baseTime')
var xbaseNext = document.querySelector('#baseNext')
var xbasePrevious = document.querySelector('#basePrevious')




var ruta = new Ruta(1)
var base;

btnAdd.addEventListener('click', () => {
console.clear()
    let nombre = document.getElementById('nameBase').value
    let minutos = Number(document.getElementById('minsBase').value)

    if(nombre == '' && minutos == ''){
        alert('No se pase, llene todos los campos')
    }else if (nombre != '' && minutos != ''){
        let base = new Base (nombre,minutos)
        ruta.agregar(base)
        console.log(ruta)
    }
    
})

btnSearch.addEventListener('click', () =>{
console.clear();

let nombre = document.getElementById('nameBase').value
let base = ruta.buscar(nombre)
xbaseName.innerHTML =  `Nombre: ${base.nombre}`
xbaseTime.innerHTML = `Duracion: ${base.minutos}`
xbaseNext.innerHTML = `Siguiente: ${base.siguiente.nombre}`
xbasePrevious.innerHTML = `Anterior: ${base.anterior.nombre}`

console.log(`Nombre: ${base.nombre}`)
console.log(`Duracion: ${base.minutos}`)
console.log(`Siguiente: ${base.siguiente.nombre}`)
console.log(`Anterior: ${base.anterior.nombre}`)

})


btnDel.addEventListener('click', () => {
console.clear()

    let nombre = document.getElementById('nameBase').value
    ruta.borrar(nombre)
    console.log(ruta)
})

btnList.addEventListener('click', () =>{
console.clear()

    xbaseList.innerHTML = `Bases: ${ruta.listar()}`
    console.log(ruta.listar())
})

btnChangePos.addEventListener('click', () =>{
console.clear();

    let nombre = document.getElementById('nameBase').value
    let minutos = document.getElementById('minsBase').value
    var posicion = document.getElementById('positionBase').value
    let base = new Base(nombre,minutos)

    ruta.insertar(base,posicion)
    console.log(ruta)
    
})

btnCreateCard.addEventListener('click', () => {
console.clear();

    
    let inicio = document.querySelector('#startTime')
    let final = document.querySelector('#endTime')

    let initialHour = new Date()
    initialHour.setHours(inicio.value.slice(0,2))
    initialHour.setMinutes(inicio.value.slice(-2))

    let endingHour = new Date()
    endingHour.setHours(final.value.slice(0,2))
    endingHour.setMinutes(final.value.slice(-2))

    let nombre = document.getElementById('startBase').value

    console.log(ruta.recorrido(nombre, initialHour, endingHour))
    var divMsg = document.createElement('div')
    var xbasesListed = document.querySelector('#listedBases')
    xbasesListed.appendChild(divMsg)
    
    divMsg.innerHTML = `${ruta.recorrido(nombre, initialHour, endingHour)}`

})



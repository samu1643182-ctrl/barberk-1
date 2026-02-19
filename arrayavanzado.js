/*ARRAY: PROPIEDADES, ACCESO & PROGRAMACION */


/*1. SINTAXIS ARRAY()
let listaDeProfesores= Array("Jhon","Nestor", "Eliana","vanesa", "santi")
console.log(listaDeProfesores)

const lista_de_numeros= Array (1,2,3,4,5,6,9)
console.log(lista_de_numeros)

const listaNumeroUnico =Array (2)
console.log(listaNumeroUnico)
console.log("-------------------------")

//2.sintaxis literal[]
const numeroUnicoLiteral=[2]
console.log(numeroUnicoLiteral, typeof numeroUnicoLiteral)
console.log(Array.isArray(numeroUnicoLiteral))
//3. array mixto
let arrayMixto=[2,"texto", true,null,[false,"hola",45555555],
{
    nombre: "Nestor",
    edad:23
},"otro"
] 
console.log(arrayMixto)
console.log("----------------------")

/*array:accesibilidad*//*
const primera_posicion= listaDeProfesores[0]
console.log(primera_posicion)

const tamañoMixto= arrayMixto.length
console.log(tamañoMixto)

/*array: mutabilidad *//*
listaDeProfesores.push ("johan")
console.log(listaDeProfesores)//mutabilidad

//inmutables
const nuevosProfes= listaDeProfesores.concat("Maturana")
console.log(listaDeProfesores)
console.log(nuevosProfes)*/

/*verificacion array*//*
const ListaDeFrutas = ["personalbar", "manzana", "uva", "mango", "noni"]
const VerificarArray= Array.isArray(ListaDeFrutas)
console.log(VerificarArray)
console.log ("es un array:", Array.isArray(listaDeProfesores
))*/
//EJERCICIO PRACTICO:suma de todos los numeros [1-5], usando array ()
console.log("--------------------")
/*const num = Array(1,2,3,4,5)
let suma = 0

for (let i = 0; i < num.length; i++) {
    suma += num[i]
}

console.log(suma)
console.log("---------------")*/
/*metodo push & pop*/
//push-mutable

const listaDePaises=["argentina", "venezuela", "vaticano"]
const nuevosPaises = listaDePaises.push("colombia")

console.log(listaDePaises)//array otiginal + mutacion
console.log("tamaño:",nuevosPaises)//tamaño
//pop- mutable
const eliminarPais = listaDePaises.pop()
console.log(eliminarPais)
console.log(listaDePaises)
listaDePaises[0]= "zamba"
console.log(listaDePaises)
const emptyArray= []
console.log(emptyArray.pop())

listaDePaises.splice(1,1)
console.log(listaDePaises)





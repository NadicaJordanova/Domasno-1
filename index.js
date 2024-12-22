// 1 core moduli
// * http - za kreiranje i rakuvanje  na server
// * assert - za debagiranje i testiranje
// * fs (file system) - za interakcija so datotecen sistem na nashiot kompjuter
// * path - so ova ja utvrduvame patekata na nashiot direktorium
// * process - ova ni dava informacii so koi procesi nashata aplikacija raboti
//  os - ni dava informacii za koi operativen sistem se naogja nasata node.js aplikacija


//!2 lokalni moduli
//  ova se moduli kreirani od nas

// 3 third party moduli
// * mongoose, express, dotev, ejs, morgan...
// ovie moduli se instaliraat so npm package manager



// povtoruvanje na js
// funkcionalna deklaracija
function sobirok (a,b){
 return a + b
}
sobirok(2, 3)
console.log(`sobirokot e ${sobirok(2, 3)}`)


// funkcionalni ekspresii
const proizvod = function(a, b){
    return a * b
}

console.log(`Proizvod e ${proizvod(2, 3)}`)

// fat arrow function - oneliners
const razlika = (a, b) => {
    return a - b
}
console.log(`Razlikata e ${razlika(6, 3)}`)



// metodi

const ucenik ={
    ime: "Stavre",
    pozdrav : function(){
        console.log(`Zdravo, ${ucenik.ime}`)
    },
}

ucenik.pozdrav();

// IIFE - immediately invoked function expresion

(function (){
    console.log(`funkcija`);
})();


//? zadaca br 1: Da se kreira funkcionalna ekspresja so ime c2f koja ke konvertira celziusovi stepeni vo harenhajt

function c2f(celsious){
    far = celsious * 9/5 + 32
    return far
}
const FarResult = c2f(30)
console.log(FarResult)

console.log(c2f())

function f2c(far) {
    celsious = (far -32) * 5/9
    if(celsious <= 0){
        console.log(`NISKA TEMPERATURA`)
    }
    else if (celsious <= 22){
        console.log(`UMERENA TEMPERATURA`)
    }
    else if(celsious >= 22){
        console.log(`VISOKA TEMPERATURA`)
    }
    return celsious;
}
const f2cResultat = f2c(200)
console.log(f2cResultat)

//  High order functions

function mnozenje(broj1){
    return function(broj2){
        return broj1 * broj2
    }
}

const prva = mnozenje(2)

console.log(prva(5))

function calculator(operacija){
    return function(a, b){
        switch(operacija){
            case "soberi":
                return a + b;
            case "odzemi":
                return a - b;
            case "pomnozi":
                return a * b;
            case "podeli":
                return a / b;
        };
    };
};
const soberiOperacija = calculator('soberi');
console.log(soberiOperacija(5, 3))

// Funkcija koja ke zema kako argument c2f ili f2c i koja ke gi pretvora celzius vo far i obrtno

function pretvori(typeConvert){
    return function(temp){
        if(typeConvert == "c2f"){
            return temp * 9/5 + 32
        }
        else if(typeConvert == "f2c")
            return (temp -32) * 5/9
    }
    }
const c2ff = pretvori("c2f")
console.log(c2f(30))

const f2cc = pretvori("f2c")
console.log(f2c(40))
// greska da se poprave nekade


// TYPEOF
 console.log(typeof undefined)
 console.log(typeof 230)
 console.log(typeof 12n)
 console.log(typeof false)
console.log(typeof "undifined")
console.log(typeof null)
console.log(console.log)

// BOOLEAN TRUE AND FALSE 
console.log(Boolean(1))   
// ture
console.log(Boolean(0))
// false
console.log(Boolean('1'))
// true
console.log(Boolean(''))
// false

// Test
console.log(`test ${+true}`)
console.log(`test2 ${+false}`)
console.log(`test2 ${+''}`)


console.log(2 > 1)
console.log(2 == '2')
// isti vrednosti - true
console.log(2 === '2')
// isti tipovi - false

// || - ili  &&-and


console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log("---------")

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Ternary operators
// uslov ? ako uslovot e tocen : ako uslovot e netocen
const reperZaPolnoletnost = 18;
const vozrastNaCovek = 26;

const proverka = vozrastNaCovek >= reperZaPolnoletnost ? 'polnoleten' : 'maloleten'

console.log(proverka)

// Working with arrays
const arrayEden = [5, 2, 3, 5, 6, 7]
const arrayDva = [5, 5, 7, 9, 3, 7]
const arrayNov = []

// for(let i = 0; i<(arrayEden.length); i++){
//     arrayNov[i] = arrayEden[i]+1;
// }
// console.log(arrayNov)

// for(let i = 0; i<(arrayEden.length); i++){
//     console.log(`test ${i}`)
// }



// high order funkcija - prima druga funkcija, vrakja druga funkcija kako argument
arrayEden.forEach((broj, index) => {
    arrayNov[index] = broj + 1
   })
   console.log(arrayNov)

// map 
const arrayTri = arrayEden.map((broj, i) => {
    return broj + 5
})
console.log(arrayTri)

// Reduce 
const rezultat = arrayDva.reduce((acc, s) => {
    return acc - s;
}, 100)

console.log(rezultat)

// sort
console.log(arrayEden)
arrayEden.sort((a, b) => a - b)
console.log(arrayEden)


// filter vrakja koi odgovaraat na nekoj uslov


const brojkiFilter = arrayDva.filter((s) => {
    return s > 5
}) 
console.log(brojkiFilter)

// find
const brojkaFind = brojkiFilter.find((s) => {
    return s === 7
})
console.log(brojkaFind)

const studenti = [
    {ime:'Pero', prosek:7.5, grad:'Berovo'},
    {ime:'Petko', prosek:7.9, grad:'Skopje'},
    {ime:'Risto', prosek:8.5, grad:'Vinica'},
    {ime:'Mara', prosek:5.6, grad:'Bitola'},
    {ime:'Ivo', prosek:2.7, grad:'Berovo'}
]

// const filtriraniStudenti = studenti.filter((student) =>  student.prosek >= 8).map((student) => {
//     student.prosek = student.prosek + 1
// })
// console.log(filtriraniStudenti)

const filtriraniStudenti1 = studenti.map((student) =>{
    return {...student, prosek: student.prosek > 7 ? student.prosek + 1 : student.prosek}

})

console.log(filtriraniStudenti1)

// Da se presmeta vkupniot prosek na site studenti
// Da se isfiltiraat site sto imaat pomallu od 4 i 4 karakteri
// da se pronajde studentot od Strumica
// Da kreirame horoskop funkcija so koja ako pisame mesec da ni dade sto sme vo horoskop parametar mesec bonus i denovi
// da kreirame funkcija sto presmetuva perimetar i plostina na pravoagolnik


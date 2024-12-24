//? 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
//? 4. Вкупен просек на студенти кои се од Куманово
//? 5. Просек на просеците од градовите Скопје и Охрид
//? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
//? 7. Да се избрише првиот студент во студенти
//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)


const studenti = [
    { ime: "Pero", prosek: 7.5, grad: "Berovo" },
    { ime: "Petko", prosek: 9.9, grad: "Skopje" },
    { ime: "Anastasija", prosek: 8.5, grad: "Kumanovo" },
    { ime: "Marija", prosek: 9.6, grad: "Bitola" },
    { ime: "Ivona", prosek: 2.7, grad: "Kumanovo" },
    { ime: "Petar", prosek: 5.5, grad: "Berovo" },
    { ime: "Nadica", prosek: 9.9, grad: "Ohrid" },
    { ime: "Fidan", prosek: 9.8, grad: "Vinica" },
    { ime: "Naum", prosek: 5.9, grad: "Ohrid" },
    { ime: "Nina", prosek: 8.6, grad: "Strumica" },
  ];

  //? 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
//   studenti.forEach(student => {
//     if( student.ime.endsWith('a') && student.prosek > 7){



//        const sortiraniStudenti = studenti.sort((a, b) => a.ime - b.ime)
//        console.log(sortiraniStudenti)
        
//     }
   
//   });
// const sortiraniStudenti = studenti.filter((student) => student.ime.endsWith('a') && student.prosek > 7)
// console.log(sortiraniStudenti)

// nizaodDolzini = []
// sortiraniStudenti.forEach(student => {
    
//   const dolzinaNaIme =  student.ime.length 
//   console.log(dolzinaNaIme)
//   nizaodDolzini.push(dolzinaNaIme)
  
// });

// console.log(nizaodDolzini)
// nizaodDolzini.sort((a, b) => a - b )
// console.log(nizaodDolzini)


//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
console.log(" 2. _______________________________________")
const filtriraniStudenti2 = studenti.filter((student) => student.prosek > 9 && !(student.grad === "Skopje"))
console.log(filtriraniStudenti2)

console.log("SORTIRANI PO PROSEK OPAGJACKI")
const sortiraniStudenti = filtriraniStudenti2.toSorted((a,b) => a.prosek - b.prosek).toReversed()
console.log(sortiraniStudenti)

//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
console.log(" 3. _______________________________________")
// console.log(studenti.find((student) => student.ime.length <= 5))

izbraniStudenti = []
studenti.forEach((student) => {
      if(student.ime.length <= 5 && izbraniStudenti.length < 3){
        izbraniStudenti.push(student)
      }
     return izbraniStudenti
})

console.log(izbraniStudenti)
const sortiranoIzbraniStudenti = izbraniStudenti.sort((a,b) => a.prosek - b.prosek)
console.log(sortiranoIzbraniStudenti)

//? 4. Вкупен просек на студенти кои се од Куманово
console.log(" 4. _______________________________________")
const nizaProsekKumanovo = []

studenti.forEach((student) => {
    if (student.grad === "Kumanovo")
    {
      console.log(student)
      nizaProsekKumanovo.push(student.prosek);
    return nizaProsekKumanovo
    }

})
var suma = 0
for (let i = 0; i < nizaProsekKumanovo.length; i++) {
   suma += nizaProsekKumanovo[i];
    // ako tuka stavam return suma ne funkcionira, a koga go nema funkcionira?
  }
  console.log(suma)
  
  
  console.log(" 5. _______________________________________")
//? 5. Просек на просеците од градовите Скопје и Охрид
nizaOdProcesi = []
studenti.forEach((student) => {
    if(student.grad === "Skopje" || student.grad === "Ohrid"){
      nizaOdProcesi.push(student.prosek)
      return nizaOdProcesi
    }
})
console.log(nizaOdProcesi)
console.log(nizaOdProcesi.length)

var suma = 0
for (let i = 0; i < nizaOdProcesi.length; i++) {
   suma += nizaOdProcesi[i];
   prosekNaProsecite = suma / nizaOdProcesi.length
  }
  console.log(prosekNaProsecite)



  console.log(" 6. _______________________________________")
  //? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
  studenti.push({
    ime: "Goran", prosek: 7.3, grad: "Delchevo"
  })
  console.log(studenti)


  console.log(" 7. _______________________________________")
  //? 7. Да се избрише првиот студент во студенти
studenti.shift()
console.log(studenti)


console.log(" 8. _______________________________________")

//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)

// const noviStudenti = []

studenti.forEach((student) => {
    if(student.grad === "Kumanovo" || student.grad === "Ohrid"){
        const noviStudenti = []
        noviStudenti.push(student)
        student.prosek += 1
        console.log(noviStudenti)
        return noviStudenti
    }
})




// noviStudenti.forEach((student) => {
//     student.prosek += 1
// })
// console.log(noviStudenti)

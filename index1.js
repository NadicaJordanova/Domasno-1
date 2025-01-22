// Da se presmeta vkupniot prosek na site studenti
// Da se isfiltiraat site sto imaat pomalku od 4 i 4 karakteri
// da se pronajde studentot od Strumica
// Da kreirame horoskop funkcija so koja ako pisame mesec da ni dade sto sme vo horoskop parametar mesec bonus i denovi
// da kreirame funkcija sto presmetuva perimetar i plostina na pravoagolnik

const studenti = [
  { ime: "Pero", prosek: 7.5, grad: "Berovo" },
  { ime: "Petko", prosek: 7.9, grad: "Skopje" },
  { ime: "Risto", prosek: 8.5, grad: "Vinica" },
  { ime: "Mara", prosek: 5.6, grad: "Bitola" },
  { ime: "Ivo", prosek: 2.7, grad: "Strumica" },
];

// Da se presmeta vkupniot prosek na site studenti
const proseci = [];
studenti.forEach((student) => {
  proseci.push(student.prosek);
  return proseci;
});
console.log(proseci);



var vkupenProsek = 0;
var suma = 0;
for (let i = 0; i < proseci.length; i++) {
  suma += proseci[i];
  vkupenProsek = suma / proseci.length;
}

console.log(vkupenProsek);

// Da se isfiltiraat site sto imaat pomalku od 4 i 4 karakteri
var filtriraniStudenti = []
studenti.forEach((student) => {
    if(student.ime.length <= 4){
        filtriraniStudenti.push(student)
      return filtriraniStudenti
    }
    else{
     return filtriraniStudenti
    }
})
console.log(filtriraniStudenti)


// da se pronajde studentot od Strumica
const baranStudent = studenti.filter((student) => {
  return student.grad.includes("Strumica")
})

console.log(baranStudent)


// Da kreirame horoskop funkcija so koja ako pisame mesec da ni dade sto sme vo horoskop parametar mesec bonus i denovi

const monthInput = document.getElementById("mesec-input")
const dayInput = document.getElementById("datum-input")


function calculateSign(){
if(monthInput.value ==="january"){
    if(dayInput.value < 19){
       return  "Capricorn"
    }
    else{
        return  "Aquarius"
    }
}
else if(monthInput.value === "february"){
    if(dayInput.value < 20){
        return  "Aquarius"
     }
     else{
         return  "Pisces"
     }
}
else if(monthInput.value === "march"){
    if(dayInput.value < 20){
        return  "Pisces"
     }
     else{
         return  "Aries"
     }
}
else if(monthInput.value === "april"){
    if(dayInput.value < 20){
        return  "Aries"
     }
     else{
         return  "Taurus"
     }
}
else if(monthInput.value === "may"){
    if(dayInput.value < 21){
        return  "Taurus"
     }
     else{
         return  "Gemini"
     }
}
else if(monthInput.value === "june"){
    if(dayInput.value < 22){
        return  "Gemini"
     }
     else{
         return  "Cancer"
     }
}
else if(monthInput.value === "july"){
    if(dayInput.value < 22){
        return  "Cancer"
     }
     else{
         return  "Leo"
     }
}
else if(monthInput.value === "august"){
    if(dayInput.value < 23){
        return  "Leo"
     }
     else{
         return  "Virgo"
     }
}
else if(monthInput.value ===  "september"){
    if(dayInput.value < 23){
        return  "Virgo"
     }
     else{
         return  "Libra"
     }
}
else if(monthInput.value === "october"){
    if(dayInput.value < 23){
        return  "Libra"
     }
     else{
         return  "Scorpio"
     }
}
else if(monthInput.value === "november"){
    if(dayInput.value < 22){
        return  "Scorpio"
     }
     else{
         return "Sagittarius"
     }
}
else if(monthInput.value === "december"){
    if(dayInput.value < 22){
        return "Sagittarius"
     }
     else{
         return "Capricorn"
     }
}
}

const znak = calculateSign(monthInput.value, dayInput.value)
console.log(znak)



const getBtn = document.getElementById("btn")


getBtn.addEventListener("click", () => {
   var sign = calculateSign(monthInput.value, dayInput.value)
    document.getElementById("sign").innerText = `
    Your sign is ${sign}
    `
    console.log(sign)
})

// da kreirame funkcija sto presmetuva perimetar i plostina na pravoagolnik

function trijagolnik(operacija){
    return function(a, b, c, h){
        switch(operacija){
            case "plostina":
            return a * h/2
            case "perimetar":
                return a + b + c
        }
    }
}

const plostina = trijagolnik('plostina')
console.log(plostina(2, 3, 4, 20))









  
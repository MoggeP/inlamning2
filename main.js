// lägger till när man klickar på "lägg till"
document
.querySelector("button")
.addEventListener("click", countBudget)
//de olika listorna där summorna ska hamna +/-
const inkomstLista= [];
const utgiftLista= [];
// så den inte nollställer efter varje klick
function countBudget(e) {
   e.preventDefault();

  let costSum= 0;
  let incomeSum=0;
// Beskrivning / tal 
  const select=  document.querySelector("select");
  const description = document.querySelector(".desc").value;
  const number = document.querySelector(".num").value;
//pushar in om det blir positivt value i inkostlistan i html
  if(select.value=="+"){
    document
   .querySelector(".inkomst-container")
   .innerHTML += `<li class="inkomst-lista"> ${description} : ${number} </li>`

   const inkomstDiv = document.querySelector(".inkomst-container");

   inkomstLista.push(number)
}
// om de inte är ett posetivt tal utan - så pushas den in i utgifter istället
else if(select.value=="-"){
    document
    .querySelector(".utgift-container")
    .innerHTML += `<li class="utgift-lista"> ${description} :${number} </li>`
    utgiftLista.push(number)
}
// om det varken är positivt eller negativt så kommer det upp medelande att man måste välja +/-
else if(select.value=="choose") {
    alert("Hej välja mellan + / -")
}
inkomstLista.map( (e)=> {
    incomeSum += parseFloat(e)
})
utgiftLista.map( (e)=> {
    costSum += parseFloat(e)
})
// totalen hamnar i div vinst, inkomst - kostnad = total
document
.querySelector(".vinst")
.innerHTML = incomeSum -costSum;
}
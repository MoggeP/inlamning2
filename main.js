// när anavädare trycker på add button :- 

// event :- addEventListener()

document.querySelector("button").addEventListener("click", calculateBudget)

function calculateBudget(e) {
    e.preventDefault();    

const option= document.querySelector("select");
console.log(option.value);
// om användare väljer + ska description och value hamnas i inkomst-lista diven
if(option.value=="+"){    
    //console.log(addOption)
  const description =  document.querySelector("#besk").value;
  const value = document.querySelector("#num").value;
 const div= document.querySelector(".inkomst-lista");
 // console.log(div)
 div.innerHTML   += `<li>${description}     ${value}</li>`


}
 //om användare väljer - ska description och value hamnas i kostnad-lista diven

if(option.value =="-"){
    //console.log(minusOption)
    const description = document.querySelector("#besk").value;
    const value = document.querySelector("#num").value;
    const kostnadDiv= document.querySelector(".kostnad-lista");
   // console.log(kostnadDiv)
    kostnadDiv.innerHTML += `<li>${description}     ${value}</li>`;
 }
//const chooseOption = document.querySelector(".choose").textContent;
//console.log(chooseOption);
//if()
if(option.value=="choose") 
{
    alert("Hej, Du måste välja från + eller -")
}
  

}
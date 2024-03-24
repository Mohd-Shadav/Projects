

let set = document.querySelector(".set");

let btn = document.querySelector("button");

let inputEntry = document.querySelector("input");

let selection = document.querySelector(".selection");



function System(){
    

  if(inputEntry.value == "")

  {

    set.innerHTML = `Please Enter The Temperature Buddy😒. `;

  }
   else{
    if(selection.value == 'Celsius')
 {
   C_to_F()
  }
  if(selection.value == 'Fahrenheit')
 {
   F_to_C()
  }


   }

    // console.log(selection.value)
}

function C_to_F(){
    let get = inputEntry.value;
    let getNumber =  parseFloat(get); 

    getNumber = (getNumber * 9/5)+32;

    let setValue = getNumber.toFixed(2);

    
    set.innerHTML = `${get} °Celsius to °Fahrenheit   :   ${setValue}`;

}


function F_to_C(){
    let get = inputEntry.value;
    let getNumber =  parseFloat(get); 

    getNumber = (getNumber - 32)* 5/9;
    let setValue = getNumber.toFixed(2);

    set.innerHTML = `${get} °Fahrenheit to °Celsius : ${setValue}`;

}


btn.addEventListener("click",System);


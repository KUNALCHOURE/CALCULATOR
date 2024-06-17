let btn=document.querySelectorAll("button");
let dis=document.querySelector(".upper");
let c=document.getElementById("head");
let currentinput="";
let previnput="";
let displayval="";
let operator =null;
console.dir(dis);
for(let b of btn){
    b.addEventListener("click",function(){
        const val=b.textContent;

        if(!isNaN(val)){
            currentinput+=val;
            displayval+=val;
            display(displayval);
        }
        else if(isoperator(val)){
            console.log("value checked");
            if(currentinput===" " && val==="-"){
                currentinput="-";
                displayval+='-';
                display(displayval);
            }
            else{
                previnput=currentinput;
                currentinput="";
                operator=val;
                displayval+=val;
                 display(displayval);
            }
        }
        else if(val==='AC'){
            clear();

        }
        else if(val==='DEL'){
            console.log("del");
            displayval=displayval.slice(0,-1);
          
            display(displayval);
            
        }
        else{
           let ans=calculate(previnput,currentinput,operator);
           displayval=ans;
           console.log(displayval)
           display(displayval);

           
        }


    })
}

document.addEventListener("keydown",(event)=>{
  const val=event.key;

  if(!isNaN(val)){
      currentinput+=val;
      displayval+=val;
      display(displayval);
  }
  else if(isoperator(val)){
      console.log("value checked");
      if(currentinput===" " && val==="-"){
          currentinput="-";
          displayval+='-';
          display(displayval);
      }
      else{
          previnput=currentinput;
          currentinput="";
          operator=val;
          displayval+=val;
           display(displayval);
      }
  }
  else if(val==='Escape'){
      clear();

  }
  else if(val==='Backspace'){
      console.log("Backspace");
      displayval=displayval.slice(0,-1);
    
      display(displayval);
      
  }
  else if(val=="Enter"){
     let ans=calculate(previnput,currentinput,operator);
     displayval=ans;
     display(displayval);
     currentinput=ans;
    previnput="";
    operator=null;

     
  }

})

function display(val){
    dis.value=val;
    
}

//function to check wheather input is operator or not
function isoperator(value){
    if(value === '+' || value === '-' || value === '*' || value === '/' ||value === '%' ){
        return true;
    }
    else return false;
}

//clear function clear all values
function clear(){
    currentinput="";
    previnput="";
    displayval=""
    operator=null;
    display("");
}

//function to calculate 
function calculate(a, b, op) {
    if (a !== "" && b !== "") {
      let a1 = parseFloat(a);
      let b1 = parseFloat(b);
      let result;
  
      switch (op) {
        case '+':
          return a1 + b1;
          break;
  
        case '-':
          return a1 - b1;
          break;
  
        case '*':
          return a1 * b1;
          break;
  
        case '/':
          if (b1 === 0) {
            return "Error: Division by zero";
          }
          return a1 / b1;
          break;
  
        case '%':
         
          return a1 % b1;
          break;
  
        default:
          return "Error: Invalid operator";
      }
    } 
  }

  c.addEventListener("click",function(){
    location.reload()     //it is used o refresh the page
    
  })
  

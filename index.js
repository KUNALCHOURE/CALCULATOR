let btn=document.querySelectorAll("button");
let dis=document.querySelector(".upper");
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
           let ans= calculate(previnput,currentinput,operator);
           displayval=ans;
           display(displayval);
           clear();
        }


    })
}


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
    operator=null;
    display("");
}

//function to calculate 
function calculate(a,b,op){
if(previnput!=="" && currentinput!=="")
    {
        let a1=parseFloat(previnput);
        let b1=parseFloat(currentinput);
        let result;
        
    switch(op){

        case '+':
            result=a1+b1;
            break;

        case '-':
            result=a1-b1;
            break;

        case '*':
            result=a1*b1;
            break;
    
         case '/':
            result=a1/b1;
            break;
        
        case '%':
            result=a1/100;
            break;
        default:
            return;

    
    }

}
}
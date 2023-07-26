let output=document.getElementById("output");
function display(num){
    output.value+=num;
}

function del()
{
    output.value=output.value.slice(0,-1);
}

function Ans()
{
   try{
    output.value=eval(output.value);
   }
   catch{
    alert("Only numbers are allowed");
   }
}
function clr()
{
    output.value = "";
}

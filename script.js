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
    alert("Invalid");
   }
}
function clr()
{
    output.value = "";
}
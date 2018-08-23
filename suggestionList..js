var names=["arjun","raja","zalaji","cbishek","india","finland","ragul","rajpreet","ankita","neha","shriya","smirti","shrijith","swapnil"];
var makeEmpty="";
var text="";
var iterator=0;
var Length=names.length;
var dynamicList="";
names.sort();
//when user clicks outside suggestion div
  window.addEventListener("click", function(){
       var hideMe = document.getElementById("dropDown");
       document.onclick = function(clicker){
       if(clicker.target.id !== 'hideMe' && clicker.target.id !=='inputBox'){
        hideMe.style.display="None";
         }
        };
  });
//user suggestion
function display()
{
  text=document.getElementById("inputBox").value;
  document.getElementById("dropDown").innerHTML=makeEmpty;
  if(text.length>0)//if input string 
  {
    document.getElementsByClassName("clear-button")[0].style.display="block";
    for(iterator=0;iterator<Length;iterator++)
    { 
      if(names[iterator].toUpperCase().includes(text.toUpperCase()))
      {
        dynamicList="<li id='"+iterator+1+"' onclick='moveIntoTextBox(this.innerHTML)'>" +names[iterator]+ "</li>";    
        document.getElementById("dropDown").innerHTML+=(dynamicList);
      }
    }
    if( document.getElementById("dropDown").innerHTML.length===0)
    document.getElementById("dropDown").innerHTML="No suggestion";
  }
    
}
//drop-down selection 
function moveIntoTextBox(data) {
   document.getElementById("inputBox").value=data; 
   document.getElementById("dropDown").innerHTML=makeEmpty;
}
//To change display of "X" button
function changeStyle(){
  document.getElementById("dropDown").style.display="block";
}
//To clear input-Screen on "X" click
function clearScreen(){
  document.getElementById("inputBox").value=makeEmpty;  
  document.getElementsByClassName("clear-button")[0].style.display="none";  
}
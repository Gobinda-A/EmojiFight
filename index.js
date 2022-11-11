let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];
let rand,rand1,rand2;
let ct1=0,ct2=0,val1=true,val2=true;
let stageEl1 = document.getElementById("stage1");
let stageEl2 = document.getElementById("stage2");
let message=document.getElementById("message");
stageEl1.textContent="Emoji";
stageEl2.textContent="Emoji";
function start(){
   rand=Math.floor(Math.random()*17); 
    stageEl1.textContent=fighters[rand]; 
}
function display(){
    message.innerText="Congratulations!You have already Won at "+ct1+"th attempt";  
}
function fight1(){
    val2=true;
    if(val1){
        start();
    rand1=Math.floor(Math.random()*17);
    message.innerText="";
 if(rand===rand1){
    val1=false;
    message.innerText="Congratulations! Fighter 1 have Won at "+ct1+"th attempt";
}
else{
    ct1++;
    message.innerText="Try Again! ("+ct1+")";
}
    stageEl2.textContent=fighters[rand1];}
    else 
    message.innerText="Congratulations!You have already Won at "+ct1+"th attempt";  
}
function fight2(){
    val1=true;
    if(val2){
    start();
rand2=Math.floor(Math.random()*17);
    message.innerText="";
if(rand===rand2){
    val2=false;
    message.innerText="Congratulations! Fighter 2 have Won at "+ct2+"th attempt";}
else{ct2++;
message.innerText="Try Again! ("+ct2+")";}
    stageEl2.textContent=fighters[rand2];}
    else
    message.innerText="Congratulations!You have already Won at "+ct2+"th attempt";
}
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];
let rand,rand1,rand2;
let ct1=0,ct2=0;
let stageEl1 = document.getElementById("stage1");
let stageEl2 = document.getElementById("stage2");
let message=document.getElementById("message");
stageEl1.textContent="Enoji";
stageEl2.textContent="Enoji";
function start(){
   rand=Math.floor(Math.random()*17); 
    stageEl1.textContent=fighters[rand]; 
}
function fight1(){
    start();
    rand1=Math.floor(Math.random()*17);
    message.innerText="";
 if(rand===rand1)
    message.innerText="Congratulations! Fighter 1 have Won at "+ct1+"th attempt";
else{
    ct1++;
    message.innerText="Try Again! ("+ct1+")";}
    stageEl2.textContent=fighters[rand1];
}
function fight2(){
    start();
rand2=Math.floor(Math.random()*17);
    message.innerText="";
if(rand===rand2)
    message.innerText="Congratulations! Fighter 2 have Won at "+ct2+"th attempt";
else{ct2++;
message.innerText="Try Again! ("+ct2+")";}
    stageEl2.textContent=fighters[rand2];
}
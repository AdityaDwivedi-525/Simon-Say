let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");
let btns=["yellow","blue","green","red"];
document.addEventListener("keypress",()=>{
    if(started==false){
         started=true;
        
        levelUp();
    }
   
})
function levelUp(){
    userSeq=[];
    level++;
     h3.innerHTML=`Level ${level}`;
    let randNum=Math.floor(Math.random()*3);
    let randColr=btns[randNum];
    let randbtn=document.querySelector(`.${randColr}`);
    gameSeq.push(randColr);
    // console.log(gameSeq);
     btnflash(randbtn);
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },500);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),3000);  
        }
    }else{
        h3.innerHTML=`Game over! Your score was <b>  ${level}</b> Press any key to start`;
          document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userflash(btn);
    usercolr=btn.getAttribute("id");
    userSeq.push(usercolr);
    // console.log(usercolr);

    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    level=0;
    gameSeq=[];
    userSeq=[];
    started=false;
}


let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","blue"]

let started=false;
let level =0;

let h2=document.querySelector("h2");

function restart(){
    gameSeq.length=0;
    userSeq.length=0;
    level=0;
    started=false;
}
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}

function levelUp(){
    userSeq.length=0;
    level++;
    h2.innerText=`Level${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    
    btnFlash(randBtn);
}

function checkAns(idx){
    console.log(`current level: ${level}`)
    if (userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        restart();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(this);

    userColour=btn.getAttribute("id");
    userSeq.push(userColour);
    
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

var timer=10;
let clutter="";
var score=0;

function scoreval(){
    score+=10;
    document.querySelector('#score').innerHTML=score;
}
function hitter(){
    // let hit=document.querySelector('#hit');
    // document.querySelector('.bubble').addEventListener('click',function(){
    //     hitted++;
    //     hit.innerHTML=hitted;
    // })
    let rn=Math.floor(Math.random()*10);
    document.querySelector('#Hit').innerHTML=rn;
}
function bubblemaker(){

    for(var i=1;i<=126;i++){
        let random=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${random}</div>`
    }
    document.querySelector('#pbtm').innerHTML=clutter;
}
function settimer(){
    var stop=setInterval(function(){
        timer--;
        document.querySelector('#Timer').innerHTML=timer;
        if(timer===0){
            clearInterval(stop);
            alert("Time's Up! and your score is:- "+score);
            document.querySelector('#pbtm').innerHTML=`<h1>Game Over!</h1>`;

        }
    },1000)
}
document.querySelector('#pbtm').addEventListener('click',function(detail){
    let num=detail.target.innerHTML;
    let match=document.querySelector('#Hit').innerHTML;
    if(num===match){
        scoreval();
        hitter();
        bubblemaker();
    }else{
        alert("It' wrong...")
    }
})
bubblemaker();
settimer();
hitter();

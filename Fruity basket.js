//created by Chukwure Tochukwu Clinton
alert("For those running this with mobile phones, ensure that ur keyboard was down before running this game, else it wouldn't run properly");
var lim=window.innerHeight>=544?500+window.innerHeight-544:500;
var x=window.innerHeight>=544?380+window.innerHeight-544:360-544+window.innerHeight;
var y=window.innerHeight>=544?360+window.innerHeight-544:360-544+window.innerHeight;
var h=Math.ceil(x/10)*10;
var h2=Math.ceil(y/10)*10;
var life;
function difficulty(){
var z=_tag("select")[0].value;
if(z=="1"){
    return 2;
}
else if(z=="2")
{return 5;}
else if(z=="3"){
    return 10;
}}
function _id(x){
    return document.getElementById(x);
}
var speed;


function _tag(x){
    return document.getElementsByTagName(x);
}
function play(){
    var btn=_id("sound");

     var a=_tag("audio")[0];
   
        btn.onclick=function(){
         
           btn.innerHTML="🔊";
        a.play();
        a.volume=1;
        btn.onclick=function(){
            a.volume=0;
              btn.innerHTML="🔈";
            btn.onclick=function(){
              btn.innerHTML="🔇";
                return play();
            }
        }
        }
    
    }
var sco=0;
function _gameover(){
var score=_id("score");
    if(life<=0){
    _id("avatar").style.display="none";
    speed=0;
    _id("writescore").innerHTML="SCORE: "+score.innerHTML;
    _id("gameover").style.display="block";
    _id("again").onclick=function(){
    _id("life").value=6;
    score.innerHTML-=sco;
    sco=0;
    _id("avatar").style.display="block";
    _id("container").style.display="block";
    _id("gameover").style.display="none";
        speed=difficulty();
    }
    }
}
var arr=[1000,3000,5000,11000,7000,9000,13000,17000,23000,27000,20000,2000,11000,24000,19000];
const tR=()=>{
     var z=Math.floor(Math.random()*arr.length);
     return z;}
     var healers=['💉','💊','🚑',];
var smashers=['🦀','🦑','🐀','🐝','🐞','🐜','🦗','🕷','🦖','🐉','🏹','🕸','🔫','⛏️','🔥','🦂','🐍','🐊','🦎','🚬'];
var boosters=['🍬','🥫','🥗','🥘','🥜','🥣'
,'🌯','🍜','🍨','🥃','🍔','🥪','🍍','🍓','🍌','🍋','🍐','🥔','🍆','🥕','🍒','🍞','🥖','🥞','🌽','🍅','🥑','🍗','🍇','🌮','🥒','🥚','🍏','🍑','🍿','🍝','🍯','🌭'];
var fallers=[...smashers,...boosters, ...healers];
var pos=-40;
var tk=-40;
var tk2=-40;
var tk3=-40;
var tk4=-40;
var tk5=-40;
var tk6=-80;
var tk7=-80;
var tk8=-80;
var tk9=-80;
var tk10=-80;
var tk11=-80;
function rand() {
   return Math.floor(Math.random()*fallers.length);
}
function move(name,a){
life=_id("life").value;

  if(a==1){
       if(pos>=lim){
      
           pos=-1*arr[tR()]/50;
           name.style.visibility="visible";
           name.innerHTML=fallers[rand()];
           
           
       }
       else{
    
           pos+=speed;
           name.style.top=pos+'px';
           if(pos==h&&_id("avatar").style.left==0+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
       }
       }
       else if(a==2){
             if(tk>=lim){
       
           
           tk=-1*arr[tR()]/50;
           name.style.visibility="visible";
           name.innerHTML=fallers[rand()];
           
           
       }
       else{
       
           tk+=speed;
           name.style.top=tk+'px';
           if(tk==h&&_id("avatar").style.left==40+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
       }
       }
       else if(a==3){
             if(tk2>=lim){
    name.style.visibility="visible";
           tk2=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
       }
       else{
       
           tk2+=speed;
           name.style.top=tk2+'px';
           if(tk2==h&&_id("avatar").style.left==80+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
       }
       }
       else if(a==4){
           if(tk3>=lim){
           name.style.visibility="visible";
         
           tk3=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
           
       }
       else{
       if(tk3==h&&_id("avatar").style.left==120+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
           tk3+=speed;
           name.style.top=tk3+'px';
       }
       }
       else if(a==5){
           if(tk4>=lim){
           name.style.visibility="visible";
           tk4=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
           
       }
       else{
       if(tk4==h&&_id("avatar").style.left==160+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
           tk4+=speed;
           name.style.top=tk4+'px';
       }
       }
       else if(a==6){
           if(tk5>=lim){
           name.style.visibility="visible";
           tk5=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
       }
       else{
       if(tk5==h&&_id("avatar").style.left==200+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
            
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
           tk5+=speed;
           name.style.top=tk5+'px';
       }
       }
         else if(a==7){
           if(tk6>=lim){
           name.style.visibility="visible";
           tk6=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
       }
       else{
       if(tk6==h2&&_id("avatar").style.left==0+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
            
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
           tk6+=speed;
           name.style.top=tk6+'px';
       }
       }
         else if(a==8){
           if(tk7>=lim){
           name.style.visibility="visible";
           tk7=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
       }
       else{
       if(tk7==h2&&_id("avatar").style.left==40+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
            
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }//here
           tk7+=speed;
           name.style.top=tk7+'px';
       }
       }
       else if(a==9){
           if(tk8>=lim){
           name.style.visibility="visible";
           tk8=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
       }
       else{
       if(tk8==h2&&_id("avatar").style.left==80+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
            
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
           tk8+=speed;
           name.style.top=tk8+'px';
       }
       }
       else if(a==10){
           if(tk9>=lim){
           name.style.visibility="visible";
           tk9=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
       }
       else{
       if(tk9==h2&&_id("avatar").style.left==120+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
            
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
           tk9+=speed;
           name.style.top=tk9+'px';
       }
       }
       else if(a==11){
           if(tk10>=lim){
           name.style.visibility="visible";
           tk10=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
       }
       else{
       if(tk10==h2&&_id("avatar").style.left==160+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
            
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }//here
           tk10+=speed;
           name.style.top=tk10+'px';
       }
       }
       else if(a==12){
           if(tk11>=lim){
           name.style.visibility="visible";
           tk11=-1*arr[tR()]/50;
           name.innerHTML=fallers[rand()];
           
       }
       else{
       if(tk11==h2&&_id("avatar").style.left==200+"px"){
         for(let v of boosters){
         if(name.innerHTML==v)
           sco++;
           _id("score").innerHTML=sco;
           name.style.visibility="hidden";
           }
           for(let v of smashers){
         if(name.innerHTML==v)
           _id("life").value-=2;
            name.style.visibility="hidden";
            
          }
           for(let v of healers){
         if(name.innerHTML==v)
           _id("life").value+=1;
            name.style.visibility="hidden";
           }
           
       }
           tk11+=speed;
           name.style.top=tk11+'px';
       }
       }
       _gameover();
   }
  
    function gameplay(){

speed=difficulty();
var _play=document.getElementsByClassName("PP")[0];
var pause=document.getElementsByClassName("PP")[1];
_play.style.display="none";
pause.onclick=function(){
_id("pausebox").style.display="block";
    speed=0;
    pause.style.display="none";
    _play.style.display="block";
}
_play.onclick=function(){
_id("pausebox").style.display="none";
    speed=difficulty();
    pause.style.display="block";
}
var initial=_id("initial");
setTimeout(function(){
initial.style.display="block";
speed=0;},3000);
_id("exit").onclick=function(){
speed=difficulty();
    initial.style.display="none";
}
   var a=_tag("audio")[0];
    
    var btn=_id("sound");
    btn.onmouseover=function(){
    play();
   }
    document.body.style.backgroundImage="url(https://themepack.me/i/c/749x468/media/g/1455/asus-rog-theme-zc1.jpg)"
    _id("container").style.display="block";
    _id("cover").style.display="none";


var btn1=_id("btn1");
var btn2=_id("btn2");
var c=_id("avatar");
c.style.left=0;
var Ao=0;
btn1.onclick=function() {

   if(Ao<=200) {
   Ao+=40;
    c.style.left=Ao+'px';}
}
btn2.onclick=function(){
    if(Ao>0)Ao-=40;
    c.style.left=Ao+"px";
}

   var dia= _id("i");
   var abuo=_id("ii");
   var ato=_id("iii");
   var ano=_id("iv");
   var ise=_id("v");
   var isii=_id("vi");
   var asaa=_id("vii");
   var asato=_id("viii");
   var itoolu=_id("ix");
   var iri=_id("x");
   var irinaotu=_id("xi");
   var irinaabuo=_id("xii");
    setTimeout(function(){window.requestAnimationFrame(function move(){
   movei();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   moveiii();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   moveii();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   moveiv();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   movexii();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   movexi();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   movev();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   movevi();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   movevii();
 requestAnimationFrame(move);
 });},arr[tR()]);
   setTimeout(function(){window.requestAnimationFrame(function move(){
   moveviii();
 requestAnimationFrame(move);
 });},arr[tR()]);
    setTimeout(function(){window.requestAnimationFrame(function move(){
   moveix();
 requestAnimationFrame(move);
 });},arr[tR()]);
    setTimeout(function(){window.requestAnimationFrame(function move(){
   movex();
 requestAnimationFrame(move);
 });},arr[tR()]);
   ato.innerHTML=fallers[rand()];
abuo.innerHTML=fallers[rand()];
ano.innerHTML=fallers[rand()];
ise.innerHTML=fallers[rand()];
isii.innerHTML=fallers[rand()];
asaa.innerHTML=fallers[rand()];
asato.innerHTML=fallers[rand()];
itoolu.innerHTML=fallers[rand()];
iri.innerHTML=fallers[rand()];
irinaotu.innerHTML=fallers[rand()];
irinaabuo.innerHTML=fallers[rand()];
       dia.innerHTML=fallers[rand()];
       function movei(){
           return move(dia,1);
       }
       function moveii(){
           return move(abuo,2);
       }
       const moveiii=()=>{
           return move(ato,3);
       }
       const moveiv=()=>{
           return move(ano,4);
       }
       const movev=()=>{
           return move(ise,5);
       }
       const movevi=()=>{
           return move(isii,6);
       }
       const movevii=()=>{
           return move(asaa,7);
       }
       const moveviii=()=>{
           return move(asato,8);
       }
       const moveix=()=>{
           return move(itoolu,9);
       }
       const movex=()=>{
           return move(iri,10);
       }
       const movexi=()=>{
           return move(irinaotu,11);
       }
       const movexii=()=>{
           return move(irinaabuo,12);
       }
}
window.onload=function(){
    _id("cover").style.display="block";
    document.getElementsByClassName("load")[0].style.display="none";
}


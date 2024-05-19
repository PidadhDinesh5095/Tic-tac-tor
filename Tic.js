const  btn=document.querySelectorAll(".box");
const re=document.querySelectorAll(".reset");
const winner=document.querySelector(".hi")
var player1=true;
const checkwin=()=>{
    for(let i of win){
      let pos1=btn[i[0]].innerText;
      let pos2=btn[i[1]].innerText;
      let pos3=btn[i[2]].innerText;
      if( pos1!="" && pos2!="" && pos3!=""){
        if(pos1 === pos3 && pos1=== pos2){
           winner.innerText=`Congratulations Winner! is   ${pos2}`
           for(let i of btn){
             i.disabled=true
           };
        };
      };
    };
  };
btn.forEach((b)=>{
  b.addEventListener("click",()=>{
      if (player1){
        b.innerText="X";
        player1=false;
        b.disabled=true;
      }
      else{
        b.innerText="O";
        player1=true;
        b.disabled=true;
      }
      checkwin();
  });
});
var win=[[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7],
  [2,5,8],[0,4,8],[2,4,6]];
  re.forEach((k)=>{
    k.addEventListener("click",()=>{
      player1=true;
      for(let i of btn){
        i.disabled=false;
        i.innerText="";
      }
      winner.innerText="";
    });
    
  });


let btn=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let turn=true;
let winnerList=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]
]
for(let i of btn)
{
    i.addEventListener("click",function(e)
    {
        // console.log(i);
        if(turn)
        {
            i.innerText="O";
            turn=false;
        }
        else{
            i.innerText="X";
            turn=true;
        }
        i.disabled=true;
      checkWinner();  
    })
}
   function checkWinner()
   {
     for(let j of winnerList)
     {
    //     console.log(j[0],j[1],j[2]);
    //     console.log(btn[j[0]].innerText,btn[j[1]].innerText,btn[j[2]].innerText);
        // console.log(winnerList[j][0],winnerList[j][1],winnerList[j][2])
        let posVal1=btn[j[0]].innerText;
        let posVal2=btn[j[1]].innerText;
        let posVal3=btn[j[2]].innerText;
        if(posVal1 !=="" && posVal2!=="" && posVal3!=="")
        {
            if(posVal1===posVal2 && posVal2===posVal3)
            {  disable();
                // console.log("winner:",posVal1);
                document.querySelector(".result #textResult").innerText=`Winner : ${posVal1}`;
               
            }
        }
     }
   }
   const disable=()=>{
        for(let x of btn)
        {
            x.disabled=true;
        }
   
   const enable=()=>{
        for(let x of btn)
        {
            x.disabled=false;
            x.innerText=""
        }
    }
   const resetbtn=()=>
   {
    turn=true;
    enable();
    document.querySelector(".result #textResult").innerText="";
   }



reset.addEventListener("click",resetbtn)
}
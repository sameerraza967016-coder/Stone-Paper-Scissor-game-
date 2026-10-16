var you=0
var bot=0 
const bots=document.querySelector("#bot");
const yous=document.querySelector("#you")
const b1=(bot)=>
{
    bots.innerText=bot;
}
const y=(you)=>{
    yous.innerText=you;
}
const show=document.querySelector(".result");
 const a=(botwin)=>{
        show.innerText="You lose ,play again";
        show.style.backgroundColor="red";
         bot=bot+1;
        b1(bot);
    }
const b=(show1)=>{
    show.innerText="draw game"
    show.style.backgroundColor="darkblue"
}
const c= (youwin)=>{
    show.innerText="Congratulation You win"
    show.style.backgroundColor="green";
    you=you+1;
    y(you);
}
const sellect=document.querySelectorAll(".choice");
sellect.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
    const idsel=choice.getAttribute("id");
    const botchoice=["rock","paper","scissor"];
    const computerchoice=Math.floor(Math.random()*3);
    const Botchoice=botchoice[computerchoice];
    if(idsel===Botchoice){
        var show1="draw game";
        b(show1);   
    }
    else if(idsel==="rock"){
        {
        if(Botchoice==="paper"){
            var botwin="You loss,Play again:"
            a(botwin); 
        }
        
        else 
            {
                 var youwin="Congratulation You win"
                c(youwin); 
            }
        }}
        else if(idsel==="paper"){
            if(Botchoice==="scissor"){
                var botwin="You loss,Play again:"
                a(botwin); 
            }
         else {
                var  youwin="Congratulation You win"
                c(youwin); 
            }
        }
        else if(idsel==="scissor"){
            if(Botchoice==="rock"){
                var botwin="You loss,Play again:"
                a(botwin); 
            }
        
         else{
                var youwin="Congratulation You win"
                c(youwin); 
            }
        }

});
});

let counter=0;
const td=document.querySelectorAll("td");
const span=document.querySelector("span");
const all=document.querySelector("body");
const row=document.querySelector(".row");
const row1=document.querySelector(".row1");
const row2=document.querySelector(".row2");
const btn=document.querySelector("button");
let justify=false;

const style1 ={
    textDecoration:"line-through",
    color:"black",
    transition:"1.2s",

};
const style2 = {
    backgroundColor: "green",
    transition:"0.8s",
    textAlign:"center"
};
        game();


        btn.addEventListener("click",function(){
            reset();
            game();
        });

        function testOneClick(){
            for(let i=0;i<td.length;i++){
                if(td[i].textContent==="X" || td[i].textContent==="O")
                td[i].removeEventListener("click",execute);
            }   
        }

        function game(){
            for(let i=0;i<td.length;i++){
                td[i].addEventListener("click", execute)
            }
            

        }

        function execute(){
                    if(counter%2 === 0){
                    this.textContent="X";
                    }else{
                    this.textContent="O";
                    }

                    counter++;
                    testOneClick();
                    winOrLose("X");
                    winOrLose("O");
        }

        function winOrLose(variable){
            for(let i=0;i<7;i++){
                    if((td[i].textContent===variable && td[i+1].textContent===variable && td[i+2].textContent===variable && i!==1 && i!==2 && i!==4 && i!==5))
                    {
                        win();
                        Object.assign(td[i].style,style1);
                        Object.assign(td[i+1].style,style1);
                        Object.assign(td[i+2].style,style1);

                    }else if(td[0].textContent===variable && td[4].textContent===variable && td[8].textContent === variable){
                        win();
                        Object.assign(td[0].style,style1);
                        Object.assign(td[4].style,style1);
                        Object.assign(td[8].style,style1);

                    }else if(td[2].textContent===variable && td[4].textContent===variable && td[6].textContent === variable){
                        win();
                        Object.assign(td[2].style,style1);
                        Object.assign(td[4].style,style1);
                        Object.assign(td[6].style,style1);
                    }
                    btn.style.display="block";
                    
                }

            for(let i=0;i<3;i++){
                if((td[i].textContent===variable && td[i+3].textContent===variable && td[i+6].textContent===variable)){
                        win();
                        Object.assign(td[i].style,style1);
                        Object.assign(td[i+3].style,style1);
                        Object.assign(td[i+6].style,style1);
            }    
        }

        if(counter===9 && justify===false){
        span.textContent="NOBODY WON"

        }
        
}



        function win(){
            Object.assign(all.style,style2);
            for(let i=0;i<td.length;i++){
                td[i].removeEventListener("click",execute);
            }
            justify=true;
        }

        function reset(){
            counter=0;
            justify=false;
            for(let i=0;i<td.length;i++){
                td[i].textContent="";
                span.textContent="";
                td[i].style.color="white";
                td[i].style.textDecoration="none";
                all.style.backgroundColor="black";
            }
        }

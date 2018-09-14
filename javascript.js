//if we click on the start/reset
var playing=false;
var score=0;
var timeremaining;
var answers=[];
var b=[];
var levelscore=0;
var coinbox=25;
var maxcount=20;
var level=0;
var i, j, k, l, m, n;
var count=0;
var coinvalue=0;
var tr;
var clickanswer=[];



document.getElementById("startreset").onclick=function(){
    //if we are playing
    
    console.log("game is started");
    if(playing==true){
       location.reload();//reloading page 
        }
    else{//if we are not playing
        
        //change mode to playing
        playing=true;
        
        score=0;//set score to zero
        document.getElementById("scorevalue").innerHTML=score;
        show("timeremaining");
        
            timeremaining=60;          //-------------set starting point of timer here----------//
        
        
        hide("GameOver");
        //change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";
        
        startCountdown();
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        //generate a new Q&A

        generateQA();
        
        }
}

for(i=1;i<26;i++)
            {
                    var temp2=1;
                    document.getElementById("box"+i).onclick = function(event){
                        console.log(event.srcElement.id);
                        tr = event.srcElement.id;
//                        console.log("Box No that is clicked "+ temp2);
//                        temp2++;
                    checkMyAnswer(this.id)};
//        console.log(this.id);
    
            }
    //if we are playing
        //reload page
    
        //show countdown box
        //reduce time by 1 sec in loops
        //timeleft?
            //yes->continue
            //no->gameover
        
        //generate new Q&A




        //correct?
            //yes
                //increse score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec

//function

//start Counter
function startCountdown(){
    action=setInterval(function(){
        
        timeremaining-=1;
        
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0)//game over
        {console.log("timer ends at:"+ timeremaining);

            stopCountdown(); 
            colorwhite();
            show("GameOver");
            document.getElementById("GameOver").innerHTML="<p>Game Over</p><p>Your score is "+ score + ".</p>";
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
            
        }
    },1000);
    
}



//stop Counter
function stopCountdown(){
    console.log("timer is stopped");
    clearInterval(action);
}

//hide an element
function hide(Id)
{
//    console.log("hide function called on screen")
    document.getElementById(Id).style.display="none";
}

//show element
function show(Id)
{
//    console.log("show function called on screen")
    document.getElementById(Id).style.display="block";
}

//generate question and multiple answers
function generatecoinvalue(){
    
    coinvalue=1+Math.floor(14*Math.random());
    document.getElementById("coinvalue").innerHTML=coinvalue;
//    console.log("the coin value "+ coinvalue +" is generated");
//    console.log("the answer array contain "+ answers.length);

    
}

document.getElementById("submit").onclick = function(){
                        
                        var count2=false;
                        console.log("Answer is submitted");
                        console.log("the answer array contain "+ answers.length);
                        console.log("count: " + count);
                        console.log("coinvalue: " + coinvalue);
                        
                        if (count == coinvalue)                                
                            {   show("correct");
                                console.log("count=coinvalue");
//                                alert("hello your answer is correct");
                                setTimeout(function(){scoreIncrease();},150);
                                    
//                                setTimeout(function(){showCorrect();},150);
            
                            }
                        else if (count != coinvalue )
                            {
                                console.log("count!=coinvalue");
                                show("wrong");
                                setTimeout(function(){
                                hide("wrong");
                                },500);
                                
                                
                            }
//                        else if (count2 ==true )
//                            {
//                                console.log("count!=coinvalue");
//                                setTimeout(wrongAnswer(),150);
//                                                           
//                            }
                        colorwhite();
                        generateQA();
                        count=0;
    
                    }

function generateQA(){
    console.log("generatequestion")
    generatecoinvalue();

    var x;
    for(i=0;i<maxcount;i++)                         
    {
        do{
            
            x =1+Math.round(24*Math.random());
//          console.log("Random posn for box "+x);
        
         }
        while(answers.indexOf("box"+x)>-1);
        colorBox(x);
        answers.push("box"+x);
    }
    

}


//function to show coin
function colorBox(x)
{
                        var p = 1+Math.round(Math.random());
                        if(p==1){
                        document.getElementById("box"+x).style = "background-image:url('images/1coin.png')";
                        }
                        else if(p==2){
                            document.getElementById("box"+x).style = "background-image:url('images/10coin.png')";                            
                            
                        }
//                        else if(p==3){
//                            
//                            document.getElementById("box"+x).style = "background-image:url('images/100coin.png')";
//                        }
//                        do{
//                        document.getElementById("box"+x).style = "background-image:url('images/1coin.png')";
//                        document.getElementById("box"+x).style = "background-image:url('images/10coin.png')";
//                        document.getElementById("box"+x).style = "background-image:url('images/100coin.png')";
//                        }
                            

}


function checkMyAnswer(Id){
    
    
/*    
//    if(document.getElementById(Id).style.backgroundImage)
//        if(answers.indexOf(Id)>-1)
    {
        count++;
//        document.getElementById(Id).style.opacity=0.2 ;
//        document.getElementById(Id).style.backgroundColor = "red";
        
//        document.getElementById(Id).style.backgroundColor=black ;
    }
*/

    
   
    
    var flag=0;
    var j=0;
     if(clickanswer.indexOf(Id)==-1)
         
    {
        console.log("count"+ count);
        console.log("clickanswer"+clickanswer);
        clickanswer.push(Id);
        console.log("flag"+ flag);
            console.log("answers"+ answers);
            console.log("tr"+ tr);
    //for(i=0;i<=coinbox;i++){
        if(answers.indexOf(tr)>-1){
            
            
            document.getElementById(Id).style.opacity=0.2 ;
            count++;
            flag=1;
//            b[j]=i;
//            j++;
        }
//        var q=b.length;
//    for(k=1; k<=q; k++){
//            if(b[k]==i){
//            count--;
//            console.log(count);
//            }
//        
//        }    
    
  //  }
    if(flag==0){
//        document.getElementById(Id).style = "background-image:url('images/red.png')";
        document.getElementById(Id).style.backgroundColor ="white";
    }
    flag=0;
    
    }
    
    
    
    
/*   
//    if(answers.indexOf(Id)>-1)
//    {
//        if(document.getElementById(Id).style.backgroundColor="blue")
//         for(k=1;k<26;k++)
//        {
//            if(document.getElementById("box"+k).style.backgroundColor = "blue"){
//                document.getElementById(Id).style.opacity=0.2        
//                count++;
//            }
//        }
//    
//    }
   
    else{
        
        
        
        document.getElementById(Id).style = "background-image:url('images/red.png')";
//        document.getElementById(Id).style.backgroundColor = "red";

        
        //console.log(document.getElementById(Id).style);
            hide("correct");
            show("wrong");
        
            
            count2=true;
        
               generateQA();
                
        
    }
    
//    var count2=false;
//    if(count==coinvalue)                                ///////////////////////////////////////////
//        {
//            setTimeout(function(){scoreIncrease();},150);
//            
//        }
//    else if(count2==true)
//    {
//        setTimeout(function(){wrongAnswer();},150);
//    }


       



//
//if(tr==answers[i])
//          {
//              
//              console.log("red is always green");
//              document.getElementById(Id).style.opacity=0.2 ;
//              count++;
//              
//          }
//        else
//            {
//            console.log("red is always red");
//            show("wrong");
//            document.getElementById(Id).style = "background-image:url('images/red.png')";
//            
//            count2=true;
//            
//            }   
*/
    
}
    
    
    

function colorwhite()
{
   console.log("game screen flushed");
    var temp = answers.length;
      
   for(i=1;i<=temp;i++)           
                {
                    answers.pop();
                    
                    console.log("answers popped from box no:"+ tr);
                }
    var temp3 = clickanswer.length;
      
   for(i=1;i<=temp3;i++)
                {
                    
                    clickanswer.pop();
                }
    
    
    for(j=1;j<26;j++)
        {  
           
            document.getElementById("box"+j).style.backgroundImage = "none";
            
            
        }
    console.log("the answer array contain "+ answers.length);
   

}



function scoreIncrease(){
    
    
    score+=10;
    console.log("current game score is" + score);        
    document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            count=0;


}



function wrongAnswer(){
    console.log("you have chosen wrong answer");
    document.getElementById("scorevalue").innerHTML=score;
    show("wrong");
//    document.getElementById("box"+x).style = "background-image:url('images/red.png')"
            hide("correct");

            setTimeout(function(){
                hide("wrong");
            },1000);
    

//            setTimeout(function(){colorwhite();},1200);

}



function showCorrect()
{       
    console.log("you have chosen right answer");
        document.getElementById("scorevalue").innerHTML=score;
    show(correct);
    
            hide("wrong");
           show("correct");
            setTimeout(function(){hide("correct");},1000);
//           setTimeout(function(){showCorrect();},500);
//            setTimeout(function(){colorwhite();},1200);
             
}


////function to add sound
//function soundPlay(src){
//var audioElement = document.getElementById('player-src');
//audioElement.src =src ; //src for the player
//var myAudio = document.getElementById("player");
//myAudio.load();
//myAudio.play();
//}
//

        



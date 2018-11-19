var timer = 30;
var timerId;
var correctCnt = 0;
var wrongCnt = 0;
var unAns = 0;
var answeArray=[2,2,1,2,1,0,2,0];

document.getElementById("finalResult").style.visibility="hidden";

$("#start").on("click",function(){
  document.getElementById("startButton").style.visibility="hidden";
  document.getElementById("myQuestions").style.visibility= "visible";
  timerID = setInterval(function(){
    $("#timer-text").text(timer);
    timer--;
    if(timer===-1)
    {
      clearInterval(timerID);
    };
  },1000);

  
});

function checkResult( questionID )
{
  var userAns = document.forms[questionID];
  var i;

  for (i=0; i<userAns.length; i++)
  {
    if (userAns[i].checked)
    {
      if (i ==answeArray[questionID]) {correctCnt++;}
      else {wrongCnt++;}
    }
  }
   
};

$("#submit").on("click",function(event){
  document.getElementById("myQuestions").style.visibility="hidden";
  document.getElementById("finalResult").style.visibility= "visible";
  for (var j=0;j<8; j++)
  {  checkResult(j); };
  var unAns = 8 - correctCnt - wrongCnt;
  winAn.textContent = "Wins: " + correctCnt;
  wrongAn.textContent = "Losses: " + wrongCnt;
 unAn.textContent="Unanswered: "+ unAns;
}
);
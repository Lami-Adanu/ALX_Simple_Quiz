function checkAnswer() {
   var correctAnswer  = '4';
   var userAnswer = document.querySelector('[name="quiz"]:checked').value;
   var feedback = document.querySelector('#feedback');
   
   if(userAnswer == correctAnswer){
    feedback.textContent="Correct! Well done.";
   }else{
    feedback.textContent="That's incorrect. Try again!";
   }
}

var submitBtn = document.getElementById('submit-answer');
submitBtn.addEventListener('click',checkAnswer);
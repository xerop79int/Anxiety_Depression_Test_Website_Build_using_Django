// Firstly lets take the correct values as arrays
const correctAnswers = ["B", "B", "A", "B"];
// now lets take form as reference
const form = document.querySelector(".quiz-form");
// result div reference
const result = document.querySelector(".result");

// now lets add the submit event to check for the inputs and also have to prevent the default submit function by adding preventDefault() method
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('sssss');
  // lets take score 0 so that we can combine the score with this value later on
  let score = 0;
  // these value property taking the user answers so lets take this in a variable so that we can cycle through them and match them with correct answers
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Check answers
  // forEach method is to cycle through the answers, answer and index are two parameters, answer parameter is cycling through the answer and index is for position
  userAnswers.forEach((answer, index) => {
    // as for each is started cycling from the very first user answer which position is 0, we are matching it with correct answers index starting from 0
    if (answer === correctAnswers[index]) {
      // if it finds correct answer it will add 25 to the score
      score += 25;
      
    }
    
   
  });
  console.log(score);
  if(score > 25){
      
    alert('mymessage');
  }
  // show result on page
  // in order to scroll to the top when the score shows we can use this scroolTo method, here 0,0 are the co ordinates of top
  scrollTo(0, 0);
  // to show the score we also need to remove the d-none class
  result.classList.remove("d-none");

  // Score animation
  let output = 0;
  const timer = setInterval(() => {
    // here we are taking the span element through query selector to change its text contect according to the output using textContent property
    result.querySelector("span").textContent = `${output}%`;
    // here we are setting if statement to stop the setinterval when the score is reached
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

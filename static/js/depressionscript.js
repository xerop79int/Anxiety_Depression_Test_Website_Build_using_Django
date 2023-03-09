const quizData = [
    {
        question: "How often have you been bothered by feeling down, depressed, irritable, or hopeless over the last two weeks? ",
        a: "Not at all",
        b: "Several days",
        c: "More than half of the days",
        d: "Nearly every day",
        correct: "d",
    },
    {
        question: "How often have you been bothered that you have little interest or pleasure in doing things over the last two weeks? ",
        a: "Not at all",
        b: "Several days",
        c: "More than half of the days",
        d: "Nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by trouble falling asleep, staying asleep, or sleeping too much over the last two weeks? ",
        a: "Not at all",
        b: "Several days",
        c: "More than half of the days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: "How often have you been bothered that you have poor appetite, weight loss, or overeating over the last two weeks?   ",
        a: "Not at all",
        b: "Several days",
        c: "More than half of the days",
        d: "Nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by feeling tired, or having little energy over the last two weeks?  ",
        a: "Not at all",
        b: "Several days",
        c: "More than half of the days",
        d: "Nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by feeling bad about yourself – or feeling that you are a failure, or that you have let yourself or your family down over the last two weeks? ",
        a: "Not at all",
        b: "Several days",
        c: "More than half of the days",
        d: "Nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered that you have trouble concentrating on things like school work, reading, or watching TV over the last two weeks?  ",
        a: "Not at all",
        b: "Several days",
        c: "More then half days",
        d: "Nearly every day",
        correct: "b",
    },

];
document.getElementById("loader").style.display = "none";
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const blog= document.getElementById('Url')
const url1 = blog.getAttribute('data-url')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function loadPage()
{

     window.open="templates/test.html";

}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer);
    if(answer) {
       if(answer === 'a') {
           score=score+0;
           
       }
       if(answer === 'b') {
        score=score+1;
        
    }
    if(answer === 'c') {
        score=score+2;
        
    }
    if(answer === 'd') {
        score=score+3;
        
    }
       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } 
       else if(score>=0 && score <= 6) {
        
        document.getElementById("loader").style.display = "block"
        document.getElementById("quiz").style.display='none'
           setTimeout(function() {
            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1 style="color: --orange">Your score is  ${score} out of ${quizData.length*3}</h1>
            <p>Thanks for taking time to complete the questions. While you might be feeling down right now, you’re not showing signs of depression. Those low feelings should go away as the problem passes but you can help things along by trying some of the ideas below:</p>
<li>Check out the <a href="${url1}">stay well</a> section, its got some great suggestions.</li>
<li>Be aware of the <a href="${url1}">signs and symptoms</a> of depression.</li>
<li>Check back in a few weeks for a re-test if you’re still feeling this way.</li>
<li>Take the <a href="${url1}">anxiety test</a> to see if that may be the problem right now.</li><br>
            
           <center> <button style="  
            align: center;
            display: inline-block;
            padding-right: 1.5rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 1.5rem;
            background: #fd7e14;
            border-radius: 10px;
            cursor: pointer;
            border: none;" onclick="location.reload()">Reload</button><center>
            `
        }, 800)
          
        
          
       }
       else if(score >=7 && score <= 15) {
        
        //   document.getElementById("result").style.display = "flex"
        document.getElementById("loader").style.display = "block"
        document.getElementById("quiz").style.display='none'
        setTimeout(function() {
            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1>Your score is  ${score} out of ${quizData.length*3}</h1>
            <p>Your score falls into the middle (or moderate) range and depression could be what’s stopped you working or studying, meeting friends, or doing the things that make you happy. This isn’t a diagnosis but it looks like it’s time to get help, and get your life back (as hard as that might sound right now). Lots of people who experience depression have got through it by talking with someone who’s trained to help.</p>
            <li>Check out the <a href="${url1}">stay well</a> section, its got some great suggestions.</li>
            <li>Be aware of the <a href="${url1}">signs and symptoms</a> of depression.</li>
            <li>It’s strongly recommended you talk a health professional.</li>
            <li>Take the <a href="{% url 'formpage' %}">anxiety test</a> too to see if that may be the problem right now.</li><br>
                        
                       <center> <button style="  
                        align: center;
                        display: inline-block;
                        padding-right: 1.5rem;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        padding-left: 1.5rem;
                        background: #fd7e14;
                        border-radius: 10px;
                        cursor: pointer;
                        border: none;" onclick="location.reload()">Reload</button><center>
            `
        }, 800);
           
        
          
       }
       else if(score > 18 && score <= 28) {
        
           document.getElementById("loader").style.display = "block"
           document.getElementById("quiz").style.display='none'
           setTimeout(function() {
            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1>Your score is  ${score} out of ${quizData.length*3}</h1>
            <p>Your score falls into the high range of depression rate. If you’re having thoughts most days about hurting or killing yourself please reach out straight away and talk to someone who’s trained to help. Even if you feel like no-one in the world gets you right now, there are people who can support you. These thoughts are common in depression but if you find they are getting more frequent (most days) or you feel more like acting on them - call us straight away.</p>
            <li>It’s strongly recommended you talk a health professional.</li>
            <li>Call the Depression Helpline on <a href="${url1}">0000</a> for immediate help and support options.</li>
            <li>Check out the <a href="${url1}">stay well</a> section, its got some great suggestions.</li>
            
            
            <br>
                        
                       <center> <button style="  
                        align: center;
                        display: inline-block;
                        padding-right: 1.5rem;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        padding-left: 1.5rem;
                        background: #fd7e14;
                        border-radius: 10px;
                        cursor: pointer;
                        border: none;" onclick="location.reload()">Reload</button><center>
            `
        }, 800); 
          
       }

       if(currentQuiz == quizData.length) {
        const url = '/DepressionTestResult/';

        const payload = new FormData();
        payload.append('score', score);
        payload.append('quiz', quizData.length*3);
        payload.append('url', url1);

        fetch(url, {
        method: 'POST',
        body: payload
        })
        .then(response => console.log(response))
        }
    }
})
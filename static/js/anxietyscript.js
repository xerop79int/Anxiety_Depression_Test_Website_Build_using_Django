const quizData = [
    {
        question: "How often have you been bothered by feeling nervous, anxious or on edge over the last two weeks? ",
        a: "Not At All",
        b: "Several days",
        c: "More then half days",
        d: "Nearly every day",
        correct: "d",
    },
    {
        question: "How often have you been bothered by not being able to stop or control worrying over the last two weeks?  ",
        a: "Not At All",
        b: "Several days",
        c: "More then half days",
        d: "Nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by worrying too much about different things over the last two weeks",
        a: "Not At All",
        b: "Several days",
        c: "More then half days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: "How often have you been bothered by having trouble relaxing over the last two weeks?  ",
        a: "Not At All",
        b: "Several days",
        c: "More then half days",
        d: "Nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by being so restless that it is hard to sit still over the last two weeks ",
        a: "Not At All",
        b: "Several days",
        c: "More then half days",
        d: "Nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by becoming easily annoyed or irritable over the last two weeks? ",
        a: "Not At All",
        b: "Several days",
        c: "More then half days",
        d: "nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by feeling afraid as if something awful might happen over the last two weeks? ",
        a: "Not At All",
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

console.log("sadasd"+url1);
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

       else if(score>=0 && score <=6) {
        
        document.getElementById("loader").style.display = "block"
        document.getElementById("quiz").style.display='none'
           setTimeout(function() {

            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1 style="color: --orange">Your score is  ${score} out of ${quizData.length*3}</h1>
            <p>Your score falls into the low range. Some anxiety can be good – it can help us react to potential threats, perhaps by quickening our reflexes or focusing our attention, and it usually passes once the stressful situation has passed. Even though you might be feeling awful it looks like you’re having a normal reaction to a tough situation. You can do some things to help yourself feel a bit better.</p>
            <li>Check out the <a href="${url1}">stay well</a> section, its got some great suggestions</li>
            <li>Be aware of the <a href="${url1}"> signs and symptoms</a> of anxiety.</li>
            <li>Check back in a few weeks for a re-test if you’re still feeling this way.</li>
            <li>Take the <a href="${url1}">depression test</a> to see if that may be the problem right now.</li><br>
            
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
       else if(score > 6 && score <= 15) {
        
        //   document.getElementById("result").style.display = "flex"
        document.getElementById("loader").style.display = "block"
        document.getElementById("quiz").style.display='none'
        setTimeout(function() {

            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1 style="color: --orange">Your score is  ${score} out of ${quizData.length*3}</h1>
            <p>Your score suggests that anxiety has started to get in the way of how you live your daily life. Don’t be alarmed, this is very common and there are things you can do to improve your situation. There are different levels of anxiety and yours can change from day to day. But it’s important to seek help early. The sooner you talk to someone, the sooner you’ll be on the road to recovery.</p>
            <li>Check out the <a href="getbetter.html"> stay well</a> section, its got some great suggestions</li>
            <li>Be aware of the <a href="${url1}"> signs and symptoms</a> of anxiety.</li>
            <li>Check back in a few weeks for a re-test if you’re still feeling this way.</li>
            <li>It’s strongly recommended you talk a health professional.</li>
            
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
       else if(score > 16 && score <= 21) {
        
           document.getElementById("loader").style.display = "block"
           document.getElementById("quiz").style.display='none'
           setTimeout(function() {

            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1 style="color: --orange">Your score is  ${score} out of ${quizData.length*3}</h1>
            <p>Your score falls into the high range - anxiety has probably gotten in the way of you going to work, meeting friends, or doing the stuff that matters to you. This isn’t a diagnosis but it looks like it’s time to get help.</p>
            <li>Call the Depression Helpline on <a href="${url1}">0000</a> for immediate help and support options.</li>
            <li>It’s strongly recommended you talk a health professional.</li>
            <li>Get your doctor to check you over for any physical problems you’re worried about </li>
            
            
            
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
        const url = '/AnxietyTestResult/';

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
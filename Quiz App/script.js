
const questions = [
    {
        'que' : "Which programming language is commonly used for web development?",
        'a'   :"java",
        'b'   : "python",
        'c'   :"HTML",
        'd'   :"C++",
        'correct' : 'c'
    },
    {
        'que' : "Which of the following is not a front-end framework?",
        'a'   : "React",
        'b'   :"Angular",
        'c'   :"Django",
        'd'   :'Vue.js',
        'correct' : 'c'
    }
    ,
    {
        'que' : "What does CSS stand for in web development?",
        'a'   : "Computer Style Sheets",
        'b'   :"Creative Style Sheets",
        'c'   :"Cascading Style Sheets",
        'd'   :"Customized Style Sheets",
        'correct' : 'c'
    }
    ,
    {
        'que' : "Which of the following is a version control system commonly used in web development?",
        'a'   :"SVN",
        'b'   :"CVS",
        'c'   :"Mercurial",
        'd'   :"Git",
        'correct' : 'd'
    }
    ,
    {
        'que' : "What does SEO stand for in the context of web development?",
        'a'   : "Search Engine Organization",
        'b'   :"Search Engine Optimization",
        'c'   :"Secure Endpoints Operation",
        'd'   :'Site Enhancement Options',
        'correct' : 'b'
    }
    ,

    {
        'que' : "Which programming language is commonly used for server-side scripting in web development?",
        'a'   : "Java",
        'b'   :"Python",
        'c'   :"Ruby",
        'd'   :'PHP',
        'correct' : 'd'
    }
    ,{
        'que' : "What is the purpose of the CSS property \"display: none;\"?",
        'a'   : " It hides the element without affecting the layout",
        'b'   :"It removes the element from the DOM",
        'c'   :"It disables the element's functionality",
        'd'   :'It makes the element partially visible',
        'correct' : 'a'
    }
    ,{
        'que' : "What is the correct syntax to declare a variable in JavaScript?",
        'a'   : "var myVariable;",
        'b'   :"variable myVariable;",
        'c'   :"let myVariable;",
        'd'   :'const myVariable;',
        'correct' : 'a'
    }
    ,{
        'que' : "Which of the following is NOT a valid HTTP status code?",
        'a'   : " 404 Not Found",
        'b'   :"200 OK",
        'c'   :"300 Redirect",
        'd'   :'500 Internal Server Error',
        'correct' : 'c'
    }
    ,{
        'que' : "Which of the following databases is commonly used in web development for storing structured ",
        'a'   : "MongoDB",
        'b'   :"Redis",
        'c'   :"SQLite",
        'd'   :'Memcached',
        'correct' : 'c'
    }
    ,{
        'que' : "What does the term \"responsive design\" refer to in web development?",
        'a'   : "Designing websites with fast load times",
        'b'   :"Designing websites with visually appealing graphics",
        'c'   :"Designing websites that adapt to different screen sizes",
        'd'   :'Designing websites with interactive animations',
        'correct' : 'c'
    }
    ,
    {
        'que' : "Which of the following tags is used to create a hyperlink in HTML?",
        'a'   : `&lt;link&gt;`,
        'b'   :"&lt;a&gt;",
        'c'   :"&lt;href&gt;",
        'd'   :'&lt;url&gt;',
        'correct' : 'b'
    }

    
]

console.log(questions);


let indexNo = document.querySelector(".indexNo");

let questionHeading = document.querySelector(".questionHeading");

let data = document.querySelector(".main");

let nextBtn = document.querySelector(".next");

let options = document.querySelectorAll(".optionsInner");

let main = document.querySelector(".main");

let submit = document.querySelector("#submit");

let btns = document.querySelector(".btns");

// let prevBtn = document.querySelector(".previous");

// prevBtn.disabled = true;



let index = 0;
let total = questions.length;
let right = 0; 
// console.log(total)


function loadQues(){

    if(index === total)
    {
        index--; 
        nextBtn.disabled =true;
    }

    indexNo.innerHTML = `${index+1})`;

     questionHeading.innerHTML =  `${questions[index]['que']}`  ;

     options[0].nextElementSibling.innerHTML = questions[index]['a'];
     options[1].nextElementSibling.innerHTML = questions[index]['b'];
     options[2].nextElementSibling.innerHTML = questions[index]['c'];
     options[3].nextElementSibling.innerHTML = questions[index]['d'];

  
    
}

loadQues();



function nextFun()
{

    const ans = getAns();
    console.log(ans,questions[index]['correct']);
    if(index < total && ans === questions[index].correct)
    {     
        right++;
    }  
   
   index++;
   if(index < total)
   {
    loadQues();
    nextBtn.disabled = false;
   }
   else{
    nextBtn.disabled = true;
   }
  
 
 
    return;



    
    
     
}
nextBtn.addEventListener("click",()=>{
    nextFun();
  dismantleOption();
  
  
    // prevBtn.disabled = false;
});

function end()
{
  main.innerHTML = `<div class=end>
     <h2>Quiz End Successfully..</h2>
     <h1>RESULT :  ${((right/total)*100).toFixed(2)} %</h1>
    </div>`
}

submit.addEventListener("click",function(){
      let proceed = confirm("Do You want to submit..");
      if(proceed)
      {
        end();
      }
 

    
})


// prevBtn.addEventListener("click",function(e){
//     index--;
//     if(index >= 0)
//     {
        
//         loadQues();
//         nextBtn.disabled = false;
//     }
//     if(index<0)
//     {
//         index++;
//         prevBtn.disabled = true;
//     }
    
// })

const getAns =  ()=>{
    let answer;
       options.forEach((e)=>{
        
        if(e.checked ){
            answer =  e.value;
           
        }
       })
       return answer;
}

function dismantleOption(){

   if(index < total)
   {
    console.log(index,total);
    options.forEach((e)=>{
        e.checked = false;
    })
   }
   
}



    


//    }





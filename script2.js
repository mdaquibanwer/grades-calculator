let totalMarks = 0;
let percentage;
let grade;
let passFail;
const submitButton = document.querySelector(".btn")
const gradeData = document.querySelector(".gradeData")
const webDesign = document.getElementById("webDesign")
const javascript = document.getElementById("javascript")
const css = document.getElementById("css")
const html = document.getElementById("html")

submitButton.addEventListener("click",()=>{
    totalMarks = Number(webDesign.value )+ Number(javascript.value) + Number(css.value) + Number(html.value) ;
    percentage = totalMarks/4;
    if(percentage>=80){
        grade = "A";
        passFail = "PASS"
    }else if(percentage>=60 && percentage<80){
        grade = "B"
        passFail = "PASS"
    
    }else if(percentage>=50 && percentage<60){
        grade = "C";
        passFail = "PASS"
    
    }else if(percentage>=40 && percentage<50){
        grade = "D";
        passFail = "PASS"
    }else{
        grade  = "F";
        passFail = "FAIL"
    }
    // gradeData.classList.toggle("showGrade")
    gradeData.innerHTML = `<h3>Your Total Marks is ${totalMarks}</h3>
                        <h3>Your Percentage is ${percentage}</h3>
                        <h3>Your Grade is ${grade}</h3>
                        <h3>${passFail}</h3>`
})

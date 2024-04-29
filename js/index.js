import {calculateFinalGrade} from "./calculatorFunctions.js";

const calcFinalGradeBtn = document.getElementById('calculateFinalGradeBtn');

let grades = [];

calcFinalGradeBtn.addEventListener('click', function(){
    grades.length = 0;

    for(let i = 0; i < 4; i++){
        const markingPeriod = document.getElementById(`MP${i + 1}Selection`);
        grades.push(parseInt(markingPeriod.value));
    }

    const finalExam = document.getElementById("finalExamSelection").value;
    grades.push(parseInt(finalExam));


    const finalGradeOutput = document.getElementById('finalGrade');
    finalGradeOutput.value = calculateFinalGrade(grades);
    finalGradeOutput.style.display = 'block';
})
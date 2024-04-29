export function calculateFinalGrade(grades){
    let sum = 0;

    for(let i = 0; i < grades.length; i++){
        sum += grades[i];
    }

    sum = sum / grades.length;

    console.log(sum);

    if(sum >= 3.5) return "A";
    if(sum <= 3.4 && sum >= 2.5) return "B";
    if(sum <= 2.4 && sum >= 1.5) return "C";
    if(sum <= 1.4 && sum >= 0.5) return "D";
    return "E";
}
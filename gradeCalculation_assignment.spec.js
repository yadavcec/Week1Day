
function studentScore(score){

    let stu_score = score
    switch(true){

        case (stu_score <= 150):
            console.log("Student Grade is 'D' :" )
            break;
        case (stu_score > 150 && stu_score <= 250): //just Stu_Total_Marks <= 250) will also works.
            console.log("Student Grade is 'C'")
            break;

        case (stu_score <= 350):
            console.log("Student Grade is 'B' ")
            break;

        default:
            console.log("Student Grade is 'A'")
            break;
    }
}


const Stu_Total_Marks = 409
studentScore(Stu_Total_Marks)
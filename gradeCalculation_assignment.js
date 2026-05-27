
function studentScore(score){
    let stuScore = score

    if(stuScore > 0 && stuScore <=500){

        switch(true){

            case (stuScore <= 150):
                console.log("Student Grade is 'D'" )
                break;
            case (stuScore > 150 && stuScore <= 250): //just (stu_total_marks <= 250) will also works.
                console.log("Student Grade is 'C'")
                break;
            case (stuScore > 250 && stuScore <= 350):
                console.log("Student Grade is 'B'")
                break;
            default:
                console.log("Student Grade is 'A'")
                break;
        }   
    }else {
        console.log("Enter a valid student score :")
    }
}

const stuTotalMarks = 385    //Student marks range from 0 to 500.
studentScore(stuTotalMarks)

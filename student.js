//Challenge one
//Function that generates students grade

function grade_generator(grade){

    if (grade >= 80 && grade <= 100){//Grade A
        console.log("A")

    }else if (grade >= 60 && grade<=79){//Grade B
        console.log("B")

    }else if (grade >= 49 && grade <=59){//Grade C
        console.log("C")

    }else if (grade >= 39 && grade <=48){//Grade D
        console.log("D")
    }
    else if (grade < 39){//Grade E
        console.log("E")
    }

    {
        console.log("invalid grade")
    }
}
console.log(grade_generator(100))//To show the function works

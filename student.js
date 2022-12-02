//Challenge one

function grade_generator(grade){

    if (grade >= 80 && grade <= 100){
        console.log("A")

    }else if (grade >= 60 && grade<=79){
        console.log("B")

    }else if (grade >= 49 && grade <=59){
        console.log("C")

    }else if (grade < 40){
        console.log("E")
    }
    else

    {
        console.log("invalid grade")
    }
}
console.log(grade_generator(100))

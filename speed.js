//Challenge two
// function that detects speed of a car

function speed_detector(speed){//Output is 'ok' if speed is less than 70 kmhr
    if (speed <= 70){
        console.log("ok")
    }else{
        let points = (speed - 70) / 5
        if (points >= 12){// checks if demerits points in more than 12 and outputs 'License suspended' if true.
            console.log("License suspended")
        }else{
            console.log("Points: " + points)
        }
    }

}
console.log(speed_detector(150))// To show if the program works

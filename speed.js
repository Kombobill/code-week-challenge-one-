//Challenge two

function speed_detector(speed){
    if (speed <= 70){
        console.log("ok")
    }else{
        let points = (speed - 70) / 5
        if (points >= 12){
            console.log("License suspended")
        }else{
            console.log("Points: " + points)
        }
    }

}
console.log(speed_detector(150))

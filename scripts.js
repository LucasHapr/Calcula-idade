function age(){
    validatedata()
    let day = Number(document.getElementById("day").value)
    let month = Number(document.getElementById("month").value)
    let year = Number(document.getElementById("year").value)

    let data = new Date()
    let dayactual = data.getDate()
    let monthactual = data.getMonth() + 1
    let yearactual = data.getFullYear()

    let ageday
    let agemonth
    let ageyear

    if(month == monthactual){
        if(day < dayactual){
            ageyear = yearactual - year
            agemonth = 0          
            ageday = dayactual - day
        }else{
            if(day == dayactual){
                ageyear = yearactual - year
                agemonth = 0
                ageday = 0
            }else{
                ageyear = yearactual - year - 1
                agemonth = 11
                ageday = 31 - (Math.abs(dayactual - day))  
            }
        }
    }
    if(month > monthactual){
        if(day < dayactual){
        ageyear = (yearactual - year) - 1
        agemonth = 12 - (month - monthactual)
        ageday = dayactual - day
        }else{
            ageyear = (yearactual - year) - 1
            agemonth = 12 - (month - monthactual)    
            ageday = 31 - (Math.abs(dayactual - day))
        }
    }
    if(month < monthactual){
        if(day < dayactual){
            ageyear = yearactual - year
            agemonth = monthactual - month
            ageday = dayactual - day
            }else{
                ageyear = yearactual - year
                agemonth = monthactual - month    
                ageday = 31 - (Math.abs(dayactual - day))
            }
    }
    

    document.getElementById("years").innerHTML = ageyear
    document.getElementById("months").innerHTML = agemonth
    document.getElementById("days").innerHTML = ageday
    
}

function validatedata(){
    let day = Number(document.getElementById("day").value)
    let month = Number(document.getElementById("month").value)
    let year = Number(document.getElementById("year").value)
    let data = new Date()
    let yearactual = data.getFullYear()
   
    if(day > 31 || day < 1){
        document.getElementById('day-error').style.display = "block";
        document.getElementById('day').style.borderColor = "red";
        document.getElementById('text-day').style.color = "red";
    }else{
        document.getElementById('day-error').style.display = "none";
        document.getElementById('day').style.borderColor = "hsl(0, 0%, 83%)";
        document.getElementById('text-day').style.color = "hsl(0, 1%, 44%)";
    }

    if(month > 12 || month < 1){
        document.getElementById('month-error').style.display = "block";
        document.getElementById('month').style.borderColor = "red";
        document.getElementById('text-month').style.color = "red";
    }else{
        document.getElementById('month-error').style.display = "none";
        document.getElementById('month').style.borderColor = "hsl(0, 0%, 83%)";
        document.getElementById('text-month').style.color = "hsl(0, 1%, 44%)";
    }

    if(year > yearactual || year < 1){
        document.getElementById('year-error').style.display = "block";
        document.getElementById('year').style.borderColor = "red";
        document.getElementById('text-year').style.color = "red";
    }else{
        document.getElementById('year-error').style.display = "none";
        document.getElementById('year').style.borderColor = "hsl(0, 0%, 83%)";
        document.getElementById('text-year').style.color = "hsl(0, 1%, 44%)";
    }

}
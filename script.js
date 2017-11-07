var sign1 =


onSubmit()
name = document.GetElementById("name").value;
month = document.GetElementById("month").value;
day =   document.GetElementById("day").value;
determineSign(day,month)

var sign = 0;
determineHoroscope(month, day){
    if(month == 3 && day >= 21 || month == 4 && day <= 19){
        sign = 1;
        return name + " , your sign is Aries.";
    }
    if(month == 4 && day >=20 || month == 5 && day <= 20){
        sign = 2;
        return name + " , your sign is Taurus.";
    }
    if(month == 5 && day >= 21 || month == 6 && day <= 20){
        sign = 3;
        return name + " , your sign is Gemini.";
    }
    if(month == 6 && day >= 21 || month == 7 && day <= 22){
        sign = 4;
        return name + " , your sign is Cancer.";
    }
    if(month == 7 && day >= 23 || month == 8 && day <= 22){
        sign = 5;
        return name + " , your sign is Leo.";
    }
    if(month == 8 && day >= 23 || month == 9 && day <= 22){
        sign = 6;
        return name + " , your sign is Virgo.";
    }
    if(month == 9 && day >= 23 || month == 10 && day <= 22){
        sign = 7;
        return name + " , your sign is Libra.";
    }
    if(month == 10 && day >= 23|| month == 11 && day <= 21){
        sign = 8;
        return name + " , your sign is Scorpio.";
    }
    if(month == 11 && day >= 22 || month == 12 && day <= 21){
        sign = 9;
        return name + " , your sign is Saggitarius.";
    }
    if(month == 12 && day >= 22 || month == 1 && day <= 19){
        sign = 10;
        return name + " , your sign is Capricorn.";
    }
    if(month == 1 && day >= 20 || month == 2 && day <= 18){
        sign = 11;
        return name + " , your sign is Aquarius.";
    }
    if(month == 2 && day >= 19 || month == 3 && day <= 20){
        sign = 12;
        return name + " , your sign is Pisces.";
    }









}



determineImage(sign)





tester(){

    document.getElementById("output1").innnerHTML = onSubmit();



    document.getElementById("output2").innnerHTML = determineSign(day,month);



    document.getElementById("output3").innnerHTML = determineHoroscope(sign);


    document.getElementById("output4").innnerHTML = determineImage(sign);






}
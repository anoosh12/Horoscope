var signs = ["Aquarius", "Pisces","Scorpio", "Aries", "Cancer", "Taurus", "Leo", "Libra", "Virgo", "Gemini", "Capricorn", "Saggitarius"];
//

function onSubmit(){
    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var sign  = determineSign(parseInt(month), parseInt(day));
    document.getElementById("txt").innerHTML = name + " , your sign is " + signs[sign] + " . " + txt[sign];
    document.getElementById("image").innerHTML = "<img src= 'img/" + getImage() + ".png' width='300' height='300'>";
}

function determineSign(month, day){
    console.log(month)
    console.log(day)

    if(month === 2 && day > 28){
        return 0;
    }
    if((month === 4 || month === 6 || month === 9 || month === 11 || month === 12) && day > 30){
        return 0;
    }
    if (month === 3 && day >= 21 || month === 4 && day <= 19) {
        return 1;
    }
    if (month === 4 && day >= 20 || month === 5 && day <= 20) {
        return 2;
    }
    if (month === 5 && day >= 21 || month === 6 && day <= 20) {
        return 3;
    }
    if (month === 6 && day >= 21 || month === 7 && day <= 22) {
        return 4;
    }
    if (month === 7 && day >= 23 || month === 8 && day <= 22) {
        return 5;
    }
    if (month === 8 && day >= 23 || month === 9 && day <= 22) {
        return 6;
    }
    if (month === 9 && day >= 23 || month === 10 && day <= 22) {
        return 7;
    }
    if (month === 10 && day >= 23 || month === 11 && day <= 21) {
        return 8;
    }
    if (month === 11 && day >= 22 || month === 12 && day <= 21) {
        return 9;
    }
    if (month === 12 && day >= 22 || month === 1 && day <= 19) {
        return 10;
    }
    if (month === 1 && day >= 20 || month === 2 && day <= 18) {
        return 11;
    }
    if (month === 2 && day >= 19 || month === 3 && day <= 20){
       return 12;
    }
    else {
        return 0;
    }
}
//var sign = 0;


var txt = [];

    txt[1] = " As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings.";

    txt[2] = " Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses.";

    txt[3] = " Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless.";

    txt[4] = " Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home.";

    txt[5] = " People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. ";

    txt[6] = " Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac.";

    txt[7] = " People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves.";

    txt[8] = " are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac.";

    txt[9] = " Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.";

    txt[10] = " Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.";

    txt[11] = " Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.";

    txt[12] = " Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.";

    txt[0] = " Error. Please Try Again :( ";



function getImage(){
    if(sign[0]){

    }
    if(sign[1]){
        return "aries";
    }
    if(sign[2]){
        return "taurus";
    }
    if(sign[3]){
        return "gemini";
    }
    if(sign[4]){
        return "cancer";
    }
    if(sign[5]){
        return "leo";
    }
    if(sign[6]){
        return "virgo";
    }
    if(sign[7]){
        return "libra";
    }
    if(sign[8]){
        return "scorpio";
    }
    if(sign[9]){
        return "saggitarius";
    }
    if(sign[10]){
        return "capricorn";
    }
    if(sign[11]){
        return "aquarius";
    }
    if(sign = 12){
        return "piscies";
    }


}





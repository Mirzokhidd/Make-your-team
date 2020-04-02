var img = document.createElement("img");
//MONKEY DE LUFFY
var namemonkey = "MONKEY DE LUFFY";
var imagemonkey = "image_1.jpg";
var hpmonkey = 1000;
var mpmonkey = 638;
var jobmonkey = "FIGHTER";
var abilitymonkey = "RUBBER BODY";
var strengthmonkey = 97;
var agilitymonkey = 97;
var sensemonkey = 81;
var vitalitymonkey = 59;
var intelligencemonkey = 51; 

//NARUTO UZUMAK
var namenaruto = "NARUTO UZUMAK";
var imagenaruto = "image_2.jpeg";
var hpnaruto = 1000;
var mpnaruto = 640;
var jobnaruto = "NINJA";
var abilitynaruto = "JUTSUS AND NINE TAIL";
var strengthnaruto = 99;
var agilitynaruto = 94;
var sensenaruto = 86;
var vitalitynaruto = 65;
var intelligencenaruto = 10;

//ICHIGO KUROSAKI
var nameichigo = "ICHIGO KUROSAKI";
var imageichigo = "image_3.jpg";
var hpichigo = 1000;
var mpichigo = 630;
var jobichigo = "SWORDSMAN";
var abilityichigo = "SOUL SWORDSMAN";
var strengthichigo = 90;
var agilityichigo = 90;
var senseichigo = 89;
var vitalityichigo = 70;
var intelligenceichigo = 30;

//NATSU DRAGNEEL 
var namenatsu = "NATSU DRAGNEEL";
var imagenatsu = "image_4.jfif";
var hpnatsu = 1000;
var mpnatsu = 645;
var jobnatsu = "SALAMANDER";
var abilitynatsu = "FIRE";
var strengthnatsu = 80;
var agilitynatsu = 87;
var sensenatsu = 98;
var vitalitynatsu = 90;
var intelligencenatsu = 60;

//KILLUA ZOLDYCK
var namekillua = "KILLUA ZOLDYCK";
var imagekillua = "image_5.jfif";
var hpkillua = 1000;
var mpkillua = 635;
var jobkillua = "SINGLE STAR HUNTER";
var abilitykillua = "TRANSMUTATION TYPE NEN USER";
var strengthkillua = 91;
var agilitykillua = 92;
var sensekillua = 94;
var vitalitykillua = 90;
var intelligencekillua = 91;

//RORONOA ZORO 
var nameroronoa = "RORONOA ZORO";
var imageroronoa = "image_6.jfif";
var hproronoa = 1000;
var mproronoa = 690;
var jobroronoa = "SWORDSMAN";
var abilityroronoa = "MULTI SWORD SWORDSMAN";
var strengthroronoa = 80;
var agilityroronoa = 93;
var senseroronoa = 95;
var vitalityroronoa = 93;
var intelligenceroronoa = 91;

//IZUKU MIDORIYA 
var nameizuku = "IZUKU MIDORIYA";
var imageizuku = "image_7.png";
var hpizuku = 1000;
var mpizuku = 620;
var jobizuku = "HERO";
var abilityizuku = "ONE FOR ALL";
var strengthizuku = 70;
var agilityizuku = 91;
var senseizuku = 89;
var vitalityizuku = 99;
var intelligenceizuku = 90;

//VASH THE STAMPEDE
var namevash = "VASH THE STAMPEDE";
var imagevash = "image_8.jpg";
var hpvash = 1000;
var mpvash = 680;
var jobvash = "SHOOTER";
var abilityvash = "NEVER MISSES ANYTHING";
var strengthvash = 80;
var agilityvash = 90;
var sensevash = 98;
var vitalityvash = 70;
var intelligencevash = 95;

//GON FREECSS  
var namegon = "GON FREECSS";
var imagegon = "image_9.jfif";
var hpgon = 1000;
var mpgon = 620;
var jobgon = "SINGLE CLASS HUNTER";
var abilitygon = "JAJANKEN";
var strengthgon = 81;
var agilitygon = 89;
var sensegon = 86;
var vitalitygon = 81;
var intelligencegon = 89;


//Block 1

var slideShow = document.getElementById("slideShow");
var names = document.getElementById("nameSwitch");
var slides = [imagemonkey, imagenaruto, imageichigo];
var nameSlides = [namemonkey, namenaruto, nameichigo];
var counter = 0;
var nameCounter = 0;
var click = setInterval (slideShows, 1000);
var nameClick = setInterval (name, 1000);
var playing = true;
var playingName = true;
var button = document.getElementById("switch");


//Block 2
var slideShow2 = document.getElementById("slideShow2");
var names2 = document.getElementById("nameSwitch2");
var slides2 = [imagenatsu, imagekillua, imageroronoa];
var nameSlides2 = [namenatsu, namekillua, nameroronoa];
var counter2 = 0;
var nameCounter2 = 0;
var click2 = setInterval (slideShows2, 1000);
var nameClick2 = setInterval (name, 1000);
var playing2 = true;
var playingName2 = true;
var button2 = document.getElementById("switch2");

//Block 3

var slideShow3 = document.getElementById("slideShow3");
var names3 = document.getElementById("nameSwitch3");
var slides3 = [imageizuku, imagevash, imagegon];
var nameSlides3 = [nameizuku, namevash, namegon];
var counter3 = 0;
var nameCounter3 = 0;
var click3 = setInterval (slideShows3, 1000);
var nameClick3 = setInterval (name, 1000);
var playing3 = true;
var playingName3 = true;
var button3 = document.getElementById("switch3");

// Slide 1

function slideShows() {

    if (counter >= slides.length) {
        counter = 0;
    }

    if (nameCounter >= nameSlides.length) {
        nameCounter = 0;
    }

    slideShow.style.backgroundImage = 'url(' + slides[counter] + ')';
    counter++;

    names.innerHTML = nameSlides[nameCounter];
    nameCounter++;

}

function pause() {
    button.innerHTML = "Selected";
    button.style.width = "120px";
    button.style.background = "#DC143C";
    playing = false;
    playingName = false;
    clearInterval(click);
    clearInterval(nameClick);
}

function play() {
    button.innerHTML = "Select";
    button.style.width = "100px";
    button.style.background = "#32CD32";
    playing = true;
    playingName = true;
    click = setInterval(slideShows, 1000);
    nameClick = setInterval(name, 1000);
}


button.onclick = function playings() {
    if (playing && playingName) {
        pause();
    } else {
        play();
    }
}

// --------------------------------

//Slide 2

function slideShows2() {

    if (counter2 >= slides2.length) {
        counter2 = 0;
    }

    if (nameCounter2 >= nameSlides2.length) {
        nameCounter2 = 0;
    }

    slideShow2.style.backgroundImage = 'url(' + slides2[counter2] + ')';
    counter2++;

    names2.innerHTML = nameSlides2[nameCounter2];
    nameCounter2++;

}
function pause2() {
    button2.innerHTML = "Selected";
    button2.style.background = "#DC143C";
    button2.style.width = "120px";
    playing2 = false;
    playingName2= false;
    clearInterval(click2);
    clearInterval(nameClick2);
}

function play2() {
    button2.innerHTML = "Select";
    button2.style.background = "#32CD32";
    button2.style.width = "100px";
    playing2 = true;
    playingName2 = true;
    click2 = setInterval(slideShows2, 1000);
    nameClick2 = setInterval(name2, 1000);
}

button2.onclick = function playings2() {
    if (playing2) {
        pause2();
    } else {
        play2();
    }
}

// --------------------------------

//Slide 3

function slideShows3() {

    if (counter3 >= slides3.length) {
        counter3 = 0;
    }

    if (nameCounter3 >= nameSlides3.length) {
        nameCounter3 = 0;
    }

    slideShow3.style.backgroundImage = 'url(' + slides3[counter3] + ')';
    counter3++;

    names3.innerHTML = nameSlides3[nameCounter3];
    nameCounter3++;


}

function pause3() {
    button3.innerHTML = "Selected";
    button3.style.width = "120px";
    button3.style.background = "#DC143C";
    playing3 = false;
    playingName3 = false;
    clearInterval(click3);
    clearInterval(nameClick3);
}

function play3() {
    button3.innerHTML = "Select";
    button3.style.width = "100px";
    button3.style.background = "#32CD32";
    playing3 = true;
    playingName3 = true;
    click3 = setInterval(slideShows3, 1000);
    nameClick3 = setInterval(name3, 1000);
}

button3.onclick = function playings3() {
    if (playing3) {
        pause3();
    } else {
        play3();
    }
}


//Information

function info() {
    if( counter == 1 && counter2 == 1 && counter3 == 1) {
        var src = document.getElementById("results");
        var hp = hpmonkey + hpnatsu + hpizuku;
        var mp = mpmonkey + mpnatsu + mpizuku;
        var jobs = jobmonkey + ","  + jobnatsu + "," + jobizuku;
        var ability = abilitymonkey + ","  + abilitynatsu + "," + abilityizuku;
        var strength = strengthmonkey + strengthnatsu + strengthizuku;
        var agility = agilitymonkey + agilitynatsu + agilityizuku;
        var sense = sensemonkey + sensenatsu + senseizuku;
        var vitality = vitalitymonkey + vitalitynatsu + vitalityizuku;
        var intelligence = intelligencemonkey + intelligencenatsu + intelligenceizuku;
        var name = namemonkey + ", " + namenatsu + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    }  
}



function info2() {
    if( counter == 1 && counter2 == 1 && counter3 == 2) {
        var src = document.getElementById("results2");
        var hp = hpmonkey + hpnatsu + hpvash;
        var mp = mpmonkey + mpnatsu + mpvash;
        var jobs = jobmonkey + ","  + jobnatsu + "," + jobvash;
        var ability = abilitymonkey + ","  + abilitynatsu + "," + abilityvash;
        var strength = strengthmonkey + strengthnatsu + strengthvash;
        var agility = agilitymonkey + agilitynatsu + agilityvash;
        var sense = sensemonkey + sensenatsu + sensevash;
        var vitality = vitalitymonkey + vitalitynatsu + vitalityvash;
        var intelligence = intelligencemonkey + intelligencenatsu + intelligencevash;
        var name = namemonkey + ", " + namenatsu + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 870px; color: white; bottom: 290px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.innerHTML = results; 
        src.style.height = "100%";
        src.appendChild(img);
    } 
}

function info3() {
    if( counter == 1 && counter2 == 1 && counter3 == 3) {
        var src = document.getElementById("results3");
        var hp = hpmonkey + hpnatsu + hpgon;
        var mp = mpmonkey + mpnatsu + mpgon;
        var jobs = jobmonkey + ","  + jobnatsu + "," + jobgon;
        var ability = abilitymonkey + ","  + abilitynatsu + "," + abilitygon;
        var strength = strengthmonkey + strengthnatsu + strengthgon;
        var agility = agilitymonkey + agilitynatsu + agilitygon;
        var sense = sensemonkey + sensenatsu + senseichigo;
        var vitality = vitalitymonkey + vitalitynatsu + vitalitygon;
        var intelligence = intelligencemonkey + intelligencenatsu + intelligencegon;
        var name = namemonkey + ", " + namenatsu + ", " + namegon;
        var results = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 860px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.innerHTML = results; 
        src.style.height = "100%";
        src.appendChild(img);
    } 
}

function info4() {
    if( counter == 1 && counter2 == 2 && counter3 == 1) {
        var src = document.getElementById("results4");
        var hp = hpmonkey + hpkillua + hpizuku;
        var mp = mpmonkey + mpkillua + mpizuku;
        var jobs = jobmonkey + ","  + jobkillua + "," + jobizuku;
        var ability = abilitymonkey + ","  + abilitykillua + "," + abilityizuku;
        var strength = strengthmonkey + strengthkillua + strengthizuku;
        var agility = agilitymonkey + agilitykillua + agilityizuku;
        var sense = sensemonkey + sensekillua + senseizuku;
        var vitality = vitalitymonkey + vitalitykillua + vitalityizuku;
        var intelligence = intelligencemonkey + intelligencekillua + intelligenceizuku;
        var name = namemonkey + ", " + namekillua + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info5() {
    if( counter == 1 && counter2 == 2 && counter3 == 2) {
        var src = document.getElementById("results5");
        var hp = hpmonkey + hpkillua + hpvash;
        var mp = mpmonkey + mpkillua + mpvash;
        var jobs = jobmonkey + ","  + jobkillua + "," + jobvash;
        var ability = abilitymonkey + ","  + abilitykillua + "," + abilityvash;
        var strength = strengthmonkey + strengthkillua + strengthvash;
        var agility = agilitymonkey + agilitykillua + agilityvash;
        var sense = sensemonkey + sensekillua + sensevash;
        var vitality = vitalitymonkey + vitalitykillua + vitalityvash;
        var intelligence = intelligencemonkey + intelligencekillua + intelligencevash;
        var name = namemonkey + ", " + namekillua + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info6() {
    if( counter == 1 && counter2 == 2 && counter3 == 3) {
        var src  = document.getElementById("results6");
        var hp  = hpmonkey + hpkillua + hpgon;
        var mp  = mpmonkey + mpkillua + mpgon;
        var jobs  = jobmonkey + ","  + jobkillua + "," + jobgon;
        var ability  = abilitymonkey + ","  + abilitykillua + "," + abilitygon;
        var strength  = strengthmonkey + strengthkillua + strengthgon;
        var agility  = agilitymonkey + agilitykillua + agilitygon;
        var sense  = sensemonkey + sensekillua + sensegon;
        var vitality  = vitalitymonkey + vitalitykillua + vitalitygon;
        var intelligence  = intelligencemonkey + intelligencekillua + intelligencegon;
        var name  = namemonkey + ", " + namekillua + ", " + namegon;
        var results  = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name  + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp  + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp  + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs  + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability  + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength  + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility  + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense  + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality  + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence  + " / 300</p>"; 
        src .style.height = "100%";
        src .innerHTML = results ; 
        src6.appendChild(img);
    } 
}

function info7() {
    if( counter == 1 && counter2 == 3 && counter3 == 1) {
        var src = document.getElementById("results7");
        var hp = hpmonkey + hproronoa + hpizuku;
        var mp = mpmonkey + mproronoa + mpizuku;
        var jobs = jobmonkey + ","  + jobroronoa + "," + jobizuku;
        var ability = abilitymonkey + ","  + abilityroronoa + "," + abilityizuku;
        var strength = strengthmonkey + strengthroronoa + strengthizuku;
        var agility = agilitymonkey + agilityroronoa + agilityizuku;
        var sense = sensemonkey + senseroronoa + senseizuku;
        var vitality = vitalitymonkey + vitalityroronoa + vitalityizuku;
        var intelligence = intelligencemonkey + intelligenceroronoa + intelligenceizuku;
        var name = namemonkey + ", " + nameroronoa + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 835px; color: white; bottom: 290px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info8() {
    if( counter == 1 && counter2 == 3 && counter3 == 2) {
        var src = document.getElementById("results8");
        var hp = hpmonkey + hproronoa + hpvash;
        var mp = mpmonkey + mproronoa + mpizuku;
        var jobs = jobmonkey + ","  + jobroronoa + "," + jobvash;
        var ability = abilitymonkey + ","  + abilityroronoa + "," + abilityvash;
        var strength = strengthmonkey + strengthroronoa + strengthvash;
        var agility = agilitymonkey + agilityroronoa + agilityvash;
        var sense = sensemonkey + senseroronoa + sensevash;
        var vitality = vitalitymonkey + vitalityroronoa + vitalityvash;
        var intelligence = intelligencemonkey + intelligenceroronoa + intelligencevash;
        var name = namemonkey + ", " + nameroronoa + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 290px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info9() {
    if( counter == 1 && counter2 == 3 && counter3 == 3) {
        var src = document.getElementById("results9");
        var hp = hpmonkey + hproronoa + hpgon;
        var mp = mpmonkey + mproronoa + mpgon;
        var jobs = jobmonkey + ","  + jobroronoa + "," + jobgon;
        var ability = abilitymonkey + ","  + abilityroronoa + "," + abilitygon;
        var strength = strengthmonkey + strengthroronoa + strengthgon;
        var agility = agilitymonkey + agilityroronoa + agilitygon;
        var sense = sensemonkey + senseroronoa + sensegon;
        var vitality = vitalitymonkey + vitalityroronoa + vitalitygon;
        var intelligence = intelligencemonkey + intelligenceroronoa + intelligencegon;
        var name = namemonkey + ", " + nameroronoa + ", " + namegon;
        var results = "<p>Your Team</p><img src=" + imagemonkey + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 850px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 850px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info10() {
    if( counter == 2 && counter2 == 1 && counter3 == 1) {
        var src = document.getElementById("results10");
        var hp = hpnaruto + hpnatsu + hpizuku;
        var mp = mpnaruto + mpnatsu + mpizuku;
        var jobs = jobnaruto + ","  + jobnatsu + "," + jobizuku;
        var ability = abilitynaruto + ","  + abilitynatsu + "," + abilityizuku;
        var strength = strengthnaruto + strengthnatsu + strengthizuku;
        var agility = agilitynaruto + agilitynatsu + agilityizuku;
        var sense = sensenaruto + sensenatsu + senseizuku;
        var vitality = vitalitynaruto + vitalitynatsu + vitalityizuku;
        var intelligence = intelligencenaruto + intelligencenatsu + intelligenceizuku;
        var name = namenaruto + ", " + namenatsu + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
    } 
}

function info11() {
    if( counter == 2 && counter2 == 1 && counter3 == 2) {
        var src = document.getElementById("results11");
        var hp = hpnaruto + hpnatsu + hpvash;
        var mp = mpnaruto + mpnatsu + mpvash;
        var jobs = jobnaruto + ","  + jobnatsu + "," + jobvash;
        var ability = abilitynaruto + ","  + abilitynatsu + "," + abilityvash;
        var strength = strengthnaruto + strengthnatsu + strengthvash;
        var agility = agilitynaruto + agilitynatsu + agilityvash;
        var sense = sensenaruto + sensenatsu + sensevash;
        var vitality = vitalitynaruto + vitalitynatsu + vitalityvash;
        var intelligence = intelligencenaruto + intelligencenatsu + intelligencevash;
        var name = namenaruto + ", " + namenatsu + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
    } 
}

function info12() {
    if( counter == 2 && counter2 == 1 && counter3 == 3) {
        var src = document.getElementById("results12");
        var hp = hpnaruto + hpnatsu + hpgon;
        var mp = mpnaruto + mpnatsu + mpgon;
        var jobs = jobnaruto + ","  + jobnatsu + "," + jobgon;
        var ability = abilitynaruto + ","  + abilitynatsu + "," + abilitygon;
        var strength = strengthnaruto + strengthnatsu + strengthgon;
        var agility = agilitynaruto + agilitynatsu + agilitygon;
        var sense = sensenaruto + sensenatsu + sensegon;
        var vitality = vitalitynaruto + vitalitynatsu + vitalitygon;
        var intelligence = intelligencenaruto + intelligencenatsu + intelligencegon;
        var name = namenaruto + ", " + namenatsu + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
    } 
}

function info13() {
    if( counter == 2 && counter2 == 2 && counter3 == 1) {
        var src = document.getElementById("results13");
        var hp = hpnaruto + hpkillua + hpizuku;
        var mp = mpnaruto + mpkillua + mpizuku;
        var jobs = jobnaruto + ","  + jobkillua + "," + jobizuku;
        var ability = abilitynaruto + ","  + abilitykillua + "," + abilityizuku;
        var strength = strengthnaruto + strengthkillua + strengthizuku;
        var agility = agilitynaruto + agilitykillua + agilityizuku;
        var sense = sensenaruto + sensekillua + senseizuku;
        var vitality = vitalitynaruto + vitalitykillua + vitalityizuku;
        var intelligence = intelligencenaruto + intelligencekillua + intelligenceizuku;
        var name = namenaruto + ", " + namekillua + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 860px; color: white; bottom: 275px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
        } 
    } 

function info14() {
    if( counter == 2 && counter2 == 2 && counter3 == 2) {
        var src = document.getElementById("results14");
        var hp = hpnaruto + hpkillua + hpvash;
        var mp = mpnaruto + mpkillua + mpvash;
        var jobs = jobnaruto + ","  + jobkillua + "," + jobvash;
        var ability = abilitynaruto + ","  + abilitykillua + "," + abilityvash;
        var strength = strengthnaruto + strengthkillua + strengthvash;
        var agility = agilitynaruto + agilitykillua + agilityvash;
        var sense = sensenaruto + sensekillua + sensevash;
        var vitality = vitalitynaruto + vitalitykillua + vitalityvash;
        var intelligence = intelligencenaruto + intelligencekillua + intelligencevash;
        var name = namenaruto + ", " + namekillua + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 275px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
    } 
}

function info15() {
    if( counter == 2 && counter2 == 2 && counter3 == 3) {
        var src = document.getElementById("results15");
        var hp = hpnaruto + hpkillua + hpgon;
        var mp = mpnaruto + mpkillua + mpgon;
        var jobs = jobnaruto + ","  + jobkillua + "," + jobgon;
        var ability = abilitynaruto + ","  + abilitykillua + "," + abilitygon;
        var strength = strengthnaruto + strengthkillua + strengthgon;
        var agility = agilitynaruto + agilitykillua + agilitygon;
        var sense = sensenaruto + sensekillua + sensegon;
        var vitality = vitalitynaruto + vitalitykillua + vitalitygon;
        var intelligence = intelligencenaruto + intelligencekillua + intelligencegon;
        var name = namenaruto + ", " + namekillua + ", " + namegon;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 275px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
    } 
}

function info16() {
    if( counter == 2 && counter2 == 3 && counter3 == 1) {
        var src = document.getElementById("results16");
        var hp = hpnaruto + hproronoa + hpizuku;
        var mp = mpnaruto + mproronoa + mpizuku;
        var jobs = jobnaruto + ","  + jobroronoa + "," + jobizuku;
        var ability = abilitynaruto + ","  + abilityroronoa + "," + abilityizuku;
        var strength = strengthnaruto + strengthroronoa + strengthizuku;
        var agility = agilitynaruto + agilityroronoa + agilityizuku;
        var sense = sensenaruto + senseroronoa + senseizuku;
        var vitality = vitalitynaruto + vitalityroronoa + vitalityizuku;
        var intelligence = intelligencenaruto + intelligenceroronoa + intelligenceizuku;
        var name = namenaruto + ", " + nameroronoa + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
    } 
}

function info17() {
    if( counter == 2 && counter2 == 3 && counter3 == 2) {
        var src = document.getElementById("results17");
        var hp = hpnaruto + hproronoa + hpvash;
        var mp = mpnaruto + mproronoa + mpvash;
        var jobs = jobnaruto + ","  + jobroronoa + "," + jobvash;
        var ability = abilitynaruto + ","  + abilityroronoa + "," + abilityvash;
        var strength = strengthnaruto + strengthroronoa + strengthvash;
        var agility = agilitynaruto + agilityroronoa + agilityvash;
        var sense = sensenaruto + senseroronoa + sensevash;
        var vitality = vitalitynaruto + vitalityroronoa + vitalityvash;
        var intelligence = intelligencenaruto + intelligenceroronoa + intelligencevash;
        var name = namenaruto + ", " + nameroronoa + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
    } 
}

function info18() {
    if( counter == 2 && counter2 == 3 && counter3 == 3) {
        var src = document.getElementById("results18");
        var hp = hpnaruto + hproronoa + hpgon;
        var mp = mpnaruto + mproronoa + mpgon;
        var jobs = jobnaruto + ","  + jobroronoa + "," + jobgon;
        var ability = abilitynaruto + ","  + abilityroronoa + "," + abilitygon;
        var strength = strengthnaruto + strengthroronoa + strengthgon;
        var agility = agilitynaruto + agilityroronoa + agilitygon;
        var sense = sensenaruto + senseroronoa + sensegon;
        var vitality = vitalitynaruto + vitalityroronoa + vitalitygon;
        var intelligence = intelligencenaruto + intelligenceroronoa + intelligencegon;
        var name = namenaruto + ", " + nameroronoa + ", " + namegon;
        var results = "<p>Your Team</p><img src=" + imagenaruto + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img)
    } 
}

function info19() {
    if( counter == 3 && counter2 == 1 && counter3 == 1) {
        var src = document.getElementById("results19");
        var hp = hpichigo + hpnatsu + hpizuku;
        var mp = mpichigo + mpnatsu + mpizuku;
        var jobs = jobichigo + ","  + jobnatsu + "," + jobizuku;
        var ability = abilityichigo + ","  + abilitynatsu + "," + abilityizuku;
        var strength = strengthichigo + strengthnatsu + strengthizuku;
        var agility = agilityichigo + agilitynatsu + agilityizuku;
        var sense = senseichigo + sensenatsu + senseizuku;
        var vitality = vitalityichigo + vitalitynatsu + vitalityizuku;
        var intelligence = intelligenceichigo + intelligencenatsu + intelligenceizuku;
        var name = nameichigo + ", " + namenatsu + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info20() {
    if( counter == 3 && counter2 == 1 && counter3 == 2) {
        var src = document.getElementById("results");
        var hp = hpichigo + hpnatsu + hpvash;
        var mp = mpichigo + mpnatsu + mpvash;
        var jobs = jobichigo + ","  + jobnatsu + "," + jobvash;
        var ability = abilityichigo + ","  + abilitynatsu + "," + abilityvash;
        var strength = strengthichigo + strengthnatsu + strengthvash;
        var agility = agilityichigo + agilitynatsu + agilityvash;
        var sense = senseichigo + sensenatsu + sensevash;
        var vitality = vitalityichigo + vitalitynatsu + vitalityvash;
        var intelligence = intelligenceichigo + intelligencenatsu + intelligencevash;
        var name = nameichigo + ", " + namenatsu + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info21() {
    if( counter == 3 && counter2 == 1 && counter3 == 3) {
        var src = document.getElementById("results21");
        var hp = hpichigo + hpnatsu + hpgon;
        var mp = mpichigo + mpnatsu + mpgon;
        var jobs = jobichigo + ","  + jobnatsu + "," + jobgon;
        var ability = abilityichigo + ","  + abilitynatsu + "," + abilitygon;
        var strength = strengthichigo + strengthnatsu + strengthgon;
        var agility = agilityichigo + agilitynatsu + agilitygon;
        var sense = senseichigo + sensenatsu + sensegon;
        var vitality = vitalityichigo + vitalitynatsu + vitalitygon;
        var intelligence = intelligenceichigo + intelligencenatsu + intelligencegon;
        var name = nameichigo + ", " + namenatsu + ", " + namegon;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagenatsu + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 00</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info22() {
    if( counter == 3 && counter2 == 2 && counter3 == 1) {
        var src = document.getElementById("results22");
        var hp = hpichigo + hpkillua + hpizuku;
        var mp = mpichigo + mpkillua + mpizuku;
        var jobs = jobichigo + ","  + jobkillua + "," + jobizuku;
        var ability = abilityichigo + ","  + abilitykillua + "," + abilityizuku;
        var strength = strengthichigo + strengthkillua + strengthizuku;
        var agility = agilityichigo + agilitykillua + agilityizuku;
        var sense = senseichigo + sensekillua + senseizuku;
        var vitality = vitalityichigo + vitalitykillua + vitalityizuku;
        var intelligence = intelligenceichigo + intelligencekillua + intelligenceizuku;
        var name = nameichigo + ", " + namekillua + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info23() {
    if( counter == 3 && counter2 == 2 && counter3 == 2) {
        var src = document.getElementById("results23");
        var hp = hpichigo + hpkillua + hpvash;
        var mp = mpichigo + mpkillua + mpvash;
        var jobs = jobichigo + ","  + jobkillua + "," + jobvash;
        var ability = abilityichigo + ","  + abilitykillua + "," + abilityvash;
        var strength = strengthichigo + strengthkillua + strengthvash;
        var agility = agilityichigo + agilitykillua + agilityvash;
        var sense = senseichigo + sensekillua + sensevash;
        var vitality = vitalityichigo + vitalitykillua + vitalityvash;
        var intelligence = intelligenceichigo + intelligencekillua + intelligencevash;
        var name = nameichigo + ", " + namekillua + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info24() {
    if( counter == 3 && counter2 == 2 && counter3 == 3) {
        var src = document.getElementById("results23");
        var hp = hpichigo + hpkillua + hpgon;
        var mp = mpichigo + mpkillua + mpvash;
        var jobs = jobichigo + ","  + jobkillua + "," + jobgon;
        var ability = abilityichigo + ","  + abilitykillua + "," + abilitygon;
        var strength = strengthichigo + strengthkillua + strengthgon;
        var agility = agilityichigo + agilitykillua + agilitygon;
        var sense = senseichigo + sensekillua + sensegon;
        var vitality = vitalityichigo + vitalitykillua + vitalitygon;
        var intelligence = intelligenceichigo + intelligencekillua + intelligencegon;
        var name = nameichigo + ", " + namekillua + ", " + namegon;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imagekillua + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info25() {
    if( counter == 3 && counter2 == 3 && counter3 == 1) {
        var src = document.getElementById("results19");
        var hp = hpichigo + hproronoa + hpizuku;
        var mp = mpichigo + mproronoa + mpizuku;
        var jobs = jobichigo + ","  + jobroronoa + "," + jobizuku;
        var ability = abilityichigo + ","  + abilityroronoa + "," + abilityizuku;
        var strength = strengthichigo + strengthroronoa + strengthizuku;
        var agility = agilityichigo + agilityroronoa + agilityizuku;
        var sense = senseichigo + senseroronoa + senseizuku;
        var vitality = vitalityichigo + vitalityroronoa + vitalityizuku;
        var intelligence = intelligenceichigo + intelligenceroronoa + intelligenceizuku;
        var name = nameichigo + ", " + nameroronoa + ", " + nameizuku;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imageizuku + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info26() {
    if( counter == 3 && counter2 == 3 && counter3 == 2) {
        var src = document.getElementById("results19");
        var hp = hpichigo + hproronoa + hpvash;
        var mp = mpichigo + mproronoa + mpvash;
        var jobs = jobichigo + ","  + jobroronoa + "," + jobvash;
        var ability = abilityichigo + ","  + abilityroronoa + "," + abilityvash;
        var strength = strengthichigo + strengthroronoa + strengthvash;
        var agility = agilityichigo + agilityroronoa + agilityvash;
        var sense = senseichigo + senseroronoa + sensevash;
        var vitality = vitalityichigo + vitalityroronoa + vitalityvash;
        var intelligence = intelligenceichigo + intelligenceroronoa + intelligencevash;
        var name = nameichigo + ", " + nameroronoa + ", " + namevash;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagevash + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}

function info27() {
    if( counter == 3 && counter2 == 3 && counter3 == 3) {
        var src = document.getElementById("results19");
        var hp = hpichigo + hproronoa + hpgon;
        var mp = mpichigo + mproronoa + mpgon;
        var jobs = jobichigo + ","  + jobroronoa + "," + jobgon;
        var ability = abilityichigo + ","  + abilityroronoa + "," + abilitygon;
        var strength = strengthichigo + strengthroronoa + strengthgon;
        var agility = agilityichigo + agilityroronoa + agilitygon;
        var sense = senseichigo + senseroronoa + sensegon;
        var vitality = vitalityichigo + vitalityroronoa + vitalitygon;
        var intelligence = intelligenceichigo + intelligenceroronoa + intelligencegon;
        var name = nameichigo + ", " + nameroronoa + ", " + namegon;
        var results = "<p>Your Team</p><img src=" + imageichigo + " style='position: relative; top: 100px;'>" + "</img>" +
        "<img src=" + imageroronoa + " style='position: relative; top: 100px; left: 150px;>'" + "</img>" +
        "<img src=" + imagegon + " style='position: relative; top: 100px; left: 200px;>'" + "</img>" + 
        "<p style='position: fixed; left: 900px; color: white; bottom: 500px;font-size: 20px; '> NAMES: " + name + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 450px;font-size: 20px; '> TOTAL HP: " + hp + " / 3000</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 400px;font-size: 20px; '> TOTAL MP: " + mp + " / 2100</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 350px;font-size: 20px; '> JOBS: " + jobs + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 300px;font-size: 20px; '> ABILITES: " + ability + "</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 250px;font-size: 20px; '> STRENGTH: " + strength + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 200px;font-size: 20px; '> AGILITY: " + agility + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 150px;font-size: 20px; '> SENSE: " + sense + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 100px;font-size: 20px; '> VITALITY: " + vitality + " / 300</p>" +
        "<p style='position: fixed; left: 900px; color: white; bottom: 50px;font-size: 20px; '> INTELLIGENCE: " + intelligence + " / 300</p>"; 
        src.style.height = "100%";
        src.innerHTML = results; 
        src.appendChild(img);
    } 
}


//Names:








window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

}

function showStart() {
    console.log("show slide");


    document.querySelector("#burgermenu").addEventListener("click", showMenu1);
    document.querySelector("#burgermenu").addEventListener("click", showMenu2);
    document.querySelector("#burgermenu").addEventListener("click", showMenu3);
    document.querySelector("#burgermenu").addEventListener("click", showMenu4);
    document.querySelector("#burgermenu").addEventListener("click", showMenu5);
    document.querySelector("#burgermenu").addEventListener("click", showMenu6);
    document.querySelector("#burgermenu").addEventListener("click", showMenu7);
    document.querySelector("#burgermenu").addEventListener("click", showMenu8);
    document.querySelector("#burgermenu").addEventListener("click", showMenu9);


    document.querySelector("#forward").addEventListener("click", goRight1);
    document.querySelector("#backward2").addEventListener("click", goLeft1);

    document.querySelector("#forward2").addEventListener("click", goRight2);
    document.querySelector("#backward3").addEventListener("click", goLeft2);

    document.querySelector("#forward3").addEventListener("click", goRight3);
    document.querySelector("#backward4").addEventListener("click", goLeft3);

    document.querySelector("#forward4").addEventListener("click", goRight4);
    document.querySelector("#backward5").addEventListener("click", goLeft4);

    document.querySelector("#forward5").addEventListener("click", goRight5);
    document.querySelector("#backward6").addEventListener("click", goLeft5);

    document.querySelector("#forward6").addEventListener("click", goRight6);
    document.querySelector("#backward7").addEventListener("click", goLeft6);

    document.querySelector("#forward7").addEventListener("click", goRight7);
    document.querySelector("#backward8").addEventListener("click", goLeft7);

    document.querySelector("#forward8").addEventListener("click", goRight8);
    document.querySelector("#backward9").addEventListener("click", goLeft8);


    document.querySelector("#menu1").addEventListener("click", goArt);
    document.querySelector("#menu2").addEventListener("click", goJens);
    document.querySelector("#menu3").addEventListener("click", goMagsters);
    document.querySelector("#menu4").addEventListener("click", goChristmas);
    document.querySelector("#menu5").addEventListener("click", goTeenage);
    document.querySelector("#menu6").addEventListener("click", goKea);
    document.querySelector("#menu7").addEventListener("click", goCooking);
    document.querySelector("#menu8").addEventListener("click", goTema);
    document.querySelector("#menu9").addEventListener("click", goAlex);

    document.querySelector("#forward").classList.add("pulse");
    document.querySelector("#forward2").classList.add("pulse");
    document.querySelector("#forward3").classList.add("pulse");
    document.querySelector("#forward4").classList.add("pulse");
    document.querySelector("#forward5").classList.add("pulse");
    document.querySelector("#forward6").classList.add("pulse");
    document.querySelector("#forward7").classList.add("pulse");
    document.querySelector("#forward8").classList.add("pulse");

    document.querySelector("#backward2").classList.add("pulse");
    document.querySelector("#backward3").classList.add("pulse");
    document.querySelector("#backward4").classList.add("pulse");
    document.querySelector("#backward5").classList.add("pulse");
    document.querySelector("#backward6").classList.add("pulse");
    document.querySelector("#backward7").classList.add("pulse");
    document.querySelector("#backward8").classList.add("pulse");
    document.querySelector("#backward9").classList.add("pulse");


}



/* ---------- SLIDING BACK AND FORTH --------- */
/* ---------- SLIDING BACK AND FORTH --------- */
/* ---------- SLIDING BACK AND FORTH --------- */


function goArt() {
    console.log("Going Artdeco");
    document.querySelector("#slide1").classList.remove("hide");
    document.querySelector("#slide2").classList.add("hide");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide9").classList.add("hide");


}

function goJens() {
    console.log("Going Jens knudsen");
    document.querySelector("#slide2").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide9").classList.add("hide");
}

function goMagsters() {
    console.log("Going Jens knudsen");
    document.querySelector("#slide3").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");
    document.querySelector("#slide2").classList.add("hide");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide9").classList.add("hide");

}

function goChristmas() {
    console.log("Going Jens knudsen");
    document.querySelector("#slide4").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide2").classList.add("hide");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide9").classList.add("hide");

}

function goTeenage() {
    console.log("Going Jens knudsen");
    document.querySelector("#slide5").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide2").classList.add("hide");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide9").classList.add("hide");

}

function goKea() {
    console.log("Going Jens knudsen");
    document.querySelector("#slide6").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide2").classList.add("hide");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide9").classList.add("hide");

}

function goCooking() {
    console.log("Going Jens knudsen");
    document.querySelector("#slide7").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide2").classList.add("hide");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide9").classList.add("hide");
}

function goTema() {
    console.log("Going Jens knudsen");
    document.querySelector("#slide8").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide2").classList.add("hide");
    document.querySelector("#slide9").classList.add("hide");

}

function goAlex() {
    console.log("Going Jens knudsen");
    document.querySelector("#slide9").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide2").classList.add("hide");

}


/* ---------- SLIDING BACK AND FORTH --------- */
/* ---------- SLIDING BACK AND FORTH --------- */
/* ---------- SLIDING BACK AND FORTH --------- */



function goRight1() {
    console.log("Going Forward");
    document.querySelector("#slide2").classList.remove("hide");
    document.querySelector("#slide1").classList.add("hide");


}

function goLeft1() {
    console.log("Going Back");
    document.querySelector("#slide2").classList.add("hide");
    document.querySelector("#slide1").classList.remove("hide");

}

function goRight2() {
    console.log("Going Forward");
    document.querySelector("#slide3").classList.remove("hide");
    document.querySelector("#slide2").classList.add("hide");


}

function goLeft2() {
    console.log("Going Back");
    document.querySelector("#slide3").classList.add("hide");
    document.querySelector("#slide2").classList.remove("hide");

}

function goRight3() {
    console.log("Going Forward");
    document.querySelector("#slide4").classList.remove("hide");
    document.querySelector("#slide3").classList.add("hide");


}

function goLeft3() {
    console.log("Going Back");
    document.querySelector("#slide4").classList.add("hide");
    document.querySelector("#slide3").classList.remove("hide");

}

function goRight4() {
    console.log("Going Forward");
    document.querySelector("#slide5").classList.remove("hide");
    document.querySelector("#slide4").classList.add("hide");


}

function goLeft4() {
    console.log("Going Back");
    document.querySelector("#slide5").classList.add("hide");
    document.querySelector("#slide4").classList.remove("hide");

}

function goRight5() {
    console.log("Going Forward");
    document.querySelector("#slide6").classList.remove("hide");
    document.querySelector("#slide5").classList.add("hide");


}

function goLeft5() {
    console.log("Going Back");
    document.querySelector("#slide6").classList.add("hide");
    document.querySelector("#slide5").classList.remove("hide");

}

function goRight6() {
    console.log("Going Forward");
    document.querySelector("#slide7").classList.remove("hide");
    document.querySelector("#slide6").classList.add("hide");


}

function goLeft6() {
    console.log("Going Back");
    document.querySelector("#slide7").classList.add("hide");
    document.querySelector("#slide6").classList.remove("hide");

}

function goRight7() {
    console.log("Going Forward");
    document.querySelector("#slide8").classList.remove("hide");
    document.querySelector("#slide7").classList.add("hide");


}

function goLeft7() {
    console.log("Going Back");
    document.querySelector("#slide8").classList.add("hide");
    document.querySelector("#slide7").classList.remove("hide");

}

function goRight8() {
    console.log("Going Forward");
    document.querySelector("#slide9").classList.remove("hide");
    document.querySelector("#slide8").classList.add("hide");


}

function goLeft8() {
    console.log("Going Back");
    document.querySelector("#slide9").classList.add("hide");
    document.querySelector("#slide8").classList.remove("hide");

}





/* ----------- MENU COMING FORWARD ---------- */
/* ----------- MENU COMING FORWARD ---------- */
/* ----------- MENU COMING FORWARD ---------- */


function showMenu1() {

    console.log("Show menu 1");

    if (document.querySelector('#menu1').classList.contains('fade_in1')) {
        document.querySelector("#menu1").classList.toggle("fade_out1");
    } else {
        document.querySelector("#menu1").classList.toggle("fade_in1");
        document.querySelector("#menu1").classList.toggle("hide");
    }


    //    console.log("Show Menu1");
    //    document.querySelector("#menu1").classList.toggle("fade_in1");
    //    document.querySelector("#menu1").classList.toggle("hide");
}

function showMenu2() {

    console.log("Show menu 2");

    if (document.querySelector('#menu2').classList.contains('fade_in2')) {
        document.querySelector("#menu2").classList.toggle("fade_out2");
    } else {
        document.querySelector("#menu2").classList.toggle("fade_in2");
        document.querySelector("#menu2").classList.toggle("hide");
    }


    //    console.log("Show Menu2");
    //    document.querySelector("#menu2").classList.add("fade_in2");
    //    document.querySelector("#menu2").classList.remove("hide");


}

function showMenu3() {

    console.log("Show menu 3");

    if (document.querySelector('#menu3').classList.contains('fade_in3')) {
        document.querySelector("#menu3").classList.toggle("fade_out3");
    } else {
        document.querySelector("#menu3").classList.toggle("fade_in3");
        document.querySelector("#menu3").classList.toggle("hide");
    }


    //    console.log("Show Menu3");
    //    document.querySelector("#menu3").classList.add("fade_in3");
    //    document.querySelector("#menu3").classList.remove("hide");




}


function showMenu4() {

    console.log("Show menu 4");

    if (document.querySelector('#menu4').classList.contains('fade_in4')) {
        document.querySelector("#menu4").classList.toggle("fade_out4");
    } else {
        document.querySelector("#menu4").classList.toggle("fade_in4");
        document.querySelector("#menu4").classList.toggle("hide");
    }


    //    console.log("Show Menu4");
    //    document.querySelector("#menu4").classList.add("fade_in4");
    //    document.querySelector("#menu4").classList.remove("hide");




}


function showMenu5() {

    console.log("Show menu 5");

    if (document.querySelector('#menu5').classList.contains('fade_in5')) {
        document.querySelector("#menu5").classList.toggle("fade_out5");
    } else {
        document.querySelector("#menu5").classList.toggle("fade_in5");
        document.querySelector("#menu5").classList.toggle("hide");
    }


    //    console.log("Show Menu5");
    //    document.querySelector("#menu5").classList.add("fade_in5");
    //    document.querySelector("#menu5").classList.remove("hide");




}


function showMenu6() {

    console.log("Show menu 6");

    if (document.querySelector('#menu6').classList.contains('fade_in6')) {
        document.querySelector("#menu6").classList.toggle("fade_out6");
    } else {
        document.querySelector("#menu6").classList.toggle("fade_in6");
        document.querySelector("#menu6").classList.toggle("hide");
    }


    //    console.log("Show Menu6");
    //    document.querySelector("#menu6").classList.add("fade_in6");
    //    document.querySelector("#menu6").classList.remove("hide");




}


function showMenu7() {

    console.log("Show menu 7");

    if (document.querySelector('#menu7').classList.contains('fade_in7')) {
        document.querySelector("#menu7").classList.toggle("fade_out7");
    } else {
        document.querySelector("#menu7").classList.toggle("fade_in7");
        document.querySelector("#menu7").classList.toggle("hide");
    }


    //    console.log("Show Menu7");
    //    document.querySelector("#menu7").classList.add("fade_in7");
    //    document.querySelector("#menu7").classList.remove("hide");



}


function showMenu8() {

    console.log("Show menu 8");

    if (document.querySelector('#menu8').classList.contains('fade_in8')) {
        document.querySelector("#menu8").classList.toggle("fade_out8");
    } else {
        document.querySelector("#menu8").classList.toggle("fade_in8");
        document.querySelector("#menu8").classList.toggle("hide");
    }


    //    console.log("Show Menu8");
    //    document.querySelector("#menu8").classList.add("fade_in8");
    //    document.querySelector("#menu8").classList.remove("hide");



}


function showMenu9() {

    console.log("Show menu 9");

    if (document.querySelector('#menu9').classList.contains('fade_in9')) {
        document.querySelector("#menu9").classList.toggle("fade_out9");
    } else {
        document.querySelector("#menu9").classList.toggle("fade_in9");
        document.querySelector("#menu9").classList.toggle("hide");
    }


    //    console.log("Show Menu9");
    //    document.querySelector("#menu9").classList.add("fade_in9");
    //    document.querySelector("#menu9").classList.remove("hide");




}

////// lamp1

function control_lamp1() {


    let checkBox = document.getElementById("check_lamp1");
    let semi_circle = document.querySelector("#semi_circle1");
    let line = document.getElementById("nakh1")
    let trapezium = document.querySelector("#trapezium1")
    let music = document.querySelector("#music1")

    /////////////////////////////////////////

    ////////////////////////////////////////



    if (checkBox.checked == true) {

        semi_circle.setAttribute("style", "background-color: yellow;")
        line.style.padding = "20px 0px 0px 0px";
        trapezium.style.borderBottomColor = "#fff70031";

        music.play();
        // #fff70031

    } else {

        semi_circle.setAttribute("style", "background-color:rgb(179, 179, 187);");
        line.style.padding = "0px 0px 0px 0px";
        trapezium.style.borderBottomColor = "transparent";
        music.play();


    }

    semi_circle.style.transition = "all 4s";
    line.style.transition = "all 0.5s ease-out";
    trapezium.style.transition = "all 5s ease-out";



}
////////////////////////////////////////////////////////////////////////

////// lamp2
function control_lamp2() {
    let music = document.querySelector("#music2")
    let checkBox2 = document.getElementById("check_lamp2");
    let semi_circle2 = document.querySelector("#semi_circle2");
    let line2 = document.getElementById("nakh2")
    let trapezium2 = document.querySelector("#trapezium2")



    if (checkBox2.checked == true) {


        semi_circle2.setAttribute("style", "background-color: yellow;")
        line2.style.padding = "20px 0px 0px 0px";
        trapezium2.style.borderBottomColor = "#fff70031";
        music.play();



    } else {

        semi_circle2.setAttribute("style", "background-color:rgb(179, 179, 187);");
        line2.style.padding = "0px 0px 0px 0px";
        trapezium2.style.borderBottomColor = "transparent";
        music.play();


    }


    semi_circle2.style.transition = "all 4s";
    line2.style.transition = "all 0.5s ease-out";
    trapezium2.style.transition = "all 5s ease-out";




}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  muteee


////// lamp1

function control_lamp11() {


    let checkBox = document.getElementById("check_lamp1");
    let semi_circle = document.querySelector("#semi_circle1");
    let line = document.getElementById("nakh1")
    let trapezium = document.querySelector("#trapezium1")




    if (checkBox.checked == true) {

        semi_circle.setAttribute("style", "background-color: yellow;")
        line.style.padding = "20px 0px 0px 0px";
        trapezium.style.borderBottomColor = "#fff70031";
        ////////////////////////////////////////////////


        /////////////////////////////////////////////

    } else {

        semi_circle.setAttribute("style", "background-color:rgb(179, 179, 187);");
        line.style.padding = "0px 0px 0px 0px";
        trapezium.style.borderBottomColor = "transparent";
        ///////////////////////////////////////////////

        ///////////////////////////////////////////////


    }

    semi_circle.style.transition = "all 4s";
    line.style.transition = "all 0.5s ease-out";
    trapezium.style.transition = "all 5s ease-out";



}
////////////////////////////////////////////////////////////////////////

////// lamp2
function control_lamp22() {

    let checkBox2 = document.getElementById("check_lamp2");
    let semi_circle2 = document.querySelector("#semi_circle2");
    let line2 = document.getElementById("nakh2")
    let trapezium2 = document.querySelector("#trapezium2")



    if (checkBox2.checked == true) {


        semi_circle2.setAttribute("style", "background-color: yellow;")
        line2.style.padding = "20px 0px 0px 0px";
        trapezium2.style.borderBottomColor = "#fff70031";




    } else {

        semi_circle2.setAttribute("style", "background-color:rgb(179, 179, 187);");
        line2.style.padding = "0px 0px 0px 0px";
        trapezium2.style.borderBottomColor = "transparent";



    }


    semi_circle2.style.transition = "all 4s";
    line2.style.transition = "all 0.5s ease-out";
    trapezium2.style.transition = "all 5s ease-out";




}
let hostname = "broker.mqtt-dashboard.com";
let port = 8000;

// Create a client instance
let client = new Paho.MQTT.Client(hostname, Number(port), "gkte7jjknkngraav8dbngbnbpopowvmmvrovrpqwdlpl8zxfmoddo08ofmeofeffefeqas");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;



// connect the client

// var lwt = new Paho.MQTT.Message("payload123d");
// lwt.destinationName = "vendar8013";
// lwt.qos = 0;
// lwt.retained = false;


client.connect({
    onSuccess: onConnect,
    //willMessage: lwt,
    onFailure: onConnectionLost,
});











// called when the client connects
function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Connected :)");
    client.subscribe("m15kh10001");
    var alarm1 = document.getElementById('alarm1');
    alarm1.innerText = "Connect Successfully";
    var span_head1 = document.getElementById('span_head1');
    span_head1.style.transition = "all 1s";
    span_head1.style.backgroundColor = "green";

    var alarm2 = document.getElementById('alarm1_2');
    alarm2.innerText = "";


}

// called when the client loses its connection
function onConnectionLost(responseObject) {

    if (responseObject.errorCode !== 0) {
        console.log("DISconnected!!!!!!:" + responseObject.errorMessage);
        document.getElementById("alarm1").innerText = "Connect Failed ";
        var span_head1 = document.getElementById('span_head1');
        span_head1.style.transition = "all 1s";
        span_head1.style.backgroundColor = "red";

        var alarm1_2 = document.getElementById('alarm1_2');
        alarm1_2.innerText = "trying  to connecting  ...";
        span_head2.style.backgroundColor = "red";
        span_head2.style.transition = "all 1s";
        document.getElementById("alarm2").innerText = "Offline";



        var delayInMilliseconds = 3000; //1 second
        setTimeout(function() {
            client.connect({
                onSuccess: onConnect,
                onFailure: onConnectionLost,
            });

        }, delayInMilliseconds);





    }
}

// called when a message arrives
function onMessageArrived(message) {
    console.log("Message arrived: topic=" + message.destinationName + ", message=" + message.payloadString);


    let esp_status = message.payloadString.split("/")[0].split(":")[1];
    let lamp1 = message.payloadString.split("/")[1].split(":")[1];
    let lamp2 = message.payloadString.split("/")[2].split(":")[1];
    let sensor_temperture = message.payloadString.split("/")[3].split(":")[1];

    addData(sensor_temperture);
    var sensor1 = document.getElementById('sensor');
    sensor1.innerText = sensor_temperture;

    /////////////////////////////////////////////////////






    /////////////////////////////////////////////////////

    if (esp_status == "offline") {
        var span_head2 = document.getElementById('span_head2');
        span_head2.style.backgroundColor = "red";


        document.getElementById("alarm2").innerText = "Offline";
    } else if (esp_status == "online") {


        var span_head2 = document.getElementById('span_head2');
        span_head2.style.backgroundColor = "green";

        var alarm2 = document.getElementById('alarm2');
        alarm2.innerText = "Online";

    }
    span_head2.style.transition = "all 0.8s";

    if (lamp1 == "off1") {
        document.getElementById("check_lamp1").checked = false;
        control_lamp11();


    } else if (lamp1 == "on1") {
        document.getElementById("check_lamp1").checked = true;
        control_lamp11()


    }
    if (lamp2 == "off2") {
        document.getElementById("check_lamp2").checked = false;
        control_lamp22();


    } else if (lamp2 == "on2") {
        document.getElementById("check_lamp2").checked = true;
        control_lamp22();


    }
    //////////////////////////////////////////////////////////////////////////////////////
    // if temp for logo tempert


    let temp1 = document.getElementById("temp_inside");





    if (sensor_temperture == 0) {
        temp1.style.borderRadius = "0px 2px 2px 0px";
        temp1.style.paddingRight = "1px";
        temp1.style.background = "#5200ff";


    } else if ((1 <= sensor_temperture) && (sensor_temperture < 3)) {
        temp1.style.borderRadius = "0px 2px 2px 0px";
        temp1.style.paddingRight = "5px";
        temp1.style.background = "#5200ff";

    } else if ((3 <= sensor_temperture) && (sensor_temperture < 6)) {
        temp1.style.borderRadius = "0px 2px 2px 0px";
        temp1.style.paddingRight = "10px";
        temp1.style.background = "#4400ff";
    } else if ((6 <= sensor_temperture) && (sensor_temperture < 9)) {
        temp1.style.borderRadius = "0px 10px 10px 0px";
        temp1.style.paddingRight = "15px";
        temp1.style.background = "#4400ff";

    } else if ((9 <= sensor_temperture) && (sensor_temperture < 12)) {
        temp1.style.borderRadius = "0px 10px 10px 0px";
        temp1.style.paddingRight = "20px";
        temp1.style.background = "#4400ff";

    } else if ((12 <= sensor_temperture) && (sensor_temperture < 15)) {
        temp1.style.borderRadius = "0px 10px 10px 0px";
        temp1.style.paddingRight = "25px";
        temp1.style.background = "#5089ff";

    } else if ((15 <= sensor_temperture) && (sensor_temperture < 18)) {
        temp1.style.borderRadius = "0px 10px 10px 0px";
        temp1.style.paddingRight = "30px";
        temp1.style.background = "#5089ff";
    } else if ((18 <= sensor_temperture) && (sensor_temperture < 21)) {
        temp1.style.borderRadius = "0px 15px 15px 0px";
        temp1.style.paddingRight = "35px";
        temp1.style.background = "#5089ff";
    } else if ((21 <= sensor_temperture) && (sensor_temperture < 24)) {
        temp1.style.borderRadius = "0px 15px 15px 0px";
        temp1.style.paddingRight = "40px";
        temp1.style.background = "#5089ff";
    } else if ((24 <= sensor_temperture) && (sensor_temperture < 27)) {
        temp1.style.borderRadius = "0px 15px 15px 0px";
        temp1.style.paddingRight = "45px";
        temp1.style.background = "#00a1ff";

    } else if ((27 <= sensor_temperture) && (sensor_temperture < 30)) {
        temp1.style.borderRadius = "0px 15px 15px 0px";
        temp1.style.paddingRight = "50px";
        temp1.style.background = "#00a1ff";
    } else if ((30 <= sensor_temperture) && (sensor_temperture < 33)) {
        temp1.style.borderRadius = "0px 15px 15px 0px";
        temp1.style.paddingRight = "55px";
        temp1.style.background = "#00a1ff";
    } else if ((33 <= sensor_temperture) && (sensor_temperture < 36)) {
        temp1.style.borderRadius = "0px 15px 15px 0px";
        temp1.style.paddingRight = "60px";
        temp1.style.background = "#00a1ff";
    } else if ((36 <= sensor_temperture) && (sensor_temperture < 39)) {
        temp1.style.borderRadius = "0px 20px 20px 0px";
        temp1.style.paddingRight = "65px";
        temp1.style.background = "#dae862";
    } else if ((39 <= sensor_temperture) && (sensor_temperture < 42)) {
        temp1.style.borderRadius = "0px 20px 20px 0px";
        temp1.style.paddingRight = "70px";
        temp1.style.background = "#dae862";
    } else if ((42 <= sensor_temperture) && (sensor_temperture < 45)) {
        temp1.style.borderRadius = "0px 20px 20px 0px";
        temp1.style.paddingRight = "75px";
        temp1.style.background = "#dae862";
    } else if ((45 <= sensor_temperture) && (sensor_temperture < 48)) {
        temp1.style.borderRadius = "0px 20px 20px 0px";
        temp1.style.paddingRight = "80px";
        temp1.style.background = "#dae862";
    } else if ((48 <= sensor_temperture) && (sensor_temperture < 51)) {
        temp1.style.borderRadius = "0px 20px 20px 0px";
        temp1.style.paddingRight = "85px";
        temp1.style.background = "#ebff00";
    } else if ((51 <= sensor_temperture) && (sensor_temperture < 54)) {
        temp1.style.borderRadius = "0px 20px 20px 0px";
        temp1.style.paddingRight = "90px";
        temp1.style.background = "#ebff00";
    } else if ((54 <= sensor_temperture) && (sensor_temperture < 57)) {
        temp1.style.borderRadius = "0px 20px 20px 0px";
        temp1.style.paddingRight = "95px";
        temp1.style.background = "#ebff00";
    } else if ((57 <= sensor_temperture) && (sensor_temperture < 60)) {
        temp1.style.borderRadius = "0px 25px 25px 0px";
        temp1.style.paddingRight = "100px";
        temp1.style.background = "#ebff00";
    } else if ((60 <= sensor_temperture) && (sensor_temperture < 63)) {
        temp1.style.borderRadius = "0px 25px 25px 0px";
        temp1.style.paddingRight = "110px";
        temp1.style.background = "#ffb457";
    } else if ((63 <= sensor_temperture) && (sensor_temperture < 66)) {
        temp1.style.borderRadius = "0px 25px 25px 0px";
        temp1.style.paddingRight = "120px";
        temp1.style.background = "#ffb457";
    } else if ((66 <= sensor_temperture) && (sensor_temperture < 69)) {
        temp1.style.borderRadius = "0px 25px 25px 0px";
        temp1.style.paddingRight = "130px";
        temp1.style.background = "#ffb457";
    } else if ((69 <= sensor_temperture) && (sensor_temperture < 72)) {
        temp1.style.borderRadius = "0px 25px 25px 0px";
        temp1.style.paddingRight = "140px";
        temp1.style.background = "#ffb457";
    } else if ((72 <= sensor_temperture) && (sensor_temperture < 75)) {
        temp1.style.borderRadius = "0px 30px 30px 0px";
        temp1.style.paddingRight = "150px";
        temp1.style.background = "#c63939";
    } else if ((75 <= sensor_temperture) && (sensor_temperture < 78)) {
        temp1.style.borderRadius = "0px 30px 30px 0px";
        temp1.style.paddingRight = "160px";
        temp1.style.background = "#c63939";
    } else if ((78 <= sensor_temperture) && (sensor_temperture < 81)) {
        temp1.style.borderRadius = "0px 30px 30px 0px";
        temp1.style.paddingRight = "170px";
        temp1.style.background = "#c63939";
    } else if ((81 <= sensor_temperture) && (sensor_temperture < 84)) {
        temp1.style.borderRadius = "0px 30px 30px 0px";
        temp1.style.paddingRight = "180px";
        temp1.style.background = "#c63939";
    } else if ((84 <= sensor_temperture) && (sensor_temperture < 87)) {
        temp1.style.borderRadius = "0px 40px 40px 0px";
        temp1.style.paddingRight = "200px";
        temp1.style.background = "#c63939";
    } else if ((87 <= sensor_temperture) && (sensor_temperture < 90)) {
        temp1.style.borderRadius = "0px 40px 40px 0px";
        temp1.style.paddingRight = "222px";
        temp1.style.background = "#df1111";
    } else if ((90 <= sensor_temperture) && (sensor_temperture < 93)) {
        temp1.style.borderRadius = "0px 40px 40px 0px";
        temp1.style.paddingRight = "244px";
        temp1.style.background = "#df1111";
    } else if ((93 <= sensor_temperture) && (sensor_temperture < 96)) {
        temp1.style.borderRadius = "0px 40px 40px 0px";
        temp1.style.paddingRight = "266px";
        temp1.style.background = "#df1111";
    } else if ((96 <= sensor_temperture) && (sensor_temperture <= 100)) {
        temp1.style.borderRadius = "0px 40px 40px 0px";
        temp1.style.paddingRight = "288px";
        temp1.style.background = "#df1111";


    } else {
        temp1.style.borderRadius = "0px 40px 40px 0px";
        temp1.style.paddingRight = "288px";
        temp1.style.background = "#df1111";

    }
    temp1.style.transition = "all 2s";








}




function connect_net_lamp1() {
    let checkBox = document.getElementById("check_lamp1");



    if (checkBox.checked == true) {
        if (!client) {
            return;
        }

        var message = new Paho.MQTT.Message("turn_on_lamp1");
        message.destinationName = "m15khha";


        client.send(message);
    } else {
        if (!client) {
            return;
        }

        var message = new Paho.MQTT.Message("turn_off_lamp1");
        message.destinationName = "m15khha";
        client.send(message);


    }


}

function connect_net_lamp2() {
    let checkBox = document.getElementById("check_lamp2");



    if (checkBox.checked == true) {
        if (!client) {
            return;
        }

        var message = new Paho.MQTT.Message("turn_on_lamp2");
        message.destinationName = "m15khha";



        client.send(message);
    } else {
        if (!client) {
            return;
        }

        var message = new Paho.MQTT.Message("turn_off_lamp2");
        message.destinationName = "m15khha";
        client.send(message);



    }

}
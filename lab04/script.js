function validate() {
    if (document.myForm.fname.value == "") {
        alert("You can't leave first name empty.");
        document.myForm.fname.focus();
        return false;
    }
    if (!/^[A-Za-zก-\u0E50\s]+$/.test(document.myForm.fname.value)) {
        alert("a-z,A-Z,ก-ฮ Only!");
        document.myForm.fname.focus();
        return false;
    }

    if (document.myForm.lname.value == "") {
        alert("You can't leave last name empty.");
        document.myForm.lname.focus();
        return false;
    }
    if (!/^[A-Za-zก-\u0E50\s]+$/.test(document.myForm.lname.value)) {
        alert("a-z,A-Z,ก-ฮ Only!");
        document.myForm.lname.focus();
        return false;
    }
    if (document.myForm.birthday.value == "") {
        alert("You can't leave birthday empty.");
        document.myForm.birthday.focus();
        return false;
    }
    if (!validateGroup(document.getElementsByName("Gender"))) {
        alert("Please select gender.");
        return false;
    }
    if (document.myForm.province.value == "") {
        alert("You can't leave province empty.");
        document.myForm.province.focus();
        return false;
    }
    var age = getAge(document.myForm.birthday.value);

    document.getElementById("h1_greet").innerHTML = "จังหวัด" + document.myForm.province.value;


    if (age < 13) {
        cartoon();
        loadDoc(document.myForm.province.value);
        $("#sign").attr("src", "sign/" + document.myForm.province.value + ".png")
        return false;
    }
    if (document.myForm.Gender.value == 'Female') {
        female();
        loadDoc(document.myForm.province.value);
        $("#sign").attr("src", "sign/" + document.myForm.province.value + ".png")
        return false;
    }
    if (document.myForm.Gender.value == 'Male') {
        male();
        loadDoc(document.myForm.province.value);
        $("#sign").attr("src", "sign/" + document.myForm.province.value + ".png")
        return false;
    }
}

function validateGroup(elements) {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) return true;
    }
    return false;
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function cartoon() {
    $(".greet_c").css("font-family", "'arabicaregular', 'waan_freeregular', 'Helvetica', sans-serif");
    $(".content").css("font-family", "'arabicaregular', 'waan_freeregular', 'Helvetica', sans-serif");
    $(".greet_c").css("color", "#FF712C");
    $(".content").css("color", "#FFFF9D");
    $("#pdiv").fadeIn();
    $("#div1").fadeIn(6000);
    $("#div2").fadeIn(4000);
    $("#div3").fadeIn(5000);
    $("#div3").css("background-color", "rgb(118, 200, 58)");
    $("#div3").hover(function() {
        $(this).css("background-color", "#00A388");
        $(this).css("box-shadow", "5px 5px 10px #91AA9D");

    }, function() {
        $(this).css("background-color", "rgb(118, 200, 58)");
        $(this).css("box-shadow", "0px 0px 0px #91AA9D");
    });

    $("#sign").hover(function() {
        $(this).css("box-shadow", "5px 5px 10px #91AA9D");
        $(this).fadeOut(500);
        $(this).fadeIn(500);
        $(this).width('120%')

    }, function() {
        $(this).width('100%')
        $(this).css("box-shadow", "0px 0px 0px #91AA9D");
    });

    $('#header').fadeOut('slow', function() {
        $("#header").css("background", "url('bg/cartoonBG.jpg')");
        $("form").css("background-color", "rgb(118, 200, 58)");
        $('#header').fadeIn('slow');
    });
}

function female() {
    $(".greet_c").css("font-family", "'bsru_bansomdejregular', 'waan_freeregular', 'Helvetica', sans-serif");
    $(".content").css("font-family", "'bsru_bansomdejregular', 'waan_freeregular', 'Helvetica', sans-serif");
    $(".greet_c").css("color", "#E74C3C");
    $(".content").css("color", "white");
    $("#pdiv").fadeIn();
    $("#div1").fadeIn(6000);
    $("#div2").fadeIn(4000);
    $("#div3").fadeIn(5000);
    $("#div3").css("background-color", "pink");
    $("#div3").hover(function() {
        $(this).css("background-color", "#FF8598");
        $(this).css("box-shadow", "5px 5px 10px #91AA9D");

    }, function() {
        $(this).css("background-color", "pink");
        $(this).css("box-shadow", "0px 0px 0px #91AA9D");
    });

    $("#sign").hover(function() {
        $(this).fadeOut(500);
        $(this).fadeIn(500);
        $(this).width('120%')
        $(this).css("box-shadow", "5px 5px 10px #91AA9D");

    }, function() {
        $(this).width('100%')
        $(this).css("box-shadow", "0px 0px 0px #91AA9D");
    });


    $('#header').fadeOut('slow', function() {
        $("#header").css("background", "url('bg/femaleBG.jpg')");
        $("form").css("background-color", "pink");
        $('#header').fadeIn('slow');
    });
}

function male() {
    $(".greet_c").css("font-family", "'bsru_bansomdejregular', 'waan_freeregular', 'Helvetica', sans-serif");
    $(".content").css("font-family", "'bsru_bansomdejregular', 'waan_freeregular', 'Helvetica', sans-serif");
    $(".greet_c").css("color", "#16193B");
    $(".content").css("color", "#ADD5F7");
    $("#pdiv").fadeIn();
    $("#div1").fadeIn(6000);
    $("#div2").fadeIn(4000);
    $("#div3").fadeIn(5000);
    $("#div3").css("background-color", "darkblue");
    $("#div3").hover(function() {
        $(this).css("background-color", "#225378");
        $(this).css("box-shadow", "5px 5px 10px #91AA9D");

    }, function() {
        $(this).css("background-color", "darkblue");
        $(this).css("box-shadow", "0px 0px 0px #91AA9D");
    });

    $("#sign").hover(function() {
        $(this).fadeOut(500);
        $(this).fadeIn(500);
        $(this).width('120%')
        $(this).css("box-shadow", "5px 5px 10px #91AA9D");

    }, function() {
        $(this).width('100%')
        $(this).css("box-shadow", "0px 0px 0px #91AA9D");
    });

    $('#header').fadeOut('slow', function() {
        $("#header").css("background", "url('bg/maleBG.jpg') ");
        $("form").css("background-color", "#04518C");
        $('#header').fadeIn('slow');
    });
}

$(document).ready(function() {
    jQuery.get('province.txt', function(data) {
        var str = data.split("\n");
        str.forEach(insertProvince);

    });
});

function insertProvince(item, index) {
    if (item != "") {
        $('#provinceName').append("<option value='" + item.substring(0, item.length - 1) + "'>" + item + "</option>");
    }
}

function loadDoc(name) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("motto").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "motto/" + name + ".txt", true);
    xhttp.send();
}

window.onload = function() {
    window.setTimeout(function(){
        document.body.classList.add("loaded");
    }, 1500)
};


function butClick() {
    var divToPrint = document.getElementById("printDiv");
    var newWin = window.open("Print-Window");
    newWin.document.write('<html><body onload = "window.print()">' + divToPrint.innerHTML + '</body></html>');
    newWin.document.close();
};


const changeLang = document.querySelector("#language");
const allLang = ["ru", "ua"];

changeLang.addEventListener("click", changeURLLanguage);

function changeURLLanguage() {
    if (document.getElementById("lang-ru").checked) {
        lang = "ru";
    } else {
        lang = "ua";
    }
    localStorage.setItem("lang", lang);
    location.href = window.location.pathname + "#" + localStorage.getItem("lang");
    location.reload();
};

function changeLanguage() {

    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#" + localStorage.getItem("lang");
        if (localStorage.getItem("lang") === null) {
            location.href = window.location.pathname + "#ua";
        };
        location.reload();
    };
    if (document.getElementById("lang-ru").checked) {
        hash = "ru";
    } else if (document.getElementById("lang-ua").checked) {
        hash = "ua";
    }

    for (let key in langArr) {
        let elem = document.querySelector(".lng-" + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }

}

changeLanguage();

let hash = window.location.hash;
hash = hash.substr(1);
document.getElementById("langPage").innerText = hash;

if(hash == "ru") {
    document.getElementById("firstLang").style.display = "inline";
    document.getElementById("secondLang").style.display = "none";
    document.getElementById("lng-form-name").placeholder = "Имя";
    document.getElementById("lng-form-avto").placeholder = "Автомобиль";
    document.getElementById("lng-form-review").placeholder = "Оставьте отзыв здесь";
} else if(hash == "ua") {
    document.getElementById("firstLang").style.display = "none";
    document.getElementById("secondLang").style.display = "inline";
}



let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");

request.onload = function () {
    if (request.status == 200) {
        allResponse = JSON.parse(request.response);

        var dol1 = String(Math.round(parseFloat(allResponse[0].buy) * 100) / 100);
        if( dol1.length < 5) {
            dol1 = dol1 + 0;
        };
        var dol2 = String(Math.round(parseFloat(allResponse[0].sale) * 100) / 100);
        if( dol2.length < 5) {
            dol2 = dol2 + "0";
        };
        var eur1 = String(Math.round(parseFloat(allResponse[1].buy) * 100) / 100);
        if( eur1.length < 5) {
            eur1 = eur1 + "0";
        };
        var eur2 = String(Math.round(parseFloat(allResponse[1].sale) * 100) / 100);
        if( eur2.length < 5) {
            eur2 = eur2 + "0";
        };

        document.getElementById("USD").innerText = dol1 + " $ " + dol2;
        document.getElementById("EUR-buy").innerText += eur1;
        document.getElementById("EUR-sale").innerText += " " + eur2;
        document.getElementById("USD-menu").innerText = dol1 + " $ " + dol2;
        document.getElementById("EUR-buy-menu").innerText += eur1;
        document.getElementById("EUR-sale-menu").innerText += " " + eur2;

    }
}
request.send();


$(function(){
    $(".langNow").click(function(){
        $(".allow").toggleClass("allowClick");
        $(".changeLang").slideToggle(1000);
    });
    $(".menu-popup-close").click(function(){
        $(this).parents(".menu-popup-fade").fadeOut();
        return false;
    });
    $(document).keydown(function(e){
        if(e.keyCode === 27) {
            e.stopPropagation();
            $(".menu-popup-fade").fadeOut();
        }
    });
    $(".menu").click(function(){
        $(".menu-popup-fade").fadeIn();
        return false;
    });
    $('.menu-popup-fade').click(function(e) {
		if ($(e.target).closest('.menu-popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});



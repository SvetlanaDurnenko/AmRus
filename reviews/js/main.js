$(function () {
   $(".popup-close").click(function(){
       $(this).parents(".popup-fade").fadeOut();
       return false;
   });
   $(document).keydown(function(e){
       if(e.keyCode === 27){
           e.stopPropagation();
           $(".popup-fade").fadeOut();
       }
   });
   $("#opener").click(function(){
       $(".popup-fade").fadeIn();
   });
});

function onFileselected(event) {
    selectedFile = event.target.files[0];
    reader = new FileReader();
    imgtag = document.getElementById("myImage");
    imgtag.title = selectedFile.name;

    reader.onload = function (event) {
        imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
}

function addComment() {
    var newComment = document.createElement("div");
    newComment.classList.add("reviews-block");
    var form = reviewsContainer.lastChild;
    var now = new Date();
    var date = now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear();
    sessionStorage.setItem("date", date);
    if (document.getElementById("1-star").checked) {
        var firstStar = "./img/star.png";
        sessionStorage.setItem("firstStar", firstStar);
        var secondStar = "./img/fullstar.png";
        sessionStorage.setItem("secondStar", secondStar);
        var thirdStar = "./img/fullstar.png";
        sessionStorage.setItem("thirdStar", thirdStar);
        var fourthStar = "./img/fullstar.png";
        sessionStorage.setItem("fourthStar", fourthStar);
        var fifthStar = "./img/fullstar.png";
        sessionStorage.setItem("fifthStar", fifthStar);
    } else if (document.getElementById("2-star").checked) {
        var firstStar = "./img/star.png";
        sessionStorage.setItem("firstStar", firstStar);
        var secondStar = "./img/star.png";
        sessionStorage.setItem("secondStar", secondStar);
        var thirdStar = "./img/fullstar.png";
        sessionStorage.setItem("thirdStar", thirdStar);
        var fourthStar = "./img/fullstar.png";
        sessionStorage.setItem("fourthStar", fourthStar);
        var fifthStar = "./img/fullstar.png";
        sessionStorage.setItem("fifthStar", fifthStar);
    } else if (document.getElementById("3-star").checked) {
        var firstStar = "./img/star.png";
        sessionStorage.setItem("firstStar", firstStar);
        var secondStar = "./img/star.png";
        sessionStorage.setItem("secondStar", secondStar);
        var thirdStar = "./img/star.png";
        sessionStorage.setItem("thirdStar", thirdStar);
        var fourthStar = "./img/fullstar.png";
        sessionStorage.setItem("fourthStar", fourthStar);
        var fifthStar = "./img/fullstar.png";
        sessionStorage.setItem("fifthStar", fifthStar);
    } else if (document.getElementById("4-star").checked) {
        var firstStar = "./img/star.png";
        sessionStorage.setItem("firstStar", firstStar);
        var secondStar = "./img/star.png";
        sessionStorage.setItem("secondStar", secondStar);
        var thirdStar = "./img/star.png";
        sessionStorage.setItem("thirdStar", thirdStar);
        var fourthStar = "./img/star.png";
        sessionStorage.setItem("fourthStar", fourthStar);
        var fifthStar = "./img/fullstar.png";
        sessionStorage.setItem("fifthStar", fifthStar);
    } else if (document.getElementById("5-star").checked) {
        var firstStar = "./img/star.png";
        sessionStorage.setItem("firstStar", firstStar);
        var secondStar = "./img/star.png";
        sessionStorage.setItem("secondStar", secondStar);
        var thirdStar = "./img/star.png";
        sessionStorage.setItem("thirdStar", thirdStar);
        var fourthStar = "./img/star.png";
        sessionStorage.setItem("fourthStar", fourthStar);
        var fifthStar = "./img/star.png";
        sessionStorage.setItem("fifthStar", fifthStar);
    } else {
        var firstStar = "./img/fullstar.png";
        sessionStorage.setItem("firstStar", firstStar);
        var secondStar = "./img/fullstar.png";
        sessionStorage.setItem("secondStar", secondStar);
        var thirdStar = "./img/fullstar.png";
        sessionStorage.setItem("thirdStar", thirdStar);
        var fourthStar = "./img/fullstar.png";
        sessionStorage.setItem("fourthStar", fourthStar);
        var fifthStar = "./img/fullstar.png";
        sessionStorage.setItem("fifthStar", fifthStar);
    }

    var avto = document.getElementById("lng-form-avto").value;
    sessionStorage.setItem("avto", avto);

    var car = document.getElementById("myImage").src;
    sessionStorage.setItem("car", car);

    var name = document.getElementById("lng-form-name").value;
    sessionStorage.setItem("name", name);

    var text = document.getElementById("lng-form-review").value;
    sessionStorage.setItem("text", text);

    newComment.innerHTML = "<img class='img-reviews' src='" + document.getElementById("myImage").src + "'></img>";
    newComment.innerHTML += "<div class='reviews-flex-container'><h3>" + document.getElementById("lng-form-avto").value + "</h3><span class='name-user'>" + document.getElementById("lng-form-name").value + "</span><p class='text-user'>" + document.getElementById("lng-form-review").value + "</p><div class='stars-date-block'><div class='stars'><span class='star'><img src='" + firstStar + "'></span><span class='star'><img src='" + secondStar + "'></span><span class='star'><img src='" + thirdStar + "'></span><span class='star'><img src='" + fourthStar + "'></span><span class='star'><img src='" + fifthStar + "'></span></div><span class='date-reviews'>" + now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear() + "</span></div></div>";
    reviewsContainer.insertBefore(newComment, parent.lastElementChild);

    document.getElementById("lng-form-review").value = "";

}

if (sessionStorage.getItem("avto") != null) {
    var newComment = document.createElement("div");
    newComment.classList.add("reviews-block");
    var form = reviewsContainer.lastChild;

    newComment.innerHTML = "<img class='img-reviews' src='" + sessionStorage.getItem("car") + "'></img>";
    newComment.innerHTML += "<div class='reviews-flex-container'><h3>" + sessionStorage.getItem("avto") + "</h3><span class='name-user'>" + sessionStorage.getItem("name") + "</span><p class='text-user'>" + sessionStorage.getItem("text") + "</p><div class='stars-date-block'><div class='stars'><span class='star'><img src='" + sessionStorage.getItem("firstStar") + "'></span><span class='star'><img src='" + sessionStorage.getItem("secondStar")  + "'></span><span class='star'><img src='" + sessionStorage.getItem("thirdStar") + "'></span><span class='star'><img src='" + sessionStorage.getItem("fourthStar") + "'></span><span class='star'><img src='" + sessionStorage.getItem("fifthStar") + "'></span></div><span class='date-reviews'>" + sessionStorage.getItem("date") + "</span></div></div>";
    reviewsContainer.insertBefore(newComment, parent.lastElementChild);
}











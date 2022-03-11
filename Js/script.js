var slider_sira = 1;

setInterval(function() {

    var slider_eleman = document.getElementsByClassName("slider-metin-container");
    var slider_nav = document.getElementsByClassName("slider-navigation-item");
    slider_eleman[slider_sira].style.opacity = "1";
    slider_nav[slider_sira].style.backgroundColor = "#eee";
    slider_nav[slider_sira].style.width = "1.5rem";
    slider_eleman[slider_sira].style.marginLeft = "2.8rem";
    slider_sira++;

    for (var i = 0; i < 3; i++) {
        if (i == (slider_sira - 1)) {
            continue;
        } else {
            slider_eleman[i].style.opacity = "0";
            slider_eleman[i].style.marginLeft = "130px";
            slider_nav[i].style.backgroundColor = "#999";
            slider_nav[i].style.width = "30px";
        }
    }

    if (slider_sira == 3) { // Son slayta gelince başa dönmesi için.
        slider_sira = 0;
    }

}, 4000);
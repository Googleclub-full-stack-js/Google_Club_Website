var next = document.getElementById("next");

var initial = '0%';
var initialColor = document.getElementsByClassName('dot')[1].style.backgroundColor;
var index = 0;

var dots = [
    document.getElementById("dot2"),
    document.getElementById("dot3"),
    document.getElementById("dot4"),
    document.getElementById("dot5"),
    document.getElementById("dot6"),
    document.getElementById("dot7"),
    document.getElementById("dot8"),
    document.getElementById("dot9"),
];
var images = [
    document.getElementById("img9"),
    document.getElementById("img8"),
    document.getElementById("img7"),
    document.getElementById("img6"),
    document.getElementById("img5"),
    document.getElementById("img4"),
    document.getElementById("img3"),
    document.getElementById("img2"),
    document.getElementById("img1"),
];


document.getElementById("dot1").style.backgroundColor = "#B1D981";
next.onclick = function () {
    images[index].style.marginLeft = "100%";
    
    if (index === images.length - 1 && index === dots.length) {
        index = 0;
        document.getElementById("dot1").style.backgroundColor = "#B1D981";
        images.forEach(element => {
            element.style.marginLeft = initial;
        });
        dots.forEach(element => {
            element.style.backgroundColor = initialColor;
        });
    } else {
        ++index;
        dots[index - 1].style.backgroundColor = "#B1D981";
        if(index > 1)
        dots[index - 2].style.backgroundColor = initialColor;
        document.getElementById("dot1").style.backgroundColor = initialColor;
    }

    console.log(index);
}



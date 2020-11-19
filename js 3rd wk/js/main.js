var obj ;


const http = new XMLHttpRequest()

http.open("GET", "https://monxansh.appspot.com/xansh.json?currency=USD")
http.send()
http.onload = () => document.getElementById("content2").innerHTML = JSON.parse(http.responseText)[0].rate;




document.getElementById("datetime").innerHTML =new Date();

class Car{
    constructor(name, year){
        this.name =name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear()- this.year;
    }
}

let myCar = new Car("Toyota Highlander", 2017);
document.getElementById("content1").innerHTML ="My Car is "+ myCar.age() + " years old.";



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

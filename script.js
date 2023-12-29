// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 85,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let dsaProgress = document.querySelector(".dsa"),
  dsaValue = document.querySelector(".dsa-progress");

let dsaStartValue = 0,
  dsaEndValue = 90,
  dsaspeed = 30;

let progressdsa = setInterval(() => {
  dsaStartValue++;

  dsaValue.textContent = `${dsaStartValue}%`;
  dsaProgress.style.background = `conic-gradient(#20c997 ${
    dsaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (dsaStartValue == dsaEndValue) {
    clearInterval(progressdsa);
  }
},dsaspeed);

// reactjs progress circular bar 
let dataSciProgress = document.querySelector(".dataSci"),
dataSciValue = document.querySelector(".dataSci-progress");

let dataSciStartValue = 0,
dataSciEndValue = 70,
  rjsspeed = 30;

let progressdataSci = setInterval(() => {
  dataSciStartValue++;

  dataSciValue.textContent = `${dataSciStartValue}%`;
  dataSciProgress.style.background = `conic-gradient(#3f396d ${
    dataSciStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (dataSciStartValue == dataSciEndValue) {
    clearInterval(progressdataSci);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function downloadResume() {
  // Specify the file URL and download filename
  var fileUrl = "AmarpreetResume.pdf";
  var fileName = "AmarpreetResume";

  // Create an anchor element
  var link = document.createElement("a");

  // Set the attributes for the anchor element
  link.href = fileUrl;
  link.download = fileName;

  // Append the anchor element to the document
  document.body.appendChild(link);

  // Trigger a click on the anchor element
  link.click();

  // Remove the anchor element from the document
  document.body.removeChild(link);
}

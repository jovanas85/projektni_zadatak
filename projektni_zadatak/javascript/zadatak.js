//pogadjanje zanra filma

function disp_confirm() {
  var name = document.getElementById("zanr").value;
  if (name == "drama" || name == "romansa") {
    alert("Tačan odgovor")
  }
  else {
    alert("Odgovor nije tačan")
  }
}

//datum

function prikaziDatum() {
  var datum = new Date();
  document.write("Danas je " + datum.toLocaleDateString());
}
//Odbrojavanje

// Set the date we're counting down to
var countDownDate = new Date("Mar 12, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo1").innerHTML = "EXPIRED";
  }
}, 1000);
function newFunction() {
  return "Mar 12, 2020 03:30:25";
}


//kviz

function submitQuiz() {
  console.log('submitted');

  // get each answer score
  function answerScore(qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        // do something with radiosNo
        var answerValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  // calc score with answerScore function
  var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6'));
  console.log("CalcScore: " + calcScore); // it works!

  // function to return correct answer string
  function correctAnswer(correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
    return ("Tačan odgovor na pitanje " + qNumber + ": &nbsp;<strong>" +
      (document.getElementById(correctStringNo).innerHTML) + "</strong>");
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerScore('q1') === 0) {
    document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
  }
  if (answerScore('q2') === 0) {
    document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
  }
  if (answerScore('q3') === 0) {
    document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
  }
  if (answerScore('q4') === 0) {
    document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
  }
  if (answerScore('q5') === 0) {
    document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
  }
  if (answerScore('q6') === 0) {
    document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
  }


  // calculate "possible score" integer
  var questionCountArray = document.getElementsByClassName('question');

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }

  // show score as "score/possible score"
  var showScore = "Vaš skor: " + calcScore + "/" + questionCounter;
  // if 6/6, "perfect score!"
  if (calcScore === questionCounter) {
    showScore = showScore + "&nbsp; <strong>Fantastičan skor!</strong>"
  };
  document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function () {

  $('#submitButton').click(function () {
    $(this).addClass('hide');
  });

});

//google mapa

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(44.771152, 17.190896),
    zoom:17,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }


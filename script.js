$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // envelope.click(function () {
  //   open();
  // });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

// let play = document.getElementById("open");
// function playMusic() {
//   let audio = new Audio("happyBirthday.mp3");
//   audio.play();
// }
// play.addEventListener("click", playMusic);

// let play2 = document.getElementById("close");
// function playMusic1() {
//   let audio = new Audio("");
//   audio.play();
// }
// play.addEventListener("click", playMusic1);

var audio = document.getElementById("audio");
// var playPauseBTN = document.getElementsByClassName("reset");
// var count = 0;

function playPause() {
  //if (count == 0) {
  // count = 1;
  audio.play();
  // playPauseBTN.innerHTML = "open";
  // } else {
  //   count = 0;
  //   audio.pause();
  //   // playPauseBTN.innerHTML = "close";
  // }
  //}
}

function stop() {
  playPause();
  audio.pause();
  audio.currentTime = 0;
  //   playPauseBTN.innerHTML = "close";
}

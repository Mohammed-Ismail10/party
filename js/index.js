`use strict`;

// nav
let widthNav = $(`#nav`).innerWidth();
$(`#nav`).css(`left`, -widthNav);

$(`header span`).click(function () {
  if ($(`#nav`).css(`left`) == `0px`) {
    $(`#nav`).animate({ left: -widthNav }, 500);
    $(`#party`).animate({ marginLeft: 0 }, 500);
  }
  else {
    $(`#nav`).animate({ left: 0 }, 500);
    $(`#party`).animate({ marginLeft: widthNav }, 500);
  }
})

$(`ul`).next().click(function () {
  $(`#nav`).animate({ left: -widthNav }, 500);
  $(`#party`).animate({ marginLeft: 0 }, 500);
})
// nav


// details
$(document).ready(function () {
  $(`#details h3`).not(`:eq(0)`).next().slideUp(0);
})

$(`#details h3`).click(function (eventInfo) {
  $(eventInfo.target).next().slideToggle(500);
  $(`#details h3`).not(eventInfo.target).next().slideUp(500);
})
// details


// duration
setInterval(function () {
  let date = new Date();
  let eventDate = new Date(2023, 4, 3);

  let nowTime = date.getTime();
  let eventTime = eventDate.getTime();

  let diffTime = eventTime - nowTime;

  let second = Math.floor(diffTime / 1000);
  let minute = Math.floor(second / 60);
  let hour = Math.floor(minute / 60);
  let day = Math.floor(hour / 24) - 30;

  second %= 60;
  minute %= 60;
  hour %= 24;


  if (second < 10) {
    second = `0${second}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  $(`#duration`).html(`<div class="bg-danger h-100 bg-opacity-75 py-5">
<div class="container py-5">
  <div class="row">
    <div class="col">
      <div class="border border-white text-center p-5">
        <p class="fs-3 text-white mb-0">${day} D</p>
      </div>
    </div>
    <div class="col">
      <div class="border border-white text-center p-5">
        <p class="fs-3 text-white mb-0">${hour} h</p>
      </div>
    </div>
    <div class="col">
      <div class="border border-white text-center p-5">
        <p class="fs-3 text-white mb-0">${minute} m</p>
      </div>
    </div>
    <div class="col">
      <div class="border border-white text-center p-5">
        <p class="fs-3 text-white mb-0">${second} s</p>
      </div>
    </div>
  </div>
</div>
</div>`);
}, 1000);
// duration


// textarea
let word = ``;
let textarea = document.querySelector(`textarea`);
textarea.addEventListener(`input`, function () {
  word = textarea.value;
  if (word.length >= 100) {
    textarea.setAttribute(`disabled`, ``)
  }
  let availableChar = 100 - word.length;
  $(`textarea + span`).text(`${availableChar}`)
})
// textarea